import { Categories, Character, ICharacter, Item, Loadout } from 'erbs-sdk';
import React, { FunctionComponent, useState } from 'react';
import { Types } from '../../utilities/types';

const initialLoadout = {
	Weapon: null,
	Chest: null,
	Head: null,
	Arm: null,
	Leg: null,
	Accessory: null
};

const initialState = {
	loadout: Loadout.GenerateLoadout(initialLoadout),
	character: null,
	updateCharacter: (character: ICharacter | Character) => null,
	updateLoadout: (slot, item) => null
};

export const LoadoutContext = React.createContext(initialState);
export const LoadoutConsumer = LoadoutContext.Consumer;
export const LoadoutProvider: FunctionComponent = ({ children }) => {
	const [ character, setCharacter ] = useState<Character>(null);
	const [ loadout, setLoadout ] = useState<Loadout>(initialState.loadout);

	const updateCharacter = (character: ICharacter | Character) => {
		if (character instanceof Character) {
			setCharacter(character);
		} else if (character) {
			setCharacter(new Character(character));
		} else {
			setCharacter(null);
		}
	};

	const updateLoadout = (slot, item) => {
		if (!slot) {
			setLoadout(Loadout.GenerateLoadout(initialLoadout));
		} else {
			setLoadout(
				loadout.setSlot(item.category === Categories.Weapon ? Types.Weapon : slot, item)
			);
		}
	};

	const state = {
		character,
		loadout,
		updateCharacter,
		updateLoadout
	};

	return <LoadoutContext.Provider value={state}>{children}</LoadoutContext.Provider>;
};
