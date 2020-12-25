import { Locations as LocationsEnum } from '../constants/Locations';
import { ILocation } from '../interfaces/ILocation';

export const Locations: Record<LocationsEnum, ILocation> = {
	Alley: {
		name: 'Alley',
		href: '/Alley',
		materials: {
			Hammer: {
				name: 'Hammer',
				href: '/Hammer',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '8'
						}
					}
				]
			},
			Scissors: {
				name: 'Scissors',
				href: '/Scissors',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			'Steel Chain': {
				name: 'Steel Chain',
				href: '/Steel_Chain',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '6'
						}
					}
				]
			},
			Needle: {
				name: 'Needle',
				href: '/Needle',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Wetsuit: {
				name: 'Wetsuit',
				href: '/Wetsuit',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Bracelet: {
				name: 'Bracelet',
				href: '/Bracelet',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '6'
						}
					}
				]
			},
			'Running Shoes': {
				name: 'Running Shoes',
				href: '/Running_Shoes',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Cross: {
				name: 'Cross',
				href: '/Cross',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Binoculars: {
				name: 'Binoculars',
				href: '/Binoculars',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Rubber: {
				name: 'Rubber',
				href: '/Rubber',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Lighter: {
				name: 'Lighter',
				href: '/Lighter',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '8'
						}
					}
				]
			},
			'Stallion Medal': {
				name: 'Stallion Medal',
				href: '/Stallion_Medal',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Glue: {
				name: 'Glue',
				href: '/Glue',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '7'
						}
					}
				]
			},
			Garlic: {
				name: 'Garlic',
				href: '/Garlic',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '6'
						}
					}
				]
			},
			Ramen: {
				name: 'Ramen',
				href: '/Ramen',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '6'
						}
					}
				]
			},
			Honey: {
				name: 'Honey',
				href: '/Honey',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Alley',
							name: 'Alley',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {
			Wolf: {
				name: 'Wolf',
				href: '/Wolf',
				quantity: '4'
			},
			Bear: {
				name: 'Bear',
				href: '/Bear',
				quantity: '3'
			},
			Chicken: {
				name: 'Chicken',
				href: '/Chicken',
				quantity: '8'
			}
		},
		teleport: true,
		connections: [
			LocationsEnum['Archery Range'],
			LocationsEnum.Temple,
			LocationsEnum.Avenue,
			LocationsEnum.School
		]
	},
	Temple: {
		name: 'Temple',
		href: '/Temple',
		materials: {
			'Short Rod': {
				name: 'Short Rod',
				href: '/Short_Rod',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '5'
						}
					}
				]
			},
			Bamboo: {
				name: 'Bamboo',
				href: '/Bamboo',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			'Kitchen Knife': {
				name: 'Kitchen Knife',
				href: '/Kitchen_Knife',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '5'
						}
					}
				]
			},
			'Rusty Sword': {
				name: 'Rusty Sword',
				href: '/Rusty_Sword',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '4'
						}
					}
				]
			},
			'Short Spear': {
				name: 'Short Spear',
				href: '/Short_Spear',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '4'
						}
					}
				]
			},
			Hairband: {
				name: 'Hairband',
				href: '/Hairband',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			"Monk's Robe": {
				name: "Monk's Robe",
				href: '/Monk%27s_Robe',
				quantity: '9',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '9'
						}
					}
				]
			},
			'Fabric Armor': {
				name: 'Fabric Armor',
				href: '/Fabric_Armor',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '8'
						}
					}
				]
			},
			'Buddhist Scripture': {
				name: 'Buddhist Scripture',
				href: '/Buddhist_Scripture',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '8'
						}
					}
				]
			},
			'Stallion Medal': {
				name: 'Stallion Medal',
				href: '/Stallion_Medal',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			Cloth: {
				name: 'Cloth',
				href: '/Cloth',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			Gemstone: {
				name: 'Gemstone',
				href: '/Gemstone',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '8'
						}
					}
				]
			},
			Paper: {
				name: 'Paper',
				href: '/Paper',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			Gunpowder: {
				name: 'Gunpowder',
				href: '/Gunpowder',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '7'
						}
					}
				]
			},
			Garlic: {
				name: 'Garlic',
				href: '/Garlic',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '6'
						}
					}
				]
			},
			'Oriental Herb': {
				name: 'Oriental Herb',
				href: '/Oriental_Herb',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Temple',
							name: 'Temple',
							quantity: '6'
						}
					}
				]
			}
		},
		animals: {},
		teleport: true,
		connections: [ LocationsEnum.Alley, LocationsEnum.Avenue, LocationsEnum.Pond ]
	},
	Avenue: {
		name: 'Avenue',
		href: '/Avenue',
		materials: {
			'Glass Bottle': {
				name: 'Glass Bottle',
				href: '/Glass_Bottle',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			'Playing Cards': {
				name: 'Playing Cards',
				href: '/Playing_Cards',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			'Fountain Pen': {
				name: 'Fountain Pen',
				href: '/Fountain_Pen',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Hairband: {
				name: 'Hairband',
				href: '/Hairband',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Watch: {
				name: 'Watch',
				href: '/Watch',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Slippers: {
				name: 'Slippers',
				href: '/Slippers',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Tights: {
				name: 'Tights',
				href: '/Tights',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Fan: {
				name: 'Fan',
				href: '/Fan',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Nail: {
				name: 'Nail',
				href: '/Nail',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Battery: {
				name: 'Battery',
				href: '/Battery',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Oil: {
				name: 'Oil',
				href: '/Oil',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Cloth: {
				name: 'Cloth',
				href: '/Cloth',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '8'
						}
					}
				]
			},
			Can: {
				name: 'Can',
				href: '/Can',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '6'
						}
					}
				]
			},
			Chocolate: {
				name: 'Chocolate',
				href: '/Chocolate',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '6'
						}
					}
				]
			},
			Honey: {
				name: 'Honey',
				href: '/Honey',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '6'
						}
					}
				]
			},
			Milk: {
				name: 'Milk',
				href: '/Milk',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '6'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Avenue',
							name: 'Avenue',
							quantity: '6'
						}
					}
				]
			}
		},
		animals: {
			Dog: {
				name: 'Dog',
				href: '/Dog',
				quantity: '4'
			},
			Boar: {
				name: 'Boar',
				href: '/Boar',
				quantity: '6'
			},
			Chicken: {
				name: 'Chicken',
				href: '/Chicken',
				quantity: '5'
			}
		},
		teleport: true,
		connections: [
			LocationsEnum.Alley,
			LocationsEnum.Temple,
			LocationsEnum.School,
			LocationsEnum.Forest,
			LocationsEnum.Pond,
			LocationsEnum['Research Center']
		]
	},
	Pond: {
		name: 'Pond',
		href: '/Pond',
		materials: {
			'Short Rod': {
				name: 'Short Rod',
				href: '/Short_Rod',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '5'
						}
					}
				]
			},
			Bamboo: {
				name: 'Bamboo',
				href: '/Bamboo',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Hammer: {
				name: 'Hammer',
				href: '/Hammer',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Pickaxe: {
				name: 'Pickaxe',
				href: '/Pickaxe',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Hatchet: {
				name: 'Hatchet',
				href: '/Hatchet',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '4'
						}
					}
				]
			},
			'Short Spear': {
				name: 'Short Spear',
				href: '/Short_Spear',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '5'
						}
					}
				]
			},
			Hat: {
				name: 'Hat',
				href: '/Hat',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Bracelet: {
				name: 'Bracelet',
				href: '/Bracelet',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Flower: {
				name: 'Flower',
				href: '/Flower',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Ribbon: {
				name: 'Ribbon',
				href: '/Ribbon',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '6'
						}
					}
				]
			},
			Box: {
				name: 'Box',
				href: '/Box',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '6'
						}
					}
				]
			},
			'Mouse Trap': {
				name: 'Mouse Trap',
				href: '/Mouse_Trap',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			'Turtle Shell': {
				name: 'Turtle Shell',
				href: '/Turtle_Shell',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			},
			Gemstone: {
				name: 'Gemstone',
				href: '/Gemstone',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '8'
						}
					}
				]
			},
			'Oriental Herb': {
				name: 'Oriental Herb',
				href: '/Oriental_Herb',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Pond',
							name: 'Pond',
							quantity: '7'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Avenue,
			LocationsEnum.Temple,
			LocationsEnum.Hospital,
			LocationsEnum.Cemetery,
			LocationsEnum['Research Center']
		]
	},
	Hospital: {
		name: 'Hospital',
		href: '/Hospital',
		materials: {
			'Cotton Glove': {
				name: 'Cotton Glove',
				href: '/Cotton_Glove',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '4'
						}
					}
				]
			},
			Razor: {
				name: 'Razor',
				href: '/Razor',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Scissors: {
				name: 'Scissors',
				href: '/Scissors',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Needle: {
				name: 'Needle',
				href: '/Needle',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Bandage: {
				name: 'Bandage',
				href: '/Bandage',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '4'
						}
					}
				]
			},
			Slippers: {
				name: 'Slippers',
				href: '/Slippers',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Tights: {
				name: 'Tights',
				href: '/Tights',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Feather: {
				name: 'Feather',
				href: '/Feather',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			'Scrap Metal': {
				name: 'Scrap Metal',
				href: '/Scrap_Metal',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			'Laser Pointer': {
				name: 'Laser Pointer',
				href: '/Laser_Pointer',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Alcohol: {
				name: 'Alcohol',
				href: '/Alcohol',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '4'
						}
					}
				]
			},
			Glue: {
				name: 'Glue',
				href: '/Glue',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Lemon: {
				name: 'Lemon',
				href: '/Lemon',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '4'
						}
					}
				]
			},
			Ice: {
				name: 'Ice',
				href: '/Ice',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '6'
						}
					}
				]
			},
			Milk: {
				name: 'Milk',
				href: '/Milk',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Hospital',
							name: 'Hospital',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {
			Wolf: {
				name: 'Wolf',
				href: '/Wolf',
				quantity: '4'
			},
			Dog: {
				name: 'Dog',
				href: '/Dog',
				quantity: '3'
			},
			Chicken: {
				name: 'Chicken',
				href: '/Chicken',
				quantity: '3'
			}
		},
		teleport: true,
		connections: [ LocationsEnum.Pond, LocationsEnum.Factory ]
	},
	'Archery Range': {
		name: 'Archery Range',
		href: '/Archery_Range',
		materials: {
			Bamboo: {
				name: 'Bamboo',
				href: '/Bamboo',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '6'
						}
					}
				]
			},
			'Iron Ball': {
				name: 'Iron Ball',
				href: '/Iron_Ball',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Bow: {
				name: 'Bow',
				href: '/Bow',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '4'
						}
					}
				]
			},
			Hat: {
				name: 'Hat',
				href: '/Hat',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			"Monk's Robe": {
				name: "Monk's Robe",
				href: '/Monk%27s_Robe',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			'Fabric Armor': {
				name: 'Fabric Armor',
				href: '/Fabric_Armor',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '6'
						}
					}
				]
			},
			'Running Shoes': {
				name: 'Running Shoes',
				href: '/Running_Shoes',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Nail: {
				name: 'Nail',
				href: '/Nail',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '6'
						}
					}
				]
			},
			Rubber: {
				name: 'Rubber',
				href: '/Rubber',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Oil: {
				name: 'Oil',
				href: '/Oil',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Paper: {
				name: 'Paper',
				href: '/Paper',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Gunpowder: {
				name: 'Gunpowder',
				href: '/Gunpowder',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '6'
						}
					}
				]
			},
			Egg: {
				name: 'Egg',
				href: '/Egg',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Ramen: {
				name: 'Ramen',
				href: '/Ramen',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '5'
						}
					}
				]
			},
			Chocolate: {
				name: 'Chocolate',
				href: '/Chocolate',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Archery_Range',
							name: 'Archery Range',
							quantity: '4'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [ LocationsEnum.Alley, LocationsEnum.School, LocationsEnum.Hotel ]
	},
	School: {
		name: 'School',
		href: '/School',
		materials: {
			Whip: {
				name: 'Whip',
				href: '/Whip',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '4'
						}
					}
				]
			},
			Razor: {
				name: 'Razor',
				href: '/Razor',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Chalk: {
				name: 'Chalk',
				href: '/Chalk',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Scissors: {
				name: 'Scissors',
				href: '/Scissors',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			'Fountain Pen': {
				name: 'Fountain Pen',
				href: '/Fountain_Pen',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '7'
						}
					}
				]
			},
			Hat: {
				name: 'Hat',
				href: '/Hat',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			'Bike Helmet': {
				name: 'Bike Helmet',
				href: '/Bike_Helmet',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Windbreaker: {
				name: 'Windbreaker',
				href: '/Windbreaker',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '7'
						}
					}
				]
			},
			Bandage: {
				name: 'Bandage',
				href: '/Bandage',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Slippers: {
				name: 'Slippers',
				href: '/Slippers',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '7'
						}
					}
				]
			},
			Ribbon: {
				name: 'Ribbon',
				href: '/Ribbon',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '7'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Lighter: {
				name: 'Lighter',
				href: '/Lighter',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '7'
						}
					}
				]
			},
			'Laser Pointer': {
				name: 'Laser Pointer',
				href: '/Laser_Pointer',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			},
			Alcohol: {
				name: 'Alcohol',
				href: '/Alcohol',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '5'
						}
					}
				]
			},
			Can: {
				name: 'Can',
				href: '/Can',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '5'
						}
					}
				]
			},
			Bread: {
				name: 'Bread',
				href: '/Bread',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/School',
							name: 'School',
							quantity: '6'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Alley,
			LocationsEnum.Avenue,
			LocationsEnum.Forest,
			LocationsEnum['Archery Range'],
			LocationsEnum.Hotel
		]
	},
	'Research Center': {
		name: 'Research Center',
		href: '/Research_Center',
		materials: {},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Avenue,
			LocationsEnum.Forest,
			LocationsEnum.Cemetery,
			LocationsEnum.Pond
		]
	},
	Cemetery: {
		name: 'Cemetery',
		href: '/Cemetery',
		materials: {
			'Brass Knuckles': {
				name: 'Brass Knuckles',
				href: '/Brass_Knuckles',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '5'
						}
					}
				]
			},
			Bamboo: {
				name: 'Bamboo',
				href: '/Bamboo',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Pickaxe: {
				name: 'Pickaxe',
				href: '/Pickaxe',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			'Steel Chain': {
				name: 'Steel Chain',
				href: '/Steel_Chain',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Hairband: {
				name: 'Hairband',
				href: '/Hairband',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			'Fabric Armor': {
				name: 'Fabric Armor',
				href: '/Fabric_Armor',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Feather: {
				name: 'Feather',
				href: '/Feather',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Flower: {
				name: 'Flower',
				href: '/Flower',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '6'
						}
					}
				]
			},
			'Mouse Trap': {
				name: 'Mouse Trap',
				href: '/Mouse_Trap',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '6'
						}
					}
				]
			},
			'Iron Ore': {
				name: 'Iron Ore',
				href: '/Iron_Ore',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Gunpowder: {
				name: 'Gunpowder',
				href: '/Gunpowder',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '7'
						}
					}
				]
			},
			Garlic: {
				name: 'Garlic',
				href: '/Garlic',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '5'
						}
					}
				]
			},
			Egg: {
				name: 'Egg',
				href: '/Egg',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '5'
						}
					}
				]
			},
			Ice: {
				name: 'Ice',
				href: '/Ice',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '5'
						}
					}
				]
			},
			Coffee: {
				name: 'Coffee',
				href: '/Coffee',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Cemetery',
							name: 'Cemetery',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Pond,
			LocationsEnum.Hospital,
			LocationsEnum.Factory,
			LocationsEnum.Chapel,
			LocationsEnum.Forest,
			LocationsEnum['Research Center']
		]
	},
	Factory: {
		name: 'Factory',
		href: '/Factory',
		materials: {
			'Iron Ball': {
				name: 'Iron Ball',
				href: '/Iron_Ball',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			Chalk: {
				name: 'Chalk',
				href: '/Chalk',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			'Short Crossbow': {
				name: 'Short Crossbow',
				href: '/Short_Crossbow',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '4'
						}
					}
				]
			},
			'Walther PPK': {
				name: 'Walther PPK',
				href: '/Walther_PPK',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '4'
						}
					}
				]
			},
			Fedorova: {
				name: 'Fedorova',
				href: '/Fedorova',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '4'
						}
					}
				]
			},
			Hatchet: {
				name: 'Hatchet',
				href: '/Hatchet',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '4'
						}
					}
				]
			},
			Bandage: {
				name: 'Bandage',
				href: '/Bandage',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '6'
						}
					}
				]
			},
			Binoculars: {
				name: 'Binoculars',
				href: '/Binoculars',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			Nail: {
				name: 'Nail',
				href: '/Nail',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			'Scrap Metal': {
				name: 'Scrap Metal',
				href: '/Scrap_Metal',
				quantity: '9',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '9'
						}
					}
				]
			},
			Lighter: {
				name: 'Lighter',
				href: '/Lighter',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '8'
						}
					}
				]
			},
			Battery: {
				name: 'Battery',
				href: '/Battery',
				quantity: '9',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '9'
						}
					}
				]
			},
			Alcohol: {
				name: 'Alcohol',
				href: '/Alcohol',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '6'
						}
					}
				]
			},
			Oil: {
				name: 'Oil',
				href: '/Oil',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			Glue: {
				name: 'Glue',
				href: '/Glue',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '7'
						}
					}
				]
			},
			'Curry Powder': {
				name: 'Curry Powder',
				href: '/Curry_Powder',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Factory',
							name: 'Factory',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Factory,
			LocationsEnum.Cemetery,
			LocationsEnum.Chapel,
			LocationsEnum.Dock
		]
	},
	Hotel: {
		name: 'Hotel',
		href: '/Hotel',
		materials: {
			'Cotton Glove': {
				name: 'Cotton Glove',
				href: '/Cotton_Glove',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '4'
						}
					}
				]
			},
			'Playing Cards': {
				name: 'Playing Cards',
				href: '/Playing_Cards',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '6'
						}
					}
				]
			},
			'Walther PPK': {
				name: 'Walther PPK',
				href: '/Walther_PPK',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '5'
						}
					}
				]
			},
			Fedorova: {
				name: 'Fedorova',
				href: '/Fedorova',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '4'
						}
					}
				]
			},
			'Kitchen Knife': {
				name: 'Kitchen Knife',
				href: '/Kitchen_Knife',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '4'
						}
					}
				]
			},
			Needle: {
				name: 'Needle',
				href: '/Needle',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '6'
						}
					}
				]
			},
			Windbreaker: {
				name: 'Windbreaker',
				href: '/Windbreaker',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '7'
						}
					}
				]
			},
			Watch: {
				name: 'Watch',
				href: '/Watch',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '6'
						}
					}
				]
			},
			Binoculars: {
				name: 'Binoculars',
				href: '/Binoculars',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '6'
						}
					}
				]
			},
			'Piano Wire': {
				name: 'Piano Wire',
				href: '/Piano_Wire',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '7'
						}
					}
				]
			},
			'Scrap Metal': {
				name: 'Scrap Metal',
				href: '/Scrap_Metal',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '8'
						}
					}
				]
			},
			Cloth: {
				name: 'Cloth',
				href: '/Cloth',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '7'
						}
					}
				]
			},
			'Iron Ore': {
				name: 'Iron Ore',
				href: '/Iron_Ore',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '7'
						}
					}
				]
			},
			Lemon: {
				name: 'Lemon',
				href: '/Lemon',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '6'
						}
					}
				]
			},
			Ice: {
				name: 'Ice',
				href: '/Ice',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '7'
						}
					}
				]
			},
			Whiskey: {
				name: 'Whiskey',
				href: '/Whiskey',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '5'
						}
					}
				]
			},
			'Carbonated Water': {
				name: 'Carbonated Water',
				href: '/Carbonated_Water',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Hotel',
							name: 'Hotel',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {},
		teleport: true,
		connections: [
			LocationsEnum['Archery Range'],
			LocationsEnum.School,
			LocationsEnum.Forest,
			LocationsEnum.Beach
		]
	},
	Forest: {
		name: 'Forest',
		href: '/Forest',
		materials: {
			'Brass Knuckles': {
				name: 'Brass Knuckles',
				href: '/Brass_Knuckles',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '5'
						}
					}
				]
			},
			Bamboo: {
				name: 'Bamboo',
				href: '/Bamboo',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			'Iron Ball': {
				name: 'Iron Ball',
				href: '/Iron_Ball',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			'Short Crossbow': {
				name: 'Short Crossbow',
				href: '/Short_Crossbow',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '4'
						}
					}
				]
			},
			'Long Rifle': {
				name: 'Long Rifle',
				href: '/Long_Rifle',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '4'
						}
					}
				]
			},
			Pickaxe: {
				name: 'Pickaxe',
				href: '/Pickaxe',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '8'
						}
					}
				]
			},
			'Short Spear': {
				name: 'Short Spear',
				href: '/Short_Spear',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '4'
						}
					}
				]
			},
			Tights: {
				name: 'Tights',
				href: '/Tights',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			Feather: {
				name: 'Feather',
				href: '/Feather',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			Flower: {
				name: 'Flower',
				href: '/Flower',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			Fan: {
				name: 'Fan',
				href: '/Fan',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '8'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '5'
						}
					}
				]
			},
			Gemstone: {
				name: 'Gemstone',
				href: '/Gemstone',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '8'
						}
					}
				]
			},
			'Iron Ore': {
				name: 'Iron Ore',
				href: '/Iron_Ore',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '7'
						}
					}
				]
			},
			Egg: {
				name: 'Egg',
				href: '/Egg',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '6'
						}
					}
				]
			},
			'Oriental Herb': {
				name: 'Oriental Herb',
				href: '/Oriental_Herb',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '6'
						}
					}
				]
			},
			Honey: {
				name: 'Honey',
				href: '/Honey',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Forest',
							name: 'Forest',
							quantity: '6'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [
			LocationsEnum.Hotel,
			LocationsEnum.School,
			LocationsEnum.Avenue,
			LocationsEnum.Cemetery,
			LocationsEnum.Chapel,
			LocationsEnum.Avenue,
			LocationsEnum.Beach,
			LocationsEnum['Research Center']
		]
	},
	Chapel: {
		name: 'Chapel',
		href: '/Chapel',
		materials: {
			Whip: {
				name: 'Whip',
				href: '/Whip',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '4'
						}
					}
				]
			},
			'Glass Bottle': {
				name: 'Glass Bottle',
				href: '/Glass_Bottle',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Razor: {
				name: 'Razor',
				href: '/Razor',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Chalk: {
				name: 'Chalk',
				href: '/Chalk',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Bow: {
				name: 'Bow',
				href: '/Bow',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '4'
						}
					}
				]
			},
			'Rusty Sword': {
				name: 'Rusty Sword',
				href: '/Rusty_Sword',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '4'
						}
					}
				]
			},
			'Bike Helmet': {
				name: 'Bike Helmet',
				href: '/Bike_Helmet',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Fan: {
				name: 'Fan',
				href: '/Fan',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Box: {
				name: 'Box',
				href: '/Box',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			'Holy Grail': {
				name: 'Holy Grail',
				href: '/Holy_Grail',
				quantity: '9',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '9'
						}
					}
				]
			},
			Cross: {
				name: 'Cross',
				href: '/Cross',
				quantity: '9',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '9'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '5'
						}
					}
				]
			},
			'Piano Wire': {
				name: 'Piano Wire',
				href: '/Piano_Wire',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Paper: {
				name: 'Paper',
				href: '/Paper',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '6'
						}
					}
				]
			},
			Bread: {
				name: 'Bread',
				href: '/Bread',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '4'
						}
					}
				]
			},
			Milk: {
				name: 'Milk',
				href: '/Milk',
				quantity: '3',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '3'
						}
					}
				]
			},
			Whiskey: {
				name: 'Whiskey',
				href: '/Whiskey',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Chapel',
							name: 'Chapel',
							quantity: '4'
						}
					}
				]
			}
		},
		animals: {},
		teleport: true,
		connections: [
			LocationsEnum.Forest,
			LocationsEnum.Cemetery,
			LocationsEnum.Dock,
			LocationsEnum.Uptown,
			LocationsEnum.Forest
		]
	},
	Beach: {
		name: 'Beach',
		href: '/Beach',
		materials: {
			'Walther PPK': {
				name: 'Walther PPK',
				href: '/Walther_PPK',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '4'
						}
					}
				]
			},
			Hammer: {
				name: 'Hammer',
				href: '/Hammer',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			Hatchet: {
				name: 'Hatchet',
				href: '/Hatchet',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '5'
						}
					}
				]
			},
			'Steel Chain': {
				name: 'Steel Chain',
				href: '/Steel_Chain',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			'Bike Helmet': {
				name: 'Bike Helmet',
				href: '/Bike_Helmet',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			'Full Body Swimsuit': {
				name: 'Full Body Swimsuit',
				href: '/Full_Body_Swimsuit',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			Binoculars: {
				name: 'Binoculars',
				href: '/Binoculars',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '5'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '5'
						}
					}
				]
			},
			'Mouse Trap': {
				name: 'Mouse Trap',
				href: '/Mouse_Trap',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '5'
						}
					}
				]
			},
			'Piano Wire': {
				name: 'Piano Wire',
				href: '/Piano_Wire',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			'Turtle Shell': {
				name: 'Turtle Shell',
				href: '/Turtle_Shell',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			'Stallion Medal': {
				name: 'Stallion Medal',
				href: '/Stallion_Medal',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '6'
						}
					}
				]
			},
			Can: {
				name: 'Can',
				href: '/Can',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '4'
						}
					}
				]
			},
			'Carbonated Water': {
				name: 'Carbonated Water',
				href: '/Carbonated_Water',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '5'
						}
					}
				]
			},
			Gemstone: {
				name: 'Gemstone',
				href: '/Gemstone',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '7'
						}
					}
				]
			},
			Pickaxe: {
				name: 'Pickaxe',
				href: '/Pickaxe',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Beach',
							name: 'Beach',
							quantity: '7'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [ LocationsEnum.Hotel, LocationsEnum.Forest, LocationsEnum.Uptown ]
	},
	Uptown: {
		name: 'Uptown',
		href: '/Uptown',
		materials: {
			'Fountain Pen': {
				name: 'Fountain Pen',
				href: '/Fountain_Pen',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			Windbreaker: {
				name: 'Windbreaker',
				href: '/Windbreaker',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			Watch: {
				name: 'Watch',
				href: '/Watch',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			Bracelet: {
				name: 'Bracelet',
				href: '/Bracelet',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			'Running Shoes': {
				name: 'Running Shoes',
				href: '/Running_Shoes',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			Flower: {
				name: 'Flower',
				href: '/Flower',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '7'
						}
					}
				]
			},
			Ribbon: {
				name: 'Ribbon',
				href: '/Ribbon',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '7'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			'Piano Wire': {
				name: 'Piano Wire',
				href: '/Piano_Wire',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '7'
						}
					}
				]
			},
			'Laser Pointer': {
				name: 'Laser Pointer',
				href: '/Laser_Pointer',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '6'
						}
					}
				]
			},
			Oil: {
				name: 'Oil',
				href: '/Oil',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '7'
						}
					}
				]
			},
			Lemon: {
				name: 'Lemon',
				href: '/Lemon',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			},
			Chocolate: {
				name: 'Chocolate',
				href: '/Chocolate',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			},
			'Curry Powder': {
				name: 'Curry Powder',
				href: '/Curry_Powder',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			},
			Whiskey: {
				name: 'Whiskey',
				href: '/Whiskey',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			},
			Coffee: {
				name: 'Coffee',
				href: '/Coffee',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			},
			'Carbonated Water': {
				name: 'Carbonated Water',
				href: '/Carbonated_Water',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Uptown',
							name: 'Uptown',
							quantity: '5'
						}
					}
				]
			}
		},
		animals: {},
		teleport: true,
		connections: [
			LocationsEnum.Beach,
			LocationsEnum.Forest,
			LocationsEnum.Chapel,
			LocationsEnum.Dock
		]
	},
	Dock: {
		name: 'Dock',
		href: '/Dock',
		materials: {
			'Short Rod': {
				name: 'Short Rod',
				href: '/Short_Rod',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '5'
						}
					}
				]
			},
			'Glass Bottle': {
				name: 'Glass Bottle',
				href: '/Glass_Bottle',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			'Long Rifle': {
				name: 'Long Rifle',
				href: '/Long_Rifle',
				quantity: '3',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '3'
						}
					}
				]
			},
			'Kitchen Knife': {
				name: 'Kitchen Knife',
				href: '/Kitchen_Knife',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '4'
						}
					}
				]
			},
			Hammer: {
				name: 'Hammer',
				href: '/Hammer',
				quantity: '5',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '5'
						}
					}
				]
			},
			'Rusty Sword': {
				name: 'Rusty Sword',
				href: '/Rusty_Sword',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '4'
						}
					}
				]
			},
			Wetsuit: {
				name: 'Wetsuit',
				href: '/Wetsuit',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			Bandage: {
				name: 'Bandage',
				href: '/Bandage',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			Box: {
				name: 'Box',
				href: '/Box',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			'Surveillance Camera': {
				name: 'Surveillance Camera',
				href: '/Surveillance_Camera',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '6'
						}
					}
				]
			},
			Snare: {
				name: 'Snare',
				href: '/Snare',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '6'
						}
					}
				]
			},
			'Turtle Shell': {
				name: 'Turtle Shell',
				href: '/Turtle_Shell',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			Rubber: {
				name: 'Rubber',
				href: '/Rubber',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '8'
						}
					}
				]
			},
			'Scrap Metal': {
				name: 'Scrap Metal',
				href: '/Scrap_Metal',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '8'
						}
					}
				]
			},
			Lighter: {
				name: 'Lighter',
				href: '/Lighter',
				quantity: '8',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '8'
						}
					}
				]
			},
			Battery: {
				name: 'Battery',
				href: '/Battery',
				quantity: '7',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '7'
						}
					}
				]
			},
			Bread: {
				name: 'Bread',
				href: '/Bread',
				quantity: '4',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '4'
						}
					}
				]
			},
			Ramen: {
				name: 'Ramen',
				href: '/Ramen',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '6'
						}
					}
				]
			},
			Coffee: {
				name: 'Coffee',
				href: '/Coffee',
				quantity: '6',
				locations: [
					{
						location: {
							href: '/Dock',
							name: 'Dock',
							quantity: '6'
						}
					}
				]
			}
		},
		animals: {},
		teleport: false,
		connections: [ LocationsEnum.Uptown, LocationsEnum.Chapel, LocationsEnum.Factory ]
	}
};
