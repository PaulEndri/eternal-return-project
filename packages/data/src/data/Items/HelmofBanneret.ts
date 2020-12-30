import Item from '../../types/Item';

export const HelmofBanneret: Item = {
	"id": 201407,
	"name": "Helm of Banneret",
	"buildsFrom": [
		{
			"name": "Close Helm",
			"id": 201402
		},
		{
			"name": "Rubber",
			"id": 401105
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hat": 1,
		"Steel Chain": 1,
		"Hairband": 1,
		"Feather": 1,
		"Rubber": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 20,
		"maxSp": 200,
		"moveSpeed": 0.1,
		"preventSkillDamagedRatio": 0.11
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The war has begun and the righteous knight stands at the vanguard. May the blessings of victory be upon him.",
	"apiMetaData": {
		"code": 201407,
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
