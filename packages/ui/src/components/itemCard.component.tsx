import React, { FunctionComponent, useContext } from 'react';
import { Button, Header, Image, Label, List, Segment } from 'semantic-ui-react';
import { Item } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';
import { ItemModalButton } from './itemModalButton.component';
import { ItemModalContext } from '../state/itemModal';

type ItemCardProps = {
	item?: Item<string>;
	addSelectedToLoadout?: any;
	showReqs?: boolean;
};

export const ItemCardComponent: FunctionComponent<ItemCardProps> = ({
	item,
	addSelectedToLoadout,
	showReqs
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
								maxWidth: '275px',
								overflow: 'hidden'
							}}
						>
							<Image
								floated="right"
								src={getImageSrc(item.displayName)}
								fluid
								bordered
								style={{ backgroundColor: rarityColor(item.rarity) }}
							/>
						</Segment>

						<Button
							color={rarityColor(item.rarity)}
							as="a"
							href={`https://eternalreturn.gamepedia.com/${item.name}`}
							content={item.displayName}
							style={{ marginBottom: '5px' }}
							label={item.clientType}
						/>

						<div style={{ color: 'white', fontStyle: 'italic' }}>
							{item.description}
						</div>
					</Segment>
					{item.stats && (
						<Segment inverted raised style={{ backgroundColor: 'transparent' }}>
							<Header>Stats</Header>
							<List
								items={Object.entries(item.stats).map(
									([ key, val ]) => `${key}: ${val}`
								)}
							/>
						</Segment>
					)}
					{item.buildsFrom &&
					item.buildsFrom.length > 0 && (
						<Segment inverted style={{ backgroundColor: 'transparent' }}>
							<Header>Built From</Header>
							{item.buildsFrom.map(({ name, id }, idx) => (
								<ItemModalButton key={name + idx} id={id} />
							))}
						</Segment>
					)}
					{item.buildsInto &&
					Object.entries(item.buildsInto).length > 0 && (
						<Segment inverted style={{ backgroundColor: 'transparent' }}>
							<Header>Builds Into</Header>
							{item.buildsInto.map((item, idx) => (
								<ItemModalButton key={item.id} id={item.id} />
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
								content={`Add ${item.displayName} to Loadout`}
								color="green"
							/>
						</Segment>
					)}
					{item.materials &&
					showReqs &&
					Object.entries(item.materials).length > 0 && (
						<Segment inverted style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} basic>
							<Label style={{ width: '100%', textAlign: 'center' }} color="red">
								Total Material Requirements
							</Label>
							<div
								style={{
									width: '100%',
									display: 'flex',
									flexWrap: 'wrap',
									flexDirection: 'row',
									justifyContent: 'center'
								}}
							>
								{Object.entries(
									item.materials
								).map(([ material, quantity ], key) => (
									<div style={{ margin: '5px' }}>
										<Label
											image
											key={key + material}
											onClick={() => setItem(material)}
										>
											<img src={getImageSrc(material)} />
											{quantity}
										</Label>
									</div>
								))}
							</div>
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
