import Weapon from '../../types/Weapon';

export const Bat: Weapon = {
	"name": "Bat",
	"abilityDetails": {
		"name": "Full_Swing",
		"description": "Swing your bat in front of you, dealing X damage to all enemies in the targeted area, and knocking them back. Enemies hit into wall are stunned for 0.5 second.",
		"info": [
			{
				"title": "Skill damage",
				"value": "100%/200% AP"
			},
			{
				"title": "Stun",
				"value": "0.5s"
			},
			{
				"title": "Knockback",
				"value": "?"
			},
			{
				"title": "Area of effect",
				"value": "[Semi-circle] 2.5m"
			},
			{
				"title": "Casting time",
				"value": "0.67s"
			},
			{
				"title": "Cost",
				"value": "0 SP"
			},
			{
				"title": "Cooldown",
				"value": "30s"
			}
		]
	},
	"usableBy": [
		"Magnus"
	],
	"items": [
		{
			"name": "Branch",
			"id": 108101
		},
		{
			"name": "Short Rod",
			"id": 108102
		},
		{
			"name": "Long Rod",
			"id": 108202
		},
		{
			"name": "Goblin Bat",
			"id": 108301
		},
		{
			"name": "Torch",
			"id": 108402
		},
		{
			"name": "Umbrella",
			"id": 108401
		},
		{
			"name": "Statue of Soteria",
			"id": 108403
		},
		{
			"name": "Spy Umbrella",
			"id": 108501
		},
		{
			"name": "Mallet",
			"id": 108404
		},
		{
			"name": "Monkey King Bar",
			"id": 108502
		}
	],
	"apiMetaData": {
		"type": "Bat",
		"name": "Bat",
		"category": "Weapon"
	}
}
