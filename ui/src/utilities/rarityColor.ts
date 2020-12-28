const rarityColorMap = {
	Common: 'grey',
	Rare: 'blue',
	Uncommon: 'green',
	Epic: 'purple',
	Legendary: 'yellow'
};

export const rarityColor = (rarity: string) => {
	try {
		return rarityColorMap[rarity];
	} catch (e) {
		console.error(e);
		return rarityColorMap.Common;
	}
};
