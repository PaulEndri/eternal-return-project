import Item from '../../types/Item';

export const AmazonessArmor: Item = {
	"id": 202410,
	"name": "AmazonessArmor",
	"buildsInto": [],
	"requirements": {
		"Fabric Armor": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Scissors": 1
	},
	"stats": {
		"defense": 28,
		"maxHp": 120,
		"preventSkillDamagedRatio": 0.2
	},
	"rarity": "Epic",
	"code": "아마조네스아머",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armor bestowed upon female warriors with outstanding archery ability and agility. Allows for flexibilty and protection.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 202305
		},
		{
			"name": "Scissors",
			"id": 202209
		}
	],
	"displayName": "Amazoness Armor",
	"apiMetaData": {
		"code": 202410,
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
