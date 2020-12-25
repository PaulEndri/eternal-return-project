const rarityColorMap = {
	Common: 'grey',
	Rare: 'blue',
	Uncommon: 'green',
	Epic: 'purple',
	Legendary: 'yellow'
};

export const rarityColor = (rarity: string) => rarityColorMap[rarity];
