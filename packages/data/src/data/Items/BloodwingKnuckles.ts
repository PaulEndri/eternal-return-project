import Item from '../../types/Item';

export const BloodwingKnuckles: Item = {
	"id": 110407,
	"name": "BloodwingKnuckles",
	"buildsFrom": [
		{
			"name": "Wing Knuckles",
			"id": 110302
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Brass Knuckles": 1,
		"Iron Ore": 1,
		"Feather": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 53,
		"maxHp": 250,
		"moveSpeed": 0.1
	},
	"rarity": "Epic",
	"code": "블러드윙너클",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Knuckles that seemingly fit the Dark Angel. How can you return when your wings are covered in crimson blood..?",
	"displayName": "Bloodwing Knuckles",
	"apiMetaData": {
		"code": 110407,
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
