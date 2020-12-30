import Character from '../../types/Character';

export const Fiora: Character = {
	"id": 3,
	"name": "Fiora",
	"attributes": [
		{
			"mastery": "Rapier",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 2,
			"disruptor": 1,
			"move": 3,
			"assistance": 1
		},
		{
			"mastery": "TwoHandSword",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 1,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Spear",
			"controlDifficulty": 1,
			"attack": 3,
			"defense": 2,
			"disruptor": 1,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"My sword shall not falter.\"",
	"details": {
		"Real Name": "Fiora Pellerin",
		"Age": "24",
		"Nationality": "Italy",
		"Occupation": "Fencer",
		"Role": "Fighter"
	},
	"abilities": {
		"Passive": {
			"name": "Touché",
			"slot": "Passive",
			"type": "Passive",
			"description": "Fiora earns a stack of Touché every time she lands a normal attack on an enemy. When she reaches the maximum number of stacks, the Touché indicator activates for a certain time.",
			"stats": {
				"Casting time": {
					"title": "Casting time",
					"value": "Applied instantly",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Fente",
			"slot": "Q",
			"type": "Attack",
			"description": "Fiora attacks in the targeted direction, dealing damage and slowing enemies hit. If the enemies have the Touché indicator, she procs the indicator. dealing extra damage and slowing enemies.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/120/180/240/300 + 0.25 AP\nTouché proc: (72/144/216/288/360 + Critical Strike damage %) + 0.3AP",
					"tiers": {
						"1": "(72",
						"2": "144",
						"3": "216",
						"4": "288",
						"5": "360"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "15%\nTouché proc: 70%",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.33s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "40/50/60/70/80 SP",
					"tiers": {
						"1": "40",
						"2": "50",
						"3": "60",
						"4": "70",
						"5": "80"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "9/8/7/6/5 Seconds",
					"tiers": {
						"1": "9",
						"2": "8",
						"3": "7",
						"4": "6",
						"5": "5"
					}
				}
			}
		},
		"W": {
			"name": "Attaque Composée",
			"slot": "W",
			"type": "Attack",
			"description": "Fiora swings her sword two times for her next normal attack. For every Touché indicator she procs with her other skills, the cooldown for Attaque Composée is decreased by 4 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "First swing: 0.6/0.7/0.8/0.9/1.0 AP\nSecond swing: 0.2/0.3/0.4/0.5/0.6 AP",
					"tiers": {
						"1": "0.2",
						"2": "0.3",
						"3": "0.4",
						"4": "0.5",
						"5": "0.6"
					}
				},
				"Range": {
					"title": "Range",
					"value": "Attack Range",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "20/17/14/11/8 Seconds",
					"tiers": {
						"1": "20",
						"2": "17",
						"3": "14",
						"4": "11",
						"5": "8"
					}
				}
			}
		},
		"E": {
			"name": "Marche & Rompre",
			"slot": "E",
			"type": "Attack / Movement",
			"description": "Fiora dashes to the targeted direction, dealing damage to the enemies she hits. If the enemies have the Touché indicator, she procs the indicator, dealing extra damage. If she deals damage to an enemy, she can use the skill again within a certain time and dash backwards.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "90/130/170/210/250 + 0.4AP\nTouché proc: (108/156/204/252/300 + Critical Strike Damage %) + 0.48AP",
					"tiers": {
						"1": "(108",
						"2": "156",
						"3": "204",
						"4": "252",
						"5": "300"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.5s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5m/4.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": ".2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "16/14/12/10/8 Seconds",
					"tiers": {
						"1": "16",
						"2": "14",
						"3": "12",
						"4": "10",
						"5": "8"
					}
				}
			}
		},
		"R": {
			"name": "Garde",
			"slot": "R",
			"type": "Ulitmate (Buff)",
			"description": "Fiora adopts an elaborate posture to unleash her most powerful attacks. When Garde is activated, every normal attack uses stamina and deals extra damage. If the stamina reaches a certain amount, the skill is automatically deactivated. It can also be deactivated by reactivating the skill.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "30/35/40\n(+0.06/0.18/0.30AP)",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant (Toggle)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "20 Seconds",
					"tiers": {}
				}
			}
		}
	},
	"weapons": [
		"TwoHandedSword",
		"Rapier",
		"Spear"
	],
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 430,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 37,
			"defense": 25,
			"criticalStrikeChance": 0,
			"hpRegen": 0.8,
			"spRegen": 2.2,
			"attackSpeed": 0.22,
			"moveSpeed": 3.15,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 87,
			"maxSp": 13,
			"attackPower": 3.2,
			"defense": 2.2,
			"criticalChance": 0,
			"hpRegen": 0.06,
			"spRegen": 0.06,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Fiora",
		"code": 3,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Fiora"
	}
}
