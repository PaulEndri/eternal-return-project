import Item from '../../types/Item';

export const Katana: Item = {
	"id": 102301,
	"name": "Katana",
	"buildsInto": [
		102401,
		102402,
		102501,
		102501
	],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 35
	},
	"rarity": "Rare",
	"code": "일본도",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "I can't believe that I'm actually holding a Japanese sword that I saw in the movies!",
	"buildsFrom": [
		102101,
		401213
	],
	"displayName": "Katana",
	"apiMetaData": {
		"code": 102301,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
