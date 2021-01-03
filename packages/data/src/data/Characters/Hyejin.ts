import Character from '../../types/Character';

export const Hyejin: Character = {
	"id": 12,
	"displayName": "Hyejin",
	"name": "Hyejin",
	"background": "\"This must be another fated way.\" - Hyejin \nHyejin is the only child of a generational shaman family.\nHer destiny, if she had been born after dawn, would have been straightforward and undisturbed. Hyejin was not so lucky. Having been born before dawn, she was fated to go through a great ordeal at the age of 18.\nShe seems to accept her destiny as it is. Being raised from a shaman family, Hyejin believes her fate has already been determined.\nShe often plays Bipa, a Korean lute used to communicate with spirits. To be honest though, it kinda just looks like she's murmuring to herself. \n",
	"attributes": [
		{
			"mastery": "Bow",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 1,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		},
		{
			"mastery": "DirectFire",
			"controlDifficulty": 3,
			"attack": 2,
			"defense": 1,
			"disruptor": 3,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"I will follow my destiny!\"",
	"details": {
		"Real Name": "Lee Hyejin (이혜진)",
		"Age": "18",
		"Nationality": "Korea",
		"Occupation": "Shaman",
		"Role": "Mage"
	},
	"abilities": {
		"Passive": {
			"name": "Three Calamities",
			"slot": "Passive",
			"type": "Passive/Debuff",
			"description": "When Hyejin hits an enemy with a skill, they receive a calamity. Upon reaching 3 stacks, Three Calamities is activated, fearing them. Feared enemies cannot receive Three Calamities again for 8 seconds.",
			"stats": {
				"Skill duration": {
					"title": "Skill duration",
					"value": "0.7/1.1/1.5s",
					"tiers": {
						"1": "0.7",
						"2": "1.1",
						"3": "1.5s"
					}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "Instant",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Charm of Despair",
			"slot": "Q",
			"type": "Attack",
			"description": "Hyejin casts a Charm of Despair in the targeted direction, dealing damage to the first enemy hit, and reducing their movement speed for 1 second. She can recast the skill to cast another charm.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "100/125/150/175/200 (+0.4 AP)",
					"tiers": {
						"1": "100",
						"2": "125",
						"3": "150",
						"4": "175",
						"5": "200"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "-50%",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "11.75m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.3s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "50/55/60/65/70 SP",
					"tiers": {
						"1": "50",
						"2": "55",
						"3": "60",
						"4": "65",
						"5": "70"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "20/17/14/11/8 s",
					"tiers": {
						"1": "20",
						"2": "17",
						"3": "14",
						"4": "11",
						"5": "8"
					}
				}
			}
		},
		"W": {
			"name": "Charm of the Prophecy",
			"slot": "W",
			"type": "Attack",
			"description": "Hyejin summons a Charm of the Prophecy in the targeted location that stays at the location. Charm of Prophecy ignites after the max time, or if the skill is activated again, dealing damage to enemies in range and rooting them.\nCharm of the Prophecy damage increases while on the ground.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "15/20/25/30/35(+0.5 AP) to 140/205/270/335/400(+0.5 AP)",
					"tiers": {
						"1": "140",
						"2": "205",
						"3": "270",
						"4": "335",
						"5": "400(+0.5"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "3s  Root: 1s",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
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
					"value": "22/19/16/13/10 s",
					"tiers": {
						"1": "22",
						"2": "19",
						"3": "16",
						"4": "13",
						"5": "10"
					}
				}
			}
		},
		"E": {
			"name": "Charm of the Nomad",
			"slot": "E",
			"type": "Move Attack",
			"description": "Hyejin casts a Charm of the Nomad in the targeted location, dealing damage to enemies hit. Activating the skill again teleports Hyejin to the location of Charm of the Nomad, dealing damage to enemies upon landing.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "45/70/95/120/145(+0.3 AP) / 50/75/100/125/150(+0.3 AP) upon landing",
					"tiers": {
						"1": "50",
						"2": "75",
						"3": "100",
						"4": "125",
						"5": "150(+0.3"
					}
				},
				"Range": {
					"title": "Range",
					"value": "10.5m / damage range upon landing = 1.25m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.25s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "12s",
					"tiers": {}
				}
			}
		},
		"R": {
			"name": "Five Omens",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Hyejin focuses for 1 second, summoning 5 Omens, and dealing damage to enemies in an area around her. The Omens spin around Hyejin for 20 seconds, each dealing damage to enemies hit. Omens are consumed after hitting an enemy. While focusing, her movement speed is reduced by 30%. Hyejin can teleport to her Charm of the Nomad location while focusing.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "150/275/400(+0.7 AP) (initial) / 80/130/180(+0.5 AP) per Omen",
					"tiers": {
						"1": "80",
						"2": "130",
						"3": "180(+0.5"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "20s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "5.5m (0.5 projectile damage range)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "1s (focus)",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "100 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "120/90/60 Seconds",
					"tiers": {
						"1": "120",
						"2": "90",
						"3": "60"
					}
				}
			}
		}
	},
	"weapons": [
		"Shuriken",
		"Bow"
	],
	"stats": {
		"initial": {
			"maxHp": 500,
			"maxSp": 400,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 29,
			"defense": 22,
			"criticalChance": 0,
			"hpRegen": 0.6,
			"spRegen": 2,
			"attackSpeed": 0.12,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 64,
			"maxSp": 26,
			"attackPower": 2.5,
			"defense": 1.7,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.08,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Hyejin",
		"code": 12,
		"radius": 0.4,
		"uiHeight": 2.1,
		"resource": "Hyejin"
	}
}
