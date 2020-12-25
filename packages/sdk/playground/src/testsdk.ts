import { Loadout, Route } from 'erbs-sdk';
import { Armors, WeaponsEnum } from 'erbs-sdk';

const loadout = {
	Weapon: WeaponsEnum.Twinbow,
	Chest: Armors.Chests['Optical Camouflage Suit'],
	Head: Armors.Heads['Motorcycle Helmet'],
	Leg: Armors.Legs['Feather Boots'],
	Accessory: Armors.Accessories.Quiver,
	Arm: Armors.Arms.Radar
};

const test = Loadout.GenerateLoadout(loadout);

const routes = Route.GenerateRouteOptions(test);

console.log(routes);
