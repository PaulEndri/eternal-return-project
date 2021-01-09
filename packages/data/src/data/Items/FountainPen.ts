import Item from '../../types/Item';

export const FountainPen: Item = {
	"id": 101102,
	"name": "FountainPen",
	"buildsInto": [
		{
			"name": "Signed Ball",
			"id": 112205
		},
		{
			"name": "Vintage Cards",
			"id": 113203
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 5
	},
	"rarity": "Common",
	"code": "만년필",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 7,
		"School": 7,
		"Uptown": 6
	},
	"foundQuantity": 1,
	"description": "A kind of pen for writing. The ink inside the pen holder flows out through the nib, allowing it to be used for a long time - though your hand will be covered in ink if not used correctly. Or if you are a lefty.",
	"buildsFrom": [],
	"displayName": "Fountain Pen",
	"apiMetaData": {
		"code": 101102,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
