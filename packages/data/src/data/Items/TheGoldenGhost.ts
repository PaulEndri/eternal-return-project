import Item from '../../types/Item';

export const TheGoldenGhost: Item = {
	"id": 115405,
	"name": "TheGoldenGhost",
	"buildsInto": [],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 2,
		"Rubber": 1,
		"Gunpowder": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 70,
		"charges": 6,
		"increaseBasicAttackDamage": 37
	},
	"rarity": "Epic",
	"code": "영광금귀신기노",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 115301
		},
		{
			"name": "Scissors",
			"id": 502307
		}
	],
	"displayName": "The Golden Ghost",
	"apiMetaData": {
		"code": 115405,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
