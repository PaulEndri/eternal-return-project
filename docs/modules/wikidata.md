**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / WikiData

# Module: WikiData

## Index

### References

* [AnimalScraper](wikidata.md#animalscraper)
* [CharacterScraper](wikidata.md#characterscraper)
* [GenericApi](wikidata.md#genericapi)
* [ItemScraper](wikidata.md#itemscraper)
* [LocationScraper](wikidata.md#locationscraper)
* [WikiCache](wikidata.md#wikicache)

### Enumerations

* [Locations](../enums/wikidata.locations.md)

### Classes

* [AnimalScraper](../classes/wikidata.animalscraper.md)
* [CharacterScraper](../classes/wikidata.characterscraper.md)
* [CoreScraper](../classes/wikidata.corescraper.md)
* [GenericApi](../classes/wikidata.genericapi.md)
* [ItemScraper](../classes/wikidata.itemscraper.md)
* [LocationScraper](../classes/wikidata.locationscraper.md)
* [WikiCache](../classes/wikidata.wikicache.md)

### Variables

* [ANIMAL\_PATH](wikidata.md#animal_path)
* [ARMOR\_PATH](wikidata.md#armor_path)
* [BASE\_URL](wikidata.md#base_url)
* [CHARACTER\_PATH](wikidata.md#character_path)
* [CONSUMABLE\_PATH](wikidata.md#consumable_path)
* [DOWNLOAD\_IMAGES](wikidata.md#download_images)
* [MAP\_PATH](wikidata.md#map_path)
* [MATERIAL\_PATH](wikidata.md#material_path)
* [SPECIAL\_PATH](wikidata.md#special_path)
* [TeleportLocations](wikidata.md#teleportlocations)
* [WEAPON\_PATH](wikidata.md#weapon_path)

### Object literals

* [LocationConnections](wikidata.md#locationconnections)

## References

### AnimalScraper

Re-exports: [AnimalScraper](../classes/wikidata.animalscraper.md)

___

### CharacterScraper

Re-exports: [CharacterScraper](../classes/wikidata.characterscraper.md)

___

### GenericApi

Re-exports: [GenericApi](../classes/wikidata.genericapi.md)

___

### ItemScraper

Re-exports: [ItemScraper](../classes/wikidata.itemscraper.md)

___

### LocationScraper

Re-exports: [LocationScraper](../classes/wikidata.locationscraper.md)

___

### WikiCache

Re-exports: [WikiCache](../classes/wikidata.wikicache.md)

## Variables

### ANIMAL\_PATH

• `Const` **ANIMAL\_PATH**: \"Animal\" = "Animal"

*Defined in [packages/wikidata/src/utils/constants.ts:14](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L14)*

___

### ARMOR\_PATH

• `Const` **ARMOR\_PATH**: \"Armor\" = "Armor"

*Defined in [packages/wikidata/src/utils/constants.ts:10](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L10)*

___

### BASE\_URL

• `Const` **BASE\_URL**: \"https://eternalreturn.gamepedia.com/\" = "https://eternalreturn.gamepedia.com/"

*Defined in [packages/wikidata/src/utils/constants.ts:6](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L6)*

___

### CHARACTER\_PATH

• `Const` **CHARACTER\_PATH**: \"Character\" = "Character"

*Defined in [packages/wikidata/src/utils/constants.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L12)*

___

### CONSUMABLE\_PATH

• `Const` **CONSUMABLE\_PATH**: \"Consumable\" = "Consumable"

*Defined in [packages/wikidata/src/utils/constants.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L8)*

___

### DOWNLOAD\_IMAGES

• `Const` **DOWNLOAD\_IMAGES**: false = false

*Defined in [packages/wikidata/src/utils/constants.ts:5](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L5)*

___

### MAP\_PATH

• `Const` **MAP\_PATH**: \"Lumia\_Island\" = "Lumia\_Island"

*Defined in [packages/wikidata/src/utils/constants.ts:13](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L13)*

___

### MATERIAL\_PATH

• `Const` **MATERIAL\_PATH**: \"Material\" = "Material"

*Defined in [packages/wikidata/src/utils/constants.ts:9](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L9)*

___

### SPECIAL\_PATH

• `Const` **SPECIAL\_PATH**: \"Special\" = "Special"

*Defined in [packages/wikidata/src/utils/constants.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L11)*

___

### TeleportLocations

• `Const` **TeleportLocations**: string[] = [ 'Archery Range', 'Beach', 'Uptown', 'Hotel', 'Chapel', 'Alley', 'Avenue', 'Hospital', 'Temple' ]

*Defined in [packages/wikidata/src/utils/constants.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L34)*

___

### WEAPON\_PATH

• `Const` **WEAPON\_PATH**: \"Weapon\" = "Weapon"

*Defined in [packages/wikidata/src/utils/constants.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L7)*

## Object literals

### LocationConnections

▪ `Const` **LocationConnections**: object

*Defined in [packages/wikidata/src/utils/constants.ts:16](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/utils/constants.ts#L16)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`Alley` | string[] | [ 'Archery Range', 'School', 'Avenue', 'Temple' ] |
`Archery Range` | string[] | [ 'Hotel', 'School', 'Alley' ] |
`Avenue` | string[] | [ 'Alley', 'Temple', 'Pond', 'Forest', 'School' ] |
`Beach` | string[] | [ 'Hotel', 'Forest', 'Uptown' ] |
`Cemetery` | string[] | [ 'Chapel', 'Factory', 'Hospital', 'Pond' ] |
`Chapel` | string[] | [ 'Cemetery', 'Forest', 'Factory', 'Dock', 'Uptown' ] |
`Dock` | string[] | [ 'Uptown', 'Chapel', 'Factory' ] |
`Factory` | string[] | [ 'Dock', 'Chapel', 'Cemetery', 'Hospital' ] |
`Forest` | string[] | [ 'School', 'Hotel', 'Beach', 'Uptown', 'Chapel', 'Avenue' ] |
`Hospital` | string[] | [ 'Factory', 'Cemetery', 'Pond' ] |
`Hotel` | string[] | [ 'Beach', 'Forest', 'School', 'Archery Range' ] |
`Pond` | string[] | [ 'Avenue', 'Temple', 'Hospital' ] |
`School` | string[] | [ 'Archery Range', 'Alley', 'Avenue', 'Forest', 'Hotel' ] |
`Temple` | string[] | [ 'Pond', 'Alley', 'Avenue' ] |
`Uptown` | string[] | [ 'Beach', 'Forest', 'Dock', 'Chapel' ] |
