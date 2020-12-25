import cheerio from 'cheerio';
import request from 'request';
import fetch from 'node-fetch';
import fs from 'fs';
import { ICache } from 'erbs-sdk';
import { Cache } from '../utils/Cache';

export class CoreScraper {
	static BASE_URL = 'https://eternalreturn.gamepedia.com/';
	public cache: ICache;

	constructor(cache?: ICache) {
		if (cache) {
			this.cache = cache;
		} else {
			this.cache = new Cache();
		}
	}

	protected getImageSrc($image) {
		try {
			return $image.attr('src').split('revision').shift();
		} catch (e) {
			console.warn(e);

			return '';
		}
	}

	protected getSimpleElement($, el) {
		const $el = $(el);
		const $image = $el.find('img');

		const name = $el.attr('title');
		const element = {
			name: name || null,
			href: $el.attr('href'),
			image: null
		};

		if ($image.length > 0) {
			element.image = this.getImageSrc($image);
		}

		return element;
	}

	protected downloadFile(uri: string, fileName: string, fileType: string, directories: string[]) {
		let path = 'EternalReturn/';

		directories.forEach((dir) => {
			path += `${dir}/`;
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path);
			}
		});

		if (!fileName || !uri) {
			return Promise.resolve();
		}

		const finalName = `${path}${fileName
			.replace('ldsl=', '')
			.replace('link=', '')}.${fileType}`;

		if (!fileName) {
			return Promise.resolve();
		}

		return new Promise((resolve) => {
			// console.log(`[File Download Begin] ${fileName} from ${uri}`);

			request.head(uri, (err, res, body) => {
				// console.log('content-type:', res.headers['content-type']);
				// console.log('content-length:', res.headers['content-length']);

				request(uri).pipe(fs.createWriteStream(finalName)).on('close', () => {
					// console.log(`[File Download Complete] ${fileName}`);
					resolve;
				});
			});
		});
	}

	public async getPage(page: string, skipCache = false) {
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

		//console.log(`[Page Fetch] ${path}`);
		return $;
	}
}
