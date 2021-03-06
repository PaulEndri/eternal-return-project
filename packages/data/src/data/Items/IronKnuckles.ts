import Item from '../../types/Item';

export const IronKnuckles: Item = {
	"id": 110202,
	"name": "IronKnuckles",
	"buildsInto": [
		110302,
		110403
	],
	"requirements": {
		"Brass Knuckles": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 20
	},
	"rarity": "Uncommon",
	"code": "아이언너클",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Though it may look like ordinary knuckles, but it's made with a much sturdier iron, so it hits much harder.",
	"buildsFrom": [
		110101,
		401118
	],
	"displayName": "Iron Knuckles",
	"apiMetaData": {
		"code": 110202,
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
