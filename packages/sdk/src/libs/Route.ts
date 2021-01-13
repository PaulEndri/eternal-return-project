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

  private locations: Location[];
  private keyedLocations: Record<number, Location>;
  private weightedMaterials: MaterialList;
  private leafRoutes: RouteNode[] = [];
  private routeNodes: RouteNode;
  private filterNodes: RouteNode[] = [];

  constructor(
    public loadout: Loadout,
    private itemWeights: Record<LoadoutKeys, number> = DefaultItemWeights
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

  private recursiveNode(
    parentNode: RouteNode,
    location: Location,
    index = 1,
    max = WEIGHTS.MAXIMUM_LOCATIONS
  ) {
    const newList = parentNode.materials.clone();
    newList.addFromList(location.materials.list);

    if (index === 2) {
      Route.UNIVERSAL_UNLOCK_ITEMS.forEach((item) => {
        newList.add(item, 3);
      });
    } else if (index === 3) {
      Route.UNIVERSAL_BOSS_ITEMS.forEach((item) => newList.add(item, 1));
    }

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
      index === max &&
      node.completed.length < WEIGHTS.SHORT_ITEM_THRESHOLD
    ) {
      return node;
    }

    if (index >= max) {
      if (max >= WEIGHTS.MAXIMUM_LOCATIONS) {
        this.leafRoutes.push(node);
      } else {
        this.filterNodes.push(node);
      }
      return node;
    }

    this.generateNextNodes(node, index + 1);

    return node;
  }

  private generateNextNodes(node: RouteNode, next: number) {
    let connections: any[] = this.keyedLocations[node.id].teleport
      ? Object.keys(this.keyedLocations)
      : this.keyedLocations[node.id].connections;

    connections = connections
      .filter((item) => {
        const id = typeof item === 'number' ? item : item.id;

        return !node.traversed.includes(id) && this.keyedLocations[id];
      })
      .map((item) => {
        const id = typeof item === 'number' ? item : item.id;

        return [id, this.recursiveNode(node, this.keyedLocations[+id], next)];
      });
  }

  public weighNode(node: RouteNode) {
    const loadoutList = this.loadout.materials;
    const list = new MaterialList()
      .addFromList(loadoutList)
      .subtractFromList(this.loadout.materials);

    const items = Object.entries(list).reduce(
      (total, [, val]) => (total += val),
      0
    );
    const total = this.loadout.totalMaterials;
    const inFlightCompleted = this.loadout.checkCompletedInFlightItems(
      list.list
    ).length;

    const weaponCompleted = this.loadout.Weapon
      ? node.completed.includes(+this.loadout.Weapon.id)
        ? 5
        : 1
      : 1;

    return (
      (node.completed.length * weaponCompleted * (inFlightCompleted / 10 + 1)) /
      (items / total)
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

    const startingPoints = startingPoint
      ? [startingPoint]
      : rawNodes.locations.map(([id]) => id);

    const startingIndex = 1;
    const max = startingPoint ? WEIGHTS.MAXIMUM_LOCATIONS : 2;

    // breadth first if startPoints > 1
    results.next = Object.fromEntries(
      startingPoints.map((id) => [
        id,
        this.recursiveNode(results, this.keyedLocations[id], startingIndex, max)
      ])
    );

    if (max === 2) {
      this.filterNodes
        .sort((a, b) => b.completed.length - a.completed.length)

        .slice(0, 3)
        .forEach((node) => this.generateNextNodes(node, 3));
    }

    this.leafRoutes = this.leafRoutes
      .map(({ materials, location, ...route }) => route)
      .sort((a, b) => b.completed.length - a.completed.length);

    this.routeNodes = results;

    return {
      root: this.routeNodes,
      routes: this.leafRoutes
    };
  }
}
