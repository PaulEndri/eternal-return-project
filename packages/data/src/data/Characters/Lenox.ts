import Character from '../../types/Character';

export const Lenox: Character = {
	"id": 20,
	"displayName": "Lenox",
	"name": "Lenox",
	"background": "\"Don't you love fishing? It calms your mind.\" - Lenox \nYou'll be hard-pressed to find Lenox wearing waders - she's always dressed to the nines. \nJudging by her disposition, she was once clearly involved in something... organized.\nShe's now trying to stay low-key, believe a fishing rod to be good enough a disguise as any, although her colorful and impressive tattoos aren't helping.\nLenox can often be found with a smile on her face, but when you ask her about the scar on her back, her whole demeanor changes.\n\n",
	"attributes": [
		{
			"mastery": "Whip",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 2,
			"disruptor": 2,
			"move": 1,
			"assistance": 1
		}
	],
	"description": "\"What kinda fish will be biting today?\"",
	"details": {
		"Age": "26",
		"Nationality": "Austria",
		"Occupation": "Angler",
		"Role": "Brawler"
	},
	"abilities": {
		"Passive": {
			"name": "Bait and Tackle",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "Bait: Lenox gets extra items, excluding weapons, every time she fishes. Common: 85% / Uncommon: 14% / Rare: 1%\n\nTackle: Every 20/16/12 seconds, normal attacks grant Lenox a shield that absorbs damage equal to 10% of her max HP.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s (Tackle)",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "20/16/12s (Tackle)",
					"tiers": {
						"1": "20",
						"2": "16",
						"3": "12s"
					}
				}
			}
		},
		"Q": {
			"name": "Recoil",
			"slot": "Q",
			"type": "Buff",
			"description": "Lenox whips a circle area around her, dealing damage to enemies. She deals extra damage equal to 6/6.5/7/7.5/8% of her max HP to enemies hit by the edge. Hitting an enemy grants her 1 stack, reducing the cooldown of Recoil by 1 second per stack. (Max 2 stacks)",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/70/100/130/160 (+AP 30%)",
					"tiers": {
						"1": "40",
						"2": "70",
						"3": "100",
						"4": "130",
						"5": "160"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "8s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "30/50/70/90/110 SP",
					"tiers": {
						"1": "30",
						"2": "50",
						"3": "70",
						"4": "90",
						"5": "110"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "4s",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Snakebite",
			"slot": "W",
			"type": "Debuff",
			"description": "Lenox snaps her whip twice, once in a circle around her, dealing damage and slowing enemies for 1.5 seconds. Following that, she will attack in a straight line, dealing damage and silencing enemies for 0.5 seconds. Hitting an enemy with the second part of her skill increases her movement speed by 20% for 3 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "30/40/50/60/70(+AP 30%) + 40/75/110/145/180(+AP 60%)",
					"tiers": {
						"1": "40",
						"2": "75",
						"3": "110",
						"4": "145",
						"5": "180(+AP"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "20%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.5s/3s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "3m (circular) & 6m, 0.75m (rectangular)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
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
		"E": {
			"name": "Whiplash",
			"slot": "E",
			"type": "Debuff",
			"description": "Lenox sweeps her whip in an area around her, dealing damage and pushing or pulling enemies, depending on the direction of the skill. Enemies hit are slowed by for 1 second.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/110/160/210/260(+AP 30%)",
					"tiers": {
						"1": "60",
						"2": "110",
						"3": "160",
						"4": "210",
						"5": "260(+AP"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "20/25/30/35/40%",
					"tiers": {
						"1": "20",
						"2": "25",
						"3": "30",
						"4": "35",
						"5": "40%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "4m (length), 2.5m (width)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "60/65/70/75/80 SP",
					"tiers": {
						"1": "60",
						"2": "65",
						"3": "70",
						"4": "75",
						"5": "80"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "9s",
					"tiers": {}
				}
			}
		},
		"R": {
			"name": "Blue Viper",
			"slot": "R",
			"type": "Debuff",
			"description": "Lenox quickly attacks twice in an X shape, dealing damage and applying Blue Viper a few seconds.\n\nBlue Viper: Enemies take 10/15/20 damage for every 1m they move. Hitting an enemy with both attacks deals 20/30/40 damage for every 1m they move.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "75/150/225(+AP 80%)",
					"tiers": {
						"1": "75",
						"2": "150",
						"3": "225(+AP"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "4/5/6s",
					"tiers": {
						"1": "4",
						"2": "5",
						"3": "6s"
					}
				},
				"Range": {
					"title": "Range",
					"value": "7.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100/120/140 SP",
					"tiers": {
						"1": "100",
						"2": "120",
						"3": "140"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "120/100/80s",
					"tiers": {
						"1": "120",
						"2": "100",
						"3": "80s"
					}
				}
			}
		}
	},
	"weapons": [
		"Whip"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 350,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 36,
			"defense": 26,
			"criticalChance": 0,
			"hpRegen": 0.8,
			"spRegen": 1.8,
			"attackSpeed": 0.12,
			"moveSpeed": 3.2,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 75,
			"maxSp": 13,
			"attackPower": 2.8,
			"defense": 2,
			"criticalChance": 0,
			"hpRegen": 0.05,
			"spRegen": 0.06,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Lenox",
		"code": 20,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Lenox"
	}
}
