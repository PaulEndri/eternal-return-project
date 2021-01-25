import Item from '../../types/Item';

export const RevengeOfGoujian: Item = {
	"id": 205305,
	"name": "RevengeOfGoujian",
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 10,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Rare",
	"code": "월왕구천",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "King Goujian of Yue swore revenge against his rival and used this sword to see it through.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 205211
		},
		{
			"name": "Scissors",
			"id": 401212
		}
	],
	"displayName": "Revenge of Goujian",
	"apiMetaData": {
		"code": 205305,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
