import Item from '../../types/Item';

export const BeamAxe: Item = {
	"id": 105402,
	"name": "BeamAxe",
	"buildsInto": [],
	"requirements": {
		"Hatchet": 1,
		"Bamboo": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Laser Pointer": 1
	},
	"stats": {
		"attackPower": 137,
		"moveSpeed": -0.1,
		"sightRange": 4
	},
	"rarity": "Epic",
	"code": "빔엑스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Widely used since the Old Stone Age, it became a masterpiece when fused with modern technology.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105401
		},
		{
			"name": "Scissors",
			"id": 401108
		}
	],
	"displayName": "Beam Axe",
	"apiMetaData": {
		"code": 105402,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
