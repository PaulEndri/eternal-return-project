import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';

export const LoadOutItemComponent = ({ item, onClick, type }) => {
	if (!item || !item.name) {
		return (
			<Button
				compact
				fluid
				secondary
				onClick={() => onClick(null, type)}
				style={{ borderRadius: '0' }}
			>
				{type}
			</Button>
		);
	}
	return (
		<Button
			compact
			fluid
			color={rarityColor(item.rarity)}
			onClick={() => onClick(item, type)}
			style={{ padding: 0, border: '3px outset rgba(255, 255, 255, 0.2)', borderRadius: '0' }}
		>
			<Image centered rounded size="tiny" src={getImageSrc(item.name)} />
		</Button>
	);
};
