import Item from '../../types/Item';

export const CrimsonBracelet: Item = {
	"id": 203304,
	"name": "CrimsonBracelet",
	"buildsInto": [
		{
			"name": "Bracelet of Skadi",
			"id": 203501
		}
	],
	"requirements": {
		"Bracelet": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"maxHp": 200,
		"maxSp": 250
	},
	"rarity": "Rare",
	"code": "진홍팔찌",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bracelet lavish with white and red gemstones. However, the large size of the beads may be somewhat annoying the wearer.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 203104
		},
		{
			"name": "Scissors",
			"id": 502201
		}
	],
	"displayName": "Crimson Bracelet",
	"apiMetaData": {
		"code": 203304,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
