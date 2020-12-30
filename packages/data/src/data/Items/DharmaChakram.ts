import Item from '../../types/Item';

export const DharmaChakram: Item = {
	"id": 113403,
	"name": "Dharma Chakram",
	"buildsFrom": [
		{
			"name": "Chakram",
			"id": 113301
		},
		{
			"name": "Buddhist Scripture",
			"id": 205106
		}
	],
	"buildsInto": [
		{
			"name": "Wind and Fire Wheels",
			"id": 113411
		}
	],
	"requirements": {
		"Razor": 1,
		"Piano Wire": 1,
		"Stallion Medal": 1,
		"Buddhist Scripture": 1
	},
	"stats": {
		"attackPower": 34,
		"charges": 50,
		"increaseSkillDamageRatio": 0.15
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A legendary weapon Buddha used to exorcise a demon. It causes damage with the sharp blades that rotate around its perimeter.",
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
