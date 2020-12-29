"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreScraper = void 0;
/**
 * @packageDocumentation
 * @internal
 * */
const cheerio_1 = __importDefault(require("cheerio"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const wikiCache_1 = require("../utils/wikiCache");
class CoreScraper {
    constructor(cache) {
        this.getSimpleElement = ($, el, nameOnly = false) => {
            const $el = $(el);
            const name = $el.attr('title');
            const element = {
                name: name || null,
                href: $el.attr('href')
            };
            return nameOnly ? name : element;
        };
        this.getPage = async (page, skipCache = false) => {
            let path = `${CoreScraper.BASE_URL}${page}`;
            while (path.indexOf('.com//') >= 0) {
                path = path.replace('.com//', '.com/');
            }
            const cachedPage = await this.cache.get(path);
            if (cachedPage && !skipCache) {
                return cachedPage;
            }
            const res = await node_fetch_1.default(path);
            const txt = await res.text();
            const $ = cheerio_1.default.load(txt);
            await this.cache.set(path, $);
            return $;
        };
        if (cache) {
            this.cache = cache;
        }
        else {
            this.cache = new wikiCache_1.WikiCache();
        }
    }
}
exports.CoreScraper = CoreScraper;
CoreScraper.BASE_URL = 'https://eternalreturn.gamepedia.com/';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVycy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7S0FHSztBQUNMLHNEQUE4QjtBQUM5Qiw0REFBK0I7QUFFL0Isa0RBQStDO0FBRS9DLE1BQWEsV0FBVztJQUl2QixZQUFZLEtBQWtCO1FBUXBCLHFCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDeEQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsTUFBTSxPQUFPLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdEIsQ0FBQztZQUVGLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFSyxZQUFPLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2QztZQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUMsSUFBSSxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzdCLE9BQU8sVUFBVSxDQUFDO2FBQ2xCO1lBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDO1FBdkNELElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7U0FDN0I7SUFDRixDQUFDOztBQVZGLGtDQTZDQztBQTVDTyxvQkFBUSxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKiBAaW50ZXJuYWxcclxuICogKi9cclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IHsgSVdpa2lDYWNoZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSVdpa2lDYWNoZSc7XHJcbmltcG9ydCB7IFdpa2lDYWNoZSB9IGZyb20gJy4uL3V0aWxzL3dpa2lDYWNoZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZVNjcmFwZXIge1xyXG5cdHN0YXRpYyBCQVNFX1VSTCA9ICdodHRwczovL2V0ZXJuYWxyZXR1cm4uZ2FtZXBlZGlhLmNvbS8nO1xyXG5cdHB1YmxpYyBjYWNoZTogSVdpa2lDYWNoZTtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FjaGU/OiBJV2lraUNhY2hlKSB7XHJcblx0XHRpZiAoY2FjaGUpIHtcclxuXHRcdFx0dGhpcy5jYWNoZSA9IGNhY2hlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBXaWtpQ2FjaGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXRTaW1wbGVFbGVtZW50ID0gKCQsIGVsLCBuYW1lT25seSA9IGZhbHNlKSA9PiB7XHJcblx0XHRjb25zdCAkZWwgPSAkKGVsKTtcclxuXHJcblx0XHRjb25zdCBuYW1lID0gJGVsLmF0dHIoJ3RpdGxlJyk7XHJcblx0XHRjb25zdCBlbGVtZW50ID0ge1xyXG5cdFx0XHRuYW1lOiBuYW1lIHx8IG51bGwsXHJcblx0XHRcdGhyZWY6ICRlbC5hdHRyKCdocmVmJylcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG5hbWVPbmx5ID8gbmFtZSA6IGVsZW1lbnQ7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGdldFBhZ2UgPSBhc3luYyAocGFnZTogc3RyaW5nLCBza2lwQ2FjaGUgPSBmYWxzZSkgPT4ge1xyXG5cdFx0bGV0IHBhdGggPSBgJHtDb3JlU2NyYXBlci5CQVNFX1VSTH0ke3BhZ2V9YDtcclxuXHJcblx0XHR3aGlsZSAocGF0aC5pbmRleE9mKCcuY29tLy8nKSA+PSAwKSB7XHJcblx0XHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoJy5jb20vLycsICcuY29tLycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGNhY2hlZFBhZ2UgPSBhd2FpdCB0aGlzLmNhY2hlLmdldChwYXRoKTtcclxuXHJcblx0XHRpZiAoY2FjaGVkUGFnZSAmJiAhc2tpcENhY2hlKSB7XHJcblx0XHRcdHJldHVybiBjYWNoZWRQYWdlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHBhdGgpO1xyXG5cdFx0Y29uc3QgdHh0ID0gYXdhaXQgcmVzLnRleHQoKTtcclxuXHRcdGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQodHh0KTtcclxuXHJcblx0XHRhd2FpdCB0aGlzLmNhY2hlLnNldChwYXRoLCAkKTtcclxuXHJcblx0XHRyZXR1cm4gJDtcclxuXHR9O1xyXG59XHJcbiJdfQ==