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
		"defense": 38,
		"hpRegenRatio": 1.5,
		"moveSpeed": -0.02,
		"preventBasicAttackDamaged": 15
	},
	"rarity": "Epic",
	"code": "성기사의갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Some say that this armor provides special protection from the undead. It's a shame there's no zombies around here.",
	"buildsFrom": [
		202305,
		205202
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
