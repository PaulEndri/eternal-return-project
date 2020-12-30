import Character from '../../types/Character';

export const Emma: Character = {
	"id": 19,
	"name": "Emma",
	"attributes": [
		{
			"mastery": "DirectFire",
			"controlDifficulty": 3,
			"attack": 1,
			"defense": 2,
			"disruptor": 3,
			"move": 2,
			"assistance": 2
		}
	],
	"details": null,
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 430,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 40,
			"defense": 28,
			"criticalStrikeChance": 0,
			"hpRegen": 0.4,
			"spRegen": 1.6,
			"attackSpeed": 0.1,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 18,
			"attackPower": 2.5,
			"defense": 1.6,
			"criticalChance": 0,
			"hpRegen": 0.02,
			"spRegen": 0.02,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Emma",
		"code": 19,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Emma"
	}
}
