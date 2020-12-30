import Weapon from '../../types/Weapon';

export const SniperRifle: Weapon = {
	"name": "Sniper Rifle",
	"abilityDetails": {
		"name": "Sniper",
		"description": "Activate the sniper mode in the targeted direction.In sniper mode, your range of vision is increased and your view angle is narrowed. After choosing an enemy in your sight range to attack, they will be alerted that they are in your line of sight before you shoot and deal damage to them.You can end sniper mode by reactivating the effect.",
		"info": [
			{
				"title": "Skill duration",
				"value": "5s"
			},
			{
				"title": "Casting time",
				"value": ".03s"
			},
			{
				"title": "Cooldown",
				"value": "40/30s"
			}
		]
	},
	"usableBy": [
		"Aya"
	],
	"items": [
		{
			"name": "Long Rifle",
			"id": 118101
		},
		{
			"name": "Springfield",
			"id": 118201
		},
		{
			"name": "Harpoon Gun",
			"id": 118301
		},
		{
			"name": "Golden Rifle",
			"id": 118401
		},
		{
			"name": "Railgun",
			"id": 118402
		},
		{
			"name": "Tac-50",
			"id": 118403
		},
		{
			"name": "Intervention",
			"id": 118404
		},
		{
			"name": "NTW-20",
			"id": 118405
		},
		{
			"name": "Polaris",
			"id": 118406
		},
		{
			"name": "The Deadly Ray",
			"id": 118501
		}
	],
	"apiMetaData": {
		"type": "SniperRifle",
		"name": "SniperRifle",
		"category": "Weapon"
	}
}
