"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreScraper = void 0;
/**
 * @packageDocumentation
 * @module WikiData
 **/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVycy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7SUFHSTtBQUNKLHNEQUE4QjtBQUM5Qiw0REFBK0I7QUFFL0Isa0RBQStDO0FBRS9DLE1BQWEsV0FBVztJQUl2QixZQUFZLEtBQWtCO1FBUXBCLHFCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDeEQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsTUFBTSxPQUFPLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdEIsQ0FBQztZQUVGLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFSyxZQUFPLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2QztZQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUMsSUFBSSxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzdCLE9BQU8sVUFBVSxDQUFDO2FBQ2xCO1lBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDO1FBdkNELElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7U0FDN0I7SUFDRixDQUFDOztBQVZGLGtDQTZDQztBQTVDTyxvQkFBUSxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFxyXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cclxuICogQG1vZHVsZSBXaWtpRGF0YVxyXG4gKiovXHJcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCB7IElXaWtpQ2FjaGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lXaWtpQ2FjaGUnO1xyXG5pbXBvcnQgeyBXaWtpQ2FjaGUgfSBmcm9tICcuLi91dGlscy93aWtpQ2FjaGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmVTY3JhcGVyIHtcclxuXHRzdGF0aWMgQkFTRV9VUkwgPSAnaHR0cHM6Ly9ldGVybmFscmV0dXJuLmdhbWVwZWRpYS5jb20vJztcclxuXHRwdWJsaWMgY2FjaGU6IElXaWtpQ2FjaGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhY2hlPzogSVdpa2lDYWNoZSkge1xyXG5cdFx0aWYgKGNhY2hlKSB7XHJcblx0XHRcdHRoaXMuY2FjaGUgPSBjYWNoZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2FjaGUgPSBuZXcgV2lraUNhY2hlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0U2ltcGxlRWxlbWVudCA9ICgkLCBlbCwgbmFtZU9ubHkgPSBmYWxzZSkgPT4ge1xyXG5cdFx0Y29uc3QgJGVsID0gJChlbCk7XHJcblxyXG5cdFx0Y29uc3QgbmFtZSA9ICRlbC5hdHRyKCd0aXRsZScpO1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHtcclxuXHRcdFx0bmFtZTogbmFtZSB8fCBudWxsLFxyXG5cdFx0XHRocmVmOiAkZWwuYXR0cignaHJlZicpXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBuYW1lT25seSA/IG5hbWUgOiBlbGVtZW50O1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXRQYWdlID0gYXN5bmMgKHBhZ2U6IHN0cmluZywgc2tpcENhY2hlID0gZmFsc2UpID0+IHtcclxuXHRcdGxldCBwYXRoID0gYCR7Q29yZVNjcmFwZXIuQkFTRV9VUkx9JHtwYWdlfWA7XHJcblxyXG5cdFx0d2hpbGUgKHBhdGguaW5kZXhPZignLmNvbS8vJykgPj0gMCkge1xyXG5cdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKCcuY29tLy8nLCAnLmNvbS8nKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBjYWNoZWRQYWdlID0gYXdhaXQgdGhpcy5jYWNoZS5nZXQocGF0aCk7XHJcblxyXG5cdFx0aWYgKGNhY2hlZFBhZ2UgJiYgIXNraXBDYWNoZSkge1xyXG5cdFx0XHRyZXR1cm4gY2FjaGVkUGFnZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwYXRoKTtcclxuXHRcdGNvbnN0IHR4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcblx0XHRjb25zdCAkID0gY2hlZXJpby5sb2FkKHR4dCk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5jYWNoZS5zZXQocGF0aCwgJCk7XHJcblxyXG5cdFx0cmV0dXJuICQ7XHJcblx0fTtcclxufVxyXG4iXX0=