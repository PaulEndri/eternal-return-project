import Item from '../../types/Item';

export const Slippers: Item = {
	"id": 204101,
	"name": "Slippers",
	"buildsInto": [
		204203,
		204301
	],
	"requirements": {},
	"stats": {
		"moveSpeed": 0.04,
		"spRegen": 0.5
	},
	"rarity": "Common",
	"code": "슬리퍼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 8,
		"Hospital": 6,
		"School": 7
	},
	"foundQuantity": 1,
	"description": "A slipper soaked in sweat. The stench alone makes it a serious contender as a lethal weapon.",
	"buildsFrom": [],
	"displayName": "Slippers",
	"apiMetaData": {
		"code": 204101,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
