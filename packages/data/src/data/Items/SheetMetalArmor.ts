import Item from '../../types/Item';

export const SheetMetalArmor: Item = {
	"id": 202305,
	"name": "SheetMetalArmor",
	"buildsInto": [
		202408,
		202410
	],
	"requirements": {
		"Fabric Armor": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"defense": 38,
		"maxHp": 100,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "판금갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armor comprised of several layers of metal plates. Sheet Metal Armor is effective at withstanding slashing and striking attacks, but is weaker against long-range weapons.",
	"buildsFrom": [
		202106,
		401201
	],
	"displayName": "Sheet Metal Armor",
	"apiMetaData": {
		"code": 202305,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
