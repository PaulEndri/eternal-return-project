import Item from '../../types/Item';

export const BuddhaSarira: Item = {
	"id": 205207,
	"name": "BuddhaSarira",
	"buildsInto": [
		{
			"name": "Parashu",
			"id": 105405
		},
		{
			"name": "Buddha's Palm",
			"id": 110409
		},
		{
			"name": "Teen Spirit",
			"id": 121407
		},
		{
			"name": "Veritas Lux Mea",
			"id": 205405
		}
	],
	"requirements": {
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"cooldownReduction": 0.08,
		"increaseSkillDamageRatio": 0.08
	},
	"rarity": "Uncommon",
	"code": "진신사리",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A relic found in the ashes from the body of Buddha. It smells vaguely of incense.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 205106
		},
		{
			"name": "Scissors",
			"id": 202103
		}
	],
	"displayName": "Buddha Sarira",
	"apiMetaData": {
		"code": 205207,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
