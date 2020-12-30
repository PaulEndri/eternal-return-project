import React, { useContext } from 'react';
import { Segment, Grid, Header, Button, Image, Transition, Label } from 'semantic-ui-react';
import { ItemCardComponent } from './itemCard.component';
import { EquipmentFilterComponent } from './equipmentFilter.component';
import { getItemList } from '../utilities/getList';
import { rarityColor } from '../utilities/rarityColor';
import { getImageSrc } from '../utilities/getImageSrc';
import { Item, Weapons } from 'erbs-sdk';
import { ItemModalContext } from '../state/itemModal';

interface EquipmentPaneProps {
	selectedItem: any;
	addSelectedToLoadout: () => void;
	selectedFilter: any;
	selectedCharacter: any;
	setSelectedFilter: React.Dispatch<string>;
	onLookupItemClick: (item: any) => void;
}

export const EquipmentPaneComponent: React.FC<EquipmentPaneProps> = ({
	selectedItem,
	addSelectedToLoadout,
	selectedFilter,
	selectedCharacter,
	setSelectedFilter,
	onLookupItemClick
}) => {
	let item: Item<any>;
	const { setItem } = useContext(ItemModalContext);

	try {
		item = selectedItem ? new Item(selectedItem.name) : null;
	} catch (e) {
		console.warn(e);
	}

	return (
		<Grid>
			<Grid.Row width={11}>
				<Grid.Column mobile={10} tablet={6} computer={6} widescreen={5}>
					<Segment.Group
						style={{
							borderRadius: 0,
							backgroundColor: 'rgba(66, 64, 74, 0.2)',
							marginTop: 14
						}}
					>
						<Segment textAlign="center" basic fluid style={{ padding: 0, margin: 0 }}>
							<ItemCardComponent
								item={item}
								addSelectedToLoadout={addSelectedToLoadout}
							/>
						</Segment>

						{item &&
						item.materials &&
						Object.entries(item.materials).length > 0 && (
							<Segment
								inverted
								style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
								basic
							>
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
					</Segment.Group>
				</Grid.Column>
				<Grid.Column width={10}>
					<Grid.Row>
						<Grid.Column width={16}>
							<EquipmentFilterComponent
								selectedFilter={selectedFilter}
								selectedCharacter={selectedCharacter}
								setSelectedFilter={setSelectedFilter}
							/>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={16}>
							<Segment.Group
								style={{
									borderRadius: 0,
									backgroundColor: 'rgba(66, 64, 74, 0.2)',
									marginTop: 14
								}}
							>
								<Segment
									attached="top"
									style={{
										border: 0,
										borderRadius: 0
									}}
									raised
									inverted
									color="black"
									textAlign="center"
								>
									<Header inverted style={{ textTransform: 'capitalize' }}>
										{selectedFilter ? (
											selectedFilter.toLowerCase()
										) : (
											'equipment'
										)}
									</Header>
								</Segment>
								<Segment
									basic
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'center'
									}}
								>
									{!selectedFilter && (
										<Segment fluid secondary inverted placeholder>
											Select a Filter
										</Segment>
									)}
									{selectedFilter &&
										getItemList(selectedFilter).map((item) => {
											return (
												<div>
													<Button
														style={{
															margin: 2,
															padding: 0,
															borderRadius: 0,
															border:
																'2px outset rgba(255, 255, 255, 0.2)'
														}}
														color={rarityColor(item.rarity)}
														onClick={() => onLookupItemClick(item)}
													>
														<Transition>
															<Image
																rounded
																size="tiny"
																src={getImageSrc(item.name)}
															/>
														</Transition>
													</Button>
												</div>
											);
										})}
								</Segment>
							</Segment.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
