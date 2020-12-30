import Weapon from '../../types/Weapon';

export const Throw: Weapon = {
	"name": "Throw",
	"abilityDetails": {
		"name": "Smokescreen",
		"description": "A smokescreen appears at the targeted location. Enemies inside the smokescreen have their vision reduced and their movement speed decreased.",
		"info": [
			{
				"title": "Move. speed",
				"value": "-15/30%"
			},
			{
				"title": "Skill duration",
				"value": "5/7s"
			},
			{
				"title": "Range",
				"value": "7m"
			},
			{
				"title": "Casting time",
				"value": "0.15s"
			},
			{
				"title": "Cooldown",
				"value": "20s/15s"
			}
		]
	},
	"usableBy": [
		"Zahir",
		"Adriana",
		"Sissela"
	],
	"items": [
		{
			"name": "Iron Ball",
			"id": 112103
		},
		{
			"name": "Baseball",
			"id": 112105
		},
		{
			"name": "Grenade",
			"id": 112202
		},
		{
			"name": "Molotov Cocktail",
			"id": 112203
		},
		{
			"name": "Signed Ball",
			"id": 112205
		},
		{
			"name": "Sling",
			"id": 112204
		},
		{
			"name": "Flour Bomb",
			"id": 112301
		},
		{
			"name": "Ball Lightning",
			"id": 112303
		},
		{
			"name": "Flubber",
			"id": 112304
		},
		{
			"name": "Spiky Bouncy Ball",
			"id": 112403
		},
		{
			"name": "Incendiary Bomb",
			"id": 112302
		},
		{
			"name": "Grenade of Antioch",
			"id": 112305
		},
		{
			"name": "David's Sling",
			"id": "David's Sling"
		},
		{
			"name": "Smoke Bomb",
			"id": 112402
		},
		{
			"name": "High Explosive Grenade",
			"id": "High Explosive Grenade"
		},
		{
			"name": "Ruthenium Marble",
			"id": 112501
		}
	],
	"apiMetaData": {
		"type": "HighAngleFire",
		"name": "Throw",
		"category": "Weapon"
	}
}
