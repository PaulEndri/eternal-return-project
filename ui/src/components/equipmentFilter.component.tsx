import React, { FunctionComponent } from 'react';
import { Button, Segment, Header, Form, Radio, Dropdown, Label } from 'semantic-ui-react';
import { Types } from '../utilities/types';
import { ICharacter, WeaponTypes } from 'erbs-sdk';
import { Weapons } from '../data/Weapons';

const weaponTypeOptions = (selectedCharacter?: ICharacter) => {
	return Object.entries(WeaponTypes as any)
		.filter(([ key, value ]: [string, string]) => {
			if (!selectedCharacter) {
				return true;
			}
			return Weapons[key].usableBy.some(({ name }) => name === selectedCharacter.name);
		})
		.map(([ key, value ]) => ({
			key,
			name: value
		}));
};

interface EquipmentFilterProps {
	selectedRadio: string;
	setSelectedWeaponType: (string) => any;
	selectedWeaponType: string;
	setSelectedRadio: (string) => any;
	selectedCharacter?: ICharacter;
}

export const EquipmentFilterComponent: FunctionComponent<EquipmentFilterProps> = ({
	selectedRadio,
	setSelectedRadio,
	setSelectedWeaponType,
	selectedCharacter,
	selectedWeaponType
}) => (
	<Segment.Group
		style={{
			borderRadius: 0,
			backgroundColor: 'rgba(66, 64, 74, 0.2)',
			marginTop: 14
		}}
	>
		<Segment basic color="black" inverted textAlign="center" raised>
			<Header>Filters</Header>
		</Segment>
		<Segment basic>
			<Form inverted color="blue">
				<Label
					color={'brown'}
					style={{ width: '100%', textAlign: 'center', marginBottom: '8px' }}
				>
					Armor Types
				</Label>
				<Form.Group inline>
					{Object.keys(Types).slice(1).map((type, idx) => (
						<Form.Field key={`${type}${idx}`}>
							<Radio
								name="filterSelect"
								value={type}
								label={type}
								checked={selectedRadio === type}
								onChange={() => {
									setSelectedWeaponType(null);
									setSelectedRadio(selectedRadio === type ? null : type);
								}}
							/>
						</Form.Field>
					))}
				</Form.Group>
				<Label
					color={'brown'}
					style={{ width: '100%', textAlign: 'center', marginBottom: '8px' }}
				>
					Weapon Types
				</Label>
				<Form.Group inline style={{ flexWrap: 'wrap', justifyContent: 'flex-start' }}>
					{weaponTypeOptions(selectedCharacter).map(({ key, name }, idx) => (
						<Form.Radio
							key={`${name}${idx}`}
							label={name}
							value={key as string}
							checked={selectedWeaponType === key}
							onChange={() => {
								if (selectedWeaponType === key) {
									setSelectedWeaponType(null);
									setSelectedRadio(null);
								} else {
									setSelectedRadio(Types.Weapon);
									setSelectedWeaponType(key);
								}
							}}
							// content={
							// 	<Radio
							// 		name="filterSelect"
							// 		value={key as string}
							// 		checked={selectedWeaponType === key}
							// 		onChange={() => {
							// 			if (selectedWeaponType === key) {
							// 				setSelectedWeaponType(null);
							// 				setSelectedRadio(null);
							// 			} else {
							// 				setSelectedRadio(Types.Weapon);
							// 				setSelectedWeaponType(key);
							// 			}
							// 		}}
							// 	/>
							// }
						/>
					))}
				</Form.Group>
			</Form>
		</Segment>
	</Segment.Group>
);
