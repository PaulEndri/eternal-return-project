import Item from '../../types/Item';

export const Fan: Item = {
	"id": 205105,
	"name": "Fan",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Umbrella",
			"id": 108401
		},
		{
			"name": "Wind Whip",
			"id": 109301
		},
		{
			"name": "Gilded Quill Fan",
			"id": 205210
		},
		{
			"name": "Uchiwa",
			"id": 205302
		}
	],
	"requirements": {},
	"stats": {
		"increaseSkillDamage": 11
	},
	"rarity": "Common",
	"code": "부채",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 7,
		"Forest": 8,
		"Chapel": 6
	},
	"foundQuantity": 1,
	"description": "Sure, it's a bit old, but the wind from this fan isn't.",
	"displayName": "Fan",
	"apiMetaData": {
		"code": 205105,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
