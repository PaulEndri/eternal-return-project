import Item from '../../types/Item';

export const DavidsSling: Item = {
	"id": 112401,
	"name": "DavidsSling",
	"buildsInto": [],
	"requirements": {
		"Baseball": 1,
		"Fountain Pen": 1,
		"Rubber": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 71,
		"charges": 50,
		"hpRegenRatio": 1.5,
		"preventBasicAttackDamaged": 27
	},
	"rarity": "Epic",
	"code": "다비드슬링",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "David's legendary stone that killed Goliath, the giant of Philistine.",
	"buildsFrom": [
		112204,
		205202
	],
	"displayName": "David's Sling",
	"apiMetaData": {
		"code": 112401,
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
