#Eternal Return Black Survival Wiki Data Scraper/API

This is a simple NPM package that uses some of the public endpoints for Eternal Return and the data in the official Wiki to create a wrapper to pull some basic information for the game.

## Monorepo
This project is housed inside of a monorepo that contains my other ERBS work, monorepo stuff is using lerna

## Features
- First Class Typescript Support
- Full Character, Item, Animal, and Location lookup
- Lookup either a single entity or all entities in a given category
- Optionally pull in items by category

## Exports
- [ItemScraper](/docs/classes/wikidata.itemscraper.md)
- [AnimalScraper](/docs/classes/wikidata.animalscraper.md)
- [LocationScraper](/docs/classes/wikidata.locationscraper.md)
- [CharacterScraper](/docs/classes/wikidata.characterscraper.md)
- [GenericApi](/docs/classes/wikidata.genericapi.md)

## Usage
```typescript
import {AnimalScraper, LocationScraper, CharacterScraper, ItemScraper, GenericApi} from 'erbs-wiki-api';

const animalScraper = new AnimalScraper();
const locationScraper = new LocationScraper();
const characterScraper = new CharacterScraper();
const genericApi = new GenericApi();
const ItemScraper = new ItemSCraper();

const methods = [
    animalScraper.getAll(), // gets all animals
    locationScraper.getAll(), // gets all locations
    characterScraper.getAll(), // gets all characters
    itemScraper.getItem('Milk'), // get all data for any item called "Milk"
    itemScraper.getWeapons(false), // gets all weapon types and abilities with only the names of every weapon option
    itemScraper.getArmors(true), // gets all armor types and categories with all the item information
    genericApi.getAllItems() , // gets all the item information from the generic public api
];

const results = await Promise.all(methods);
```

## Docs:
Check the typedocs above for more information for more information
> [Globals](docs/globals.md)
