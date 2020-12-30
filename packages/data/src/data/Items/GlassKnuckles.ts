import Item from '../../types/Item';

export const GlassKnuckles: Item = {
	"id": 110403,
	"name": "Glass Knuckles",
	"buildsFrom": [
		{
			"name": "Iron Knuckles",
			"id": 110202
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		}
	],
	"buildsInto": [
		{
			"name": "White Claw Punch",
			"id": 110411
		}
	],
	"requirements": {
		"Brass Knuckles": 1,
		"Iron Ore": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 28,
		"criticalStrikeChance": 0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Knuckles coated with glass fragments. They're not entirely made of glass!",
	"apiMetaData": {
		"code": 110403,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
