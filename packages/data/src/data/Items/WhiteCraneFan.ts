import Item from '../../types/Item';

export const WhiteCraneFan: Item = {
	"id": 205201,
	"name": "White Crane Fan",
	"buildsFrom": [
		{
			"name": "Gilded Quill Fan",
			"id": 205210
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"buildsInto": [
		{
			"name": "Harpe",
			"id": 105406
		},
		{
			"name": "Elemental Bow",
			"id": 114501
		}
	],
	"requirements": {
		"Fan": 1,
		"Nail": 1,
		"Feather": 1
	},
	"stats": {
		"decreaseRecoveryToSkill": 1,
		"moveSpeed": 0.1,
		"increaseSkillDamage": 16
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Though a person may make plans in life, it is the heavens that will bring them to fruition.",
	"apiMetaData": {
		"code": 205201,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
