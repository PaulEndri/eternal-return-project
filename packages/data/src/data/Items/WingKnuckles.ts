import Item from '../../types/Item';

export const WingKnuckles: Item = {
	"id": 110302,
	"name": "WingKnuckles",
	"buildsInto": [
		{
			"name": "Bloodwing Knuckles",
			"id": 110407
		}
	],
	"requirements": {
		"Brass Knuckles": 1,
		"Iron Ore": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 20,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "윙너클",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Free your burdened soul with these masterfully created wings. But there exists no sky for you to spread your wings...",
	"buildsFrom": [
		{
			"name": "Iron Knuckles",
			"id": 110202
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"displayName": "Wing Knuckles",
	"apiMetaData": {
		"code": 110302,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
