import Character from '../../types/Character';

export const Emma: Character = {
	"id": 19,
	"displayName": "Emma",
	"name": "Emma",
	"background": "\"I'll show you something completely new!\" - Emma \nEmma is a cheerful street magician. She always performs free magic tricks on the street with cards, coins and even hats, but her specialty is performing card tricks. \nHer audience calls her 'Begi Emma', a word derived from Beginner. Although she might be too loud when she laughs or talks, she is very easily approachable and friendly, and it's hard to hate her.\nShe pursued her magic career as soon as she became an adult, and she has always wanted to live freely from her parents' strict rules. \nIt is rumored that she left the house to become a great magician in order to find her grandfather.\n\n",
	"attributes": [
		{
			"mastery": "DirectFire",
			"controlDifficulty": 3,
			"attack": 1,
			"defense": 2,
			"disruptor": 3,
			"move": 2,
			"assistance": 2
		}
	],
	"description": "\"Let's take to the stage!\"",
	"details": {
		"Real Name": "Emma Hardy",
		"Age": "21",
		"Nationality": "U.S.",
		"Occupation": "Magician",
		"Role": "Mage"
	},
	"abilities": {
		"Passive": {
			"name": "CheerUP♥",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "Every few seconds, Emma's next normal attack deals extra damage equal to 2/3/4% of her SP, and she gains a shield absorbing HP equal to 90/120/150 or 3/6/9% of her maximum SP.",
			"stats": {
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
					"value": "16/13/10s",
					"tiers": {
						"1": "16",
						"2": "13",
						"3": "10s"
					}
				}
			}
		},
		"Q": {
			"name": "Dove Dealer",
			"slot": "Q",
			"type": "Attack",
			"description": "Emma throws her card in the targeted direction, dealing damage to the first enemy hit and revealing her hidden dove. If her dove is revealed when she throws her card, it will also throw a card in the targeted direction. Hitting an enemy with 1 card reduces the cooldown of Dove Dealer by 1 second. Enemies hit by both cards have their movement speed reduced by 30%.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/115/150/145/185 (+AP 45%)",
					"tiers": {
						"1": "80",
						"2": "115",
						"3": "150",
						"4": "145",
						"5": "185"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "10s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "10mm",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.26s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/80/90/100/110 SP",
					"tiers": {
						"1": "70",
						"2": "80",
						"3": "90",
						"4": "100",
						"5": "110"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "5.5s",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Hat Trick",
			"slot": "W",
			"type": "Attack",
			"description": "Emma tosses her hat in the targeted area. After a few seconds, it explodes, dealing damage to enemies in the area. Hitting an enemy with Hat Trick reduces its cooldown by 3 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "100/150/200/250/300 (+AP 75%)",
					"tiers": {
						"1": "100",
						"2": "150",
						"3": "200",
						"4": "250",
						"5": "300"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "10s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "7m (Diameter 1.8m)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.26 (0.8s explosion)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/80/90/100/110 SP",
					"tiers": {
						"1": "70",
						"2": "80",
						"3": "90",
						"4": "100",
						"5": "110"
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
			"name": "Bunnymorph",
			"slot": "E",
			"type": "CC",
			"description": "Passive: Every time Emma consumes SP, she recovers HP equal to 8/11/14/17/20% of her consumed SP.\nActive: Emma casts magic at a targeted enemy, polymorphing them into a rabbit. Enemies turned into rabbits are slowed. The skill cannot be used on downed enemies.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "80/100/120/140/160(+AP 60%) to 154/187/220/253/286(+AP 132%)",
					"tiers": {
						"1": "154",
						"2": "187",
						"3": "220",
						"4": "253",
						"5": "286(+AP"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "- 0.6",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/80/90/100/110 SP",
					"tiers": {
						"1": "70",
						"2": "80",
						"3": "90",
						"4": "100",
						"5": "110"
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
		"R": {
			"name": "Change★",
			"slot": "R",
			"type": "Ultimate",
			"description": "Emma magically teleports to a summed dove, hat, or rabbit and uses magic depending on the selected target, resetting the passive cooldown.\n\nDove: Emma's dove flies towards her previous spot, dealing damage to enemies on the way and rooting them for 1.5 seconds.\nHat: Emma switches places with the hat, dealing damage to enemies in the area she came from while pulling them towards the center.\nRabbit: Enemies in the area of the rabbit are also bunnymorphed for 1 second(s). Enemies turned into rabbits are slowed by .6",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "Dove: 150/200/250 (+AP 45%)\nHat: 200/250/300 (+AP 75%)",
					"tiers": {
						"1": "200",
						"2": "250",
						"3": "300"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "16/13/10s",
					"tiers": {
						"1": "16",
						"2": "13",
						"3": "10s"
					}
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
			"maxHp": 550,
			"maxSp": 430,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 40,
			"defense": 28,
			"criticalChance": 0,
			"hpRegen": 0.4,
			"spRegen": 1.6,
			"attackSpeed": 0.1,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 18,
			"attackPower": 2.5,
			"defense": 1.6,
			"criticalChance": 0,
			"hpRegen": 0.02,
			"spRegen": 0.02,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Emma",
		"code": 19,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Emma"
	}
}
