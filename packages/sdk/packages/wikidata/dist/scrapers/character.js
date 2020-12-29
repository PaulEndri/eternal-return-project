"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterScraper = void 0;
const constants_1 = require("../utils/constants");
const core_1 = require("./core");
class CharacterScraper extends core_1.CoreScraper {
    constructor() {
        super(...arguments);
        this.statMap = {
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
        this.getCharacter = async ({ name, href }) => {
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
                        const expectedTiers = ['Passive', 'R'].includes(abilitySlot) ? 3 : 5;
                        const parts = chunk.split('/');
                        if (parts.length === expectedTiers) {
                            parts.forEach((val, i) => (tiers[i + 1] = val));
                        }
                    });
                    return [title, { title, value, tiers }];
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
            };
        };
        this.getAll = async (weaponData) => {
            const $ = await this.getPage(constants_1.CHARACTER_PATH);
            const characterPromises = $('#mw-content-text > div > table:nth-child(5) > tbody')
                .find('img')
                .toArray()
                .map((el) => $(el).parent())
                .map((el) => this.getSimpleElement($, el))
                .map((character) => this.getCharacter(character));
            const characters = await Promise.all(characterPromises);
            if (weaponData) {
                characters.forEach((char) => {
                    char.weapons = Object.entries(weaponData)
                        .filter(([, type]) => type.usableBy.includes(char.name))
                        .map(([key]) => key);
                });
            }
            return Object.fromEntries(characters.map((char) => [char.name, char]));
        };
    }
}
exports.CharacterScraper = CharacterScraper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjcmFwZXJzL2NoYXJhY3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSxrREFBb0Q7QUFDcEQsaUNBQXFDO0FBRXJDLE1BQWEsZ0JBQWlCLFNBQVEsa0JBQVc7SUFBakQ7O1FBQ1MsWUFBTyxHQUFHO1lBQ2pCLGNBQWMsRUFBRSxhQUFhO1lBQzdCLE1BQU0sRUFBRSxJQUFJO1lBQ1osY0FBYyxFQUFFLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUk7WUFDYixlQUFlLEVBQUUsU0FBUztZQUMxQixPQUFPLEVBQUUsU0FBUztZQUNsQixrQkFBa0IsRUFBRSxhQUFhO1lBQ2pDLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxhQUFhLEVBQUUsV0FBVztZQUMxQixhQUFhLEVBQUUsWUFBWTtTQUMzQixDQUFDO1FBRUssaUJBQVksR0FBRyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFZLEVBQUUsRUFBRTtZQUN4RCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksV0FBVyxFQUFFO2dCQUNoQixPQUFPLFdBQVcsQ0FBQzthQUNuQjtZQUVELE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7WUFDeEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyRCxNQUFNLE9BQU8sR0FBRyxRQUFRO2lCQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUM7aUJBQ3pCLE1BQU0sRUFBRTtpQkFDUixPQUFPLENBQUMsSUFB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Q0FBQyxDQUFDO1lBRXhELElBQUksVUFBVSxFQUFFO2dCQUNmLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzt5QkFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBRSxBQUFELEVBQUcsSUFBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDekQsR0FBRyxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFFRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQWEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFwSUQsNENBb0lDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKiBAbW9kdWxlIFdpa2lEYXRhXHJcbiAqICovXHJcbmltcG9ydCB7IElDaGFyYWN0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFyYWN0ZXInO1xyXG5pbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBDSEFSQUNURVJfUEFUSCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENvcmVTY3JhcGVyIH0gZnJvbSAnLi9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTY3JhcGVyIGV4dGVuZHMgQ29yZVNjcmFwZXIge1xyXG5cdHByaXZhdGUgc3RhdE1hcCA9IHtcclxuXHRcdCdBdHRhY2sgcG93ZXInOiAnQXR0YWNrUG93ZXInLFxyXG5cdFx0SGVhbHRoOiAnSFAnLFxyXG5cdFx0J0hlYWx0aCByZWdlbic6ICdIcFJlZ2VuJyxcclxuXHRcdFN0YW1pbmE6ICdTUCcsXHJcblx0XHQnU3RhbWluYSByZWdlbic6ICdTcFJlZ2VuJyxcclxuXHRcdERlZmVuc2U6ICdEZWZlbnNlJyxcclxuXHRcdCdCb251cyBhdGsuIHNwZWVkJzogJ0F0dGFja1NwZWVkJyxcclxuXHRcdCdCb251cyBjcml0IHJhdGUnOiAnQ3J0aXRpY2FsQ2hhbmNlJyxcclxuXHRcdCdNb3ZlLiBzcGVlZCc6ICdNb3ZlU3BlZWQnLFxyXG5cdFx0J1NpZ2h0IHJhbmdlJzogJ1NpZ2h0UmFuZ2UnXHJcblx0fTtcclxuXHJcblx0cHVibGljIGdldENoYXJhY3RlciA9IGFzeW5jICh7IG5hbWUsIGhyZWYgfTogSUVsZW1lbnQpID0+IHtcclxuXHRcdGNvbnN0IGNhY2hlZFZhbHVlID0gYXdhaXQgdGhpcy5jYWNoZS5nZXQ8SUNoYXJhY3Rlcj4obmFtZSk7XHJcblx0XHRpZiAoY2FjaGVkVmFsdWUpIHtcclxuXHRcdFx0cmV0dXJuIGNhY2hlZFZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0ICQgPSBhd2FpdCB0aGlzLmdldFBhZ2UoYCR7aHJlZn1gKTtcclxuXHRcdGNvbnN0ICRpbmZvQm94ID0gJCgndGFibGUuaW5mb2JveHRhYmxlOm50aC1jaGlsZCgxKScpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSAkaW5mb0JveC5maW5kKCdpJykudGV4dCgpLnRyaW0oKTtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSAkaW5mb0JveFxyXG5cdFx0XHQuZmluZCgndGguaW5mb2JveGRldGFpbHMnKVxyXG5cdFx0XHQucGFyZW50KClcclxuXHRcdFx0Lm5leHRBbGwoJ3RyJylcclxuXHRcdFx0LnRvQXJyYXkoKVxyXG5cdFx0XHQubWFwKChlbCkgPT4gJChlbCkuZmluZCgndGQnKS50b0FycmF5KCkubWFwKChjb2wpID0+ICQoY29sKS50ZXh0KCkudHJpbSgpKSk7XHJcblxyXG5cdFx0Y29uc3QgJHN0YXRzQm94ID0gJCgndGFibGU6bnRoLWNoaWxkKDMpJyk7XHJcblx0XHRjb25zdCBzdGF0cyA9IHsgc3RhcnQ6IHt9LCBmaW5pc2g6IHt9LCBncm93dGg6IHt9IH07XHJcblxyXG5cdFx0JHN0YXRzQm94LmZpbmQoJ3RoLmluZm9ib3hkZXRhaWxzJykucGFyZW50KCkubmV4dEFsbCgndHInKS50b0FycmF5KCkuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0Y29uc3QgJHJvdyA9ICQoZWwpO1xyXG5cdFx0XHRjb25zdCAkY29scyA9ICRyb3cuZmluZCgndGQnKTtcclxuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCRjb2xzWzBdKS50ZXh0KCkudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBsZXZlbDEgPSAkKCRjb2xzWzFdKS50ZXh0KCkudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBsZXZlbDIwID0gJCgkY29sc1syXSkudGV4dCgpLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZ3Jvd3RoID0gJCgkY29sc1szXSkudGV4dCgpLnRyaW0oKTtcclxuXHJcblx0XHRcdGNvbnN0IHN0YXROYW1lID0gdGhpcy5zdGF0TWFwW3RpdGxlXTtcclxuXHJcblx0XHRcdHN0YXRzLnN0YXJ0W3N0YXROYW1lXSA9IGxldmVsMTtcclxuXHRcdFx0c3RhdHMuZmluaXNoW3N0YXROYW1lXSA9IGxldmVsMjA7XHJcblx0XHRcdHN0YXRzLmdyb3d0aFtzdGF0TmFtZV0gPSBncm93dGg7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCAkYWJpbGl0aWVzID0gJCgnLmFiaWxpdHlfZGV0YWlscycpO1xyXG5cdFx0Y29uc3QgYWJpbGl0aWVzID0ge307XHJcblxyXG5cdFx0JGFiaWxpdGllcy50b0FycmF5KCkuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0Y29uc3QgJGFiaWxpdHlUYWJsZSA9ICQoZWwpLmZpbmQoJ3RhYmxlJyk7XHJcblx0XHRcdGNvbnN0IGFiaWxpdHlTbG90ID0gJGFiaWxpdHlUYWJsZVxyXG5cdFx0XHRcdC5maW5kKCdwLmhlYWRlcjEnKVxyXG5cdFx0XHRcdC50ZXh0KClcclxuXHRcdFx0XHQudHJpbSgpXHJcblx0XHRcdFx0Lm1hdGNoKC9cXCgoW14pXSspXFwpLywgJycpWzFdO1xyXG5cdFx0XHRjb25zdCBhYmlsaXR5TmFtZSA9ICRhYmlsaXR5VGFibGVcclxuXHRcdFx0XHQuZmluZCgncC5oZWFkZXIxJylcclxuXHRcdFx0XHQudGV4dCgpXHJcblx0XHRcdFx0LnRyaW0oKVxyXG5cdFx0XHRcdC5zcGxpdCgnKCcpXHJcblx0XHRcdFx0LnNoaWZ0KClcclxuXHRcdFx0XHQudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBhYmlsaXR5VHlwZSA9ICRhYmlsaXR5VGFibGUuZmluZCgncC5oZWFkZXIyJykudGV4dCgpLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gJGFiaWxpdHlUYWJsZVxyXG5cdFx0XHRcdC5maW5kKCd0cjpudGgtY2hpbGQoMykgdGQ6bnRoLWNoaWxkKDMpIHAnKVxyXG5cdFx0XHRcdC50ZXh0KClcclxuXHRcdFx0XHQudHJpbSgpO1xyXG5cclxuXHRcdFx0Y29uc3QgYWJpbGl0eVN0YXRzID0gJGFiaWxpdHlUYWJsZS5maW5kKCd0YWJsZS5pbmZvYm94dGFibGUgdHInKS50b0FycmF5KCkubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0ICRyb3cgPSAkKGVsKTtcclxuXHRcdFx0XHRjb25zdCB0aXRsZSA9ICRyb3cuZmluZCgndGQ6bnRoLWNoaWxkKDEpJykudGV4dCgpLnRyaW0oKTtcclxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9ICRyb3cuZmluZCgndGQ6bnRoLWNoaWxkKDIpJykudGV4dCgpLnRyaW0oKTtcclxuXHRcdFx0XHRjb25zdCB0aWVycyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YWx1ZS5zcGxpdCgnICcpLmZvckVhY2goKGNodW5rKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBleHBlY3RlZFRpZXJzID0gWyAnUGFzc2l2ZScsICdSJyBdLmluY2x1ZGVzKGFiaWxpdHlTbG90KSA/IDMgOiA1O1xyXG5cdFx0XHRcdFx0Y29uc3QgcGFydHMgPSBjaHVuay5zcGxpdCgnLycpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IGV4cGVjdGVkVGllcnMpIHtcclxuXHRcdFx0XHRcdFx0cGFydHMuZm9yRWFjaCgodmFsLCBpKSA9PiAodGllcnNbaSArIDFdID0gdmFsKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBbIHRpdGxlLCB7IHRpdGxlLCB2YWx1ZSwgdGllcnMgfSBdO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGFiaWxpdGllc1thYmlsaXR5U2xvdF0gPSB7XHJcblx0XHRcdFx0bmFtZTogYWJpbGl0eU5hbWUsXHJcblx0XHRcdFx0c2xvdDogYWJpbGl0eVNsb3QsXHJcblx0XHRcdFx0dHlwZTogYWJpbGl0eVR5cGUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGFiaWxpdHlEZXNjcmlwdGlvbixcclxuXHRcdFx0XHRzdGF0czogT2JqZWN0LmZyb21FbnRyaWVzKGFiaWxpdHlTdGF0cylcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGhyZWYsXHJcblx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRkZXRhaWxzLFxyXG5cdFx0XHRzdGF0cyxcclxuXHRcdFx0YWJpbGl0aWVzLFxyXG5cdFx0XHR3ZWFwb25zOiBbXVxyXG5cdFx0fSBhcyBJQ2hhcmFjdGVyO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXRBbGwgPSBhc3luYyAod2VhcG9uRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcclxuXHRcdGNvbnN0ICQgPSBhd2FpdCB0aGlzLmdldFBhZ2UoQ0hBUkFDVEVSX1BBVEgpO1xyXG5cdFx0Y29uc3QgY2hhcmFjdGVyUHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gJChcclxuXHRcdFx0JyNtdy1jb250ZW50LXRleHQgPiBkaXYgPiB0YWJsZTpudGgtY2hpbGQoNSkgPiB0Ym9keSdcclxuXHRcdClcclxuXHRcdFx0LmZpbmQoJ2ltZycpXHJcblx0XHRcdC50b0FycmF5KClcclxuXHRcdFx0Lm1hcCgoZWwpID0+ICQoZWwpLnBhcmVudCgpKVxyXG5cdFx0XHQubWFwKChlbCkgPT4gdGhpcy5nZXRTaW1wbGVFbGVtZW50KCQsIGVsKSlcclxuXHRcdFx0Lm1hcCgoY2hhcmFjdGVyKSA9PiB0aGlzLmdldENoYXJhY3RlcihjaGFyYWN0ZXIpKTtcclxuXHJcblx0XHRjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoY2hhcmFjdGVyUHJvbWlzZXMpO1xyXG5cclxuXHRcdGlmICh3ZWFwb25EYXRhKSB7XHJcblx0XHRcdGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG5cdFx0XHRcdGNoYXIud2VhcG9ucyA9IE9iamVjdC5lbnRyaWVzKHdlYXBvbkRhdGEpXHJcblx0XHRcdFx0XHQuZmlsdGVyKChbICwgdHlwZSBdKSA9PiB0eXBlLnVzYWJsZUJ5LmluY2x1ZGVzKGNoYXIubmFtZSkpXHJcblx0XHRcdFx0XHQubWFwKChbIGtleSBdKSA9PiBrZXkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzPElDaGFyYWN0ZXI+KGNoYXJhY3RlcnMubWFwKChjaGFyKSA9PiBbIGNoYXIubmFtZSwgY2hhciBdKSk7XHJcblx0fTtcclxufVxyXG4iXX0=