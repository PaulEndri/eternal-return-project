import React, { useContext } from 'react';
import { Button, Image, Label, Segment } from 'semantic-ui-react';
import { Item } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';
import { ItemModalContext } from '../state/itemModal';

type ItemModalButtonProps = {
	id: any;
	label?: any;
	action?: any;
};
export const ItemModalButton: React.FC<ItemModalButtonProps> = ({ id, label, action }) => {
	const { setItem } = useContext(ItemModalContext);
	const item = new Item(id);

	return (
		<React.Fragment>
			<Button
				compact
				label={label}
				content={<Image centered rounded size="tiny" src={getImageSrc(item.displayName)} />}
				onClick={() => (action ? action(item.id) : setItem(item.id, item))}
				color={rarityColor(item.rarity)}
				style={{
					borderRadius: 0,
					marginBottom: '5px',
					maxWidth: label ? '150px' : '100px',
					padding: 0,
					border: '2px outset rgba(255, 255, 255, 0.2)'
				}}
			/>
		</React.Fragment>
	);
};
