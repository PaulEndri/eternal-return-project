import Item from '../../types/Item';

export const Harpe: Item = {
	"id": 105406,
	"name": "Harpe",
	"buildsFrom": [
		{
			"name": "Reaper's Scythe",
			"id": 105302
		},
		{
			"name": "White Crane Fan",
			"id": 205201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Pickaxe": 1,
		"Steel Chain": 1,
		"Short Rod": 1,
		"Fan": 1,
		"Nail": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 125,
		"attackRange": 0.5,
		"decreaseRecoveryToSkill": 1,
		"moveSpeed": 0.1,
		"increaseSkillDamage": 45
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The sword given to Perseus by Hermes, the God of Thieves. He used this to cut off Medusa's head and to rescue Andromeda from a sea monster.",
	"apiMetaData": {
		"code": 105406,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
