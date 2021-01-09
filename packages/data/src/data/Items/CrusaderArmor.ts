import Item from '../../types/Item';

export const CrusaderArmor: Item = {
	"id": 202408,
	"name": "CrusaderArmor",
	"buildsInto": [],
	"requirements": {
		"Fabric Armor": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"defense": 30,
		"hpRegenRatio": 2,
		"moveSpeed": -0.02,
		"increaseBasicAttackDamage": 15
	},
	"rarity": "Epic",
	"code": "성기사의갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Some say that this armor provides special protection from the undead. It's a shame there's no zombies around here.",
	"buildsFrom": [
		{
			"name": "Sheet Metal Armor",
			"id": 202305
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"displayName": "Crusader Armor",
	"apiMetaData": {
		"code": 202408,
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
