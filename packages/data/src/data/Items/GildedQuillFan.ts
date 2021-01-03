import Item from '../../types/Item';

export const GildedQuillFan: Item = {
	"id": 205210,
	"name": "GildedQuillFan",
	"buildsFrom": [
		{
			"name": "Fan",
			"id": 205105
		},
		{
			"name": "Nail",
			"id": 401101
		}
	],
	"buildsInto": [
		{
			"name": "Fangtian Huaji",
			"id": 107407
		},
		{
			"name": "White Crane Fan",
			"id": 205201
		}
	],
	"requirements": {
		"Fan": 1,
		"Nail": 1
	},
	"stats": {
		"decreaseRecoveryToSkill": 1,
		"increaseSkillDamage": 14
	},
	"rarity": "Uncommon",
	"code": "군선",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If you fan your face with this, try not to scratch yourself.",
	"displayName": "Gilded Quill Fan",
	"apiMetaData": {
		"code": 205210,
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
