import { Items } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Loadout } from './Loadout';
import { MaterialList } from './MaterialList';
import { Location } from './Location';
import { LoadoutKeys } from '../constants/LoadoutKeys';
import { Item } from './Item';

type RouteNode = {
  id: number;
  traversed: number[];
  completed: Item[];
  materials: MaterialList;
  next: Record<number, RouteNode>;
};

export class Route {
  static MAXIMUM_LOCATIONS = WEIGHTS.MAXIMUM_LOCATIONS;
  static MINIMUM_ITEM_THRESHOLD = WEIGHTS.MINIMUM_ITEM_THRESHOLD;
  static SHORT_ITEM_THRESHOLD = WEIGHTS.SHORT_ITEM_THRESHOLD;
  static UNIVERSAL_ITEMS: number[] = [
    Items.Stone,
    Items.Leather,
    Items.VFBloodSample,
    Items.Meteorite,
    Items.Mithril,
    Items.Branch
  ];

  public materials = new MaterialList();

  private locations: Location[];
  private keyedLocations: Record<number, Location>;
  private weightedMaterials: MaterialList;

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

  private recursiveNode(parentNode: RouteNode, location: Location, index = 0) {
    const newList = parentNode.materials.clone();
    newList.addFromList(location.materials.list);

    const node: RouteNode = {
      id: +location.id,
      traversed: [...parentNode.traversed, +location.id],
      materials: newList,
      completed: this.loadout.checkCompletedItems(newList.list),
      next: null
    };

    const nodes =
      index > 3
        ? null
        : location.connections
            .filter(({ id }) => !node.traversed.includes(+id))
            .map((loc) => [
              loc.id,
              this.recursiveNode(node, this.keyedLocations[loc.id], index + 1)
            ]);

    node.next = nodes ? Object.fromEntries(nodes) : null;

    return node;
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
    Route.UNIVERSAL_ITEMS.forEach((id) => results.materials.set(id, 10));

    const rawNodes = this.getRawNodes();

    this.keyedLocations = Object.fromEntries(rawNodes.locations);
    this.locations = rawNodes.locations.map(([, loc]) => loc);

    const startingPoints = startingPoint
      ? [startingPoint]
      : rawNodes.locations.slice(0, 4).map(([id]) => id);

    results.next = Object.fromEntries(
      startingPoints.map((id) => [
        id,
        this.recursiveNode(results, this.keyedLocations[id])
      ])
    );

    return results;
  }
}
