import Weapon from '../../types/Weapon';

export const Shuriken: Weapon = {
	"name": "Shuriken",
	"abilityDetails": {
		"name": "Caltrops",
		"description": "Throw caltrops in an area, dealing damage to enemies that step on them and reducing their movement speed. Stepping on additional caltrops deals 30% of the initial damage.",
		"info": [
			{
				"title": "Skill damage",
				"value": "110/180 + 0.3AP"
			},
			{
				"title": "Move. speed",
				"value": "-30/40%"
			},
			{
				"title": "Skill duration",
				"value": "6s"
			},
			{
				"title": "Casting time",
				"value": "0.3s"
			},
			{
				"title": "Cooldown",
				"value": "35s"
			}
		]
	},
	"usableBy": [
		"Zahir",
		"Sissela",
		"Hyejin",
		"Emma"
	],
	"items": [
		{
			"name": "Razor",
			"id": 113101
		},
		{
			"name": "Playing Cards",
			"id": 113102
		},
		{
			"name": "Chalk",
			"id": 113104
		},
		{
			"name": "Dart",
			"id": 113201
		},
		{
			"name": "Vintage Cards",
			"id": 113203
		},
		{
			"name": "Onyx Dagger",
			"id": 113206
		},
		{
			"name": "Throwing Stars",
			"id": 113205
		},
		{
			"name": "Charm",
			"id": 113202
		},
		{
			"name": "Willow Leaf Spike",
			"id": 113207
		},
		{
			"name": "Chakram",
			"id": 113301
		},
		{
			"name": "Apricot Flower Tag",
			"id": 113302
		},
		{
			"name": "Venom Dart",
			"id": 113402
		},
		{
			"name": "Dharma Chakram",
			"id": 113403
		},
		{
			"name": "Plumbata",
			"id": 113404
		},
		{
			"name": "Cards of Tyranny",
			"id": 113401
		},
		{
			"name": "Mystic Jade Charm",
			"id": 113405
		},
		{
			"name": "Fuhma Shuriken",
			"id": 113406
		},
		{
			"name": "Wind and Fire Wheels",
			"id": 113411
		},
		{
			"name": "Azure Dagger",
			"id": 113409
		},
		{
			"name": "Flechette",
			"id": "Flechette"
		},
		{
			"name": "Frost Venom Dart",
			"id": 113408
		},
		{
			"name": "Death Rune",
			"id": 113412
		},
		{
			"name": "Sudarsana",
			"id": 113501
		},
		{
			"name": "Petal Torrent",
			"id": 113502
		}
	],
	"apiMetaData": {
		"type": "DirectFire",
		"name": "Shuriken",
		"category": "Weapon"
	}
}
