import Item from '../../types/Item';

export const CovertAgentUniform: Item = {
	"id": 202404,
	"name": "Covert Agent Uniform",
	"buildsFrom": [
		{
			"name": "Hanbok",
			"id": 202306
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The uniform worn by agents that performed special missions for the King. Secretly.",
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
