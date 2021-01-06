import fs from 'fs';
import Master from './generated/masterData/master.json';

const getEnumVal = (val) =>
  typeof val === 'string' ? `"${val}"` : val.toString();

const getEnumLiteral = (name, values, exportEnum = true) => {
  const props = values
    .map((val) => `\t"${val[0]}" = ${getEnumVal(val[1])}`)
    .join(',\n');

  const prefix = exportEnum ? 'export ' : '';

  return `${prefix}enum ${name} {\n${props}\n};\n`;
};

const dictTemplate = (
  [first, ...rest]: string,
  values: any
) => `// automatically generated file

${Object.entries(values)
  .map(([name, val]) => getEnumLiteral(name, Object.entries(val), false))
  .join('\n')}

export const ${first.toUpperCase()}${rest.join('')}Dictionary = {
${Object.keys(values)
  .map((name) => `\t${name},`)
  .join('\n')}
}
export type ${first.toUpperCase()}${rest.join(
  ''
)}Dictionary = typeof ${first.toUpperCase()}${rest.join('')}Dictionary;
`;
const enumTemplate = (
  [first, ...rest]: string,
  values: [string | number, string][]
) => `// automatically generated file

${getEnumLiteral(`${first.toUpperCase()}${rest.join('')}Lookup`, values)}

${getEnumLiteral(
  `${first.toUpperCase()}${rest.join('')}`,
  values.map(([a, b]) => [b, a])
)}
`;

export const generateEnums = () => {
  const writeFile = (name: string, content: string) => {
    fs.writeFileSync(`src/generated/enums/${name}.ts`, content);
  };

  const extractPropFromData = (data, prop) =>
    data[prop].map(({ name, id, code }, idx) => [name, id ? id : code || idx]);

  const animals = extractPropFromData(Master, 'animals');
  const characters = extractPropFromData(Master, 'characters');
  const armors = extractPropFromData(Master, 'armor');
  const locations = extractPropFromData(Master, 'locations');
  const items = extractPropFromData(Master, 'items');

  writeFile('Animals', enumTemplate('Animals', animals));
  writeFile('Characters', enumTemplate('characters', characters));
  writeFile('Armors', enumTemplate('armors', armors));
  writeFile(
    'Weapons',
    enumTemplate(
      'weapons',
      Master.weapon.map(({ name, apiMetaData: { type } }) => [name, type])
    )
  );
  writeFile('Locations', enumTemplate('locations', locations));
  writeFile('Items', enumTemplate('items', items));

  const rawCategorySet = Object.fromEntries(
    Master.items.map(({ apiMetaData, clientMetaData }) => [
      apiMetaData.category,
      clientMetaData.category
    ])
  );

  writeFile(
    'Categories',
    enumTemplate('categories', Object.entries(rawCategorySet) as any)
  );

  const itemsDict = {};

  Master.items.forEach((item) => {
    if (!itemsDict[item.apiMetaData.type]) {
      itemsDict[item.apiMetaData.type] = {};
    }

    itemsDict[item.apiMetaData.type][item.name] = item.id;
  });

  writeFile('ItemTypes', dictTemplate('ItemTypes', itemsDict));

  writeFile(
    'WeaponTypes',
    dictTemplate(
      'WeaponTypes',
      Object.fromEntries(
        Master.weapon.map((wpn) => [
          wpn.apiMetaData.type,
          Object.fromEntries(wpn.items.map(({ id, name }) => [name, id]))
        ])
      )
    )
  );

  writeFile(
    'ArmorTypes',
    dictTemplate(
      'ArmorTypes',
      Object.fromEntries(
        Master.armor.map((wpn) => [
          wpn.apiMetaData.type,
          Object.fromEntries(wpn.items.map(({ id, name }) => [name, id]))
        ])
      )
    )
  );

  return Promise.resolve();
};
