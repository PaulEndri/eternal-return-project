import Item from '../../types/Item';

export const ImperialBurgonet: Item = {
	"id": 201410,
	"name": "ImperialBurgonet",
	"buildsInto": [],
	"requirements": {
		"Hat": 1,
		"Steel Chain": 1,
		"Hairband": 1,
		"Feather": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 10,
		"maxSp": 200,
		"moveSpeed": 0.1,
		"increaseSkillDamageRatio": 0.16
	},
	"rarity": "Epic",
	"code": "황실부르고넷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "An extravagant burgonet used by the imperial family. Unlike a basic helmet, it is lavishly decorated",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 201402
		},
		{
			"name": "Scissors",
			"id": 401214
		}
	],
	"displayName": "Imperial Burgonet",
	"apiMetaData": {
		"code": 201410,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
