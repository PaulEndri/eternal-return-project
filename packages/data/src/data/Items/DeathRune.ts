import Item from '../../types/Item';

export const DeathRune: Item = {
	"id": 113412,
	"name": "DeathRune",
	"buildsFrom": [
		{
			"name": "Charm",
			"id": 113202
		},
		{
			"name": "Tree of Life",
			"id": 401208
		}
	],
	"buildsInto": [],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1,
		"Buddhist Scripture": 1,
		"Tree of Life": 1
	},
	"stats": {
		"attackPower": 80,
		"charges": 10,
		"increaseSkillDamageRatio": 0.23
	},
	"rarity": "Epic",
	"code": "생사부",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Death Rune",
	"apiMetaData": {
		"code": 113412,
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
