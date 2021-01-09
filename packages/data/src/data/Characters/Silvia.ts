import Character from '../../types/Character';

export const Silvia: Character = {
	"id": 16,
	"displayName": "Silvia",
	"name": "Silvia",
	"background": "\"Whoa, that looks fun!\" - Silvia \nSilvia was raised by her grandfather - her parents were never really around. Her mother is a wandering photographer and there is nothing known about her father. She doesn't value making or maintaining relationships - her focus is on living in the now.\nOne of the biggest motives for her becoming a motorcycle racer was the thrill of the race.\nSilvia excites easily and acts emotionally without thinking ahead. She gained fame among motorcycle racing circuits for riding dangerously and wrecklessly, paying no mind to the consequences.\n",
	"attributes": [
		{
			"mastery": "Pistol",
			"controlDifficulty": 2,
			"attack": 2,
			"defense": 1,
			"disruptor": 2,
			"move": 3,
			"assistance": 1
		}
	],
	"description": "\"Time to race!\"",
	"details": {
		"Real Name": "Silvia",
		"Age": "23",
		"Nationality": "Argentina",
		"Occupation": "Racer",
		"Role": "Shapeshifter"
	},
	"abilities": {
		"Passive": {
			"name": "Lumia Grand Prix",
			"slot": "Passive",
			"type": "Passive/Buff",
			"description": "Upon entering a new area, aside from the Research Center, Silvia's attack speed is increased by 1/2/3%. If she visits all 15 areas, her skill amplification is increased by 15%. Every 30 seconds, Silvia can gain 10/12/14 fuel when visiting a new area. She regains 1 fuel every 3 seconds when not on her bike.",
			"stats": {
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "30s",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Radar Gun",
			"slot": "Q",
			"type": "Attack/Buff",
			"description": "Silvia fires a Radar Gun, dealing damage to enemies hit and healing herself and allies hit for 40/60/80/100/120(+AP 30%) HP. Silvia gains 5 fuel for each target she hits, excluding herself.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "30/65/100/135/170(+AP 40%)",
					"tiers": {
						"1": "30",
						"2": "65",
						"3": "100",
						"4": "135",
						"5": "170(+AP"
					}
				},
				"Range": {
					"title": "Range",
					"value": "7m - target distance 5m (length: 1m)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
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
					"value": "7.5/6.75/6/5.25/4.5s",
					"tiers": {
						"1": "7.5",
						"2": "6.75",
						"3": "6",
						"4": "5.25",
						"5": "4.5s"
					}
				}
			}
		},
		"W": {
			"name": "Finish Line",
			"slot": "W",
			"type": "Attack/DeBuff",
			"description": "Silvia sets up a Finish Line in the targeted location, dealing damage and decreasing the movement speed of enemies that pass through it for 3 seconds. This only occurs the first time an enemy passes through.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/50/60/70/80(+AP 30%)",
					"tiers": {
						"1": "40",
						"2": "50",
						"3": "60",
						"4": "70",
						"5": "80(+AP"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "40/50/60/70/80%",
					"tiers": {
						"1": "40",
						"2": "50",
						"3": "60",
						"4": "70",
						"5": "80%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "7m (Length 5/5.5/6/6.5/7m)",
					"tiers": {
						"1": "5",
						"2": "5.5",
						"3": "6",
						"4": "6.5",
						"5": "7m)"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "25/35/45/55/65 SP",
					"tiers": {
						"1": "25",
						"2": "35",
						"3": "45",
						"4": "55",
						"5": "65"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "15s",
					"tiers": {}
				}
			}
		},
		"E": {
			"name": "Spare Tire",
			"slot": "E",
			"type": "Attack/Debuff",
			"description": "Silvia launches a Spare Tire in the targeted direction, dealing damage based on the distance. Enemies within 3m are knocked back. Upon hitting an enemy further than 3m, Silvia gains 2~24 fuel based on the distance the tire traveled.",
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
				"Range": {
					"title": "Range",
					"value": "15m (distance)/ 1m (length)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
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
			"name": "Shift Gears",
			"slot": "R",
			"type": "Attack/Buff (Ultimate)",
			"description": "Silvia hops on her motorcycle, consuming 5 fuel every 1 second, increasing her movement speed, and giving her different skills. She can use Shift Gears when her fuel is above 30. Silvia cannot use normal attacks or weapon skills while riding her motorcycle. \nWhen she first changes to motorcycle mode she decreases her movement speed by 50% while reving up for 1.5s.\nHer defense increases by 2/16/30 while on the bike.\nMoving the bike within a range of 10 degrees left or right increases her speed gradually until a maximum of +70%. Turning the bike range more than 10 degrees in either direction decreases her speed proportionally to the turn angle, down until 80% of your base movement speed.",
			"stats": {
				"Move. speed": {
					"title": "Move. speed",
					"value": "+0.2/0.25/0.3",
					"tiers": {
						"1": "+0.2",
						"2": "0.25",
						"3": "0.3"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "2s",
					"tiers": {}
				}
			}
		},
		"on bike Q": {
			"name": "Power Slide",
			"slot": "on bike Q",
			"type": "Attack",
			"description": "Silvia spins on her bike, dealing damage to enemies in range.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "60/102/144/186/228(+AP70%)",
					"tiers": {
						"1": "60",
						"2": "102",
						"3": "144",
						"4": "186",
						"5": "228(+AP70%)"
					}
				},
				"Range": {
					"title": "Range",
					"value": "2.5m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "5 Fuel",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "2.5/2.25/2/1.75/1.5s",
					"tiers": {
						"1": "2.5",
						"2": "2.25",
						"3": "2",
						"4": "1.75",
						"5": "1.5s"
					}
				}
			}
		},
		"on bike W": {
			"name": "Front Flip",
			"slot": "on bike W",
			"type": "Attack Move/Debuff",
			"description": "Silvia jumps in the direction she is currently facing, dealing damage to enemies in range and knocking them airborne.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "90/130/170/210/250(+AP 60%)",
					"tiers": {
						"1": "90",
						"2": "130",
						"3": "170",
						"4": "210",
						"5": "250(+AP"
					}
				},
				"Range": {
					"title": "Range",
					"value": "1.75m / 3m (distance)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.4s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "5 Fuel",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "10/9/8/7/6s",
					"tiers": {
						"1": "10",
						"2": "9",
						"3": "8",
						"4": "7",
						"5": "6s"
					}
				}
			}
		},
		"on bike E": {
			"name": "Wheelie",
			"slot": "on bike E",
			"type": "Attack/Debuff",
			"description": "Silvia wheelies toward the targeted enemy dealing damage and knocking them 1m back. She deals additional damage depending on her movement speed.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "40/65/90/115/140(+AP 60%) / 6/10/14/18/22 (additional)",
					"tiers": {
						"1": "6",
						"2": "10",
						"3": "14",
						"4": "18",
						"5": "22"
					}
				},
				"Range": {
					"title": "Range",
					"value": "4m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "5 Fuel",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "14/13/12/11/10s",
					"tiers": {
						"1": "14",
						"2": "13",
						"3": "12",
						"4": "11",
						"5": "10s"
					}
				}
			}
		},
		"on bike R": {
			"name": "Shift Gears",
			"slot": "on bike R",
			"type": "Attack/Buff (Ultimate)",
			"description": "Silvia dismounts her bike and reverts her skills. Her next normal attack within 3 seconds deals damage.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "125/150/175%",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "2s",
					"tiers": {}
				}
			}
		}
	},
	"weapons": [
		"Pistol"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 440,
			"initExtraPoint": 0,
			"maxExtraPoint": 100,
			"attackPower": 28,
			"defense": 20,
			"criticalChance": 0,
			"hpRegen": 0.4,
			"spRegen": 2.1,
			"attackSpeed": 0.05,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 63,
			"maxSp": 22,
			"attackPower": 2.3,
			"defense": 1.4,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.06,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Silvia",
		"code": 16,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Silvia"
	}
}
