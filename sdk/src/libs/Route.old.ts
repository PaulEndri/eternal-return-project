// import { Locations, Materials, TreeOfLifeLocations, Bats } from '../constants';
// import { WEIGHTS } from '../constants/Weights';
// import { IWeightedLocation } from '../interfaces/ILocation';
// import { Item } from './Item';
// import { Loadout } from './Loadout';
// import { MaterialList } from './MaterialList';
// import { getLocationCombinations } from '../utils/getLocationCombinations';

// export class Route {
// 	static MAXIMUM_LOCATIONS = WEIGHTS.MAXIMUM_LOCATIONS;
// 	static MINIMUM_ITEM_THRESHOLD = WEIGHTS.MINIMUM_ITEM_THRESHOLD;
// 	static SHORT_ITEM_THRESHOLD = WEIGHTS.SHORT_ITEM_THRESHOLD;
// 	static UNIVERSAL_ITEMS: string[] = [
// 		Materials.Stone,
// 		Materials.Leather,
// 		Materials['VF Blood Sample'],
// 		Materials.Meteorite,
// 		Materials.Mithril,
// 		Bats.Branch
// 	];
// 	private materials = new MaterialList();
// 	private orderedRegions: Map<Locations, IWeightedLocation> = new Map();
// 	private completed: Item<any>[] = [];

// 	constructor(private loadout: Loadout, private regions: IWeightedLocation[] = []) {
// 		this.addMaterialsFromLoadout(this.materials, loadout);
// 	}

// 	static GetPermutations<T>(permutationOptions: T[]): T[][] {
// 		if (permutationOptions.length === 1) {
// 			return [ permutationOptions ];
// 		}

// 		// Init permutations array.
// 		const permutations = [];

// 		// Get all permutations for permutationOptions excluding the first element.
// 		const smallerPermutations = this.GetPermutations(permutationOptions.slice(1));

// 		// Insert first option into every possible position of every smaller permutation.
// 		const firstOption = permutationOptions[0];
// 		for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
// 			const smallerPermutation = smallerPermutations[permIndex];
// 			// Insert first option into every possible position of smallerPermutation.
// 			for (
// 				let positionIndex = 0;
// 				positionIndex <= smallerPermutation.length;
// 				positionIndex += 1
// 			) {
// 				const permutationPrefix = smallerPermutation.slice(0, positionIndex);
// 				const permutationSuffix = smallerPermutation.slice(positionIndex);
// 				permutations.push(permutationPrefix.concat([ firstOption ], permutationSuffix));
// 			}
// 		}

// 		return permutations;
// 	}

// 	static GenerateRouteOptions(loadout: Loadout, length = 3) {
// 		const combinations = getLocationCombinations(length);
// 		const weightedRegions = Object.values(loadout.weightedRegions).sort(
// 			(a, b) => b.value - a.value
// 		);

// 		const results = combinations
// 			.map((locations) => {
// 				const route = new Route(loadout);
// 				route.addRegions(locations);
// 				return route;
// 			})
// 			.filter((route) => route.checkCompletedItems().length >= Route.SHORT_ITEM_THRESHOLD)
// 			.map((route: Route) =>
// 				route
// 					.getPermutations()
// 					.filter((regions) =>
// 						regions.filter((region) => region).every((region, i) => {
// 							const next = regions[i + 1];

// 							if (!next) {
// 								return true;
// 							}

// 							return region.connections.includes(next.name as Locations);
// 						})
// 					)
// 					.map((regions) => {
// 						const presentRegions = regions
// 							.filter((region) => region)
// 							.map(({ name }) => name as Locations);

// 						const leftRegions = weightedRegions.filter(
// 							({ name }) => !presentRegions.includes(name as any)
// 						);

// 						const newRoute = route.createOrderedRoute(presentRegions);
// 						newRoute.findNext(leftRegions[0], leftRegions.slice(1));

// 						return newRoute;
// 					})
// 					.filter(
// 						(newRoute) =>
// 							newRoute.checkCompletedItems().length >= Route.MINIMUM_ITEM_THRESHOLD
// 					)
// 			)
// 			.flat()
// 			.sort((a, b) => b.value - a.value);

// 		if (results.length === 0 && length === 3) {
// 			return this.GenerateRouteOptions(loadout, 4);
// 		}

// 		return results;
// 	}

// 	public get value() {
// 		let runningValue = 0;
// 		let runningList = new MaterialList();
// 		let index = 1;
// 		let completedByProducts = 0;
// 		let completedItems = [];

// 		this.addMaterialsFromLoadout(runningList, this.loadout);
// 		this.orderedRegions.forEach((value, key) => {
// 			runningList.addFromWeightedLocations([ value ]);

// 			if (TreeOfLifeLocations[key]) {
// 				this.materials.add(Materials['Tree of Life'], 1);
// 			}

