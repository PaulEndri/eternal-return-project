import Character from '../../types/Character';

export const Hart: Character = {
	"id": 8,
	"name": "Hart",
	"attributes": [
		{
			"mastery": "Guitar",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 2
		}
	],
	"description": "\"Love and Peace!\"",
	"details": {
		"Real Name": "Hart Floyd",
		"Age": "23",
		"Nationality": "USA",
		"Occupation": "Musician",
		"Role": "Caster"
	},
	"abilities": {
		"Passive": {
			"name": "Feedback",
			"slot": "Passive",
			"type": "Buff",
			"description": "If Hart deals damage to an enemy with a normal attack, she recovers SP.  \nEvolved Feedback: Hart fires an additional sound wave per evolution point. Each dealing 0.15AP damage",
			"stats": {
				"Regen": {
					"title": "Regen",
					"value": "1/1.5/2% SP / Normal Attack",
					"tiers": {
						"1": "1",
						"2": "1.5",
						"3": "2%"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Delay",
			"slot": "Q",
			"type": "Attack",
			"description": "Hart strums her guitar, charging her sound waves. When she strums the guitar again, the charged sound waves are released. She can charge for up to 4 seconds, and can maintain the sound wave for 4 seconds. She deals more damage depending on how long she charges.  \nEvolved Delay: Enemies hit are slowed by -15%/-35%, based on evolution points spent on this skill.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80-160100-200120-240140-280160-320(+ 0.3 - 0.6 AP)",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "8m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "4 Seconds",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Overdrive",
			"slot": "W",
			"type": "Buff",
			"description": "Hart plays a lick on her guitar, increasing her Attack Power for a certain time.  \nEvolved Overdrive: Enemies will have their defense reduced by -15%/-30% to her next sound wave, based on evolution points spent on this skill.",
			"stats": {
				"AP Increase": {
					"title": "AP Increase",
					"value": "12/19/26/33/40%",
					"tiers": {
						"1": "12",
						"2": "19",
						"3": "26",
						"4": "33",
						"5": "40%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5 seconds",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/105/110/115/120 SP",
					"tiers": {
						"1": "100",
						"2": "105",
						"3": "110",
						"4": "115",
						"5": "120"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "22/19/16/13/10 Seconds",
					"tiers": {
						"1": "22",
						"2": "19",
						"3": "16",
						"4": "13",
						"5": "10"
					}
				}
			}
		},
		"E": {
			"name": "Flanger",
			"slot": "E",
			"type": "Dash",
			"description": "Hart quickly dashes in the targeted direction. She can activate this skill an additional two times. She dashes and strums her guitar, discharging sound waves in a 4m area around her and dealing damage to enemies hit. Her third dash is a little bit longer.  \nEvolved Flanger: Activating the skill grants 15%/25% skill damage amplificaiton for a few seconds, stacking up to 3 times.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "20/30/40/50/60 ( + 0.4 AP)",
					"tiers": {
						"1": "20",
						"2": "30",
						"3": "40",
						"4": "50",
						"5": "60"
					}
				},
				"Range": {
					"title": "Range",
					"value": "2m/3m(third dash)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "35/40/45/50/55 SP",
					"tiers": {
						"1": "35",
						"2": "40",
						"3": "45",
						"4": "50",
						"5": "55"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "17/15/13/11/9 Seconds",
					"tiers": {
						"1": "17",
						"2": "15",
						"3": "13",
						"4": "11",
						"5": "9"
					}
				}
			}
		},
		"R": {
			"name": "Peacemaker",
			"slot": "R",
			"type": "Aura (Ultimate)",
			"description": "Hart puts on a show, causing all her enemies in a range around her to dance. For every second of her performance, she recovers HP. Enemies attending the concert dance and have their movement speed reduced.  \nEvolved Peacemaker: Enemies attending the concert dance have their movement speed and SP reduced. SP reduction amount increases per number of Evolution Points.",
			"stats": {
				"Health": {
					"title": "Health",
					"value": "(30 + .02 Max HP)/(40 + .03 Max HP)/(50 + .04 Max HP) per second",
					"tiers": {}
				},
				"Slow": {
					"title": "Slow",
					"value": "Enemy movespeed reduced to 2.5 m/s",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "7/8/9m",
					"tiers": {
						"1": "7",
						"2": "8",
						"3": "9m"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "200/150/100 SP",
					"tiers": {
						"1": "200",
						"2": "150",
						"3": "100"
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
		"Guitar"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 420,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 22,
			"defense": 20,
			"criticalStrikeChance": 0,
			"hpRegen": 0.8,
			"spRegen": 1.7,
			"attackSpeed": 0.12,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 66,
			"maxSp": 16,
			"attackPower": 3,
			"defense": 1.9,
			"criticalChance": 0,
			"hpRegen": 0.04,
			"spRegen": 0.04,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Hart",
		"code": 8,
		"radius": 0.4,
		"uiHeight": 2.2,
		"resource": "Hart"
	}
}
