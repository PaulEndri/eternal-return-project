/**
 * @packageDocumentation
 * @module WikiData
 * */
import { ICharacter } from '../interfaces/ICharacter';
import { IElement } from '../interfaces/IElement';
import { CHARACTER_PATH } from '../utils/constants';
import { CoreScraper } from './core';

export class CharacterScraper extends CoreScraper {
	private statMap = {
		'Attack power': 'AttackPower',
		Health: 'HP',
		'Health regen': 'HpRegen',
		Stamina: 'SP',
		'Stamina regen': 'SpRegen',
		Defense: 'Defense',
		'Bonus atk. speed': 'AttackSpeed',
		'Bonus crit rate': 'CrtiticalChance',
		'Move. speed': 'MoveSpeed',
		'Sight range': 'SightRange'
	};

	public getCharacter = async ({ name, href }: IElement) => {
		const cachedValue = await this.cache.get<ICharacter>(name);
		if (cachedValue) {
			return cachedValue;
		}

		const $ = await this.getPage(`${href}`);
		const $infoBox = $('table.infoboxtable:nth-child(1)');
		const description = $infoBox.find('i').text().trim();
		const details = $infoBox
			.find('th.infoboxdetails')
			.parent()
			.nextAll('tr')
			.toArray()
			.map((el) => $(el).find('td').toArray().map((col) => $(col).text().trim()));

		const $statsBox = $('table:nth-child(3)');
		const stats = { start: {}, finish: {}, growth: {} };

		$statsBox.find('th.infoboxdetails').parent().nextAll('tr').toArray().forEach((el) => {
			const $row = $(el);
			const $cols = $row.find('td');
			const title = $($cols[0]).text().trim();
			const level1 = $($cols[1]).text().trim();
			const level20 = $($cols[2]).text().trim();
			const growth = $($cols[3]).text().trim();

			const statName = this.statMap[title];

			stats.start[statName] = level1;
			stats.finish[statName] = level20;
			stats.growth[statName] = growth;
		});

		const $abilities = $('.ability_details');
		const abilities = {};

		$abilities.toArray().forEach((el) => {
			const $abilityTable = $(el).find('table');
			const abilitySlot = $abilityTable
				.find('p.header1')
				.text()
				.trim()
				.match(/\(([^)]+)\)/, '')[1];
			const abilityName = $abilityTable
				.find('p.header1')
				.text()
				.trim()
				.split('(')
				.shift()
				.trim();
			const abilityType = $abilityTable.find('p.header2').text().trim();
			const abilityDescription = $abilityTable
				.find('tr:nth-child(3) td:nth-child(3) p')
				.text()
				.trim();

			const abilityStats = $abilityTable.find('table.infoboxtable tr').toArray().map((el) => {
				const $row = $(el);
				const title = $row.find('td:nth-child(1)').text().trim();
				const value = $row.find('td:nth-child(2)').text().trim();
				const tiers = {};

				value.split(' ').forEach((chunk) => {
					const expectedTiers = [ 'Passive', 'R' ].includes(abilitySlot) ? 3 : 5;
					const parts = chunk.split('/');

					if (parts.length === expectedTiers) {
						parts.forEach((val, i) => (tiers[i + 1] = val));
					}
				});

				return [ title, { title, value, tiers } ];
			});

			abilities[abilitySlot] = {
				name: abilityName,
				slot: abilitySlot,
				type: abilityType,
				description: abilityDescription,
				stats: Object.fromEntries(abilityStats)
			};
		});

		return {
			name,
			href,
			description,
			details,
			stats,
			abilities,
			weapons: []
		} as ICharacter;
	};

	public getAll = async (weaponData?: Record<string, any>) => {
		const $ = await this.getPage(CHARACTER_PATH);
		const characterPromises: Promise<any>[] = $(
			'#mw-content-text > div > table:nth-child(5) > tbody'
		)
			.find('img')
			.toArray()
			.map((el) => $(el).parent())
			.map((el) => this.getSimpleElement($, el))
			.map((character) => this.getCharacter(character));

		const characters = await Promise.all(characterPromises);

		if (weaponData) {
			characters.forEach((char) => {
				char.weapons = Object.entries(weaponData)
					.filter(([ , type ]) => type.usableBy.includes(char.name))
					.map(([ key ]) => key);
			});
		}

		return Object.fromEntries<ICharacter>(characters.map((char) => [ char.name, char ]));
	};
}
