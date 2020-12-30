import Weapon from '../../types/Weapon';

export const Bow: Weapon = {
	"name": "Bow",
	"abilityDetails": {
		"name": "Rain_Of_Arrows",
		"description": "Fire a bouquet of arrows at the targeted area, causing a hail of arrows. The arrows reach the target after a certain time, dealing damage to enemies hit by the rain of arrows and reducing their attack and movement speed. Enemies located at the center of the rain of arrows take more damage.",
		"info": [
			{
				"title": "Skill damage",
				"value": "150/250 + 1.0AP / Center of target: 300/500+ 2.0 AP"
			},
			{
				"title": "Range",
				"value": "30m"
			},
			{
				"title": "Casting time",
				"value": "0.3s"
			},
			{
				"title": "Cooldown",
				"value": "30 seconds"
			}
		]
	},
	"usableBy": [
		"Nadine",
		"Hyejin"
	],
	"items": [
		{
			"name": "Bow",
			"id": 114101
		},
		{
			"name": "Wooden Bow",
			"id": 114201
		},
		{
			"name": "Longbow",
			"id": 114202
		},
		{
			"name": "Composite Bow",
			"id": 114203
		},
		{
			"name": "Strong Bow",
			"id": 114301
		},
		{
			"name": "Stallion Bow",
			"id": 114302
		},
		{
			"name": "Mighty Bow",
			"id": 114303
		},
		{
			"name": "Pellet Bow",
			"id": 114304
		},
		{
			"name": "Scorchbow",
			"id": 114402
		},
		{
			"name": "Ancient Bolt",
			"id": "Ancient Bolt"
		},
		{
			"name": "Golden-Ratio Bow",
			"id": 114403
		},
		{
			"name": "Twinbow",
			"id": 114405
		},
		{
			"name": "Elemental Bow",
			"id": 114501
		},
		{
			"name": "Failnaught",
			"id": 114502
		}
	],
	"apiMetaData": {
		"type": "Bow",
		"name": "Bow",
		"category": "Weapon"
	}
}
