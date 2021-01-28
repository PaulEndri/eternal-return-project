import Item from '../../types/Item';

export const BuddhaSarira: Item = {
	"id": 205207,
	"name": "BuddhaSarira",
	"buildsInto": [
		105405,
		110409,
		121407,
		205405
	],
	"requirements": {
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"lifeSteal": 0.08,
		"preventSkillDamagedRatio": 0.08
	},
	"rarity": "Uncommon",
	"code": "진신사리",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A relic found in the ashes from the body of Buddha. It smells vaguely of incense.",
	"buildsFrom": [
		205106,
		202103
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
