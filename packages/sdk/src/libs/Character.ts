import { WeaponsLookup, Characters } from '../constants';
import {
	IAbility,
	ICharacter,
	ICharacterAttribute,
	ICharacterInitialStat,
	ICharacterLevelUpStat
} from '../interfaces';
import CharacterData from '../data/characters.json';

export class Character implements ICharacter {
	public attributes: ICharacterAttribute[];
	public description: string;
	public details: Record<string, string>;
	public stats: { initial: ICharacterInitialStat; perLevel: ICharacterLevelUpStat };
	public abilities: Record<string, IAbility>;
	public weapons: WeaponsLookup[];
	public name: Characters;
	public id: string | number;

	constructor(seed: Characters | ICharacter) {
		let source = seed;
		if (typeof seed === 'string') {
			if (!Characters[seed]) {
				throw new Error(`Invalid seed: ${seed}`);
			}

			source = CharacterData[seed];
		}

		Object.assign(this, source);
	}
}
