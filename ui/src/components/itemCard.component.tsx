import React, { FunctionComponent, useContext } from 'react';
import { Button, Header, Image, List, Label, Segment } from 'semantic-ui-react';
import { Item, IBasicItem } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';
import { ItemModalContext } from '../state/itemModal';
import { ItemModalButton } from './itemModalButton.component';

type ItemCardProps = {
	item?: Item<string>;
	addSelectedToLoadout?: any;
};

export const ItemCardComponent: FunctionComponent<ItemCardProps> = ({
	item,
	addSelectedToLoadout
}) => {
	const { setItem } = useContext(ItemModalContext);

	return (
		<Segment.Group
			style={{
				borderRadius: 0,
				backgroundColor: 'rgba(66, 64, 74, 0.2)'
			}}
		>
			{item && (
				<React.Fragment>
					<Segment basic compact textAlign="center">
						<Segment
							basic
							inverted
							fluid
							raised
							color={rarityColor(item.rarity)}
							style={{
								// backgroundColor: '#877e8a',
								margin: 'auto',
								marginBottom: '10px',
								padding: '1px',
								border: '2px inset rgba(255, 190, 16, 0.45)',

								overflow: 'hidden'
							}}
						>
							<Image
								floated="right"
								src={getImageSrc(item.name)}
								fluid
								bordered
								style={{ backgroundColor: rarityColor(item.rarity) }}
							/>
						</Segment>

						<Button
							color={rarityColor(item.rarity)}
							as="a"
							href={`https://eternalreturn.gamepedia.com/${item.name}`}
							content={item.name}
							style={{ marginBottom: '5px' }}
							label={item.type}
						/>

						<div style={{ color: 'white', fontStyle: 'italic' }}>
							{item.description}
						</div>
					</Segment>
					{item.stats && (
						<Segment inverted raised style={{ backgroundColor: 'transparent' }}>
							<Header>Stats</Header>
							<List items={item.stats} />
						</Segment>
					)}
					{item.buildsFrom &&
					item.buildsFrom.length > 0 && (
						<Segment inverted style={{ backgroundColor: 'transparent' }}>
							<Header>Built From</Header>
							{item.buildsFrom.map(({ name }, idx) => (
								<ItemModalButton key={name + idx} name={name} />
							))}
						</Segment>
					)}
					{item.buildsInto &&
					Object.entries(item.buildsInto).length > 0 && (
						<Segment inverted style={{ backgroundColor: 'transparent' }}>
							<Header>Builds Into</Header>
							{Object.keys(item.buildsInto).map((name, idx) => (
								<ItemModalButton key={name + idx} name={name} />
							))}
						</Segment>
					)}
					{addSelectedToLoadout && (
						<Segment
							attached="top"
							style={{
								border: 0,
								borderRadius: 0,
								backgroundColor: 'rgba(0, 0, 0, 0.5)'
							}}
							raised
						>
							<Button
								onClick={() => addSelectedToLoadout(item)}
								content={`Add ${item.name} to Loadout`}
								color="green"
							/>
						</Segment>
					)}
				</React.Fragment>
			)}
			{!item && (
				<Segment
					attached="top"
					basic
					textAlign="center"
					placeholder
					inverted
					style={{ borderRadius: 0, border: 0 }}
				>
					No Item Selected
				</Segment>
			)}
		</Segment.Group>
	);
};
