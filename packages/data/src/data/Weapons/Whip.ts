import Weapon from '../../types/Weapon';

export const Whip: Weapon = {
	"name": "Whip",
	"abilityDetails": {
		"name": "Grappling_Whip",
		"description": "Snap your whip in front of you, dealing damage to enemies hit and pulling them towards you.",
		"info": [
			{
				"title": "Casting time",
				"value": "0.26s"
			}
		]
	},
	"usableBy": [
		"Lenox"
	],
	"items": [
		{
			"name": "Whip",
			"id": 109101
		},
		{
			"name": "Rope Cuffs",
			"id": 109201
		},
		{
			"name": "Bullwhip",
			"id": 109202
		},
		{
			"name": "Wind Whip",
			"id": 109301
		},
		{
			"name": "Thunder Whip",
			"id": 109401
		},
		{
			"name": "Lightning Whip",
			"id": 109402
		},
		{
			"name": "Gleipnir",
			"id": 109403
		},
		{
			"name": "Plasma Whip",
			"id": 109404
		},
		{
			"name": "Whip of Nine Bloody Tails",
			"id": 109501
		}
	],
	"apiMetaData": {
		"type": "Whip",
		"name": "Whip",
		"category": "Weapon"
	}
}
