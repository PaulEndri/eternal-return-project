import Weapon from '../../types/Weapon';

export const Glove: Weapon = {
	"name": "Glove",
	"abilityDetails": {
		"name": "Uppercut",
		"description": "The range of your next normal attack increases and you deal additional damage for a certain time.",
		"info": [
			{
				"title": "Skill damage",
				"value": "1x Attack Damage + 1.0AP / 2x attack damage + 1.0AP"
			},
			{
				"title": "Range",
				"value": "attack range + 0.7m"
			},
			{
				"title": "Casting time",
				"value": "Instant"
			},
			{
				"title": "Cooldown",
				"value": "10s/10s"
			}
		]
	},
	"usableBy": [
		"HyunWoo",
		"Li Dailin"
	],
	"items": [
		{
			"name": "Brass Knuckles",
			"id": 110101
		},
		{
			"name": "Cotton Glove",
			"id": "Cotton Glove"
		},
		{
			"name": "Leather Glove",
			"id": "Leather Glove"
		},
		{
			"name": "Iron Knuckles",
			"id": 110202
		},
		{
			"name": "Gauntlet",
			"id": 110301
		},
		{
			"name": "Wing Knuckles",
			"id": 110302
		},
		{
			"name": "Bone Gauntlet",
			"id": 110401
		},
		{
			"name": "Shatter Shell Gauntlet",
			"id": 110402
		},
		{
			"name": "Glass Knuckles",
			"id": 110403
		},
		{
			"name": "Phoenix Gloves",
			"id": 110404
		},
		{
			"name": "One Inch Punch",
			"id": 110405
		},
		{
			"name": "Divine Fist",
			"id": 110406
		},
		{
			"name": "Bloodwing Knuckles",
			"id": 110407
		},
		{
			"name": "Frost Petal Hand",
			"id": 110408
		},
		{
			"name": "Buddha's Palm",
			"id": "Buddha's Palm"
		},
		{
			"name": "Brasil Gauntlet",
			"id": 110410
		},
		{
			"name": "White Claw Punch",
			"id": 110411
		},
		{
			"name": "Imperial Silk Glove",
			"id": "Imperial Silk Glove"
		}
	],
	"apiMetaData": {
		"type": "Glove",
		"name": "Glove",
		"category": "Weapon"
	}
}
