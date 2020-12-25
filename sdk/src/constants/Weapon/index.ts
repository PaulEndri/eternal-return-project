import { Daggers } from './Daggers';
import { TwoHandedSwords } from './TwoHandedSwords';
import { Axes } from './Axes';
import { DualSwords } from './DualSwords';
import { Pistols } from './Pistols';
import { AssaultRifles } from './AssaultRifles';
import { SniperRifles } from './SniperRifles';
import { Rapiers } from './Rapiers';
import { Spears } from './Spears';
import { Hammers } from './Hammers';
import { Bats } from './Bats';
import { Throws } from './Throws';
import { Shurikens } from './Shurikens';
import { Bows } from './Bows';
import { Crossbows } from './Crossbows';
import { Gloves } from './Gloves';
import { Tonfas } from './Tonfas';
import { Guitars } from './Guitars';
import { Nunchakus } from './Nunchakus';
import { Whips } from './Whips';

export * from './Daggers';
export * from './TwoHandedSwords';
export * from './Axes';
export * from './DualSwords';
export * from './Pistols';
export * from './AssaultRifles';
export * from './SniperRifles';
export * from './Rapiers';
export * from './Spears';
export * from './Hammers';
export * from './Bats';
export * from './Throws';
export * from './Shurikens';
export * from './Bows';
export * from './Crossbows';
export * from './Gloves';
export * from './Tonfas';
export * from './Guitars';
export * from './Nunchakus';
export * from './Whips';

export enum WeaponTypes {
	Daggers = 'Daggers',
	TwoHandedSwords = 'Two-Handed Swords',
	Axes = 'Axes',
	DualSwords = 'Dual Swords',
	Pistols = 'Pistols',
	AssaultRifles = 'Assault Rifles',
	SniperRifles = 'Sniper Rifles',
	Rapiers = 'Rapiers',
	Spears = 'Spears',
	Hammers = 'Hammers',
	Bats = 'Bats',
	Throws = 'Throws',
	Shurikens = 'Shurikens',
	Bows = 'Bows',
	Crossbows = 'Crossbows',
	Gloves = 'Gloves',
	Tonfas = 'Tonfas',
	Guitars = 'Guitars',
	Nunchakus = 'Nunchakus',
	Whips = 'Whips'
}

export const Weapons = {
	Daggers,
	TwoHandedSwords,
	Axes,
	DualSwords,
	Pistols,
	AssaultRifles,
	SniperRifles,
	Rapiers,
	Spears,
	Hammers,
	Bats,
	Throws,
	Shurikens,
	Bows,
	Crossbows,
	Gloves,
	Tonfas,
	Guitars,
	Nunchakus,
	Whips
};

