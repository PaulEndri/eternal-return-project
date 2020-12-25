import { CHARACTER_PATH } from '../utils/constants';
import { ICharacter, IElement } from 'erbs-sdk';
import { CoreScraper } from './core';

export class CharacterScraper extends CoreScraper {
	public async getCharacter({ name, href }: IElement) {
		const cachedValue = await this.cache.get(name);
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

			stats.start[title] = level1;
			stats.finish[title] = level20;
			stats.growth[title] = growth;
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
				stats: Object.fromEntries(abilityStats),
				image: this.getImageSrc(
					$abilityTable.find('tr:nth-child(3) > td:nth-child(1) a img')
				)
			};
		});

		return {
			name,
			href,
			image: this.getImageSrc($('th.infoboxdetails immg')),
			description,
			details,
			stats,
			abilities
		};
	}

	public async getAll() {
		const $ = await this.getPage(CHARACTER_PATH);
		const characterPromises: Promise<ICharacter>[] = $(
			'#mw-content-text > div > table:nth-child(5) > tbody'
		)
			.find('img')
			.toArray()
			.map((el) => $(el).parent())
			.map((el) => this.getSimpleElement($, el))
			.map((character) => this.getCharacter(character));

		const characters = await Promise.all(characterPromises);

		return Object.fromEntries(characters.map((char) => [ char.name, char ]));
	}
}
