import Character from '../../types/Character';

export const Xiukai: Character = {
	"id": 13,
	"name": "Xiukai",
	"attributes": [
		{
			"mastery": "OneHandSword",
			"controlDifficulty": 3,
			"attack": 1,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 3
		},
		{
			"mastery": "Spear",
			"controlDifficulty": 3,
			"attack": 1,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 3
		}
	],
	"description": "\"Okay, let's get cookin'\"",
	"details": {
		"Real Name": "Zuo XiuKai",
		"Age": "34",
		"Nationality": "China",
		"Occupation": "Chef",
		"Role": "Tank"
	},
	"abilities": {
		"Passive": {
			"name": "Juggernaut Chef",
			"slot": "Passive",
			"type": "Buff",
			"description": "Food and beverages made by Xiukai have 30% bonus recovery. When crafting a food item of Uncommon or higher rarity, he earns a stack of Juggernaut Chef, increasing his max HP by 8 for each stack. \nStacks given per food: 1/2/3 for all rarities",
			"stats": {
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Lost in the Sauce",
			"slot": "Q",
			"type": "Attack",
			"description": "Xiukai throws his sauce barrel in the targeted direction, dealing damage to enemies hit and reducing their movement speed by 30% for 2 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/120/160/200/240(+0.5 AP)",
					"tiers": {
						"1": "80",
						"2": "120",
						"3": "160",
						"4": "200",
						"5": "240(+0.5"
					}
				},
				"Range": {
					"title": "Range",
					"value": "8.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.26s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "30/45/60/75/90 HP",
					"tiers": {
						"1": "30",
						"2": "45",
						"3": "60",
						"4": "75",
						"5": "90"
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
			"name": "Heavy Meal",
			"slot": "W",
			"type": "Attack",
			"description": "Xiukai slams his giant wok on the ground, dealing damage in an area around him and reducing the movement speed of enemies hit by 10/20/30/40/50% for 1.5 seconds.\nEnemies with impaired movement receive an additional damage (3/3.5/4/4.5/5% of Xiukai's max HP) and their movement speed is reduced for an additional 3 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/100/140/180/220(+0.4 AP)",
					"tiers": {
						"1": "60",
						"2": "100",
						"3": "140",
						"4": "180",
						"5": "220(+0.4"
					}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.34s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "30/45/60/75/90 HP",
					"tiers": {
						"1": "30",
						"2": "45",
						"3": "60",
						"4": "75",
						"5": "90"
					}
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
		"E": {
			"name": "Wok It Off",
			"slot": "E",
			"type": "Attack/Movement",
			"description": "Xiukai slides on his wok in the targeted direction, dealing damage to enemies hit. Enemies with impared movement receive additional damage and are knocked airborne for 1 second.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/110/140/170/190(+0.5 AP) (+ 1.5/2/2.5/3/3.5% of Xiukai's max HP)  Additional Damage: (1.5/2/2.5/3/3.5% of Xiukai's max HP)",
					"tiers": {
						"1": "(1.5",
						"2": "2",
						"3": "2.5",
						"4": "3",
						"5": "3.5%"
					}
				},
				"Range": {
					"title": "Range",
					"value": "7m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.34s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "30/45/60/75/90 HP",
					"tiers": {
						"1": "30",
						"2": "45",
						"3": "60",
						"4": "75",
						"5": "90"
					}
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
			"name": "Burnt to a Crisp",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Xiukai dishes out fire from his wok 6 times in 3 seconds, dealing damage to enemies in a cone in front of him. (+ stacks of Juggernaut Chef). Enemies with impaired movement have their defense reduced by 10/15/20% for 3 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "50/100/150(+0.5 AP)",
					"tiers": {
						"1": "50",
						"2": "100",
						"3": "150(+0.5"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "3s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "6.5m (90 degree)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.5s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/120/140 HP",
					"tiers": {
						"1": "100",
						"2": "120",
						"3": "140"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "60 Seconds",
					"tiers": {}
				}
			}
		}
	},
	"weapons": [
		"Dagger",
		"Spear"
	],
	"stats": {
		"initial": {
			"maxHp": 530,
			"maxSp": 420,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 40,
			"defense": 34,
			"criticalStrikeChance": 0,
			"hpRegen": 1,
			"spRegen": 0.3,
			"attackSpeed": 0.16,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 80,
			"maxSp": 14,
			"attackPower": 2.2,
			"defense": 1.7,
			"criticalChance": 0,
			"hpRegen": 0.06,
			"spRegen": 0.01,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Xiukai",
		"code": 13,
		"radius": 0.48,
		"uiHeight": 2.7,
		"resource": "Xiukai"
	}
}
