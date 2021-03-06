import Item from '../../types/Item';

export const MysticJadeCharm: Item = {
	"id": 113405,
	"name": "MysticJadeCharm",
	"buildsInto": [],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1,
		"Buddhist Scripture": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 60,
		"charges": 10,
		"increaseSkillDamageRatio": 15,
		"preventSkillDamagedRatio": 0.15
	},
	"rarity": "Epic",
	"code": "옥전결",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		113202,
		401210
	],
	"displayName": "Mystic Jade Charm",
	"apiMetaData": {
		"code": 113405,
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
