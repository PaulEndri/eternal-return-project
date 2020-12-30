import Character from '../../types/Character';

export const Magnus: Character = {
	"id": 4,
	"name": "Magnus",
	"attributes": [
		{
			"mastery": "Hammer",
			"controlDifficulty": 2,
			"attack": 1,
			"defense": 3,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Bat",
			"controlDifficulty": 2,
			"attack": 1,
			"defense": 3,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"Can anyone stop this body's speed?!\"",
	"details": {
		"Real Name": "Magnus Scott",
		"Age": "34",
		"Nationality": "USA",
		"Occupation": "Gang Leader",
		"Role": "Brawler"
	},
	"abilities": {
		"Passive": {
			"name": "Tough Body",
			"slot": "Passive",
			"type": "Passive",
			"description": "Magnus's defense power increases when his HP decreases. His defense is increased for each 1% of HP lost.",
			"stats": {
				"Defense": {
					"title": "Defense",
					"value": "0.2%/0.35%/0.5%",
					"tiers": {
						"1": "0.2%",
						"2": "0.35%",
						"3": "0.5%"
					}
				}
			}
		},
		"Q": {
			"name": "Broken Bullet",
			"slot": "Q",
			"type": "Attack / Debuff",
			"description": "Magnus violently slams the ground and launches a rock towards the targeted area, dealing damage. \nEnemies hit by the rock have their movement speed reduced. The movement speed recovers slowly over time.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/100/160/220/280+ 40% AP",
					"tiers": {
						"1": "40",
						"2": "100",
						"3": "160",
						"4": "220",
						"5": "280+"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "22/29/36/43/50%",
					"tiers": {
						"1": "22",
						"2": "29",
						"3": "36",
						"4": "43",
						"5": "50%"
					}
				},
				"Debuff duration": {
					"title": "Debuff duration",
					"value": "4s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "11m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.8s",
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
					"value": "18/16/14/12/10s",
					"tiers": {
						"1": "18",
						"2": "16",
						"3": "14",
						"4": "12",
						"5": "10s"
					}
				}
			}
		},
		"W": {
			"name": "17 vs 1",
			"slot": "W",
			"type": "Attack",
			"description": "Magnus swings his weapon in an area around him for 4 seconds, dealing damage. \nHis movement speed is decreased by 20% while 17 vs 1 is active. \n * He deals 1.5 times more damage to slowed or immobilized units.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "10/20/20/30/30 + .3 Defense +.3 AP",
					"tiers": {
						"1": "10",
						"2": "20",
						"3": "20",
						"4": "30",
						"5": "30"
					}
				},
				"Num. of hits": {
					"title": "Num. of hits",
					"value": "6/6/7/7/8",
					"tiers": {
						"1": "6",
						"2": "6",
						"3": "7",
						"4": "7",
						"5": "8"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "-20%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "4s",
					"tiers": {}
				},
				"Area of effect": {
					"title": "Area of effect",
					"value": "2.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
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
					"value": "10s",
					"tiers": {}
				}
			}
		},
		"E": {
			"name": "Heavy Strike",
			"slot": "E",
			"type": "Attack / Debuff",
			"description": "Magnus smashes the targeted enemy, dealing damage, knocking them 3.25m to the left of where Magnus is currently facing. \nIf the target collides with a wall, they are stunned for 1.5 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/115/170/225/280 + .4 AP",
					"tiers": {
						"1": "60",
						"2": "115",
						"3": "170",
						"4": "225",
						"5": "280"
					}
				},
				"Stun": {
					"title": "Stun",
					"value": "1.5s",
					"tiers": {}
				},
				"Knockback": {
					"title": "Knockback",
					"value": "3.25m",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "3m",
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
					"value": "12/11/10/9/8s",
					"tiers": {
						"1": "12",
						"2": "11",
						"3": "10",
						"4": "9",
						"5": "8s"
					}
				}
			}
		},
		"R": {
			"name": "Bike From Hell",
			"slot": "R",
			"type": "Attack / Movement (Ultimate)",
			"description": "Magnus summons a bike, riding it for a few seconds. By reactivating the skill, Magnus will jump off of the bike and launch it forward to explode. \nIf the bike hits an enemy, a wild animal, or a wall, it explodes and deals damage in an area.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "200/400/600 + 2 AP",
					"tiers": {
						"1": "200",
						"2": "400",
						"3": "600"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "9/10/11s",
					"tiers": {
						"1": "9",
						"2": "10",
						"3": "11s"
					}
				},
				"Area of effect": {
					"title": "Area of effect",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/150/200 SP",
					"tiers": {
						"1": "100",
						"2": "150",
						"3": "200"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "90/80/70s",
					"tiers": {
						"1": "90",
						"2": "80",
						"3": "70s"
					}
				}
			}
		}
	},
	"weapons": [
		"Hammer",
		"Bat"
	],
	"stats": {
		"initial": {
			"maxHp": 600,
			"maxSp": 410,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 32,
			"defense": 25,
			"criticalStrikeChance": 0,
			"hpRegen": 1,
			"spRegen": 1.9,
			"attackSpeed": 0.12,
			"moveSpeed": 3.2,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 91,
			"maxSp": 14,
			"attackPower": 1.9,
			"defense": 1.5,
			"criticalChance": 0,
			"hpRegen": 0.05,
			"spRegen": 0.06,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Magnus",
		"code": 4,
		"radius": 0.5,
		"uiHeight": 2.5,
		"resource": "Magnus"
	}
}
