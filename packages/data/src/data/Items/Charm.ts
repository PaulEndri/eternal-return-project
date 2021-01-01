import Item from '../../types/Item';

export const Charm: Item = {
	"id": 113202,
	"name": "Charm",
	"buildsFrom": [
		{
			"name": "Vintage Cards",
			"id": 113203
		},
		{
			"name": "Buddhist Scripture",
			"id": 205106
		}
	],
	"buildsInto": [
		{
			"name": "Mystic Jade Charm",
			"id": 113405
		},
		{
			"name": "Death Rune",
			"id": 113412
		}
	],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1,
		"Buddhist Scripture": 1
	},
	"stats": {
		"attackPower": 40,
		"charges": 10,
		"increaseSkillDamageRatio": 0.1
	},
	"rarity": "Rare",
	"code": "부적",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Charm",
	"apiMetaData": {
		"code": 113202,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
