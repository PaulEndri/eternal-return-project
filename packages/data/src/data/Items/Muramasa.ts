import Item from '../../types/Item';

export const Muramasa: Item = {
	"id": 102402,
	"name": "Muramasa",
	"buildsFrom": [
		{
			"name": "Katana",
			"id": 102301
		},
		{
			"name": "Gemstone",
			"id": 401114
		}
	],
	"buildsInto": [
		{
			"name": "Monohoshizao",
			"id": 102410
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 50
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A sword cursing the Tokugawa family, who were the founders of Japan's Tokugawa shogunate. Tokugawa Leyasu's grandfather, father, and son were all killed or wounded by this sword, and Leyasu himself also had his finger cut off.",
	"apiMetaData": {
		"code": 102402,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
