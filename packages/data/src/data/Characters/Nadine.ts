import Character from '../../types/Character';

export const Nadine: Character = {
	"id": 6,
	"name": "Nadine",
	"attributes": [
		{
			"mastery": "Bow",
			"controlDifficulty": 2,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "CrossBow",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"Let the hunt begin!\"",
	"details": {
		"Real Name": "Nadine Chandrawinata",
		"Age": "21",
		"Nationality": "Indonesia",
		"Occupation": "Archer",
		"Role": "Marksman"
	},
	"abilities": {
		"Passive": {
			"name": "Wild and Clairvoyant",
			"slot": "Passive",
			"type": "Passive",
			"description": "Nadine gets a stack of Wild for every wild animal she slays, giving some skills extra damage. Wild animals located inside a certain range near her appear on the minimap.",
			"stats": {
				"Range": {
					"title": "Range",
					"value": "20m",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Bullseye",
			"slot": "Q",
			"type": "Attack",
			"description": "Nadine gathers her strength for a certain time, reducing her movement speed and gradually increasing the range of Bullseye. If she has more than a certain amount of Wild stacks, her maximum attack range increases. By reactivating the skill, she shoots an arrow, dealing damage.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "70-140/115-230/160-320/205-410/250-500 (+ .6 ~ 1.2 AP) (+ X wild stacks)",
					"tiers": {
						"1": "70-140",
						"2": "115-230",
						"3": "160-320",
						"4": "205-410",
						"5": "250-500"
					}
				},
				"Range": {
					"title": "Range",
					"value": "Attack Range - Attack Range * 2.5",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "instant",
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
					"value": "7 Seconds (all levels)",
					"tiers": {}
				}
			}
		},
		"W": {
			"name": "Squirrel Trap",
			"slot": "W",
			"type": "Trap",
			"description": "Nadine throws a Squirrel Trap at the targeted location, dealing damage to any enemies it hits and arming itself after it lands. You can throw another trap within a certain time. If the distance between the traps is less than a certain distance, they connect to each other. Enemies caught in the connected traps have their movement speed reduced, and Nadine can see them for a certain time. The connected traps disappear after a certain time.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "Projectile: 100/170/240/310/380 +.06 AP  Trap: 100/140/180/220/260 + .06 AP",
					"tiers": {
						"1": "100",
						"2": "140",
						"3": "180",
						"4": "220",
						"5": "260"
					}
				},
				"Range": {
					"title": "Range",
					"value": "7m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.3s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50 SP (All levels)",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "26/22/18/14/10 Seconds",
					"tiers": {
						"1": "26",
						"2": "22",
						"3": "18",
						"4": "14",
						"5": "10"
					}
				}
			}
		},
		"E": {
			"name": "Monkey Wire",
			"slot": "E",
			"type": "Buff/Movement",
			"description": "Nadine attaches a wire at the targeted location. The installed wire stays for a certain time. While it's installed and she is attached to it, her attack speed increases. If you reactivate it, the wire returns to its anchor point, bringing Nadine with it.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "6s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "7m",
					"tiers": {}
				},
				"Attack speed": {
					"title": "Attack speed",
					"value": "10/15/20/25/30% attack speed increase",
					"tiers": {
						"1": "10",
						"2": "15",
						"3": "20",
						"4": "25",
						"5": "30%"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.2s",
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
					"value": "24/21/18/15/12 Seconds",
					"tiers": {
						"1": "24",
						"2": "21",
						"3": "18",
						"4": "15",
						"5": "12"
					}
				}
			}
		},
		"R": {
			"name": "Wolf Assault",
			"slot": "R",
			"type": "Buff/Attack (Ultimate)",
			"description": "For some time, Nadine summons a wolf every few normal attacks. The wolf attacks the enemy, dealing damage and reducing their attack and movement speed. (Nadine deals more damage the more Wild stacks she has.)",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "50/100/150 + 0.5AP (+ X Wild stacks)",
					"tiers": {
						"1": "50",
						"2": "100",
						"3": "150"
					}
				},
				"Slow": {
					"title": "Slow",
					"value": "-35%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "8/9/10 Seconds",
					"tiers": {
						"1": "8",
						"2": "9",
						"3": "10"
					}
				},
				"Attack speed": {
					"title": "Attack speed",
					"value": "-35%",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.3s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "150 SP  (All levels)",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "90/75/60 Seconds",
					"tiers": {
						"1": "90",
						"2": "75",
						"3": "60"
					}
				}
			}
		}
	},
	"weapons": [
		"Bow",
		"Crossbow"
	],
	"stats": {
		"initial": {
			"maxHp": 520,
			"maxSp": 350,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 32,
			"defense": 21,
			"criticalStrikeChance": 0,
			"hpRegen": 0.4,
			"spRegen": 1.9,
			"attackSpeed": 0.12,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 13,
			"attackPower": 2.2,
			"defense": 1.5,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.05,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Nadine",
		"code": 6,
		"radius": 0.4,
		"uiHeight": 2.3,
		"resource": "Nadine"
	}
}
