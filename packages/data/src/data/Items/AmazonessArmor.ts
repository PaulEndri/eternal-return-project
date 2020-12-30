import Item from '../../types/Item';

export const AmazonessArmor: Item = {
	"id": "Amazoness Armor",
	"name": "Amazoness Armor",
	"href": "/Amazoness_Armor",
	"buildsFrom": [
		{
			"name": "Sheet Metal Armor",
			"id": 202305
		},
		{
			"name": "Bikini",
			"id": 202209
		}
	],
	"buildsInto": [],
	"requirements": {
		"Fabric Armor": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Full Body Swimsuit": 1,
		"Scissors": 1
	},
	"stats": {
		"defense": 28,
		"maxHp": 120,
		"preventSkillDamagedRatio": 0.2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armor bestowed upon female warriors with outstanding archery ability and agility. Allows for flexibilty and protection.",
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
