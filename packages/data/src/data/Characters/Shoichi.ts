import Character from '../../types/Character';

export const Shoichi: Character = {
	"id": 18,
	"name": "Shoichi",
	"attributes": [
		{
			"mastery": "OneHandSword",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 1,
			"move": 3,
			"assistance": 1
		}
	],
	"description": "\"I look forward to working with everyone.\"",
	"details": {
		"Real Name": "Shoichi",
		"Age": "33",
		"Nationality": "Japan",
		"Occupation": "Stock broker",
		"Role": "Assassin"
	},
	"abilities": {
		"Passive": {
			"name": "Phony Deal",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "Shoichi earns a stack of Phony Deal each time he hits an enemy with a skill, increasing his critical strike chance by 3/6/9% for 6 seconds.\nUpon reaching 5 stacks, his normal attack damage is increased by 10/15/20%. If Shoichi picks a dagger up off the ground, he throws it at the nearest enemy within 5m, dealing damage.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "25/60/95(+AP 30%)",
					"tiers": {
						"1": "25",
						"2": "60",
						"3": "95(+AP"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Bad Faith",
			"slot": "Q",
			"type": "Attack/Buff",
			"description": "Bad Faith: increased range and Shoichi will leave a dagger on the ground.",
			"stats": {
				"Range": {
					"title": "Range",
					"value": "3.5m (100-degree cone)",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Bottom Line",
			"slot": "W",
			"type": "Defense/Damage",
			"description": "Shoichi dashes to a targeted enemy or dagger, dealing damage to all enemies in his path. If he picks up a dagger, the cooldown of Bottom Line is reset.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "10/40/70/100/130(+AP 30%)",
					"tiers": {
						"1": "10",
						"2": "40",
						"3": "70",
						"4": "100",
						"5": "130(+AP"
					}
				},
				"Range": {
					"title": "Range",
					"value": "5.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant (dash) / 0.15s (damage)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "17/15/13/11/9s",
					"tiers": {
						"1": "17",
						"2": "15",
						"3": "13",
						"4": "11",
						"5": "9s"
					}
				}
			}
		},
		"E": {
			"name": "Risky Business",
			"slot": "E",
			"type": "Attack/Debuff",
			"description": "Shoichi takes a step back and throws a dagger forward, dealing damage to the first enemy hit and reducing their movement speed for 1 second.nUpon hitting an enemy, a dagger will fall behind the enemy.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "20/60/100/140/180(+AP 30%)",
					"tiers": {
						"1": "20",
						"2": "60",
						"3": "100",
						"4": "140",
						"5": "180(+AP"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "- 10/20/30/40/50%",
					"tiers": {
						"1": "10",
						"2": "20",
						"3": "30",
						"4": "40",
						"5": "50%"
					}
				},
				"Range": {
					"title": "Range",
					"value": "5m (dagger) / 2m (step back)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.14s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "90 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "15/14/13/12/11s",
					"tiers": {
						"1": "15",
						"2": "14",
						"3": "13",
						"4": "12",
						"5": "11s"
					}
				}
			}
		},
		"R": {
			"name": "Ruthless",
			"slot": "R",
			"type": "Attack/Debuff (Ultimate)",
			"description": "Shoichi swings his deadly briefcase, dealing damage to enemies around him, slowing them for 1 second and tossing 4 daggers to the ground in a square.\nDaggers pierce enemies, dealing damage.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "50/150/250(+AP 30%) (briefcase) / 25/60/95(+AP 30%) (daggers)",
					"tiers": {
						"1": "25",
						"2": "60",
						"3": "95(+AP"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "30%",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "2.5m (slow) / 3.5m (landing dagger)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "150 SP",
					"tiers": {}
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
		"Dagger"
	],
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 370,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 30,
			"defense": 27,
			"criticalStrikeChance": 0,
			"hpRegen": 0.8,
			"spRegen": 1.6,
			"attackSpeed": 0.12,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 75,
			"maxSp": 13,
			"attackPower": 2.9,
			"defense": 2,
			"criticalChance": 0,
			"hpRegen": 0.04,
			"spRegen": 0.04,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Shoichi",
		"code": 18,
		"radius": 0.43,
		"uiHeight": 2.3,
		"resource": "Shoichi"
	}
}
