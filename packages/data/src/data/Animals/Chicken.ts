import Animal from '../../types/Animal';

export const Chicken: Animal = {
	"id": 1,
	"name": "Chicken",
	"locations": {
		"School": 4,
		"Avenue": 5,
		"Alley": 6,
		"Dock": 4,
		"Factory": 3,
		"Uptown": 4,
		"Hotel": 3,
		"Chapel": 3
	},
	"items": [
		{
			"name": "Meat",
			"percentage": 0,
			"rarity": "Often"
		},
		{
			"name": "Leather",
			"percentage": 0,
			"rarity": "Often"
		}
	],
	"stats": {
		"createTime": 0,
		"regenTime": 90,
		"maxHp": 200,
		"attackPower": 22,
		"defense": 14,
		"attackSpeed": 0.8,
		"moveSpeed": 3.1,
		"sightRange": 5,
		"attackRange": 0.85,
		"firstAttackRange": 4,
		"aggressive": "None",
		"radius": 0.4,
		"uiHeight": 1.5,
		"gainExp": 80,
		"randomDropCount": 1
	},
	"displayName": "Chicken",
	"apiName": "Chicken",
	"apiMetaData": {
		"resource": "Chicken_01",
		"dropGroup": 101,
		"grade": "Common",
		"name": "Chicken",
		"code": 1
	}
}
