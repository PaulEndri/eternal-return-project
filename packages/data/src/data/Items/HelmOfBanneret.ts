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
		"decreaseRecoveryToBasicAttack": 0.11,
		"defense": 28,
		"lifeSteal": 0.1,
		"maxSp": 200,
		"moveSpeed": 0.1
	},
	"rarity": "Epic",
	"code": "기사단장의투구",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The war has begun and the righteous knight stands at the vanguard. May the blessings of victory be upon him.",
	"buildsFrom": [
		201402,
		401105
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
