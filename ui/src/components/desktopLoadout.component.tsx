import React, { FunctionComponent } from 'react';
import { Button, Segment, Header } from 'semantic-ui-react';
import CharacterThumbnailComponent from './characterThumbnail.component';
import { LoadOutItemComponent } from './loadOutItem.component';
import { ICharacter, ILoadout } from 'erbs-sdk';
import { Types } from '../utilities/types';

export interface LoadoutProps {
	loadout: ILoadout;
	selectedCharacter: ICharacter;
	onLoadoutItemClick: any;
}

export const DesktopLoadoutComponent: FunctionComponent<LoadoutProps> = ({
	loadout,
	selectedCharacter,
	onLoadoutItemClick
}) => (
	<Segment basic floated="left" inverted color="black" style={{ height: '95vh', marginTop: 0 }}>
		<Segment.Group inverted basic style={{ border: 0, borderRadius: 0 }}>
			<Segment basic inverted style={{ borderRadius: 0 }}>
				<Header as="h2">LOADOUT</Header>
			</Segment>
			<Segment raised inverted secondary color="black" textAlign="center">
				<CharacterThumbnailComponent
					name={selectedCharacter ? selectedCharacter.name : 'Nadine'}
				/>
			</Segment>
			<Segment raised inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Weapon}
					type={Types.Weapon}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment raised inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Chest}
					type={Types.Chest}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Head}
					type={Types.Head}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Arm}
					type={Types.Arm}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Leg}
					type={Types.Leg}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.Accessory}
					type={Types.Accessory}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment inverted textAlign="center" color="black">
				<Button
					color="red"
					style={{ borderRadius: '0' }}
					fluid
					onClick={() => onLoadoutItemClick()}
				>
					Clear All
				</Button>
			</Segment>

			<Segment inverted textAlign="center" color="black">
				Generate Route
			</Segment>
			<Segment inverted textAlign="center" color="black" />
		</Segment.Group>
	</Segment>
);
