import Item from '../../types/Item';

export const VintageCards: Item = {
	"id": 113203,
	"name": "VintageCards",
	"buildsInto": [
		113202,
		113401
	],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1
	},
	"stats": {
		"attackPower": 15,
		"charges": 50,
		"criticalStrikeChance": 0.1
	},
	"rarity": "Uncommon",
	"code": "빈티지카드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A shabby looking deck of cards. Probably used to gamble in a sketchy alley.",
	"buildsFrom": [
		113102,
		101102
	],
	"displayName": "Vintage Cards",
	"apiMetaData": {
		"code": 113203,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
