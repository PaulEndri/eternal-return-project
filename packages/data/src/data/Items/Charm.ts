import Item from '../../types/Item';

export const Charm: Item = {
	"id": 113202,
	"name": "Charm",
	"buildsInto": [
		113405,
		113412
	],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1,
		"Buddhist Scripture": 1
	},
	"stats": {
		"attackPower": 40,
		"charges": 10,
		"preventSkillDamagedRatio": 0.1
	},
	"rarity": "Rare",
	"code": "부적",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		113203,
		205106
	],
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
