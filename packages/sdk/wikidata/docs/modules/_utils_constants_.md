**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / "utils/constants"

# Module: "utils/constants"

## Index

### Enumerations

* [Locations](../enums/_utils_constants_.locations.md)

### Variables

* [ANIMAL\_PATH](_utils_constants_.md#animal_path)
* [ARMOR\_PATH](_utils_constants_.md#armor_path)
* [BASE\_URL](_utils_constants_.md#base_url)
* [CHARACTER\_PATH](_utils_constants_.md#character_path)
* [CONSUMABLE\_PATH](_utils_constants_.md#consumable_path)
* [DOWNLOAD\_IMAGES](_utils_constants_.md#download_images)
* [MAP\_PATH](_utils_constants_.md#map_path)
* [MATERIAL\_PATH](_utils_constants_.md#material_path)
* [SPECIAL\_PATH](_utils_constants_.md#special_path)
* [TeleportLocations](_utils_constants_.md#teleportlocations)
* [WEAPON\_PATH](_utils_constants_.md#weapon_path)

### Object literals

* [LocationConnections](_utils_constants_.md#locationconnections)

## Variables

### ANIMAL\_PATH

• `Const` **ANIMAL\_PATH**: \"Animal\" = "Animal"

*Defined in [src/utils/constants.ts:10](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L10)*

___

### ARMOR\_PATH

• `Const` **ARMOR\_PATH**: \"Armor\" = "Armor"

*Defined in [src/utils/constants.ts:6](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L6)*

___

### BASE\_URL

• `Const` **BASE\_URL**: \"https://eternalreturn.gamepedia.com/\" = "https://eternalreturn.gamepedia.com/"

*Defined in [src/utils/constants.ts:2](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L2)*

___

### CHARACTER\_PATH

• `Const` **CHARACTER\_PATH**: \"Character\" = "Character"

*Defined in [src/utils/constants.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L8)*

___

### CONSUMABLE\_PATH

• `Const` **CONSUMABLE\_PATH**: \"Consumable\" = "Consumable"

*Defined in [src/utils/constants.ts:4](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L4)*

___

### DOWNLOAD\_IMAGES

• `Const` **DOWNLOAD\_IMAGES**: false = false

*Defined in [src/utils/constants.ts:1](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L1)*

___

### MAP\_PATH

• `Const` **MAP\_PATH**: \"Lumia\_Island\" = "Lumia\_Island"

*Defined in [src/utils/constants.ts:9](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L9)*

___

### MATERIAL\_PATH

• `Const` **MATERIAL\_PATH**: \"Material\" = "Material"

*Defined in [src/utils/constants.ts:5](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L5)*

___

### SPECIAL\_PATH

• `Const` **SPECIAL\_PATH**: \"Special\" = "Special"

*Defined in [src/utils/constants.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L7)*

___

### TeleportLocations

• `Const` **TeleportLocations**: string[] = [ 'Archery Range', 'Beach', 'Uptown', 'Hotel', 'Chapel', 'Alley', 'Avenue', 'Hospital', 'Temple' ]

*Defined in [src/utils/constants.ts:30](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L30)*

___

### WEAPON\_PATH

• `Const` **WEAPON\_PATH**: \"Weapon\" = "Weapon"

*Defined in [src/utils/constants.ts:3](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L3)*

## Object literals

### LocationConnections

▪ `Const` **LocationConnections**: object

*Defined in [src/utils/constants.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/utils/constants.ts#L12)*

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
