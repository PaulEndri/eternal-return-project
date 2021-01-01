import Item from '../../types/Item';

export const StairwayToHeaven: Item = {
	"id": 121402,
	"name": "StairwayToHeaven",
	"buildsFrom": [
		{
			"name": "Humbucker Pickup",
			"id": 121302
		},
		{
			"name": "Holy Grail",
			"id": 205108
		}
	],
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Pickaxe": 1,
		"Gemstone": 1,
		"Laster Pointer": 1,
		"Binoculars": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 52,
		"hpRegenRatio": 2,
		"sightRange": 4,
		"increaseSkillDamageRatio": 0.2
	},
	"rarity": "Epic",
	"code": "천국의계단",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heaven might be all bright and shiny, but we can't say the same for the stairway leading up to it. It might be covered in lead...",
	"displayName": "Stairway to Heaven",
	"apiMetaData": {
		"code": 121402,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}