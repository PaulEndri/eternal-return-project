import Item from '../../types/Item';

export const FrostPetalHand: Item = {
	"id": 110408,
	"name": "FrostPetalHand",
	"buildsFrom": [
		{
			"name": "Phoenix Gloves",
			"id": 110404
		},
		{
			"name": "Ice",
			"id": 301103
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1,
		"Ice": 1
	},
	"stats": {
		"attackPower": 27,
		"cooldownReduction": 0.15,
		"increaseSkillDamage": 38
	},
	"rarity": "Epic",
	"code": "빙화현옥수",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A guardian spirit that was passed down through generations of the North Polar Sea kingdom's bloodline. Petal-shaped ice flakes form along its surface to protect its user from harm.",
	"displayName": "Frost Petal Hand",
	"apiMetaData": {
		"code": 110408,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
