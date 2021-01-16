import { Items } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Loadout } from './Loadout';
import { MaterialList } from './MaterialList';
import { Location } from './Location';
import { LoadoutKeys } from '../constants/LoadoutKeys';

const DefaultItemWeights = {
  Arm: 1,
  Leg: 1,
  Chest: 2,
  Head: 1,
  Weapon: 3,
  Accessory: 1
};

export type RouteOptions = {
  weights: Record<LoadoutKeys, number>;
  materialMode: 'qualitative' | 'quantitative';
};
export type RouteNode = {
  id: number;
  traversed: number[];
  location?: Location;
  completed: number[];
  materials?: MaterialList;
  next?: Record<number, RouteNode>;
};

export class Route {
  static UNIVERSAL_BASE_ITEMS = [
    Items.Stone,
    Items.Leather,
    Items.Water,
    Items.Branch,
    Items.Bread
  ];
  static UNIVERSAL_UNLOCK_ITEMS = [
    Items.Moonstone,
    Items.TreeOfLife,
    Items.Meteorite,
    Items.Mithril
  ];
  static UNIVERSAL_BOSS_ITEMS = [Items.VFBloodSample, Items.ForceCore];
  static UNIVERSAL_ITEMS: number[] = [
    Items.Stone,
    Items.Leather,
    Items.Moonstone,
    Items.VFBloodSample,
    Items.ForceCore,
    Items.Water,
    Items.Meteorite,
    Items.Mithril,
    Items.Branch,
    Items.Bread,
    Items.TreeOfLife
  ];

  public materials = new MaterialList();

  private maximumLocations = WEIGHTS.MAXIMUM_LOCATIONS;
  private minimumItemThreshold = WEIGHTS.MINIMUM_ITEM_THRESHOLD;
  private minimumCompletionThreshold = WEIGHTS.SHORT_ITEM_THRESHOLD;
  private locations: Location[];
  private keyedLocations: Record<number, Location>;
  private weightedMaterials: MaterialList;
  private leafRoutes: RouteNode[] = [];
  private routeNodes: RouteNode;

  constructor(
    public loadout: Loadout,
    private itemWeights: Record<LoadoutKeys, number> = DefaultItemWeights
  ) {
    this.addMaterialsFromLoadout(this.materials, loadout);
    this.locations = Object.values(loadout.regions);

    this.minimumItemThreshold = Math.min(
      WEIGHTS.MINIMUM_ITEM_THRESHOLD,
      loadout.items.length
    );
    this.minimumCompletionThreshold = Math.min(
      WEIGHTS.MINIMUM_ITEM_THRESHOLD,
      loadout.items.length
    );
  }

  public overrideLocations(newLocations: Location[]) {
    this.locations = newLocations;
  }
  public addMaterialsFromLoadout(materialList: MaterialList, loadout: Loadout) {
    this.materials.add(loadout.starterItem, 1);

    Object.entries(loadout.materials).forEach(([mat, val]: [string, number]) =>
      materialList.add(+mat, val)
    );
  }

  public generateWeights() {
    this.weightedMaterials = this.loadout.getWeights(this.itemWeights);

    this.locations.forEach((loc) =>
      loc.weigh(this.materials.list, this.weightedMaterials, this.loadout)
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
          b[1].weight.value - a[1].weight.value
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
        .sort((a, b) => +b[1] - +a[1])
    };
  }

  public generateNewNode(
    parentNode: RouteNode,
    location: Location,
    index: number
  ) {
    const newList = parentNode.materials
      .clone()
      .addFromList(location.materials.list);

    if (index === 1) {
      Route.UNIVERSAL_BASE_ITEMS.forEach((item) => {
        newList.add(item, 5);
      });
    } else if (index === 2) {
      Route.UNIVERSAL_UNLOCK_ITEMS.forEach((item) => {
        newList.add(item, 3);
      });
    } else if (index === 3) {
      Route.UNIVERSAL_BOSS_ITEMS.forEach((item) => newList.add(item, 1));
    }

    return {
      id: +location.id,
      traversed: [...parentNode.traversed, +location.id],
      materials: newList,
      completed: this.loadout
        .checkCompletedItems(newList.list)
        .map((item) => +item.id),
      next: null
    } as RouteNode;
  }

  private recursiveBranch(
    parentNode: RouteNode,
    location: Location,
    index = 1
  ) {
    const node = this.generateNewNode(parentNode, location, index);

    if (index >= 2 && node.completed.length < this.minimumItemThreshold) {
      return node;
    } else if (
      index === this.maximumLocations &&
      node.completed.length < this.minimumCompletionThreshold
    ) {
      return node;
    }

    if (index >= this.maximumLocations) {
      this.leafRoutes.push(node);

      return node;
    }

    if (node.completed.length !== this.loadout.items.length) {
      this.generateNextNodes(node, index + 1);
    }

    return node;
  }

  private generateNextNodes(node: RouteNode, next: number) {
    let connections: any[] = this.keyedLocations[+node.id].teleport
      ? Object.keys(this.keyedLocations)
      : this.keyedLocations[+node.id].connections;

    node.next = Object.fromEntries(
      connections
        .filter((item) => {
          const id = typeof item === 'number' ? item : item.id;

          return !node.traversed.includes(id) && this.keyedLocations[+id];
        })
        .map((item) => {
          const id = typeof item === 'number' ? item : item.id;

          return [
            id,
            this.recursiveBranch(node, this.keyedLocations[+id], next)
          ];
        })
    );
  }

  public generate(startingPoint?: number) {
    const results: RouteNode = {
      completed: [],
      id: 0,
      traversed: [],
      materials: new MaterialList(),
      next: {}
    };

    // inject universal items to base list
    Route.UNIVERSAL_BASE_ITEMS.forEach((id) => results.materials.set(id, 10));

    const rawNodes = this.getRawNodes();

    this.keyedLocations = Object.fromEntries(rawNodes.locations);
    this.locations = rawNodes.locations.map(([, loc]) => loc);

    let startingPoints = rawNodes.locations.map(([id]) => id);

    if (startingPoint) {
      startingPoints = [startingPoint];
    }

    results.next = Object.fromEntries(
      startingPoints.map((id) => [
        +id,
        this.recursiveBranch(results, this.keyedLocations[+id], 1)
      ])
    );

    this.leafRoutes = this.leafRoutes
      .map(({ materials, location, ...route }) => route)
      .sort((a, b) => b.completed.length - a.completed.length);

    this.routeNodes = results;

    if (this.leafRoutes.length < 0) {
      this.minimumItemThreshold = 0;
      this.minimumCompletionThreshold = 3;

      return this.generate(startingPoint);
    }

    return {
      root: this.routeNodes,
      routes: this.leafRoutes
    };
  }
}
