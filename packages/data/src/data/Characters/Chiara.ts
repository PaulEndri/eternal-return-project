import Character from '../../types/Character';

export const Chiara: Character = {
	"id": 14,
	"displayName": "Chiara",
	"name": "Chiara",
	"background": "\"I'm ruined...There will be no salvation for me...\" - Chiara \nChiara was sent to a catholic church institution at birth. Every day, she was brainwashed with stories of the omnipotence of His Almighty.\nWhen she was finally allowed to leave the compound, she ventured to seedy, sordid, and wretched places to preach, holding belief that God would protect her. She found herself in reprehensible situations, harshly realizing the cruel reality of life. A denial of God started growing in her mind, causing her disgust within.\n\nShe detests seeing beautiful and noble things because of her dissatisfaction with herself. \n",
	"attributes": [
		{
			"mastery": "Rapier",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 2,
			"disruptor": 2,
			"move": 1,
			"assistance": 1
		}
	],
	"description": "\"The time for salvation has passed.\"",
	"details": {
		"Real Name": "Chiara",
		"Age": "21",
		"Nationality": "France",
		"Occupation": "Nun",
		"Role": "Mage"
	},
	"abilities": {
		"Passive": {
			"name": "Stigma",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "When Chiara hits an enemy with a skill, she carves a Stigma into them, reducing their defense by 2/4/6%. Chiara can apply a maximum of 4 Stigmas to the same enemy. When the enemy reaches the maximum amount of Stigmas, Chiara's movement speed is increased for 6 seconds.",
			"stats": {
				"Move. speed": {
					"title": "Move. speed",
					"value": "+4/6/8%",
					"tiers": {
						"1": "+4",
						"2": "6",
						"3": "8%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s (Stigma duration)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Hand of Corruption",
			"slot": "Q",
			"type": "Attack/Debuff",
			"description": "Chiara casts out corrupted energy in the targeted direction, dealing damage to all enemies it hits. Hold the skill down for 0.5 seconds to cast out the corrupted energy further and in a straight line. Using the skill short-ranged reduces its cooldown by 20%.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/100/140/180/200 + AP 60%",
					"tiers": {
						"1": "60",
						"2": "100",
						"3": "140",
						"4": "180",
						"5": "200"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "-30%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.25s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5m (cone) / 12m (line)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50/60/70/80/90 SP",
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
					"value": "10/9.5/9/8.5/8s",
					"tiers": {
						"1": "10",
						"2": "9.5",
						"3": "9",
						"4": "8.5",
						"5": "8s"
					}
				}
			}
		},
		"W": {
			"name": "Depraved Prayer",
			"slot": "W",
			"type": "Defense/Damage",
			"description": "Chiara divines a shield, absorbing damage. The shield remains for 6 seconds. If the shield is not depleted after 3 seconds, she can reactivate the skill again, making it explode, dealing damage to enemies in range.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "90/125/160/195/230 + AP 75% (absorbed) / 80/120/160/200/240 + AP 60% (explosion)",
					"tiers": {
						"1": "80",
						"2": "120",
						"3": "160",
						"4": "200",
						"5": "240"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5.5m (explosion)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50/60/70/80/90 SP",
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
					"value": "16/15/14/13/12s",
					"tiers": {
						"1": "16",
						"2": "15",
						"3": "14",
						"4": "13",
						"5": "12s"
					}
				}
			}
		},
		"E": {
			"name": "Mania",
			"slot": "E",
			"type": "Attack/Debuff",
			"description": "Chiara sends out a shackle in the targeted direction, dealing damage to enemies hit and linking them to Chiara. If the link is maintained for 1.75 seconds, she deals damage and roots the enemy for 1.5 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/60/80/100/120 + AP 30% (if hit) / 70/110/150/190/230 + AP 70% (if rooted)",
					"tiers": {
						"1": "70",
						"2": "110",
						"3": "150",
						"4": "190",
						"5": "230"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.75s (link)",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "7m (Shackle max range: 8m)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.26s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "17/15.5/14/12.5/11s",
					"tiers": {
						"1": "17",
						"2": "15.5",
						"3": "14",
						"4": "12.5",
						"5": "11s"
					}
				}
			}
		},
		"R": {
			"name": "Last Judgement",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Chiara can crash down upon an enemy with the maximum amount of Stigmas, dealing true damage and ending the Plague. Killing enemies with Last Judgement reduces the cooldown of Plague by 50%.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "200/300/400 + AP 120%",
					"tiers": {
						"1": "200",
						"2": "300",
						"3": "400"
					}
				}
			}
		}
	},
	"weapons": [
		"Rapier"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 410,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 34,
			"defense": 24,
			"criticalChance": 0,
			"hpRegen": 0.5,
			"spRegen": 1.8,
			"attackSpeed": 0.11,
			"moveSpeed": 3.15,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 13,
			"attackPower": 2,
			"defense": 1.5,
			"criticalChance": 0,
			"hpRegen": 0.02,
			"spRegen": 0.03,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Chiara",
		"code": 14,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Chiara"
	}
}
