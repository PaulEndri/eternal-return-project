import Character from '../../types/Character';

export const Zahir: Character = {
	"id": 5,
	"name": "Zahir",
	"attributes": [
		{
			"mastery": "HighAngleFire",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 1,
			"assistance": 1
		},
		{
			"mastery": "DirectFire",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 1,
			"assistance": 1
		}
	],
	"description": "\"If it is God's calling, I'll gladly execute it.\"",
	"details": {
		"Real Name": "Zahir Singh",
		"Age": "18",
		"Nationality": "India",
		"Occupation": "Follower",
		"Role": "Mage"
	},
	"abilities": {
		"Passive": {
			"name": "Eye of Azrael",
			"slot": "Passive",
			"type": "Passive",
			"description": "If Zahir hits an enemy with a skill, an Eye of Azrael indicator is applied to the enemy for 6 seconds and Zahir's movement speed increases. If you hit an enemy with the indicator with a skill, it deals extra damage and an Eye of Azrael effect is applied to the skill used. If you kill an enemy, you see corpses in the current area for 20 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "extra 10/35/60 + 0.3 AP",
					"tiers": {
						"1": "10",
						"2": "35",
						"3": "60"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "+20%/25%/30%",
					"tiers": {
						"1": "+20%",
						"2": "25%",
						"3": "30%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "20s/6s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "300s",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Narayanastra",
			"slot": "Q",
			"type": "Attack",
			"description": "Zahir calls upon God's strength, dealing damage in a targeted area. Eye of Azrael effect: Narayanastra deals extra damage and the enemy's defense decreases for 2 seconds in proportion to the difference in kills between you and them.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/100/160/220/280 + 0.5 AP\nExtra Damage : 75/150/225/300/375 + 0.5AP",
					"tiers": {
						"1": "75",
						"2": "150",
						"3": "225",
						"4": "300",
						"5": "375"
					}
				},
				"Range": {
					"title": "Range",
					"value": "6m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80/90/100/110/120 SP",
					"tiers": {
						"1": "80",
						"2": "90",
						"3": "100",
						"4": "110",
						"5": "120"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "8/7.5/7/6.5/6 Seconds",
					"tiers": {
						"1": "8",
						"2": "7.5",
						"3": "7",
						"4": "6.5",
						"5": "6"
					}
				}
			}
		},
		"W": {
			"name": "Gandiva",
			"slot": "W",
			"type": "Attack",
			"description": "Zahir throws a Chakram in the targeted direction, dealing damage. If Zahir hits an enemy with any skill but Gandiva, he gains 2 Chakrams that float behind him for 20 seconds. Eye of Azrael effect: Hitting an enemy reduces their movement speed by 30% for 1 second and reduces the cooldown of every skill, excluding Gandiva, by 1.5 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "25/50/75/100/125 + 0.3AP",
					"tiers": {
						"1": "25",
						"2": "50",
						"3": "75",
						"4": "100",
						"5": "125"
					}
				},
				"Range": {
					"title": "Range",
					"value": "7m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "1 Weapon (All levels)",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "0.5 Seconds (All levels)",
					"tiers": {}
				}
			}
		},
		"E": {
			"name": "Vayvayastra",
			"slot": "E",
			"type": "Attack",
			"description": "Zahir summons and launches a gust of wind, dealing damage. The first enemy hit is launched airborne for 0.5 seconds and their movement speed is reduced by 30%. Eye of Azrael effect: The enemy is launched airborne for 1 second.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/110/140/170/200 + 0.5AP",
					"tiers": {
						"1": "80",
						"2": "110",
						"3": "140",
						"4": "170",
						"5": "200"
					}
				},
				"Range": {
					"title": "Range",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.17s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/120/140/160/180SP",
					"tiers": {
						"1": "100",
						"2": "120",
						"3": "140",
						"4": "160",
						"5": "180SP"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "20/18/16/14/12 Seconds",
					"tiers": {
						"1": "20",
						"2": "18",
						"3": "16",
						"4": "14",
						"5": "12"
					}
				}
			}
		},
		"R": {
			"name": "Bhargavastra",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Zahir calls down Chakrams from the heavens to damage enemies in a wide area, dealing damage. Bhargavastra applies an Eye of Azrael indicator to enemies if they don't have one.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "(Initial) 60/150/240+ 0.5AP\n30/75/120 + 0.5AP x4",
					"tiers": {
						"1": "0.5AP\n30",
						"2": "75",
						"3": "120"
					}
				},
				"Range": {
					"title": "Range",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.4s",
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
					"value": "100/85/70 Seconds",
					"tiers": {
						"1": "100",
						"2": "85",
						"3": "70"
					}
				}
			}
		}
	},
	"weapons": [
		"Throw",
		"Shuriken"
	],
	"stats": {
		"initial": {
			"maxHp": 520,
			"maxSp": 400,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 25,
			"defense": 20,
			"criticalStrikeChance": 0,
			"hpRegen": 0.6,
			"spRegen": 2.4,
			"attackSpeed": 0.11,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 64,
			"maxSp": 26,
			"attackPower": 2.8,
			"defense": 1.8,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.1,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Zahir",
		"code": 5,
		"radius": 0.45,
		"uiHeight": 3,
		"resource": "Zahir"
	}
}
