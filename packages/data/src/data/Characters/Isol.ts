import Character from '../../types/Character';

export const Isol: Character = {
	"id": 9,
	"displayName": "Isol",
	"name": "Isol",
	"background": "\"I can't stop here.\" - Isol\nIsol, known as Marcelo at the time, escaped his orphanage at the age of 12 at the suggestion of his trusted friend, Francisco.   \nFollowing his escape, he joined the terrorist group known as MOK. Isol is the sole survivor among the several child soldiers who joined the group around then.  \nHe tended to devolve to unnecessarily cruel ways of murder. \nIsol is overly disinterested in learning about others as he hates unnecessarily forming close relationships.\n",
	"attributes": [
		{
			"mastery": "AssaultRifle",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 1,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "Pistol",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 1,
			"disruptor": 2,
			"move": 3,
			"assistance": 1
		}
	],
	"description": "\"Strategy in place\"",
	"details": {
		"Real Name": "Marcelo",
		"Age": "16",
		"Nationality": "Brazil",
		"Occupation": "Guerilla",
		"Role": "Marksman"
	},
	"abilities": {
		"Passive": {
			"name": "Guerilla Warfare",
			"slot": "Passive",
			"type": "Buff/Debuff",
			"description": "Enemies that take damage from a trap of his have their defense reduced by 5/15/25%.\nPhotographic Memory: If an enemy sets a trap in Isol's vision range, he remembers the  trap, preventing it from going invisible for him.\nIsol arms traps 0.3/0.4/0.5s faster",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "3s",
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
			"name": "Semtex Bomb",
			"slot": "Q",
			"type": "Attack",
			"description": "Isol throws a bomb to the target location that sticks to an enemy or on the ground. If the bomb is thrown on the ground or sticks to an enemy, it explodes after 5 seconds, dealing 50/75/100/125/150 (+0.5 AP) damage and rooting enemies caught in the blast for 0.5s. If the bomb is stuck to an enemy, each attack reduces its timer by 0.5 seconds and increases the damage of the explosion by 8/12/16/20/24 (+0.3 AP) and time rooted by 0.1s (Max 1s)",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "50/75/100/125/150 + (0.5 AP) (Extra Damage: 8/12/16/20/24 + (0.3Ap) per attack)",
					"tiers": {
						"1": "8",
						"2": "12",
						"3": "16",
						"4": "20",
						"5": "24"
					}
				},
				"Range": {
					"title": "Range",
					"value": "8m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.27s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "60/80/100/110/130 SP",
					"tiers": {
						"1": "60",
						"2": "80",
						"3": "100",
						"4": "110",
						"5": "130"
					}
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
		"W": {
			"name": "Rebel Assault",
			"slot": "W",
			"type": "Attack",
			"description": "Isol unleashes a fury of bullets in front of him, dealing damage, and reducing the movement speed of enemies by 15%.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "(18/27/36/45/54 +0.5 AP) *4",
					"tiers": {
						"1": "(18",
						"2": "27",
						"3": "36",
						"4": "45",
						"5": "54"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "8m",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "70/85/100/115/130 SP",
					"tiers": {
						"1": "70",
						"2": "85",
						"3": "100",
						"4": "115",
						"5": "130"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "16/14.5/13/11.5/10 Seconds",
					"tiers": {
						"1": "16",
						"2": "14.5",
						"3": "13",
						"4": "11.5",
						"5": "10"
					}
				}
			}
		},
		"E": {
			"name": "Camouflage",
			"slot": "E",
			"type": "Movement",
			"description": "Isol rolls forward and blends into his surroundings, going invisible for a bit. The invisibility is lifted if Isol does any action other than basic movement.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "2.5/2.75/3/3.25/3.5 Seconds",
					"tiers": {
						"1": "2.5",
						"2": "2.75",
						"3": "3",
						"4": "3.25",
						"5": "3.5"
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
					"value": "110 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "23/20/17/14/11 Seconds",
					"tiers": {
						"1": "23",
						"2": "20",
						"3": "17",
						"4": "14",
						"5": "11"
					}
				}
			}
		},
		"R": {
			"name": "MOK Operational Mine",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Isol installs a MOK Operational Mine on the ground that detects enemies. The mine explodes when an enemy enters its range, dealing damage and reducing the movement speed of enemies by 10/20/30% for 2 seconds.\nMOK Operational Mine is not affected by skill amplification or reduction but is affected by trap masteries.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "100/150/200(+0.3 AP)",
					"tiers": {
						"1": "100",
						"2": "150",
						"3": "200(+0.3"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "1.5/1.75/2 Seconds",
					"tiers": {
						"1": "1.5",
						"2": "1.75",
						"3": "2"
					}
				},
				"Range": {
					"title": "Range",
					"value": "1m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.54 seconds",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80/80/80 SP",
					"tiers": {
						"1": "80",
						"2": "80",
						"3": "80"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "30/25/20 Seconds",
					"tiers": {
						"1": "30",
						"2": "25",
						"3": "20"
					}
				}
			}
		}
	},
	"weapons": [
		"Pistol",
		"AssaultRifle"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 400,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 32,
			"defense": 23,
			"criticalChance": 0,
			"hpRegen": 0.5,
			"spRegen": 1.8,
			"attackSpeed": 0.14,
			"moveSpeed": 3.05,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 60,
			"maxSp": 21,
			"attackPower": 2.6,
			"defense": 1.6,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.03,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Isol",
		"code": 9,
		"radius": 0.45,
		"uiHeight": 2.2,
		"resource": "Isol"
	}
}
