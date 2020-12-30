import React, { useContext } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Item } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';
import { ItemModalContext } from '../state/itemModal';

export const ItemModalButton = ({ name }) => {
	const { setItem } = useContext(ItemModalContext);

	return (
		<Button
			compact
			onClick={() => setItem(name)}
			color={rarityColor(new Item(name).rarity)}
			style={{
				borderRadius: 0,
				marginBottom: '5px',
				maxWidth: '100px',
				padding: 0,
				border: '2px outset rgba(255, 255, 255, 0.2)'
			}}
		>
			<Image centered rounded size="tiny" src={getImageSrc(name)} />
		</Button>
	);
};
