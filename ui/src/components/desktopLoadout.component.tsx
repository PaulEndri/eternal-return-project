import React, { FunctionComponent } from 'react';
import { Button, Segment, Header } from 'semantic-ui-react';
import { LoadOutItemComponent } from './loadOutItem.component';
import { ICharacter, Loadout } from 'erbs-sdk';
import { Types } from '../utilities/types';
import { getImageSrc } from '../utilities/getImageSrc';

export interface LoadoutProps {
	loadout: Loadout;
	selectedCharacter: ICharacter;
	onLoadoutItemClick: any;
}

export const DesktopLoadoutComponent: FunctionComponent<LoadoutProps> = ({
	loadout,
	selectedCharacter,
	onLoadoutItemClick
}) => (
	<Segment
		basic
		floated="left"
		inverted
		color="black"
		style={{ minHeight: '95vh', marginTop: 0 }}
	>
		<Segment.Group inverted basic style={{ border: 0, borderRadius: 0 }}>
			<Segment basic inverted style={{ borderRadius: 0 }}>
				<Header as="h2">LOADOUT</Header>
			</Segment>
			<Segment
				raised
				inverted
				secondary
				color="black"
				textAlign="center"
				placeholder={!selectedCharacter}
				fluid
				style={{ minHeight: '166px' }}
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
				{!selectedCharacter && (
					<div style={{ maxWidth: '120px' }}>No Character Selected</div>
				)}
			</Segment>
			<Segment raised inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.weapon}
					type={Types.Weapon}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment raised inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.chest}
					type={Types.Chest}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.head}
					type={Types.Head}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.arm}
					type={Types.Arm}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.legs}
					type={Types.Leg}
					onClick={onLoadoutItemClick}
				/>
			</Segment>
			<Segment basic inverted secondary color="black">
				<LoadOutItemComponent
					item={loadout.accessory}
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
		</Segment.Group>
	</Segment>
);
