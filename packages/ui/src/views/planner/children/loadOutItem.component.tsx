import React from 'react';
import { Button, Image, Menu, Segment } from 'semantic-ui-react';
import { getImageSrc } from '../../../utilities/getImageSrc';
import { rarityColor } from '../../../utilities/rarityColor';

export const LoadOutItemComponent = ({ item, onClick, type }) => {
	if (!item || !item.name) {
		return (
			<Menu.Item
				fluid
				onClick={() => onClick(null, type)}
				style={{ borderRadius: '0px', borderBottom: '1px inset' }}
			>
				{type}
			</Menu.Item>
		);
	}
	return (
		<Menu.Item
			compact
			fluid
			onClick={() => onClick(item, type)}
			style={{
				borderRadius: '0px'
			}}
		>
			<Button
				color={rarityColor(item.rarity)}
				fluid
				style={{
					margin: 0,
					padding: 0,
					borderRadius: 0,
					border: '2px outset rgba(200, 200, 200, 0.5)'
				}}
			>
				<Image
					style={{ borderRadius: 0 }}
					centered
					size="tiny"
					src={getImageSrc(item.displayName)}
				/>
			</Button>
		</Menu.Item>
	);
};
