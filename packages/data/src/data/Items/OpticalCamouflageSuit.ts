import Item from '../../types/Item';

export const OpticalCamouflageSuit: Item = {
	"id": 202405,
	"name": "OpticalCamouflageSuit",
	"buildsFrom": [
		{
			"name": "Diving Suit",
			"id": 202210
		},
		{
			"name": "Glass Panel",
			"id": 401305
		}
	],
	"buildsInto": [],
	"requirements": {
		"Rubber": 1,
		"Glass Bottle": 1,
		"Stone": 1,
		"Glue": 1
	},
	"stats": {
		"attackPower": 10,
		"criticalStrikeChance": 0.22,
		"defense": 20,
		"preventSkillDamagedRatio": 0.1
	},
	"rarity": "Epic",
	"code": "광학미채수트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "In the right environment, body parts covered by the suit become invisible.",
	"displayName": "Optical Camouflage Suit",
	"apiMetaData": {
		"code": 202405,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
