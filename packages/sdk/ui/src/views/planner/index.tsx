import { Item, Weapon, Characters } from 'erbs-sdk';
import React, { PureComponent, useState } from 'react';
import {
	Button,
	Card,
	Image,
	List,
	Label,
	Segment,
	Grid,
	Container,
	Header,
	Tab
} from 'semantic-ui-react';
import CharacterThumbnailComponent from '../../components/characterThumbnail.component';
import { getImageSrc } from '../../utilities/getImageSrc';
import { rarityColor } from '../../utilities/rarityColor';
import { Types } from '../../utilities/types';
import { getItemList } from '../../utilities/getList';
import ItemCard from '../../components/itemCard.component';
import { EquipmentFilterComponent } from '../../components/equipmentFilter.component';
import CharacterData from '../../data/Character.json';
import CharacterCard from '../../components/characterCard.component';
import { DesktopLoadoutComponent } from '../../components/desktopLoadout.component';

export const getLoadoutType = (item) => (item instanceof Weapon ? Types.Weapon : item.type);

export const initialLoadout = {
	Weapon: null,
	Chest: null,
	Head: null,
	Arm: null,
	Leg: null,
	Accessory: null
};

const PlannerView = () => {
	const [ selectedItem, setSelectedItem ] = useState(null);
	const [ selectedRadio, setSelectedRadio ] = useState(null);
	const [ selectedType, setSelectedType ] = useState(null);
	const [ selectedWeaponType, setSelectedWeaponType ] = useState(null);
	const [ selectedCharacter, setSelectedCharacter ] = useState(null);
	const [ viewingCharacter, setViewingCharacter ] = useState(null);

	const [ loadout, setLoadout ] = useState(initialLoadout);

	const updateState = (slot, item) => {
		if (!slot) {
			setLoadout(initialLoadout);
		} else {
			console.log('[test]', slot, item);
			setLoadout({
				...loadout,
				[slot]: item
			});
		}
	};

	const onLoadoutItemClick = (item, type) => {
		setSelectedType(item ? getLoadoutType(item) : type);

		if (item) {
			setSelectedItem(item);
		} else {
			setSelectedRadio(type);
		}
	};

	const onLookupItemClick = (item) => {
		setSelectedType(getLoadoutType(item));
		setSelectedItem(item);
	};

	const addSelectedToLoadout = () => {
		updateState(selectedType, selectedItem);
	};

	const EquipmentPane = () => (
		<Grid style={{ marginTop: 10 }}>
			<Grid.Column width={5}>
				<Segment.Group>
					{selectedItem ? (
						<ItemCard item={selectedItem} />
					) : (
						<Segment textAlign="center">Select an item to view its information</Segment>
					)}
					<Segment textAlign="center">
						<Button
							fluid
							disabled={!selectedItem}
							success
							onClick={addSelectedToLoadout}
						>
							Add Selected Item
						</Button>
					</Segment>
				</Segment.Group>
			</Grid.Column>
			<Grid.Column width={5}>
				<EquipmentFilterComponent
					selectedRadio={selectedRadio}
					selectedCharacter={selectedCharacter}
					selectedWeaponType={selectedWeaponType}
					setSelectedWeaponType={setSelectedWeaponType}
					setSelectedRadio={setSelectedRadio}
				/>
			</Grid.Column>
			<Grid.Column width={6} style={{ height: '88vh', overflow: 'auto' }}>
				<Segment.Group>
					<Segment inverted style={{ paddingBottom: '8' }} textAlign="center">
						<Header as="h3">
							{selectedRadio ? selectedRadio.toUpperCase() : 'EQUIPMENT'} LIST
						</Header>
					</Segment>
					<Segment>
						<Grid columns={3} padded>
							{getItemList(selectedRadio, selectedWeaponType).map((item) => {
								return (
									<Grid.Column style={{ padding: 0 }} key={`${item.name}Select`}>
										<Button
											style={{
												padding: 0,
												borderRadius: 0,
												border: '2px solid rgba(255, 255, 255, 0.2)'
											}}
											color={rarityColor(item.rarity)}
											onClick={() => onLookupItemClick(item)}
										>
											<Image
												rounded
												size="tiny"
												src={getImageSrc(item.name)}
											/>
										</Button>
									</Grid.Column>
								);
							})}
						</Grid>
					</Segment>
				</Segment.Group>
			</Grid.Column>
		</Grid>
	);
	const CharacterPane = () => (
		<Grid>
			<Grid.Column width={6} stretched>
				<Segment.Group>
					<Segment textAlign="center" basic>
						{viewingCharacter ? (
							<CharacterCard character={viewingCharacter} />
						) : (
							'Select a Character to view its information'
						)}
					</Segment>
					<Segment textAlign="center">
						<Button
							disabled={!viewingCharacter}
							success
							onClick={() => setSelectedCharacter(viewingCharacter)}
						>
							Select Character
						</Button>
					</Segment>
				</Segment.Group>
			</Grid.Column>
			<Grid.Column width={10}>
				<Segment basic style={{ overflow: 'auto', marginLeft: '-35px' }}>
					<Grid columns={4} style={{ height: '90vh', overflow: 'auto' }}>
						{Object.keys(Characters).map((character) => (
							<Grid.Column key={character}>
								<CharacterThumbnailComponent
									name={character}
									onClick={() => setViewingCharacter(CharacterData[character])}
								/>
								<Label
									color="orange"
									basic
									pointing
									style={{ textAlign: 'center', width: '105%' }}
								>
									{character}
								</Label>
							</Grid.Column>
						))}
					</Grid>
				</Segment>
			</Grid.Column>
		</Grid>
	);
	return (
		<Segment basic style={{ padding: 0 }}>
			<Segment
				inverted
				color="orange"
				raised
				textAlign="center"
				padded={false}
				basic
				style={{ marginBottom: 0, padding: 0 }}
			>
				<Header as="h2">Loadout & Route Planner</Header>
			</Segment>
			<DesktopLoadoutComponent
				selectedCharacter={selectedCharacter}
				onLoadoutItemClick={onLoadoutItemClick}
				loadout={loadout}
			/>
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={12}>
						<Segment style={{ padding: 0, borderTop: 0 }}>
							<Tab
								menu={{ color: 'red', inverted: true, attached: true }}
								panes={[
									{ menuItem: 'Character Selection', render: CharacterPane },
									{ menuItem: 'Equipment Selection', render: EquipmentPane }
								]}
							/>
						</Segment>
					</Grid.Column>{' '}
					{/* <Grid.Column width={4}>
						<Grid.Row>Map of Lumia</Grid.Row>
						<Grid.Row> proposed routes</Grid.Row>
						<Grid.Row>???</Grid.Row>
					</Grid.Column> */}
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

// wp ch hea arm leg acc

// q w e r d p

export default PlannerView;
