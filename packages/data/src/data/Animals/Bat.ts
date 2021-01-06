import Animal from '../../types/Animal';

export const Bat: Animal = {
	"id": 2,
	"name": "Bat (Animal)",
	"locations": {
		"Archery Range": 3,
		"School": 4,
		"Beach": 3,
		"Forest": 2,
		"Cemetery": 3,
		"Chapel": 3,
		"Pond": 3,
		"Temple": 3
	},
	"items": [],
	"stats": {
		"createTime": 60,
		"regenTime": 135,
		"maxHp": 360,
		"attackPower": 38,
		"defense": 24,
		"attackSpeed": 0.6,
		"moveSpeed": 3.5,
		"sightRange": 5,
		"attackRange": 0.85,
		"firstAttackRange": 4,
		"aggressive": "None",
		"radius": 0.4,
		"uiHeight": 1.8,
		"gainExp": 140,
		"randomDropCount": 1
	},
	"displayName": "Bat (Animal)",
	"apiName": "Bat",
	"apiMetaData": {
		"resource": "Bat_01",
		"dropGroup": 102,
		"grade": "Uncommon",
		"name": "Bat",
		"code": 2
	}
}
