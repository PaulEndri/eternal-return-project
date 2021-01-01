import { Categories, Item, Loadout, WeaponsLookup } from 'erbs-sdk';
import React, { PureComponent, useContext, useState } from 'react';
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
import { CharacterPane } from '../../components/characterPane.component';
import { EquipmentPaneComponent } from './children/equipmentPane.component';
import { RoutePaneComponent } from './children/routePane.component';
import { Types } from '../../utilities/types';
import { PageComponent } from '../../components/page';
import { getImageSrc } from '../../utilities/getImageSrc';
import { LoadOutItemComponent } from './children/loadOutItem.component';
import { LoadoutContext } from '../../state/loadout.tsx';

export const initialLoadout = {
	Weapon: null,
	Chest: null,
	Head: null,
	Arm: null,
	Leg: null,
	Accessory: null
};

const loadoutMenu = [
	Types.Weapon,
	Types.Chest,
	Types.Head,
	Types.Arm,
	Types.Leg,
	Types.Accessory
];

const SidebarContents = ({ selectedCharacter, loadout, onLoadoutItemClick }) => (
	<React.Fragment>
		<Segment
			raised
			inverted
			secondary
			color="black"
			textAlign="center"
			placeholder={!selectedCharacter}
			fluid
			style={{ minHeight: '150px', borderRadius: 0 }}
		>
			{selectedCharacter && (
				<div
					style={{
						backgroundColor: 'rgba(66, 64, 74, 0.5)',
						border: '1px solid rgba(125, 125, 125, 0.1)',
						boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)'
					}}
				>
					<img src={getImageSrc(`characters/mini/${selectedCharacter.name}`)} />
				</div>
			)}
			{!selectedCharacter && <div style={{ maxWidth: '120px' }}>No Character Selected</div>}
		</Segment>
		{loadoutMenu.map((type) => (
			<LoadOutItemComponent
				key={type}
				type={type}
				item={loadout[type]}
				onClick={onLoadoutItemClick}
			/>
		))}
	</React.Fragment>
);
const PlannerView = () => {
	const { loadout, updateLoadout, character } = useContext(LoadoutContext);

	const [ selectedItem, setSelectedItem ] = useState(null);
	const [ selectedFilter, setSelectedFilter ] = useState(null);
	const [ selectedType, setSelectedType ] = useState(null);
	const [ viewingCharacter, setViewingCharacter ] = useState(null);

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
		updateLoadout(selectedType, selectedItem);
	};

	const equipmentPaneProps = {
		selectedItem,
		addSelectedToLoadout,
		selectedFilter,
		selectedCharacter: character,
		setSelectedFilter,
		onLookupItemClick
	};

	return (
		<PageComponent
			title="Eternal Return: Black Survival Route & Loadout Planner"
			sidebarTitle="Loadout"
			sidebarItems={
				<SidebarContents
					loadout={loadout}
					selectedCharacter={character}
					onLoadoutItemClick={onLoadoutItemClick}
				/>
			}
		>
			<Container>
				<Grid centered>
					<Grid.Row>
						<Grid.Column width={16} style={{}}>
							<Segment
								style={{
									padding: 1,
									paddingTop: 0,
									borderTop: 0,
									backgroundColor: 'rgba(51, 51, 51, 0.9)'
								}}
								basic
							>
								<Tab
									menu={{
										color: 'red',
										tertiary: true,
										inverted: true,
										attached: true
									}}
									panes={[
										{
											menuItem: 'Character Selection',
											render: () => (
												<CharacterPane
													viewingCharacter={viewingCharacter}
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
			</Container>
		</PageComponent>
	);
};

// wp ch hea arm leg acc

// q w e r d p

export default PlannerView;
