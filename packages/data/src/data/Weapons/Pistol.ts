import Weapon from '../../types/Weapon';

export const Pistol: Weapon = {
	"name": "Pistol",
	"abilityDetails": {
		"name": "Moving_Reload",
		"description": "Increase movement speed and quickly reload your gun. The cooldowns of all your other skills are reduced, except for your passive and weapon skills.",
		"info": [
			{
				"title": "Move. speed",
				"value": "35/70 %"
			},
			{
				"title": "Skill duration",
				"value": "3s"
			},
			{
				"title": "Casting time",
				"value": "Instant"
			},
			{
				"title": "Cooldown",
				"value": "50s/25s"
			}
		]
	},
	"usableBy": [
		"Aya",
		"Isol",
		"Silvia"
	],
	"items": [
		{
			"name": "Walther PPK",
			"id": 116101
		},
		{
			"name": "Magnum-Python",
			"id": 116201
		},
		{
			"name": "Beretta M92F",
			"id": 116202
		},
		{
			"name": "FN57",
			"id": 116301
		},
		{
			"name": "Double Revolver SP",
			"id": 116401
		},
		{
			"name": "Magnum-Anaconda",
			"id": 116402
		},
		{
			"name": "Devil's Marksman",
			"id": "Devil's Marksman"
		},
		{
			"name": "Elegance",
			"id": 116404
		},
		{
			"name": "Electron Blaster",
			"id": 116405
		},
		{
			"name": "Magnum-Boa",
			"id": 116406
		},
		{
			"name": "Kelte",
			"id": 116501
		}
	],
	"apiMetaData": {
		"type": "Pistol",
		"name": "Pistol",
		"category": "Weapon"
	}
}
