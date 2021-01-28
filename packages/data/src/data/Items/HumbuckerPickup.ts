import Item from '../../types/Item';

export const HumbuckerPickup: Item = {
	"id": 121302,
	"name": "HumbuckerPickup",
	"buildsInto": [
		121402
	],
	"requirements": {
		"Starter Guitar": 1,
		"Pickaxe": 1,
		"Gemstone": 1,
		"Laser Pointer": 1,
		"Binoculars": 1
	},
	"stats": {
		"attackPower": 25,
		"sightRange": 3,
		"preventSkillDamagedRatio": 0.15
	},
	"rarity": "Rare",
	"code": "험버커픽업",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A guitar with dual coil pickups. It has a darker output.",
	"buildsFrom": [
		121201,
		205206
	],
	"displayName": "Humbucker Pickup",
	"apiMetaData": {
		"code": 121302,
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
