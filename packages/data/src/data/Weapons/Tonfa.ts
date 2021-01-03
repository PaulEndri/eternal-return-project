import Weapon from '../../types/Weapon';

export const Tonfa: Weapon = {
	"name": "Tonfa",
	"abilityDetails": {
		"name": "Quick_Spin",
		"description": "Block all damage for a certain time, and return the damage to the attacking enemy.",
		"info": [
			{
				"title": "Skill duration",
				"value": "0.75 Seconds"
			},
			{
				"title": "Casting time",
				"value": "Instant"
			},
			{
				"title": "Cooldown",
				"value": "30/30s"
			}
		]
	},
	"usableBy": [
		"HyunWoo"
	],
	"items": [
		{
			"name": "Bamboo",
			"id": 108103
		},
		{
			"name": "Tonfa",
			"id": 111201
		},
		{
			"name": "Police Baton",
			"id": 111301
		},
		{
			"name": "Ryukyu Tonfa",
			"id": 111401
		},
		{
			"name": "Tactical Tonfa",
			"id": 111402
		},
		{
			"name": "Mai Sok",
			"id": 111403
		},
		{
			"name": "Plasma Tonfa",
			"id": 111404
		}
	],
	"apiMetaData": {
		"type": "Tonfa",
		"name": "Tonfa",
		"category": "Weapon"
	}
}
