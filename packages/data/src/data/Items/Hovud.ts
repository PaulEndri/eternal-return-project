import Item from '../../types/Item';

export const Hovud: Item = {
	"id": 102411,
	"name": "Hovud",
	"buildsFrom": [
		{
			"name": "Jewel Sword",
			"id": 102404
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Lighter": 1,
		"Hammer": 1,
		"Gemstone": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 45,
		"criticalStrikeChance": 0.2,
		"maxHp": 300
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It is said that this blade, as mentioned briefly in \"Prose Edda\", was used by the Nordic mythical god Heimdallr and was made out of broken pieces of the rainbow bridge, Bifröst. The entire blade emits a dark blue aura, which makes the sword difficult to approach. Some people believe this blade's name means \"head\".",
	"apiMetaData": {
		"code": 102411,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
