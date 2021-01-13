import Item from '../../types/Item';

export const Qipao: Item = {
	"id": 202304,
	"name": "Qipao",
	"buildsInto": [
		{
			"name": "Dragon Dobok",
			"id": 202411
		}
	],
	"requirements": {
		"Cloth": 1,
		"Scissors": 1,
		"Razor": 1
	},
	"stats": {
		"attackPower": 10,
		"defense": 10,
		"spRegenRatio": 1.5
	},
	"rarity": "Rare",
	"code": "치파오",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A traditional Chinese dress. They vary in style from simple cotton dresses to silk ones with elaborate fine details.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 202207
		},
		{
			"name": "Scissors",
			"id": 113101
		}
	],
	"displayName": "Qipao",
	"apiMetaData": {
		"code": 202304,
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
