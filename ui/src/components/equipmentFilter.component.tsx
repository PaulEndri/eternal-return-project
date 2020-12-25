import React, { FunctionComponent } from 'react';
import { Button, Segment, Header, Form, Radio, Dropdown, Label } from 'semantic-ui-react';
import ItemCard from './itemCard.component';
import { Types } from '../utilities/types';
import { ICharacter, WeaponTypes } from 'erbs-sdk';
import Weapons from '../data/Weapons.json';

console.log('[test]', Object.keys(Weapons));
const weaponTypeOptions = (selectedCharacter?: ICharacter) => {
	return Object.entries(WeaponTypes as any)
		.filter(([ key, value ]: [string, string]) => {
			if (!selectedCharacter) {
				return true;
			}
			console.log('[filter]', key, value);
			return Weapons[value].usableBy.some(({ name }) => name === selectedCharacter.name);
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
	<Segment.Group style={{ borderRadius: 0 }}>
		<Segment basic color="black" inverted>
			<Header as="h4">Select a Filter</Header>
		</Segment>
		<Segment Basic>
			<Form>
				<Form.Group grouped>
					<Label>Armor Types</Label>
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
							>
								test
							</Radio>
						</Form.Field>
					))}
				</Form.Group>
				<Form.Group grouped>
					<Label>Weapon Selection</Label>
					<Form.Field>
						<Radio
							name="filterSelect"
							label={'View All Weapons'}
							value={Types.Weapon}
							checked={selectedRadio === Types.Weapon}
							onChange={(e) => {
								setSelectedRadio(
									selectedRadio === Types.Weapon && !selectedWeaponType
										? null
										: Types.Weapon
								);
							}}
						/>
					</Form.Field>
					{weaponTypeOptions(selectedCharacter).map(({ key, name }, idx) => (
						<Form.Field key={`${name}${idx}`} inline>
							<Radio
								name="filterSelect"
								label={name}
								value={key as string}
								checked={selectedWeaponType === key}
								onChange={() => {
									if (selectedWeaponType === name) {
										setSelectedWeaponType(null);
									} else {
										if (selectedRadio !== Types.Weapon) {
											setSelectedRadio(Types.Weapon);
										}

										setSelectedWeaponType(key);
									}
								}}
							/>
						</Form.Field>
					))}
				</Form.Group>
			</Form>
		</Segment>
	</Segment.Group>
);
