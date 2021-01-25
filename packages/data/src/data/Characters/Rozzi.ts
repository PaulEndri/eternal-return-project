import Character from '../../types/Character';

export const Rozzi: Character = {
	"id": 21,
	"displayName": "Rozzi",
	"name": "Rozzi",
	"background": "\"You've done well.\" - Rozzi \nRozzi trained as a mercenary from a very young age by a militant group. \nShe has grown an integral member of the mercenary organization known as Corda D’arco (Bowstring). \nShrouded in secrecy, she's led national intelligence operations and exclusive requests from multinational corporations. \nRozzi gained a reputation of excelling at commanding and has an unparalled ability to stay calm and devise the best tactics in unanticipated situations.\nHer icy facial expressions and personality make her unapproachable - to her benefit. She has no interest in forming close relationships with anyone; there is no permanence in her operations.\nRumors swirl around the enigmatic Rozzi, some say she is seeking information about a cooperative from her former organization.\n\n",
	"attributes": [
		{
			"mastery": "Pistol",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 1,
			"move": 3,
			"assistance": 1
		}
	],
	"description": "\"Ready.\"",
	"details": {
		"Age": "20",
		"Nationality": "Brazil",
		"Occupation": "Mercenary",
		"Role": "Marksman"
	},
	"abilities": {
		"Passive": {
			"name": "Dual Wield",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "After Rozzi uses a skill, her next normal attack within the next 4 seconds will activate twice consecutively, dealing damage.\nRozzi gains SP equal to 50% of her HP recovery when she eats food made from chocolate. \nShe gains HP equal to 30% of her SP recovery when she drinks something made from chocolate.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "70% & 60/70/80%",
					"tiers": {
						"1": "60",
						"2": "70",
						"3": "80%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "3s",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Easy Shot",
			"slot": "Q",
			"type": "Buff",
			"description": "Rozzi fires her pistols in the targeted direction, dealing damage to enemies hit. If she hits an enemy, her next movement command within 2 seconds will be a dash and the cooldown of Easy Shot will be reduced by 2 seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/80/120/160/200 (+AP 30%)",
					"tiers": {
						"1": "40",
						"2": "80",
						"3": "120",
						"4": "160",
						"5": "200"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5m, width 1m",
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
					"value": "6s",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Flutter",
			"slot": "W",
			"type": "Buff/Debuff",
			"description": "Rozzi unloads a barrage of bullets in an area around her, dealing damage to enemies in range, decreasing their defense for a few seconds and stopping their HP regen and food recovery.\nWhile Rozzi is shooting for a few seconds, her movement speed is increased by 50% and she reloads her gun.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "70/110/150/190/230(+AP 35%)",
					"tiers": {
						"1": "70",
						"2": "110",
						"3": "150",
						"4": "190",
						"5": "230(+AP"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.75s/ debuff 2.5s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "3m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.34s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/80/90/100/110",
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
					"value": "9/8.5/8/7.5/7s",
					"tiers": {
						"1": "9",
						"2": "8.5",
						"3": "8",
						"4": "7.5",
						"5": "7s"
					}
				}
			}
		},
		"E": {
			"name": "Gun Vault",
			"slot": "E",
			"type": "Buff",
			"description": "Rozzi vaults over her target and shoots them, dealing damage. While jumping, Rozzi is untargetable and cannot take damage.\nRozzi can use Gun Vault again within 3 seconds of an enemy being hit, knocking them back, dealing damage, and stunning them if they hit a wall.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "50/70/90/110/130(+AP 40%)& 50/70/90/110/130(+AP 40%)",
					"tiers": {
						"1": "50",
						"2": "70",
						"3": "90",
						"4": "110",
						"5": "130(+AP"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.75s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.3s",
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
		"R": {
			"name": "Semtex Bomb Mk II",
			"slot": "R",
			"type": "Debuff",
			"description": "Rozzi launches a semtex bomb that explodes 3 seconds after attaching to an enemy or the ground, dealing damage.\nEnemies with the bomb attached have their movement speed decreased. \nNormal attacks on the target 5 times will cause it to explode immediately, dealing additional damage equal to 4/8/12% of the target's Max HP, reducing its cooldown by 30%, and increasing Rozzi's movement speed by 15% for 1 second. \nAttacking enemies with a skill while the bomb is attached counts as 2 normal attacks.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "100/200/300 (+AP 45%)",
					"tiers": {
						"1": "100",
						"2": "200",
						"3": "300"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "20/25/30%",
					"tiers": {
						"1": "20",
						"2": "25",
						"3": "30%"
					}
				},
				"Range": {
					"title": "Range",
					"value": "5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "90 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "30/25/20s",
					"tiers": {
						"1": "30",
						"2": "25",
						"3": "20s"
					}
				}
			}
		}
	},
	"weapons": [],
	"stats": {
		"initial": {
			"maxHp": 480,
			"maxSp": 440,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 28,
			"defense": 20,
			"criticalChance": 0,
			"hpRegen": 0.4,
			"spRegen": 2.1,
			"attackSpeed": 0.1,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 62,
			"maxSp": 22,
			"attackPower": 2,
			"defense": 1.4,
			"criticalChance": 0,
			"hpRegen": 0.02,
			"spRegen": 0.03,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Rozzi",
		"code": 21,
		"radius": 0.4,
		"uiHeight": 2.5,
		"resource": "Rozzi"
	}
}
