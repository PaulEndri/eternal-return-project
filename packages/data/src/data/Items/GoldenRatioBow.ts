import Item from '../../types/Item';

export const GoldenRatioBow: Item = {
	"id": 114403,
	"name": "GoldenRatioBow",
	"buildsFrom": [
		{
			"name": "Pellet Bow",
			"id": 114304
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"buildsInto": [],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1,
		"Stone": 1,
		"Lighter": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 68,
		"increaseSkillDamageRatio": 0.2
	},
	"rarity": "Epic",
	"code": "골든래쇼보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A composite bow and arrow designed according to the golden ratio. It boasts extraordinary precision.",
	"displayName": "Golden-Ratio Bow",
	"apiMetaData": {
		"code": 114403,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
