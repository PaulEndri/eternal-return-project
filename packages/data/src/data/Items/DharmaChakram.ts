import Item from '../../types/Item';

export const DharmaChakram: Item = {
	"id": 113403,
	"name": "DharmaChakram",
	"buildsInto": [
		113411
	],
	"requirements": {
		"Razor": 1,
		"Piano Wire": 1,
		"Stallion Medal": 1,
		"Buddhist Scripture": 1
	},
	"stats": {
		"attackPower": 38,
		"charges": 50,
		"preventSkillDamagedRatio": 0.15
	},
	"rarity": "Rare",
	"code": "법륜",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A legendary weapon Buddha used to exorcise a demon. It causes damage with the sharp blades that rotate around its perimeter.",
	"buildsFrom": [
		113301,
		205106
	],
	"displayName": "Dharma Chakram",
	"apiMetaData": {
		"code": 113403,
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
