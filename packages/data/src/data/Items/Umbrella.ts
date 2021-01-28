import Item from '../../types/Item';

export const Umbrella: Item = {
	"id": 108401,
	"name": "Umbrella",
	"buildsInto": [
		108501
	],
	"requirements": {
		"Short Rod": 1,
		"Bamboo": 1,
		"Fan": 1
	},
	"stats": {
		"attackPower": 30,
		"increaseSkillDamageRatio": 14
	},
	"rarity": "Rare",
	"code": "우산",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You might wonder how this became a weapon, but it is often used as a murder weapon in mystery stories.",
	"buildsFrom": [
		108202,
		205105
	],
	"displayName": "Umbrella",
	"apiMetaData": {
		"code": 108401,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