export enum WeaponsEnum {
	'Scissors' = 'Scissors',
	'Fountain Pen' = 'Fountain Pen',
	'Kitchen Knife' = 'Kitchen Knife',
	'Army Knife' = 'Army Knife',
	'Rose Knife' = 'Rose Knife',
	'Carnwennan' = 'Carnwennan',
	'Mount Slicer' = 'Mount Slicer',
	'Vibroblade' = 'Vibroblade',
	'Fragarach' = 'Fragarach',
	'Rusty Sword' = 'Rusty Sword',
	'Shamshir' = 'Shamshir',
	'Katana' = 'Katana',
	'Masamune' = 'Masamune',
	'Muramasa' = 'Muramasa',
	'Bastard Sword' = 'Bastard Sword',
	'Jewel Sword' = 'Jewel Sword',
	'Thuan Thien' = 'Thuan Thien',
	'Plasma Sword' = 'Plasma Sword',
	'Excalibur' = 'Excalibur',
	'Arondight' = 'Arondight',
	'Hovud' = 'Hovud',
	'Monohoshizao' = 'Monohoshizao',
	'Laevateinn' = 'Laevateinn',
	'Dainsleif' = 'Dainsleif',
	'Pickaxe' = 'Pickaxe',
	'Hatchet' = 'Hatchet',
	'Chain Scythe' = 'Chain Scythe',
	'Battle Axe' = 'Battle Axe',
	'Light Hatchet' = 'Light Hatchet',
	"Reaper's Scythe" = "Reaper's Scythe",
	'Gigantic Axe' = 'Gigantic Axe',
	'Beam Axe' = 'Beam Axe',
	'Santa Muerte' = 'Santa Muerte',
	'Scythe' = 'Scythe',
	'Parashu' = 'Parashu',
	'Harpe' = 'Harpe',
	'Twin Swords' = 'Twin Swords',
	'Florentine' = 'Florentine',
	'Divine Dual Swords' = 'Divine Dual Swords',
	'Starsteel Twin Swords' = 'Starsteel Twin Swords',
	'Dioscuri' = 'Dioscuri',
	'Lloigor & Zahr' = 'Lloigor & Zahr',
	'Walther PPK' = 'Walther PPK',
	'Magnum-Python' = 'Magnum-Python',
	'Beretta M92F' = 'Beretta M92F',
	'FN57' = 'FN57',
	'Double Revolver SP' = 'Double Revolver SP',
	'Magnum-Anaconda' = 'Magnum-Anaconda',
	"Devil's Marksman" = "Devil's Marksman",
	'Elegance' = 'Elegance',
	'Electron Blaster' = 'Electron Blaster',
	'Magnum-Boa' = 'Magnum-Boa',
	'Kelte' = 'Kelte',
	'Fedorova' = 'Fedorova',
	'STG44' = 'STG44',
	'AK-47' = 'AK-47',
	'M16A1' = 'M16A1',
	'Machine Gun' = 'Machine Gun',
	'Gatling Gun' = 'Gatling Gun',
	'AK-12' = 'AK-12',
	'XCR' = 'XCR',
	'Long Rifle' = 'Long Rifle',
	'Springfield' = 'Springfield',
	'Harpoon Gun' = 'Harpoon Gun',
	'Golden Rifle' = 'Golden Rifle',
	'Railgun' = 'Railgun',
	'Tac-50' = 'Tac-50',
	'Intervention' = 'Intervention',
	'NTW-20' = 'NTW-20',
	'Polaris' = 'Polaris',
	'The Deadly Ray' = 'The Deadly Ray',
	'Needle' = 'Needle',
	'Rapier' = 'Rapier',
	'Apricot Sword' = 'Apricot Sword',
	'Sword of Justice' = 'Sword of Justice',
	'Durendal mk2' = 'Durendal mk2',
	'Volticletto' = 'Volticletto',
	'Meteor Claymore' = 'Meteor Claymore',
	'Joyeuse' = 'Joyeuse',
	'Mistilteinn' = 'Mistilteinn',
	'Short Spear' = 'Short Spear',
	'Bamboo Spear' = 'Bamboo Spear',
	'Bident' = 'Bident',
	'Pike' = 'Pike',
	'Halberd Axe' = 'Halberd Axe',
	'Sharpened Spear' = 'Sharpened Spear',
	'Gentian Silver Gun' = 'Gentian Silver Gun',
	'Eighteen Foot Spear' = 'Eighteen Foot Spear',
	'Cosmic Bident' = 'Cosmic Bident',
	'Lance of Poseidon' = 'Lance of Poseidon',
	'Fangtian Huaji' = 'Fangtian Huaji',
	'Dragon Guandao' = 'Dragon Guandao',
	'Blazing Lance' = 'Blazing Lance',
	'Spear of Longinus' = 'Spear of Longinus',
	'Hammer' = 'Hammer',
	'Warhammer' = 'Warhammer',
	'Morning Star' = 'Morning Star',
	'Black Stag Hammer' = 'Black Stag Hammer',
	'Fang Mace' = 'Fang Mace',
	'Hammer of Dagda' = 'Hammer of Dagda',
	'Hammer of Thor' = 'Hammer of Thor',
	'Evening Star' = 'Evening Star',
	'Magic Stick' = 'Magic Stick',
	'Branch' = 'Branch',
	'Short Rod' = 'Short Rod',
	'Long Rod' = 'Long Rod',
	'Goblin Bat' = 'Goblin Bat',
	'Torch' = 'Torch',
	'Umbrella' = 'Umbrella',
	'Statue of Soteria' = 'Statue of Soteria',
	'Spy Umbrella' = 'Spy Umbrella',
	'Mallet' = 'Mallet',
	'Monkey King Bar' = 'Monkey King Bar',
	'Iron Ball' = 'Iron Ball',
	'Baseball' = 'Baseball',
	'Grenade' = 'Grenade',
	'Molotov Cocktail' = 'Molotov Cocktail',
	'Signed Ball' = 'Signed Ball',
	'Sling' = 'Sling',
	'Flour Bomb' = 'Flour Bomb',
	'Ball Lightning' = 'Ball Lightning',
	'Flubber' = 'Flubber',
	'Spiky Bouncy Ball' = 'Spiky Bouncy Ball',
	'Incendiary Bomb' = 'Incendiary Bomb',
	'Grenade of Antioch' = 'Grenade of Antioch',
	"David's Sling" = "David's Sling",
	'Smoke Bomb' = 'Smoke Bomb',
	'High Explosive Grenade' = 'High Explosive Grenade',
	'Ruthenium Marble' = 'Ruthenium Marble',
	'Razor' = 'Razor',
	'Playing Cards' = 'Playing Cards',
	'Chalk' = 'Chalk',
	'Dart' = 'Dart',
	'Vintage Cards' = 'Vintage Cards',
	'Onyx Dagger' = 'Onyx Dagger',
	'Throwing Stars' = 'Throwing Stars',
	'Charm' = 'Charm',
	'Willow Leaf Spike' = 'Willow Leaf Spike',
	'Chakram' = 'Chakram',
	'Apricot Flower Tag' = 'Apricot Flower Tag',
	'Venom Dart' = 'Venom Dart',
	'Dharma Chakram' = 'Dharma Chakram',
	'Plumbata' = 'Plumbata',
	'Cards of Tyranny' = 'Cards of Tyranny',
	'Mystic Jade Charm' = 'Mystic Jade Charm',
	'Fuhma Shuriken' = 'Fuhma Shuriken',
	'Wind and Fire Wheels' = 'Wind and Fire Wheels',
	'Azure Dagger' = 'Azure Dagger',
	'Flechette' = 'Flechette',
	'Frost Venom Dart' = 'Frost Venom Dart',
	'Death Rune' = 'Death Rune',
	'Sudarsana' = 'Sudarsana',
	'Petal Torrent' = 'Petal Torrent',
	'Bow' = 'Bow',
	'Wooden Bow' = 'Wooden Bow',
	'Longbow' = 'Longbow',
	'Composite Bow' = 'Composite Bow',
	'Strong Bow' = 'Strong Bow',
	'Stallion Bow' = 'Stallion Bow',
	'Mighty Bow' = 'Mighty Bow',
	'Pellet Bow' = 'Pellet Bow',
	'Scorchbow' = 'Scorchbow',
	'Ancient Bolt' = 'Ancient Bolt',
	'Golden-Ratio Bow' = 'Golden-Ratio Bow',
	'Twinbow' = 'Twinbow',
	'Elemental Bow' = 'Elemental Bow',
	'Failnaught' = 'Failnaught',
	'Short Crossbow' = 'Short Crossbow',
	'Long Crossbow' = 'Long Crossbow',
	'Crossbow' = 'Crossbow',
	'Power Crossbow' = 'Power Crossbow',
	'Laser Crossbow' = 'Laser Crossbow',
	'Heavy Crossbow' = 'Heavy Crossbow',
	'Steel Bow' = 'Steel Bow',
	'The Legend of The General' = 'The Legend of The General',
	'Ballista' = 'Ballista',
	'Sniper Crossbow' = 'Sniper Crossbow',
	'The Golden Ghost' = 'The Golden Ghost',
	'Sharanga' = 'Sharanga',
	'Brass Knuckles' = 'Brass Knuckles',
	'Cotton Glove' = 'Cotton Glove',
	'Leather Glove' = 'Leather Glove',
	'Iron Knuckles' = 'Iron Knuckles',
	'Gauntlet' = 'Gauntlet',
	'Wing Knuckles' = 'Wing Knuckles',
	'Bone Gauntlet' = 'Bone Gauntlet',
	'Shatter Shell Gauntlet' = 'Shatter Shell Gauntlet',
	'Glass Knuckles' = 'Glass Knuckles',
	'Phoenix Gloves' = 'Phoenix Gloves',
	'One Inch Punch' = 'One Inch Punch',
	'Divine Fist' = 'Divine Fist',
	'Bloodwing Knuckles' = 'Bloodwing Knuckles',
	'Frost Petal Hand' = 'Frost Petal Hand',
	"Buddha's Palm" = "Buddha's Palm",
	'Brasil Gauntlet' = 'Brasil Gauntlet',
	'White Claw Punch' = 'White Claw Punch',
	'Imperial Silk Glove' = 'Imperial Silk Glove',
	'Bamboo' = 'Bamboo',
	'Tonfa' = 'Tonfa',
	'Police Baton' = 'Police Baton',
	'Ryukyu Tonfa' = 'Ryukyu Tonfa',
	'Tactical Tonfa' = 'Tactical Tonfa',
	'Mai Sok' = 'Mai Sok',
	'Plasma Tonfa' = 'Plasma Tonfa',
	'Starter Guitar' = 'Starter Guitar',
	'Golden Bridge' = 'Golden Bridge',
	'Single Coil Pickup' = 'Single Coil Pickup',
	'Ruby Special' = 'Ruby Special',
	'Humbucker Pickup' = 'Humbucker Pickup',
	'King-V' = 'King-V',
	'Nocaster' = 'Nocaster',
	'Superstrat' = 'Superstrat',
	'Wild Horse' = 'Wild Horse',
	'Bohemian' = 'Bohemian',
	'Stairway to Heaven' = 'Stairway to Heaven',
	'Purple Haze' = 'Purple Haze',
	'Satisfaction' = 'Satisfaction',
	'Wonderful Tonight' = 'Wonderful Tonight',
	'The Wall' = 'The Wall',
	'Teen Spirit' = 'Teen Spirit',
	'Steel Chain' = 'Steel Chain',
	'Nunchaku' = 'Nunchaku',
	'Sharper' = 'Sharper',
	'Bleeder' = 'Bleeder',
	'The Smiting Dragon' = 'The Smiting Dragon',
	'Vibro Nunchaku' = 'Vibro Nunchaku'
}

// eslint-disable-next-line
export type Weapons = typeof Weapons;
