import Item from '../../types/Item';

export const HelmOfBanneret: Item = {
	"id": 201407,
	"name": "HelmOfBanneret",
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
	"code": "기사단장의투구",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The war has begun and the righteous knight stands at the vanguard. May the blessings of victory be upon him.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 201402
		},
		{
			"name": "Scissors",
			"id": 401105
		}
	],
	"displayName": "Helm of Banneret",
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
