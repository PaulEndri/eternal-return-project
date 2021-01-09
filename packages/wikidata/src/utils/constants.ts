/**
 * @packageDocumentation
 * @module WikiData
 **/
export const DOWNLOAD_IMAGES = false;
export const BASE_URL = 'https://eternalreturn.gamepedia.com/';
export const WEAPON_PATH = 'Weapon';
export const CONSUMABLE_PATH = 'Consumable';
export const MATERIAL_PATH = 'Material';
export const ARMOR_PATH = 'Armor';
export const SPECIAL_PATH = 'Special';
export const CHARACTER_PATH = 'Character';
export const MAP_PATH = 'Lumia_Island';
export const ANIMAL_PATH = 'Animal';

export const LocationConnections = {
  Beach: ['Hotel', 'Forest', 'Uptown'],
  Uptown: ['Beach', 'Forest', 'Dock', 'Chapel'],
  Dock: ['Uptown', 'Chapel', 'Factory'],
  Hotel: ['Beach', 'Forest', 'School', 'Archery Range'],
  Forest: ['School', 'Hotel', 'Beach', 'Uptown', 'Chapel', 'Avenue'],
  Chapel: ['Cemetery', 'Forest', 'Factory', 'Dock', 'Uptown'],
  Factory: ['Dock', 'Chapel', 'Cemetery', 'Hospital'],
  Cemetery: ['Chapel', 'Factory', 'Hospital', 'Pond'],
  School: ['Archery Range', 'Alley', 'Avenue', 'Forest', 'Hotel'],
  'Archery Range': ['Hotel', 'School', 'Alley'],
  Alley: ['Archery Range', 'School', 'Avenue', 'Temple'],
  Avenue: ['Alley', 'Temple', 'Pond', 'Forest', 'School'],
  Temple: ['Pond', 'Alley', 'Avenue'],
  Pond: ['Avenue', 'Temple', 'Hospital'],
  Hospital: ['Factory', 'Cemetery', 'Pond']
};

export const TeleportLocations = [
  'Uptown',
  'Hotel',
  'Chapel',
  'Alley',
  'Avenue',
  'Hospital',
  'Temple'
];

export enum Locations {
  'Alley' = 'Alley',
  'Temple' = 'Temple',
  'Avenue' = 'Avenue',
  'Pond' = 'Pond',
  'Hospital' = 'Hospital',
  'Archery Range' = 'Archery Range',
  'School' = 'School',
  'Cemetery' = 'Cemetery',
  'Factory' = 'Factory',
  'Hotel' = 'Hotel',
  'Forest' = 'Forest',
  'Chapel' = 'Chapel',
  'Beach' = 'Beach',
  'Uptown' = 'Uptown',
  'Dock' = 'Dock'
}
