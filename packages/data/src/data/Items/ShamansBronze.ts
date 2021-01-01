import Item from '../../types/Item';

export const ShamansBronze: Item = {
	"id": 205211,
	"name": "ShamansBronze",
	"buildsFrom": [
		{
			"name": "Rusty Sword",
			"id": 102101
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
	"buildsInto": [
		{
			"name": "Revenge of Goujian",
			"id": 205305
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 5,
		"increaseSkillDamageRatio": 0.08
	},
	"rarity": "Uncommon",
	"code": "비파단도",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A ritual tool that is less practical but has a strong symbolic meaning.",
	"displayName": "Shaman's Bronze",
	"apiMetaData": {
		"code": 205211,
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