import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';

export const LoadOutItemComponent = ({ item, onClick, type }) => {
	if (!item) {
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
			style={{ border: '2px solid rgba(125, 125, 125, 0.5)', borderRadius: '0' }}
		>
			<Image rounded size="tiny" src={getImageSrc(item.name)} />
		</Button>
	);
};
