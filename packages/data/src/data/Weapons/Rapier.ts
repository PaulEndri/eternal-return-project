import Weapon from '../../types/Weapon';

export const Rapier: Weapon = {
	"name": "Rapier",
	"abilityDetails": {
		"name": "Quick_Cut",
		"description": "Charge in the targeted direction and deal damage to all enemies in your path. If you hit an enemy, you can use the skill again.",
		"info": [
			{
				"title": "Skill damage",
				"value": "2 AP/2.5 AP"
			},
			{
				"title": "Range",
				"value": "5m"
			},
			{
				"title": "Casting time",
				"value": ".13s"
			},
			{
				"title": "Cooldown",
				"value": "30s"
			}
		]
	},
	"usableBy": [
		"Fiora",
		"Chiara"
	],
	"items": [
		{
			"name": "Needle",
			"id": 120101
		},
		{
			"name": "Rapier",
			"id": 120201
		},
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Sword of Justice",
			"id": 120302
		},
		{
			"name": "Durendal mk2",
			"id": "Durendal mk2"
		},
		{
			"name": "Volticletto",
			"id": 120403
		},
		{
			"name": "Meteor Claymore",
			"id": 120404
		},
		{
			"name": "Joyeuse",
			"id": 120405
		},
		{
			"name": "Mistilteinn",
			"id": 120402
		}
	],
	"apiMetaData": {
		"type": "Rapier",
		"name": "Rapier",
		"category": "Weapon"
	}
}
