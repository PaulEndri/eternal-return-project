import Item from '../../types/Item';

export const GoldenRifle: Item = {
	"id": 118401,
	"name": "Golden Rifle",
	"buildsFrom": [
		{
			"name": "Springfield",
			"id": 118201
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"buildsInto": [
		{
			"name": "NTW-20",
			"id": 118405
		},
		{
			"name": "The Deadly Ray",
			"id": 118501
		}
	],
	"requirements": {
		"Long Rifle": 1,
		"Laster Pointer": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 56,
		"moveSpeed": -0.15,
		"sightRange": 2.5,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A rifle accented with gold. High in both accuracy, destructive power, and flashiness.",
	"apiMetaData": {
		"code": 118401,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
