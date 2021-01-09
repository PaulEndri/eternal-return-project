import { Items } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Loadout } from './Loadout';
import { MaterialList } from './MaterialList';
import { Location } from './Location';
import { LoadoutKeys } from '../constants/LoadoutKeys';

export type RouteNode = {
  id: number;
  traversed: number[];
  completed: number[];
  materials?: MaterialList;
  next?: Record<number, RouteNode>;
};

export class Route {
  static UNIVERSAL_ITEMS: number[] = [
    Items.Stone,
    Items.Leather,
    Items.VFBloodSample,
    Items.ForceCore,
    Items.Moonstone,
    Items.Water,
    Items.Meteorite,
    Items.Mithril,
    Items.Branch
  ];

  public materials = new MaterialList();

  private locations: Location[];
  private keyedLocations: Record<number, Location>;
  private weightedMaterials: MaterialList;

  private leafRoutes: RouteNode[] = [];
  private routeNodes: RouteNode;

  constructor(
    public loadout: Loadout,
    private itemWeights?: Record<keyof typeof LoadoutKeys, number>
  ) {
    this.addMaterialsFromLoadout(this.materials, loadout);
    this.locations = Object.values(loadout.regions);
  }

  public addMaterialsFromLoadout(materialList: MaterialList, loadout: Loadout) {
    this.materials.add(loadout.starterItem, 1);

    Object.entries(loadout.materials).forEach(([mat, val]: [string, number]) =>
      materialList.add(+mat, val)
    );

    Route.UNIVERSAL_ITEMS.forEach((id) => {
      if (this.materials.list[id]) {
        this.materials.subtract(id, this.materials.list[id]);
      }
    });
  }

  public generateWeights() {
    this.weightedMaterials = this.loadout.getWeights(this.itemWeights);

    this.locations.forEach((loc) =>
      loc.weigh(this.materials.list, this.weightedMaterials)
    );
  }

  public getRawNodes() {
    this.generateWeights();

    const orderedLocations = this.locations
      .map((location) => {
        return [location.id, location];
      })
      .sort(
        (a: [string, Location], b: [string, Location]) =>
          a[1].weight.value - b[1].weight.value
      );

    const locationMap = Object.fromEntries(orderedLocations);

    return {
      locations: orderedLocations.map(([id, loc]: [number, Location]) => [
        id,
        loc
      ]) as [number, Location][],
      nodes: this.locations
        .map((location) => [
          location.name,
          location.weight.value,
          location.connections
            .filter(({ id }) => locationMap[id])
            .map(({ id }) => [id, locationMap[id].weight.value])
            .sort((a, b) => +a[1] - +b[1])
        ])
        .sort((a, b) => +a[1] - +b[1])
    };
  }

  private recursiveNode(parentNode: RouteNode, location: Location, index = 1) {
    const newList = parentNode.materials.clone();
    newList.addFromList(location.materials.list);

    const node: RouteNode = {
      id: +location.id,
      traversed: [...parentNode.traversed, +location.id],
      materials: newList,
      completed: this.loadout
        .checkCompletedItems(newList.list)
        .map((item) => +item.id),
      next: null
    };

    if (index >= 2 && node.completed.length < WEIGHTS.MINIMUM_ITEM_THRESHOLD) {
      return node;
    } else if (
      index === WEIGHTS.MAXIMUM_LOCATIONS &&
      node.completed.length < WEIGHTS.SHORT_ITEM_THRESHOLD
    ) {
      return node;
    }

    if (index >= WEIGHTS.MAXIMUM_LOCATIONS) {
      this.leafRoutes.push(node);
      return node;
    }

    if (location.teleport) {
      node.next = Object.fromEntries(
        Object.keys(this.keyedLocations)
          .filter(
            (id) => !node.traversed.includes(+id) && this.keyedLocations[+id]
          )
          .map((id) => [
            id,
            this.recursiveNode(node, this.keyedLocations[+id], index + 1)
          ])
      );
    } else {
      node.next = Object.fromEntries(
        location.connections
          .filter(
            ({ id }) =>
              !node.traversed.includes(+id) && this.keyedLocations[+id]
          )
          .map((loc) => [
            loc.id,
            this.recursiveNode(node, this.keyedLocations[loc.id], index + 1)
          ])
      );
    }

    return node;
  }

  public generate(startingPoint?: number, startingNodes = 1) {
    if (
      this.routeNodes &&
      (!startingPoint || this.routeNodes.next[startingPoint])
    ) {
      return {
        root: this.routeNodes,
        routes: this.leafRoutes
      };
    }

    const results: RouteNode = {
      completed: [],
      id: 0,
      traversed: [],
      materials: new MaterialList(),
      next: {}
    };

    // inject universal items to base list
    Route.UNIVERSAL_ITEMS.forEach((id) => results.materials.set(id, 10));

    const rawNodes = this.getRawNodes();

    this.keyedLocations = Object.fromEntries(rawNodes.locations);
    this.locations = rawNodes.locations.map(([, loc]) => loc);

    const startingPoints = startingPoint
      ? [startingPoint]
      : rawNodes.locations.slice(0, startingNodes).map(([id]) => id);

    results.next = Object.fromEntries(
      startingPoints.map((id) => [
        id,
        this.recursiveNode(results, this.keyedLocations[id])
      ])
    );

    this.leafRoutes = this.leafRoutes
      .sort((a, b) => b.completed.length - a.completed.length)
      .map(({ materials, ...route }) => route);
    this.routeNodes = results;

    return {
      root: this.routeNodes,
      routes: this.leafRoutes
    };
  }
}
