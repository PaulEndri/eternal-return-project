import Item from '../../types/Item';

export const OpticalCamouflageSuit: Item = {
	"id": "Optical Camouflage Suit",
	"name": "Optical Camouflage Suit",
	"href": "/Optical_Camouflage_Suit",
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
		"Full Body Swimsuit": 1,
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "In the right environment, body parts covered by the suit become invisible.",
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
