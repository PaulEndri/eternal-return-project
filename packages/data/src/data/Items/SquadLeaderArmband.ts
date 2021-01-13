import Item from '../../types/Item';

export const SquadLeaderArmband: Item = {
	"id": 203202,
	"name": "SquadLeaderArmband",
	"buildsInto": [
		{
			"name": "Creed of the Knight",
			"id": 203406
		}
	],
	"requirements": {
		"Bandage": 1,
		"Needle": 1
	},
	"stats": {
		"criticalStrikeDamage": 0.15,
		"hpRegen": 1.5
	},
	"rarity": "Uncommon",
	"code": "분대장완장",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "An armband normally worn by a squad commander. How did you get this?!",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 203102
		},
		{
			"name": "Scissors",
			"id": 120101
		}
	],
	"displayName": "Squad Leader Armband",
	"apiMetaData": {
		"code": 203202,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
