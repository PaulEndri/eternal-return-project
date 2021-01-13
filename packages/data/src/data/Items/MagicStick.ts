import Item from '../../types/Item';

export const MagicStick: Item = {
	"id": 104405,
	"name": "MagicStick",
	"buildsInto": [],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Ribbon": 1,
		"Meteorite": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 65,
		"lifeSteal": 0.3,
		"increaseSkillDamageRatio": 0.27
	},
	"rarity": "Epic",
	"code": "마법봉",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The stick often carried by the main characters of Shoujo comics. The moral of the Shoujo genre is that peace must be maintained through greater power.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 104201
		},
		{
			"name": "Scissors",
			"id": 205401
		}
	],
	"displayName": "Magic Stick",
	"apiMetaData": {
		"code": 104405,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