// 			const newByProducts = this.loadout.checkCompletedByProducts(runningList.list);
// 			const newItems = this.loadout.checkCompletedItems(runningList.list);
// 			const newItemValues = newItems
// 				.filter((item) => !completedItems.includes(item))
// 				.reduce((total, current) => total + current.typeWeight * current.rarityWeight, 0);
// 			const deltaMod = newItemValues ? newItemValues : 1;
// 			const itemDelta = (newItems.length - completedItems.length) * deltaMod;
// 			const byProductsDelta = newByProducts.length - completedByProducts;

// 			runningValue += this.getRegionWeight(value.value, byProductsDelta, itemDelta);

// 			completedByProducts = newByProducts.length;
// 			completedItems = newItems;
// 			index++;
// 		});

// 		return runningValue;
// 	}

// 	public addMaterialsFromLoadout(materialList: MaterialList, loadout: Loadout) {
// 		this.materials.add(loadout.starterItem, 1);

// 		Object.entries(loadout.materials)
// 			.filter(([ mat ]) => Route.UNIVERSAL_ITEMS.includes(mat))
// 			.forEach(([ mat, val ]) => materialList.add(mat, val));
// 	}

// 	public addRegions(locations: Locations[]) {
// 		for (const location of locations) {
// 			if (!this.regions.some((region) => region && region.name === location)) {
// 				const region = this.loadout.weightedRegions[location];
// 				this.regions.push(region);
// 				this.materials.addFromWeightedLocations([ region ]);
// 			}
// 		}
// 	}

// 	public getPermutations() {
// 		return Route.GetPermutations<IWeightedLocation>(this.regions);
// 	}

// 	public createOrderedRoute(locations: Locations[]) {
// 		const newRoute = new Route(this.loadout, this.regions);

// 		locations.forEach((location) => {
// 			newRoute.orderedRegions.set(location, this.loadout.weightedRegions[location]);
// 			newRoute.materials.addFromWeightedLocations([ this.loadout.weightedRegions[location] ]);
// 		});

// 		return newRoute;
// 	}

// 	public getRegionWeight(baseValue: number, byProductsDelta: number, itemsDelta: number) {
// 		return baseValue * ((byProductsDelta + 1) / 100 + 1) * ((itemsDelta + 1) / 10 + 1);
// 	}

// 	private checkCompletedItems() {
// 		return this.loadout.checkCompletedItems(this.materials.list);
// 	}

// 	private checkCompletedByProducts() {
// 		return this.loadout.checkCompletedByProducts(this.materials.list);
// 	}

// 	private findNext(current: IWeightedLocation, left: IWeightedLocation[]) {
// 		if (!current || this.regions.length >= Route.MAXIMUM_LOCATIONS) {
// 			console.error('We dun goofed');

// 			return;
// 		}

// 		Object.entries(current.materials).forEach(([ name, { quantity } ]) => {
// 			this.materials.add(name, +quantity);
// 		});

// 		const itemsCompleted = this.checkCompletedItems();
// 		const byProductsCompleted = this.checkCompletedByProducts();

// 		if (TreeOfLifeLocations[current.name]) {
// 			this.materials.add(Materials['Tree of Life'], 1);
// 		}

// 		this.completed = itemsCompleted;
// 		this.orderedRegions.set(current.name as any, current);
// 		this.regions.push(current);

// 		if (itemsCompleted.length === this.loadout.items.length) {
// 			return;
// 		}

// 		const next = current.connections
// 			.filter((connection) => left.some(({ name }) => name === connection))
// 			.map((connection) => {
// 				const nextRegion = this.loadout.weightedRegions[connection];
// 				const list = this.materials.clone();

// 				list.addFromWeightedLocations([ nextRegion ]);

// 				const inProgressItems = this.loadout.checkCompletedItems(list.list);
// 				const inProgressByProducts = this.loadout.checkCompletedByProducts(list.list);
// 				const newItemValues = inProgressItems
// 					.filter((item) => !itemsCompleted.includes(item))
// 					.reduce(
// 						(total, current) => total + current.typeWeight * current.rarityWeight,
// 						0
// 					);
// 				const deltaMod = newItemValues ? newItemValues : 1;
// 				const itemDelta = (inProgressItems.length - itemsCompleted.length) * deltaMod;
// 				const byProductsDelta = inProgressByProducts.length - byProductsCompleted.length;

// 				return {
// 					...nextRegion,
// 					value: this.getRegionWeight(nextRegion.value, byProductsDelta, itemDelta)
// 				};
// 			})
// 			.sort((a, b) => b.value - a.value)
// 			.shift();

// 		// console.log('[Walking to next location]', next.name);
// 		if (!next) {
// 			return;
// 		}

// 		return this.findNext(next, left.filter(({ name }) => name !== next.name));
// 	}
// }
