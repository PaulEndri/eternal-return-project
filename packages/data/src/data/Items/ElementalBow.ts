import Item from '../../types/Item';

export const ElementalBow: Item = {
	"id": 114501,
	"name": "ElementalBow",
	"buildsInto": [],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Lighter": 1,
		"Fan": 1,
		"Nail": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 60,
		"decreaseRecoveryToSkill": 1,
		"moveSpeed": 0.1,
		"increaseSkillDamage": 41
	},
	"rarity": "Epic",
	"code": "엘리멘탈보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow with the elemental powers of nature, such as fire or electricity. Similar to the four elements of Aristotle.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 114402
		},
		{
			"name": "Scissors",
			"id": 205201
		}
	],
	"displayName": "Elemental Bow",
	"apiMetaData": {
		"code": 114501,
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
