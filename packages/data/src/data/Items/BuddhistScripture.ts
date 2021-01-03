import Item from '../../types/Item';

export const BuddhistScripture: Item = {
	"id": 205106,
	"name": "BuddhistScripture",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Charm",
			"id": 113202
		},
		{
			"name": "Dharma Chakram",
			"id": 113403
		},
		{
			"name": "Buddha Sarira",
			"id": 205207
		}
	],
	"requirements": {},
	"stats": {
		"increaseSkillDamageRatio": 0.07
	},
	"rarity": "Common",
	"code": "불경",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 8
	},
	"foundQuantity": 1,
	"description": "Smells like incense. No idea what it says, though.",
	"displayName": "Buddhist Scripture",
	"apiMetaData": {
		"code": 205106,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		},
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
