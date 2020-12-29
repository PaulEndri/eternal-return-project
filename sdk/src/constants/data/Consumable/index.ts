import { Foods } from './Foods';
import { Drinks } from './Drinks';
import { Specials } from './Specials';

export * from './Foods';
export * from './Drinks';
export * from './Specials';

export const Consumables = {
	Foods,
	Drinks,
	Specials
};

export enum ConsumablesEnum {
	'Potato' = 'Potato',
	'Cod' = 'Cod',
	'Lemon' = 'Lemon',
	'Garlic' = 'Garlic',
	'Adhesive Bandage' = 'Adhesive Bandage',
	'Carp' = 'Carp',
	'Bread' = 'Bread',
	'Meat' = 'Meat',
	'Egg' = 'Egg',
	'Ramen' = 'Ramen',
	'Oriental Herb' = 'Oriental Herb',
	'Chocolate' = 'Chocolate',
	'Curry Powder' = 'Curry Powder',
	'Honey Cod Steak' = 'Honey Cod Steak',
	'Canned Cod Liver' = 'Canned Cod Liver',
	'Garlic Bread' = 'Garlic Bread',
	'Butter' = 'Butter',
	'Herb Medicine' = 'Herb Medicine',
	'Bungeoppang' = 'Bungeoppang',
	'Carp Bread' = 'Carp Bread',
	'Holy Water' = 'Holy Water',
	'Disinfectant' = 'Disinfectant',
	'Choco Pie' = 'Choco Pie',
	'Acupuncture Needle' = 'Acupuncture Needle',
	'Orchid' = 'Orchid',
	'Tandoori Chicken' = 'Tandoori Chicken',
	'Bacon and Garlic Sticks' = 'Bacon and Garlic Sticks',
	'Bun' = 'Bun',
	'Hamburger' = 'Hamburger',
	'Potato Bread' = 'Potato Bread',
	'Potato Soup' = 'Potato Soup',
	'Fish Fillet with Egg' = 'Fish Fillet with Egg',
	'Citrus Cake' = 'Citrus Cake',
	'Lemon Ice Cream' = 'Lemon Ice Cream',
	'Honey Garlic Pickle' = 'Honey Garlic Pickle',
	'Egg Bun' = 'Egg Bun',
	'Easter Egg' = 'Easter Egg',
	'Whiskey Bonbon' = 'Whiskey Bonbon',
	'Choco Ice Cream' = 'Choco Ice Cream',
	'Curry Bun' = 'Curry Bun',
	'French Fries' = 'French Fries',
	'Baked Potato' = 'Baked Potato',
	'Baked Carp' = 'Baked Carp',
	'Grilled Chilean Sea Bass' = 'Grilled Chilean Sea Bass',
	'Hot Ramen' = 'Hot Ramen',
	'Mocha Bread' = 'Mocha Bread',
	'Scrambled Eggs' = 'Scrambled Eggs',
	'Chocolate Chip Cookies' = 'Chocolate Chip Cookies',
	'Choco Pie Box' = 'Choco Pie Box',
	'Curry' = 'Curry',
	'Oriental Concoction' = 'Oriental Concoction',
	'Honey Butter' = 'Honey Butter',
	'Fried Chicken' = 'Fried Chicken',
	'Healing Potion' = 'Healing Potion',
	'Boiled Egg' = 'Boiled Egg',
	'Pound Cake' = 'Pound Cake',
	'Curry Croquette' = 'Curry Croquette',
	'Steak' = 'Steak',
	'First Aid Kit' = 'First Aid Kit',
	'Butter-Fried Potatoes' = 'Butter-Fried Potatoes',
	'Fish Cutlet' = 'Fish Cutlet',
	'Stir Fried Ramen' = 'Stir Fried Ramen',
	'Cold Noodles' = 'Cold Noodles',
	'Garlic Ramen' = 'Garlic Ramen',
	'Spicy Fish Stew' = 'Spicy Fish Stew',
	'Zen Vitality' = 'Zen Vitality',
	'Fish and Chips' = 'Fish and Chips',
	'Honey' = 'Honey',
	'Water' = 'Water',
	'Ice' = 'Ice',
	'Whiskey' = 'Whiskey',
	'Coffee' = 'Coffee',
	'Carbonated Water' = 'Carbonated Water',
	'Milk' = 'Milk',
	'Boiling Water' = 'Boiling Water',
	'Lemonade' = 'Lemonade',
	'Water Bottle' = 'Water Bottle',
	'Baijiu' = 'Baijiu',
	'Soju' = 'Soju',
	'Ice Coffee' = 'Ice Coffee',
	'Cocktail' = 'Cocktail',
	'Coffee Liqueur' = 'Coffee Liqueur',
	'Cola' = 'Cola',
	'Latte' = 'Latte',
	'Honey Milk' = 'Honey Milk',
	'Highball' = 'Highball',
	'Chocolate Milk' = 'Chocolate Milk',
	'Honey Water' = 'Honey Water',
	'Ice Water' = 'Ice Water',
	'On The Rocks' = 'On The Rocks',
	'Cowboy' = 'Cowboy',
	'Kaoliang Liquor' = 'Kaoliang Liquor',
	'Hot Honey Water' = 'Hot Honey Water',
	'Flower Liquor' = 'Flower Liquor',
	'Americano' = 'Americano',
	'Herbal Liquor' = 'Herbal Liquor',
	'Whiskey Cocktail' = 'Whiskey Cocktail',
	'Purified Water' = 'Purified Water',
	'Can of Cola' = 'Can of Cola',
	'Hot Chocolate' = 'Hot Chocolate',
	'White Russian' = 'White Russian',
	'Surveillance Camera' = 'Surveillance Camera',
	'Snare' = 'Snare',
	'Mouse Trap' = 'Mouse Trap',
	'Piano Wire' = 'Piano Wire',
	'Spiked Plank' = 'Spiked Plank',
	'Enhanced Mouse Trap' = 'Enhanced Mouse Trap',
	'Dynamite' = 'Dynamite',
	'Bamboo Trap' = 'Bamboo Trap',
	'Booby Trap' = 'Booby Trap',
	'Clang Clatter' = 'Clang Clatter',
	'Telephoto Camera' = 'Telephoto Camera',
	'Jungle Guillotine' = 'Jungle Guillotine',
	'Explosive Trap' = 'Explosive Trap',
	'Pendulum Axe' = 'Pendulum Axe',
	'Mine' = 'Mine',
	'RDX' = 'RDX',
	'Mithril String' = 'Mithril String',
	'Hidden Maiden' = 'Hidden Maiden',
	'Fire Trap' = 'Fire Trap',
	'C-4' = 'C-4',
	'Double Guillotine' = 'Double Guillotine',
	'Claymore' = 'Claymore',
	'Stingburst' = 'Stingburst',
	'Remote Mine' = 'Remote Mine',
	'Smart Bomb' = 'Smart Bomb'
}

export type Consumables = typeof Consumables;
