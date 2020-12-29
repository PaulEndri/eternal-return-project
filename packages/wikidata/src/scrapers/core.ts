/**
 * @packageDocumentation
 * @internal
 * */
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { IWikiCache } from '../interfaces/IWikiCache';
import { WikiCache } from '../utils/wikiCache';

export class CoreScraper {
	static BASE_URL = 'https://eternalreturn.gamepedia.com/';
	public cache: IWikiCache;

	constructor(cache?: IWikiCache) {
		if (cache) {
			this.cache = cache;
		} else {
			this.cache = new WikiCache();
		}
	}

	protected getSimpleElement = ($, el, nameOnly = false) => {
		const $el = $(el);

		const name = $el.attr('title');
		const element = {
			name: name || null,
			href: $el.attr('href')
		};

		return nameOnly ? name : element;
	};

	public getPage = async (page: string, skipCache = false) => {
		let path = `${CoreScraper.BASE_URL}${page}`;

		while (path.indexOf('.com//') >= 0) {
			path = path.replace('.com//', '.com/');
		}

		const cachedPage = await this.cache.get(path);

		if (cachedPage && !skipCache) {
			return cachedPage;
		}

		const res = await fetch(path);
		const txt = await res.text();
		const $ = cheerio.load(txt);

		await this.cache.set(path, $);

		return $;
	};
}
