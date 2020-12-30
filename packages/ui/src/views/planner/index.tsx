import { Item, Loadout } from 'erbs-sdk';
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
import { DesktopLoadoutComponent } from '../../components/desktopLoadout.component';
import { CharacterPane } from '../../components/characterPane.component';
import { EquipmentPaneComponent } from '../../components/equipmentPane.component';
import { RoutePaneComponent } from '../../components/routePane.component';

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
	const [ selectedFilter, setSelectedFilter ] = useState(null);
	const [ selectedType, setSelectedType ] = useState(null);
	const [ selectedCharacter, setSelectedCharacter ] = useState(null);
	const [ viewingCharacter, setViewingCharacter ] = useState(null);

	const [ loadout, setLoadout ] = useState(Loadout.GenerateLoadout(initialLoadout));

	const updateState = (slot, item) => {
		if (!slot) {
			setLoadout(Loadout.GenerateLoadout(initialLoadout));
		} else {
			setLoadout(loadout.setSlot(slot, item));
		}
	};

	const onLoadoutItemClick = (item: Item<string>, type) => {
		setSelectedType(item ? item.clientType : type);

		if (item) {
			setSelectedItem(item);
		} else {
			setSelectedFilter(type);
		}
	};

	const onLookupItemClick = (item) => {
		setSelectedType(item.clientType);
		setSelectedItem(item);
	};

	const addSelectedToLoadout = () => {
		updateState(selectedType, selectedItem);
	};

	const equipmentPaneProps = {
		selectedItem,
		addSelectedToLoadout,
		selectedFilter,
		selectedCharacter,
		setSelectedFilter,
		onLookupItemClick
	};

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
					<Grid.Column width={12} style={{}}>
						<Segment
							style={{
								padding: 1,
								paddingTop: 0,
								borderTop: 0,
								backgroundColor: 'rgb(51, 51, 51)'
							}}
							basic
						>
							<Tab
								menu={{ color: 'red', inverted: 'true', attached: true }}
								panes={[
									{
										menuItem: 'Character Selection',
										render: () => (
											<CharacterPane
												viewingCharacter={viewingCharacter}
												setSelectedCharacter={setSelectedCharacter}
												setViewingCharacter={setViewingCharacter}
											/>
										)
									},
									{
										menuItem: 'Equipment Selection',
										render: () => (
											<EquipmentPaneComponent {...equipmentPaneProps} />
										)
									},
									{
										menuItem: 'Route Generation',
										render: () => <RoutePaneComponent loadout={loadout} />
									}
								]}
							/>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

// wp ch hea arm leg acc

// q w e r d p

export default PlannerView;
