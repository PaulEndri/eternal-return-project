import Item from '../../types/Item';

export const BootsofHermes: Item = {
	"id": 204501,
	"name": "Boots of Hermes",
	"buildsFrom": [
		{
			"name": "Force Core",
			"id": 401403
		},
		{
			"name": "Heelys",
			"id": 204204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1,
		"Running Shoes": 1,
		"Iron Ball": 1
	},
	"stats": {
		"defense": 40,
		"moveSpeed": 0.4,
		"moveSpeedOutOfCombat": 0.2
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Shoes worn by Hermes, the Greek God of Travellers. Try them on, you'll feel like you're floating.",
	"apiMetaData": {
		"code": 204501,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
