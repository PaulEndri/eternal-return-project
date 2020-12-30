import Item from '../../types/Item';

export const FullBodySwimsuit: Item = {
	"id": "Full Body Swimsuit",
	"name": "Full Body Swimsuit",
	"href": "/Full_Body_Swimsuit",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Bikini",
			"id": 202209
		},
		{
			"name": "Diving Suit",
			"id": 202210
		}
	],
	"requirements": {},
	"stats": {
		"defense": 1,
		"preventSkillDamagedRatio": 0.05
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Beach": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
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
