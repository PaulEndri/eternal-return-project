import Character from '../../types/Character';

export const Aya: Character = {
	"id": 2,
	"name": "Aya",
	"attributes": [
		{
			"mastery": "Pistol",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 1,
			"disruptor": 2,
			"move": 3,
			"assistance": 1
		},
		{
			"mastery": "AssaultRifle",
			"controlDifficulty": 1,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "SniperRifle",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 1,
			"assistance": 1
		}
	],
	"description": "\"Criminals? Where?!\"",
	"details": {
		"Real Name": "Suzuki Aya",
		"Age": "26",
		"Nationality": "Japan",
		"Occupation": "Police Officer",
		"Role": "Marksman"
	},
	"abilities": {
		"Passive": {
			"name": "Aya's Justice",
			"slot": "Passive",
			"type": "Shield",
			"description": "When Aya is attacked, she is enveloped by a protective field that blocks damage. Every time she uses her basic attack on an enemy, the cooldown of Aya's Justice is decreased by 2 seconds.",
			"stats": {
				"Health": {
					"title": "Health",
					"value": "100/150/200(+0.3 AP)",
					"tiers": {
						"1": "100",
						"2": "150",
						"3": "200(+0.3"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "30s",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Double Shot",
			"slot": "Q",
			"type": "Attack",
			"description": "Aya rapidly shoots her target twice. The second shot does more damage.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "1st shot : 1.0AP ,2nd shot: 20/60/100/140/180 (+0.5 AP)",
					"tiers": {
						"1": "20",
						"2": "60",
						"3": "100",
						"4": "140",
						"5": "180"
					}
				},
				"Range": {
					"title": "Range",
					"value": "Attack Range",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
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
					"value": "7/6.5/6/5.5/5 Seconds",
					"tiers": {
						"1": "7",
						"2": "6.5",
						"3": "6",
						"4": "5.5",
						"5": "5"
					}
				}
			}
		},
		"W": {
			"name": "Steady Shot",
			"slot": "W",
			"type": "Attack",
			"description": "Aya shoots ten times in the targeted direction for a moment.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "22(+0.25 AP)\n44(+0.3AP)\n66(+0.35AP)\n88(+0.4AP)\n\n110(+0.45AP) x 10",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "3s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.17s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/110/120/130/140 SP",
					"tiers": {
						"1": "100",
						"2": "110",
						"3": "120",
						"4": "130",
						"5": "140"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "18/17/16/15/14 Seconds",
					"tiers": {
						"1": "18",
						"2": "17",
						"3": "16",
						"4": "15",
						"5": "14"
					}
				}
			}
		},
		"E": {
			"name": "Moving Turn",
			"slot": "E",
			"type": "Movement",
			"description": "Aya quickly dashes in the target direction.",
			"stats": {
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "85/90/95/100/105 SP",
					"tiers": {
						"1": "85",
						"2": "90",
						"3": "95",
						"4": "100",
						"5": "105"
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
		"R": {
			"name": "Blank Cartridge",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Aya fires a blank into the air. The sound of the gunshot startles nearby enemies, dealing damage and suppressing them for a moment.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "200/350/500(+0.7 AP)",
					"tiers": {
						"1": "200",
						"2": "350",
						"3": "500(+0.7"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.5/1.75/2 Seconds",
					"tiers": {
						"1": "1.5",
						"2": "1.75",
						"3": "2"
					}
				},
				"Range": {
					"title": "Range",
					"value": "4.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "1.17 seconds",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "150 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "100/70/40 Seconds",
					"tiers": {
						"1": "100",
						"2": "70",
						"3": "40"
					}
				}
			}
		}
	},
	"weapons": [
		"Pistol",
		"AssaultRifle",
		"SniperRifle"
	],
	"stats": {
		"initial": {
			"maxHp": 480,
			"maxSp": 440,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 28,
			"defense": 18,
			"criticalStrikeChance": 0,
			"hpRegen": 0.5,
			"spRegen": 2.3,
			"attackSpeed": 0.12,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 63,
			"maxSp": 22,
			"attackPower": 2.6,
			"defense": 1.4,
			"criticalChance": 0,
			"hpRegen": 0.04,
			"spRegen": 0.07,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Aya",
		"code": 2,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "Aya"
	}
}
