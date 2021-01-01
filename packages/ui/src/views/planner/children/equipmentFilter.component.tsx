import React, { FunctionComponent } from 'react';
import { Segment, Header, Form, Radio, Label } from 'semantic-ui-react';
import { Types } from '../../../utilities/types';
import { ICharacter, WeaponsLookup } from 'erbs-sdk';

const ReverseWeaponsLookup = Object.fromEntries(
	Object.entries(WeaponsLookup).map(([ val, key ]) => [ key, val ])
);

const weaponTypeOptions = (selectedCharacter?: ICharacter) => {
	console.log('[test 123]', selectedCharacter);
	return !selectedCharacter
		? Object.entries(WeaponsLookup).map(([ name, key ]) => ({ key, name }))
		: selectedCharacter.weapons.map((lookup) => ({
				key: lookup,
				name: ReverseWeaponsLookup[lookup] || lookup
			}));
};

interface EquipmentFilterProps {
	selectedFilter: string;
	setSelectedFilter: React.Dispatch<string>;
	selectedCharacter?: ICharacter;
}

export const EquipmentFilterComponent: FunctionComponent<EquipmentFilterProps> = ({
	selectedFilter,
	setSelectedFilter,
	selectedCharacter
}) => (
	<Segment.Group
		style={{
			borderRadius: 0,
			backgroundColor: 'rgba(66, 64, 74, 0.4)'
		}}
	>
		<Segment basic color="black" inverted textAlign="center" raised>
			<Header>Filters</Header>
		</Segment>
		<Segment basic style={{ padding: 0 }}>
			<Form inverted>
				<Label
					color={'brown'}
					style={{
						width: '100%',
						textAlign: 'center',
						marginBottom: '8px',
						borderRadius: 0
					}}
				>
					Armor Types
				</Label>
				<Form.Group inline style={{ paddingLeft: '1rem' }}>
					{Object.keys(Types).slice(1).map((type, idx) => (
						<Form.Field key={`${type}${idx}`}>
							<Radio
								name="filterSelect"
								value={type}
								label={type}
								checked={selectedFilter === type}
								onChange={() => {
									setSelectedFilter(selectedFilter === type ? null : type);
								}}
							/>
						</Form.Field>
					))}
				</Form.Group>
				<Label
					color={'brown'}
					style={{
						width: '100%',
						textAlign: 'center',
						marginBottom: '8px',
						borderRadius: 0
					}}
				>
					Weapon Types
				</Label>
				<Form.Group
					inline
					widths="4"
					style={{ flexWrap: 'wrap', justifyContent: 'flex-start', paddingLeft: '1rem' }}
				>
					{weaponTypeOptions(selectedCharacter).map(({ key, name }, idx) => (
						<Form.Radio
							key={`${name}${idx}`}
							label={name}
							value={name as string}
							checked={selectedFilter === name}
							onChange={() =>
								setSelectedFilter(selectedFilter === name ? null : name)}
						/>
					))}
				</Form.Group>
			</Form>
		</Segment>
	</Segment.Group>
);
