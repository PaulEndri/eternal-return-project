import Item from '../../types/Item';

export const TacticalOPSHelmet: Item = {
	"id": 201406,
	"name": "TacticalOPSHelmet",
	"buildsInto": [],
	"requirements": {
		"Hat": 1,
		"Scissors": 1,
		"Bike Helmet": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackSpeedRatio": 0.2,
		"cooldownReduction": 0.15,
		"defense": 15,
		"maxHp": 120
	},
	"rarity": "Epic",
	"code": "전술OPS헬멧",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A tactical helmet used by special forces. Military grade communication technology is built-in.",
	"buildsFrom": [
		{
			"name": "Ballistic Helmet",
			"id": 201301
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"displayName": "Tactical OPS Helmet",
	"apiMetaData": {
		"code": 201406,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
