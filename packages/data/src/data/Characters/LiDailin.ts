import Character from '../../types/Character';

export const LiDailin: Character = {
	"id": 10,
	"displayName": "Li Dailin",
	"name": "Li Dailin",
	"background": "\"Would you please stay out of my life?\" - Li Dailin\nLi Dailin was the only daughter of a martial arts family. Her family chose to walk the path of mastery and training, disregarding care for her. This life resulted in nothing but resentment towards martial arts. \nTo enact her revenge, she sold the martial arts studio, along with the secrets passed down for generations, abandoning her pride as a martial artist.\n\nWhen she runs out of money for alcohol, she usually picks up odd jobs. \nShe has a reputation as 'Beggar Li' in her hometown.\n",
	"attributes": [
		{
			"mastery": "Glove",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Nunchaku",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"I'll go if there's something to drink there\"",
	"details": {
		"Real Name": "Li Dailin",
		"Age": "26",
		"Nationality": "China",
		"Occupation": "Unemployed",
		"Role": "Brawler"
	},
	"abilities": {
		"BAC": {
			"name": "Blood Alcohol Content",
			"slot": "BAC",
			"type": "Passive (Resource)",
			"description": "Li Dailin can use Drink Up to fill her BAC bar. When her BAC is above 40, she gains Tipsy, giving her skills extra effects, and gaining Dialed In for her next normal attack. If her BAC hits 100, she becomes Inebriated, is silenced for 7 seconds and gains Dialed In.  Dialed In: Li Dailin's next normal attack will trigger twice. Her second attack deals 50/75/100% damage. Strong Stomach: her attack speed is increased 10/25/40% for a certain time after drinking alcoholic beverages.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "10s",
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
			"name": "Spirited Kick",
			"slot": "Q",
			"type": "Attack",
			"description": "Li Dailin charges forward, dealing damage to enemies hit. She can reactivate this skill two more times. \nTipsy: Increases range and increases damage dealt.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "20/40/60/80/100 + 0.5 AP \n(Tipsy: 28/56/84/112/140 + 0.7 AP)",
					"tiers": {
						"1": "28",
						"2": "56",
						"3": "84",
						"4": "112",
						"5": "140"
					}
				},
				"Range": {
					"title": "Range",
					"value": "2.25m (Tipsy: 2.5m)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.14s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "0 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "12/11.5/11/10.5/10 Seconds",
					"tiers": {
						"1": "12",
						"2": "11.5",
						"3": "11",
						"4": "10.5",
						"5": "10"
					}
				}
			}
		},
		"W": {
			"name": "Drink Up",
			"slot": "W",
			"type": "Buff",
			"description": "Li Dailin takes a drink for 0.8 seconds, gaining Liquid Strength and increasing her BAC by 45. While drinking, she avoids normal attacks. Normal attacks reduce the cooldown of Drink Up by 1 second.  Liquid Strength: the damage from her next normal attack and damage from Dialed In is increased depending on her BAC.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "0 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "8/7/6/5/4 Seconds",
					"tiers": {
						"1": "8",
						"2": "7",
						"3": "6",
						"4": "5",
						"5": "4"
					}
				}
			}
		},
		"E": {
			"name": "Bottom Shelf",
			"slot": "E",
			"type": "Attack",
			"description": "Li Dailin spits out cheap liquor in a cone in front of her, silencing enemies in range and dealing damage.  \nTipsy: Reduces movement speed of enemies by 20%.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/135/190/245/300 + 0.5 AP",
					"tiers": {
						"1": "80",
						"2": "135",
						"3": "190",
						"4": "245",
						"5": "300"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.8/1.1/1.4/1.7/2.0 Seconds",
					"tiers": {
						"1": "0.8",
						"2": "1.1",
						"3": "1.4",
						"4": "1.7",
						"5": "2.0"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.2s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "0 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "13/12/11/10/9 Seconds",
					"tiers": {
						"1": "13",
						"2": "12",
						"3": "11",
						"4": "10",
						"5": "9"
					}
				}
			}
		},
		"R": {
			"name": "Striking Tiger",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Li Dailin launches forward, suppressing the first enemy hit and following it up with two consecutive kicks. Each blow deals damage in proportion to her enemy's missing HP. \nTipsy: follows up with 4 consecutive kicks.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/70/100(+0.2 AP) to 120/210/300(+0.6 AP)",
					"tiers": {
						"1": "120",
						"2": "210",
						"3": "300(+0.6"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.7 Seconds  (Tipsy: 1.2s)",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "8m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "0 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "185/150/115 Seconds",
					"tiers": {
						"1": "185",
						"2": "150",
						"3": "115"
					}
				}
			}
		}
	},
	"weapons": [
		"Glove",
		"Nunchaku"
	],
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 420,
			"initExtraPoint": 0,
			"maxExtraPoint": 100,
			"attackPower": 33,
			"defense": 20,
			"criticalChance": 0,
			"hpRegen": 1.1,
			"spRegen": 0.2,
			"attackSpeed": 0.07,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 89,
			"maxSp": 16,
			"attackPower": 1.9,
			"defense": 2.5,
			"criticalChance": 0,
			"hpRegen": 0.07,
			"spRegen": 0.01,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "LIDailin",
		"code": 10,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "LIDailin"
	}
}
