import Item from '../../types/Item';

export const Steel: Item = {
	"id": 401201,
	"name": "Steel",
	"buildsInto": [
		102403,
		105401,
		107302,
		110301,
		113404,
		115303,
		116406,
		202305,
		203401,
		204401
	],
	"requirements": {
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "강철",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Just some strong steel. They could name a football team after this.",
	"buildsFrom": [
		401106,
		401118
	],
	"displayName": "Steel",
	"apiMetaData": {
		"code": 401201,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
