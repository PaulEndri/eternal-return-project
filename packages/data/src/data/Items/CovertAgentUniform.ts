import Item from '../../types/Item';

export const CovertAgentUniform: Item = {
	"id": 202404,
	"name": "CovertAgentUniform",
	"buildsInto": [
		{
			"name": "Sword of Justice",
			"id": 120302
		}
	],
	"requirements": {
		"Monk's Robe": 1,
		"Bandage": 1,
		"Flower": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"cooldownReduction": 0.15,
		"defense": 23,
		"hpRegen": 2.5
	},
	"rarity": "Rare",
	"code": "어사의",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The uniform worn by agents that performed special missions for the King. Secretly.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 202306
		},
		{
			"name": "Scissors",
			"id": 401109
		}
	],
	"displayName": "Covert Agent Uniform",
	"apiMetaData": {
		"code": 202404,
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
