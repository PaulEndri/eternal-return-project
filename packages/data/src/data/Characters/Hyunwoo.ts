import Character from '../../types/Character';

export const Hyunwoo: Character = {
	"id": 7,
	"displayName": "Hyunwoo",
	"name": "Hyunwoo",
	"background": "\"It couldn't get any worse.\" - Hyunwoo\nHyunwoo had no ambitions or dreams. All he felt was... emptiness.  \nTo fill the void within, he turned to the thrill of constantly picking fights and brawls.  \nDespite all his attempts, the emptiness and anxiety inside him only grew. \n\nHe has a compulsion for a lottery ticket to be the first thing he buys as an adult. \nHe has always been more attached to his friends than his family.\n",
	"attributes": [
		{
			"mastery": "Glove",
			"controlDifficulty": 1,
			"attack": 2,
			"defense": 2,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Tonfa",
			"controlDifficulty": 1,
			"attack": 1,
			"defense": 3,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"This is what my fists are for!\"",
	"details": {
		"Real Name": "Jang Hyunwoo (장현우)",
		"Age": "17",
		"Nationality": "Korea",
		"Occupation": "Student",
		"Role": "Brawler"
	},
	"abilities": {
		"Passive": {
			"name": "Dogfight",
			"slot": "Passive",
			"type": "Heal (Passive)",
			"description": "Hyunwoo receives 4 stacks of Dogfight when attacking an enemy, and 1 stack of Dogfight when being attacked. After gathering 70 stacks of HP, he heals a certain amount of his maximum health.",
			"stats": {
				"Health": {
					"title": "Health",
					"value": ".07/.11/.15 Max HP",
					"tiers": {
						"1": ".07",
						"2": ".11",
						"3": ".15"
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
			"name": "Stomping Foot",
			"slot": "Q",
			"type": "Attack",
			"description": "Hyunwoo stomps his foot very hard, dealing damage and slowing enemies in the targeted area for a moment.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "100/150/200/250/300 (+0.4 AP)",
					"tiers": {
						"1": "100",
						"2": "150",
						"3": "200",
						"4": "250",
						"5": "300"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "-40%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "3m",
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
					"value": "10/9/8/7/6 Seconds",
					"tiers": {
						"1": "10",
						"2": "9",
						"3": "8",
						"4": "7",
						"5": "6"
					}
				}
			}
		},
		"W": {
			"name": "Bluff",
			"slot": "W",
			"type": "Buff",
			"description": "Hyunwoo gets bonus defense for a short time when Bluff is active. Additionally, after Bluff is activated, Hyunwoo is immune against stun, knockback, and suppression effects for a short time.",
			"stats": {
				"Defense": {
					"title": "Defense",
					"value": "+ 4/18/32/46/60 (+ 0.1 Defense)",
					"tiers": {
						"1": "4",
						"2": "18",
						"3": "32",
						"4": "46",
						"5": "60"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "3 seconds",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50 SP (All levels)",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "28/25/22/19/16 Seconds",
					"tiers": {
						"1": "28",
						"2": "25",
						"3": "22",
						"4": "19",
						"5": "16"
					}
				}
			}
		},
		"E": {
			"name": "First Attack",
			"slot": "E",
			"type": "Attack",
			"description": "Hyunwoo charges toward the targeted direction, dealing damage and knocking back enemies in his path. If an enemy collides with a wall, they are stunned for a moment.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "5/8/11/14/17% of enemy's current HP (+1.0 Defense)",
					"tiers": {
						"1": "5",
						"2": "8",
						"3": "11",
						"4": "14",
						"5": "17%"
					}
				},
				"Defense": {
					"title": "Defense",
					"value": "-7/-9/-11/-13/-15% (enemy)",
					"tiers": {
						"1": "-7",
						"2": "-9",
						"3": "-11",
						"4": "-13",
						"5": "-15%"
					}
				},
				"Stun": {
					"title": "Stun",
					"value": "1.5 seconds",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/75/80/85/90 SP",
					"tiers": {
						"1": "70",
						"2": "75",
						"3": "80",
						"4": "85",
						"5": "90"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "14/13.5/13/12.5/12 Seconds",
					"tiers": {
						"1": "14",
						"2": "13.5",
						"3": "13",
						"4": "12.5",
						"5": "12"
					}
				}
			}
		},
		"R": {
			"name": "Haymaker",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Hyunwoo gathers his strength for a while and throws a huge punch at the targeted area, dealing considerable damage. The more time Hyunwoo spends gathering his strength, the more powerful his punch will be.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "200-600300-900400-1200(+ 0.7 ~ 2.1 AP)",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "3 - 4.2m",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "150 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "70/65/60 Seconds",
					"tiers": {
						"1": "70",
						"2": "65",
						"3": "60"
					}
				}
			}
		}
	},
	"weapons": [],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 350,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 40,
			"defense": 26,
			"criticalChance": 0,
			"hpRegen": 0.8,
			"spRegen": 1.8,
			"attackSpeed": 0.12,
			"moveSpeed": 3.15,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 80,
			"maxSp": 16,
			"attackPower": 3.1,
			"defense": 2.2,
			"criticalChance": 0,
			"hpRegen": 0.04,
			"spRegen": 0.04,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Hyunwoo",
		"code": 7,
		"radius": 0.45,
		"uiHeight": 2.2,
		"resource": "Hyunwoo"
	}
}
