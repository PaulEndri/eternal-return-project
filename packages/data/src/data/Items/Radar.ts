import Item from '../../types/Item';

export const Radar: Item = {
	"id": 203502,
	"name": "Radar",
	"buildsInto": [],
	"requirements": {
		"Watch": 1,
		"Fountain Pen": 1,
		"Paper": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Glass Bottle": 1,
		"Stone": 1,
		"Glue": 1
	},
	"stats": {
		"attackSpeedRatio": 0.4,
		"criticalStrikeChance": 0.24,
		"defense": 15
	},
	"rarity": "Legend",
	"code": "레이더",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If you can get it working properly, it might help you find the location of anyone in the world.",
	"buildsFrom": [
		203405,
		401305
	],
	"displayName": "Radar",
	"apiMetaData": {
		"code": 203502,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
