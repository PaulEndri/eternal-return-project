import Item from '../../types/Item';

export const ElementalBow: Item = {
	"id": 114501,
	"name": "Elemental Bow",
	"buildsFrom": [
		{
			"name": "Scorchbow",
			"id": 114402
		},
		{
			"name": "White Crane Fan",
			"id": 205201
		}
	],
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
		"increaseSkillDamage": 45
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow with the elemental powers of nature, such as fire or electricity. Similar to the four elements of Aristotle.",
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
