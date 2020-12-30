import Weapon from '../../types/Weapon';

export const DualSwords: Weapon = {
	"name": "Dual Swords",
	"abilityDetails": {
		"name": "Dual_Sword_Rampage",
		"description": "Charge in the targeted direction and deal damage to all enemies in your path. If you hit an enemy, you can use the skill again.",
		"info": [
			{
				"title": "Skill damage",
				"value": "(0.3 AP)/(0.5 AP) * 6"
			},
			{
				"title": "Skill duration",
				"value": "0.75s"
			},
			{
				"title": "Range",
				"value": "1.5m"
			},
			{
				"title": "Casting time",
				"value": "0.66s"
			},
			{
				"title": "Cooldown",
				"value": "40s"
			}
		]
	},
	"usableBy": [
		"Jackie",
		"Yuki"
	],
	"items": [
		{
			"name": "Twin Swords",
			"id": 103201
		},
		{
			"name": "Florentine",
			"id": 103301
		},
		{
			"name": "Divine Dual Swords",
			"id": 103401
		},
		{
			"name": "Starsteel Twin Swords",
			"id": 103402
		},
		{
			"name": "Dioscuri",
			"id": 103501
		},
		{
			"name": "Lloigor & Zahr",
			"id": 103502
		}
	],
	"apiMetaData": {
		"type": "DualSword",
		"name": "DualSwords",
		"category": "Weapon"
	}
}
