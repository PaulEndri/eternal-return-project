import { WeaponsLookup, Characters } from '../constants';
import {
	IAbility,
	ICharacter,
	ICharacterAttribute,
	ICharacterInitialStat,
	ICharacterLevelUpStat
} from '../interfaces';
import { Characters as CharacterData, Weapons } from 'erbs-data';
import { CharacterScraper } from 'erbs-wiki-api';
import { ErBsClient } from 'erbs-client';
import { Item } from './Item';

const WeaponsArray = Object.values(Weapons);

export class Character implements ICharacter {
	static SCRAPER = new CharacterScraper();
	static CLIENT = new ErBsClient();

	public attributes: ICharacterAttribute[];
	public description: string;
	public details: Record<string, string>;
	public stats: { initial: ICharacterInitialStat; perLevel: ICharacterLevelUpStat };
	public abilities: Record<string, IAbility>;
	public weapons: WeaponsLookup[];
	public name: Characters;
	public id: string | number;

	constructor(seed: Characters | ICharacter) {
		if (!seed) {
			throw new Error('Character seed must be provided');
		}

		let source = seed;
		if (typeof seed === 'string') {
			if (!Characters[seed]) {
				throw new Error(`Invalid seed: ${seed}`);
			}

			source = CharacterData[seed];
		}

		if (source) {
			Object.assign(this, source);
		}
	}

	static async GetAllFromClient() {
		return await this.CLIENT.getCharacters();
	}

	static async GetAllFromWiki() {
		return await this.SCRAPER.getAll();
	}

	public async fetchDataFromWiki() {
		if (!this.name) {
			throw new Error('Invalid Character');
		}

		return await Character.SCRAPER.getCharacter({ name: this.name, href: `/${this.name}` });
	}

	public loadWeaponOptions(full = true) {
		const weaponTypeData = this.weapons.map((wpnLookup) =>
			WeaponsArray.find((wpn) => wpn.apiMetaData.name === wpnLookup)
		);

		if (full) {
			return weaponTypeData.map((weaponType) => {
				const weapons = weaponType.items.map(({ id }) => new Item(id));

				return {
					...weaponType,
					weapons
				};
			});
		}

		return weaponTypeData;
	}
}
