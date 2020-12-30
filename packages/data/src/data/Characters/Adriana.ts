import Character from '../../types/Character';

export const Adriana: Character = {
	"id": 17,
	"name": "Adriana",
	"attributes": [
		{
			"mastery": "HighAngleFire",
			"controlDifficulty": 3,
			"attack": 3,
			"defense": 1,
			"disruptor": 2,
			"move": 2,
			"assistance": 1
		}
	],
	"description": "\"Lily? Did you call my name?\"",
	"details": {
		"Real Name": "Adriana Rivera",
		"Age": "22",
		"Nationality": "Mexico",
		"Occupation": "Arsonist",
		"Role": "Control Mage"
	},
	"abilities": {
		"Passive": {
			"name": "Pyromaniac",
			"slot": "Passive",
			"type": "Passive",
			"description": "Adriana can start fires on the ground. Enemies lit on fire by a burning area are Burned, taking damage over time and have their movement speed reduced. Damage increases per stack of Burned. Adriana recovers 0.5/1/1.5% SP every 0.5s while a fire she lit is active.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "4/7/10 (+AP 15%) base damage every 0.5s (burned) / 20% increase per stack",
					"tiers": {
						"1": "4",
						"2": "7",
						"3": "10"
					}
				},
				"Move. speed": {
					"title": "Move. speed",
					"value": "-30%",
					"tiers": {}
				}
			}
		},
		"Q": {
			"name": "Flamethrower",
			"slot": "Q",
			"type": "Attack",
			"description": "Adriana fires her flamethrower in the targeted direction, dealing true damage (true damage ignores defense and is not affected by skill amplification).",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "12/15/18/21/24 + AP 10/15/20/25/30% damage every 0.25s (max 9 hits)",
					"tiers": {
						"1": "10",
						"2": "15",
						"3": "20",
						"4": "25",
						"5": "30%"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "2s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "6m\nWidth 0.9m",
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
					"value": "7/6.5/6/5.5/5 Seconds",
					"tiers": {
						"1": "7",
						"2": "6.5",
						"3": "6",
						"4": "5.5",
						"5": "5"
					}
				}
			}
		},
		"W": {
			"name": "Oil Slick",
			"slot": "W",
			"type": "Zone Control",
			"description": "Adriana spills oil on the targeted location. The oil slick remains for a certain time. Adriana can ignite the oil slick with a skill to start a fire for 5 seconds. Enemies inside the oil slick have their movement speed reduced and cannot use movement skills.\nMax Charges 2",
			"stats": {
				"Move. speed": {
					"title": "Move. speed",
					"value": "-30%",
					"tiers": {}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5s",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "12m\nLength 5.75m\n\nWidth 0.825m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "0.3s Seconds (recharge 24/20/16/12/8s)",
					"tiers": {
						"1": "24",
						"2": "20",
						"3": "16",
						"4": "12",
						"5": "8s)"
					}
				}
			}
		},
		"E": {
			"name": "Fire Escape",
			"slot": "E",
			"type": "Movement",
			"description": "Adriana dashes in the targeted direction, leaving behind a trail of fire. The flames create fire and remain for 2 seconds.",
			"stats": {
				"Range": {
					"title": "Range",
					"value": "6m",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.23s",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "80 SP",
					"tiers": {}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "22/20/18/16/14 Seconds",
					"tiers": {
						"1": "22",
						"2": "20",
						"3": "18",
						"4": "16",
						"5": "14"
					}
				}
			}
		},
		"R": {
			"name": "Cocktail Party",
			"slot": "R",
			"type": "Attack (Ultimate)",
			"description": "Adriana throws a Molotov cocktail at the targeted location. The Molotov cocktail explodes upon landing, dealing damage and knocking back enemies. After the explosion, the Molotov cocktail leaves behind a fire for 5 seconds. Adriana can hold a maximum of 3 Molotov cocktails. She gains a new Molotov cocktail every few seconds.",
			"stats": {
				"Skill damage": {
					"title": "Skill damage",
					"value": "70/130/190 (+AP 40%)",
					"tiers": {
						"1": "70",
						"2": "130",
						"3": "190"
					}
				},
				"Skill duration": {
					"title": "Skill duration",
					"value": "5 Seconds",
					"tiers": {}
				},
				"Range": {
					"title": "Range",
					"value": "14m (1.5m radius)",
					"tiers": {}
				},
				"Casting time": {
					"title": "Casting time",
					"value": "0.13 seconds",
					"tiers": {}
				},
				"Cost": {
					"title": "Cost",
					"value": "45/60/75 SP",
					"tiers": {
						"1": "45",
						"2": "60",
						"3": "75"
					}
				},
				"Cooldown": {
					"title": "Cooldown",
					"value": "0.3 Seconds (recharge 40/33/26)",
					"tiers": {
						"1": "40",
						"2": "33",
						"3": "26)"
					}
				}
			}
		}
	},
	"weapons": [
		"Throw"
	],
	"stats": {
		"initial": {
			"maxHp": 530,
			"maxSp": 480,
			"initExtraPoint": 0,
			"maxExtraPoint": 0,
			"attackPower": 31,
			"defense": 27,
			"criticalStrikeChance": 0,
			"hpRegen": 0.5,
			"spRegen": 1,
			"attackSpeed": 0.04,
			"moveSpeed": 3,
			"sightRange": 8
		},
		"perLevel": {
			"maxHp": 65,
			"maxSp": 9,
			"attackPower": 2.4,
			"defense": 1.7,
			"criticalChance": 0,
			"hpRegen": 0.03,
			"spRegen": 0.01,
			"attackSpeed": 0,
			"moveSpeed": 0
		}
	},
	"apiMetaData": {
		"name": "Adriana",
		"code": 17,
		"radius": 0.4,
		"uiHeight": 2.2,
		"resource": "Adriana"
	}
}
