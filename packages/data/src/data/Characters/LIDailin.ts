import Character from '../../types/Character';

export const LIDailin: Character = {
	"id": 10,
	"name": "LIDailin",
	"attributes": [
		{
			"mastery": "Glove",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Nunchaku",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		}
	],
	"details": null,
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 420,
			"initExtraPoint": 0,
			"maxExtraPoint": 100,
			"attackPower": 33,
			"defense": 20,
			"criticalStrikeChance": 0,
			"hpRegen": 1.1,
			"spRegen": 0.2,
			"attackSpeed": 0.07,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 89,
			"maxSp": 16,
			"attackPower": 1.9,
			"defense": 2.5,
			"criticalChance": 0,
			"hpRegen": 0.07,
			"spRegen": 0.01,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "LIDailin",
		"code": 10,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "LIDailin"
	}
}
