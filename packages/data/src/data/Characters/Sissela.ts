import Character from '../../types/Character';

export const Sissela: Character = {
	"id": 15,
	"name": "Sissela",
	"attributes": [
		{
			"mastery": "HighAngleFire",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 1,
			"assistance": 3
		},
		{
			"mastery": "DirectFire",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 1,
			"assistance": 3
		}
	],
	"description": "\"There's no escape now.\"",
	"details": {
		"Real Name": "Sissela Kyle",
		"Age": "16",
		"Nationality": "Sweden",
		"Occupation": "Incurable Patient",
		"Role": "Mage"
	},
	"abilities": {
		"Passive": {
			"name": "Agony",
			"slot": "Passive",
			"type": "Passive Buff",
			"description": "As Sissela's HP decreases, she gains HP regeneration and skill amplification.\nHP regeneration per second: 2/4/6 ~ 26/36/46 (is not affected by the increase rate of HP regen)\nSkill Amplification: 2/5/8 ~ 10/25/40 \nWhen Wilson returns to Sissela, her next normal attack deals damage and reduces the movement speed of enemies by 10/20/30% for 2 seconds. \nWilson may be 10.25m away from Sissela before automatically returning",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "18 +1.2 AP + (Sissela's current level * 10)",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Go Get 'Em Wilson!",
			"slot": "Q",
			"type": "Attack",
			"description": "Wilson flies in the targeted direction, dealing damage to enemies in his path and damage upon arrival.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/60/80/100/120 (+0.3 AP)+60/90/120/150/180(+0.5 AP) upon arrival",
					"tiers": {
						"1": "AP)+60",
						"2": "90",
						"3": "120",
						"4": "150",
						"5": "180(+0.5"
					}
				},
				"Range": {
					"title": "Range",
					"value": "8m (damage range: 2m)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50/60/70/80/90 HP",
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
					"value": "6.5/5.75/5/4.25/3.5 Seconds",
					"tiers": {
						"1": "6.5",
						"2": "5.75",
						"3": "5",
						"4": "4.25",
						"5": "3.5"
					}
				}
			}
		},
		"W": {
			"name": "Girl in a Bubble",
			"slot": "W",
			"type": "Attack/Movement",
			"description": "Wilson embraces Sissela for 1.5 seconds, blocking all damage and making her invulnerable. Wilson's shield explodes after the max time, or if the skill is activated again, dealing damage to enemies in an area around her and pushing them back 2m.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "30/90/150/210/270(+0.7 AP)",
					"tiers": {
						"1": "30",
						"2": "90",
						"3": "150",
						"4": "210",
						"5": "270(+0.7"
					}
				},
				"Range": {
					"title": "Range",
					"value": "2m (damage range)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "60/80/100/120/140 HP",
					"tiers": {
						"1": "60",
						"2": "80",
						"3": "100",
						"4": "120",
						"5": "140"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "21/19/17/15/13 Seconds",
					"tiers": {
						"1": "21",
						"2": "19",
						"3": "17",
						"4": "15",
						"5": "13"
					}
				}
			}
		},
		"E": {
			"name": "Play With Us!",
			"slot": "E",
			"type": "Attack Move",
			"description": "Wilson stretches his body in the targeted direction, pulling the first target hit.\nAlly pull: the target receives a shield, absorbing damage for 3 seconds and the cooldown of Play With Us! is reduced by 1.5 seconds.\nEnemy pull: Wilson deals damage and stuns the target for 1 second.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/90/140/190/240(+0.6 AP)  Damage absorbed by shield: 60/110/160/210/260 (+0.5 AP)",
					"tiers": {
						"1": "60",
						"2": "110",
						"3": "160",
						"4": "210",
						"5": "260"
					}
				},
				"Range": {
					"title": "Range",
					"value": "4.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "60/70/80/90/100 SP",
					"tiers": {
						"1": "60",
						"2": "70",
						"3": "80",
						"4": "90",
						"5": "100"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "14/13/12/11/10 Seconds",
					"tiers": {
						"1": "14",
						"2": "13",
						"3": "12",
						"4": "11",
						"5": "10"
					}
				}
			}
		},
		"R": {
			"name": "Free at Last",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Sissela channels for 1 second. After 3 seconds, Sissela deals damage to all enemy players on the map, as well as herself.\nSissela's HP will not drop below 1 when taking damage from this skill. \nDealing damage with this skill increases the damage from Agony by 100% for 5 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "150/275/400(+1.0 AP) (100% in 10m radius, 100% same area, 50% other areas) + 2 additional damage for every 1% of her missing HP",
					"tiers": {
						"1": "150",
						"2": "275",
						"3": "400(+1.0"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "1s channeling",
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
					"value": "150/135/120 Seconds",
					"tiers": {
						"1": "150",
						"2": "135",
						"3": "120"
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
			"maxHp": 480,
			"maxSp": 400,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 23,
			"defense": 19,
			"criticalStrikeChance": 0,
			"hpRegen": 0.4,
			"spRegen": 1.1,
			"attackSpeed": 0.12,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 16,
			"attackPower": 2.4,
			"defense": 1.7,
			"criticalChance": 0,
			"hpRegen": 0.02,
			"spRegen": 0.02,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Sissela",
		"code": 15,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "Sissela"
	}
}
