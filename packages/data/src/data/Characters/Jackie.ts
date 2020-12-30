import Character from '../../types/Character';

export const Jackie: Character = {
	"id": 1,
	"name": "Jackie",
	"attributes": [
		{
			"mastery": "OneHandSword",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 1,
			"disruptor": 1,
			"move": 3,
			"assistance": 1
		},
		{
			"mastery": "TwoHandSword",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 2,
			"disruptor": 1,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Axe",
			"controlDifficulty": 1,
			"attack": 3,
			"defense": 1,
			"disruptor": 1,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "DualSword",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 1,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"Is it time for hide and seek?\"",
	"details": {
		"Real Name": "Jacquline Quilt",
		"Age": "22",
		"Nationality": "United Kingdom",
		"Occupation": "N/A",
		"Role": "Brawler"
	},
	"abilities": {
		"Passive": {
			"name": "Bloodfest",
			"slot": "Passive",
			"type": "Passive",
			"description": "When Jackie slays an enemy, attack power is enhanced for 20/25/30 seconds. Survivor, bear increase her attack power by 8/20/40%. Any other animal increases it by 3/8/15% respectively.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "20/25/30s",
					"tiers": {
						"1": "20",
						"2": "25",
						"3": "30s"
					}
				}
			}
		},
		"Q": {
			"name": "Hack and Slash",
			"slot": "Q",
			"type": "Attack",
			"description": "Jackie swings her weapon twice, making her target bleed. Bleeding enemies will take damage over a certain time.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "First swing: 20/40/60/80/100 +(0.45 AP) Second swing: 30/50/70/90/110 + (0.65AP)",
					"tiers": {
						"1": "30",
						"2": "50",
						"3": "70",
						"4": "90",
						"5": "110"
					}
				},
				"Range": {
					"title": "Range",
					"value": "2.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.17s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50/60/70/80/90 SP",
					"tiers": {
						"1": "50",
						"2": "60",
						"3": "70",
						"4": "80",
						"5": "90"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "10/9.5/9/8.5/8 Seconds",
					"tiers": {
						"1": "10",
						"2": "9.5",
						"3": "9",
						"4": "8.5",
						"5": "8"
					}
				}
			}
		},
		"W": {
			"name": "Adrenaline Burst",
			"slot": "W",
			"type": "Buff",
			"description": "Jackie's bursting adrenaline causes her to move faster for a moment. If she attacks a bleeding target during her adrenaline burst, she deals bonus damage to the target and restores her HP.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": ".1/.12/.15/.17/.2 AP",
					"tiers": {
						"1": ".1",
						"2": ".12",
						"3": ".15",
						"4": ".17",
						"5": ".2"
					}
				},
				"Healing": {
					"title": "Healing",
					"value": "12/19/26/33/40 + (0.1 AP)",
					"tiers": {
						"1": "12",
						"2": "19",
						"3": "26",
						"4": "33",
						"5": "40"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "6/9/12/15/18%",
					"tiers": {
						"1": "6",
						"2": "9",
						"3": "12",
						"4": "15",
						"5": "18%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "90/100/110/120/130 SP",
					"tiers": {
						"1": "90",
						"2": "100",
						"3": "110",
						"4": "120",
						"5": "130"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "17/16/15/14/13 Seconds",
					"tiers": {
						"1": "17",
						"2": "16",
						"3": "15",
						"4": "14",
						"5": "13"
					}
				}
			}
		},
		"E": {
			"name": "Leaping Strike",
			"slot": "E",
			"type": "Attack",
			"description": "Jackie leaps to the targeted location, dealing damage to her enemies nearby upon landing. Hitting bleeding enemies with Leaping Strike slows their movement speed for a moment.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "10 + (0.3AP) / 70 + (0.4AP) / 130 + (0.5AP)/ 190 + (0.6AP)/ 250 + (0.7AP)",
					"tiers": {}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "40% reduction",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "6m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/85/100/115/130 SP",
					"tiers": {
						"1": "70",
						"2": "85",
						"3": "100",
						"4": "115",
						"5": "130"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "19/17/15/13/11 Seconds",
					"tiers": {
						"1": "19",
						"2": "17",
						"3": "15",
						"4": "13",
						"5": "11"
					}
				}
			}
		},
		"R": {
			"name": "Chainsaw Murderer",
			"slot": "R",
			"type": "Ultimate (Attack)",
			"description": "Jackie starts her deadly chainsaw. Her chainsaw boosts her attack speed and causes targets hit by her basic attacks to bleed. She also takes a swipe at her target and deals considerable damage before she turns off her chainsaw.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "300/500/700 + (1.0AP)",
					"tiers": {
						"1": "300",
						"2": "500",
						"3": "700"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "10/15/20s",
					"tiers": {
						"1": "10",
						"2": "15",
						"3": "20s"
					}
				},
				"Range": {
					"title": "Range",
					"value": "3m",
					"tiers": {}
				},
				"Attack speed": {
					"title": "Attack speed",
					"value": "+20/25/30%",
					"tiers": {
						"1": "+20",
						"2": "25",
						"3": "30%"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "120/150/180 SP",
					"tiers": {
						"1": "120",
						"2": "150",
						"3": "180"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "120/100/80 Seconds",
					"tiers": {
						"1": "120",
						"2": "100",
						"3": "80"
					}
				}
			}
		}
	},
	"weapons": [
		"Dagger",
		"TwoHandedSword",
		"Axe",
		"DualSwords"
	],
	"stats": {
		"initial": {
			"maxHp": 560,
			"maxSp": 430,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 37,
			"defense": 26,
			"criticalStrikeChance": 0,
			"hpRegen": 0.5,
			"spRegen": 2.1,
			"attackSpeed": 0.12,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 77,
			"maxSp": 15,
			"attackPower": 2.7,
			"defense": 2.2,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.04,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Jackie",
		"code": 1,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "Jackie"
	}
}
