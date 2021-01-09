import Character from '../../types/Character';

export const Yuki: Character = {
	"id": 11,
	"displayName": "Yuki",
	"name": "Yuki",
	"background": "\"Is there anything I can do for you?\" - Yuki \nA sharp high school student, Yuki is a member of the kendo club with flawless demeanor and decorum.\n\nHe never loses his composure and takes on new challenges with the confidence of a seasoned vet.\nHis perfectionism is sturdy, yet fragile, like a fortress of ice and glass. \n",
	"attributes": [
		{
			"mastery": "TwoHandSword",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 2,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "DualSword",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"Ah, now it's my turn\"",
	"details": {
		"Real Name": "Sato Yuki",
		"Age": "18",
		"Nationality": "Japan",
		"Occupation": "High school student",
		"Role": "Fighter"
	},
	"abilities": {
		"Passive": {
			"name": "Perfect Fit",
			"slot": "Passive",
			"type": "Passive (Resource)",
			"description": "Yuki stores cufflinks as a resource. Upon damaging an enemy, he consumes a stored cufflink, dealing additional true damage. Yuki recovers 1 cufflink every 4 seconds while out of combat. Activating Button Up will refill all of his cufflinks.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "15/30/45",
					"tiers": {
						"1": "15",
						"2": "30",
						"3": "45"
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
			"name": "From Head to Toe",
			"slot": "Q",
			"type": "Attack/Buff",
			"description": "Yuki's next normal attack deals damage and reduces the movement speed of enemies by 50% for 1 second. \nConsuming a cufflink stuns enemies for 0.5 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "20/45/70/95/120 (+1.0AP)",
					"tiers": {
						"1": "20",
						"2": "45",
						"3": "70",
						"4": "95",
						"5": "120"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5s \n(movement speed reduction: 1s)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "9/8/7/6/5s",
					"tiers": {
						"1": "9",
						"2": "8",
						"3": "7",
						"4": "6",
						"5": "5s"
					}
				}
			}
		},
		"W": {
			"name": "Button Up",
			"slot": "W",
			"type": "Passive/Buff",
			"description": "Passive: reduces cooldown of Button Up by 0.5 seconds each time Yuki deals damage. \nYuki straightens up his outfit and reduces the cooldown for Dashing Gentleman by 6/6.5/7/7.5/8. While using Button Up, his defense is increased by 50%. When Button Up is complete, he refills his cufflinks.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "1s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant (effect) / Cufflink refill: 1s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "90 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "18/16/14/12/10 Seconds",
					"tiers": {
						"1": "18",
						"2": "16",
						"3": "14",
						"4": "12",
						"5": "10"
					}
				}
			}
		},
		"E": {
			"name": "Dashing Gentleman",
			"slot": "E",
			"type": "Move Attack",
			"description": "Yuki dashes in the targeted direction, dealing damage to the first enemy hit. Enemies hit are disarmed, disabling their normal attacks.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "70/120/170/220/270(+0.4 AP)",
					"tiers": {
						"1": "70",
						"2": "120",
						"3": "170",
						"4": "220",
						"5": "270(+0.4"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.25 Seconds",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
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
					"value": "15/14/13/12/11 Seconds",
					"tiers": {
						"1": "15",
						"2": "14",
						"3": "13",
						"4": "12",
						"5": "11"
					}
				}
			}
		},
		"R": {
			"name": "Coup de Grace",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Yuki unsheaths his sword and slashes an area in front of him, dealing damage to enemies and leaving a mark, reducing movement speed of enemies by 70% for 1 second. The mark explodes after Yuki sheathes his sword, dealing true damage based on the enemy's max HP.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "250/375/500(+1.5 AP) initial / 15/20/25% of enemy's max HP",
					"tiers": {
						"1": "15",
						"2": "20",
						"3": "25%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.99s",
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
					"value": "140/110/80 Seconds",
					"tiers": {
						"1": "140",
						"2": "110",
						"3": "80"
					}
				}
			}
		}
	},
	"weapons": [
		"TwoHandedSword",
		"DualSwords"
	],
	"stats": {
		"initial": {
			"maxHp": 550,
			"maxSp": 410,
			"initExtraPoint": 4,
			"maxExtraPoint": 4,
			"attackPower": 32,
			"defense": 26,
			"criticalChance": 0,
			"hpRegen": 0.7,
			"spRegen": 2.2,
			"attackSpeed": 0.06,
			"moveSpeed": 3.1,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 81,
			"maxSp": 20,
			"attackPower": 2.6,
			"defense": 2,
			"criticalChance": 0,
			"hpRegen": 0.05,
			"spRegen": 0.06,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Yuki",
		"code": 11,
		"radius": 0.45,
		"uiHeight": 2.4,
		"resource": "Yuki"
	}
}
