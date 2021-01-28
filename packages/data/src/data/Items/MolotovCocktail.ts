import Item from '../../types/Item';

export const MolotovCocktail: Item = {
	"id": 112203,
	"name": "MolotovCocktail",
	"buildsInto": [
		112301,
		112302
	],
	"requirements": {
		"Glass Bottle": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 22,
		"attackSpeedRatio": 0.15,
		"charges": 20
	},
	"rarity": "Uncommon",
	"code": "화염병",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Make a mistake and drop it, you'll become your own worst enemy.",
	"buildsFrom": [
		112104,
		401112
	],
	"displayName": "Molotov Cocktail",
	"apiMetaData": {
		"code": 112203,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
