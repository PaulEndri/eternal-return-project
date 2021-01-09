import Animals from './generated/masterData/animals.json';
import Armors from './generated/masterData/armors.json';
import Weapons from './generated/masterData/weapons.json';
import Items from './generated/masterData/items.json';
import Characters from './generated/masterData/characters.json';
import Locations from './generated/masterData/locations.json';
import fs from 'fs';

const stripString = (str) =>
  str
    .replace(/ /g, '')
    .replace(/-/g, '')
    .replace(/'/g, '')
    .replace('(Animal)', '')
    .replace('&', '');

const interfaceTemplate = (name, type, data) =>
  `import ${type} from '../../types/${type}';

export const ${stripString(name)}: ${type} = ${JSON.stringify(data, null, '\t')}
`;

const indexTemplate = (sources) =>
  sources
    .map((source) => {
      const name = stripString(source.name);

      return `export * from './${name}';`;
    })
    .join('\n');

const writeFile = (name: string, dir: string, content) => {
  const base = 'src/generated/data';

  if (!fs.existsSync(`${base}/${dir}`)) {
    fs.mkdirSync(`${base}/${dir}`);
  }

  fs.writeFileSync(`${base}/${dir}/${stripString(name)}.ts`, content);
};

export const generateObjects = () => {
  const generators = [
    [Animals, 'Animal'],
    [Weapons, 'Weapon'],
    [Armors, 'Armor'],
    [Items, 'Item'],
    [Characters, 'Character'],
    [Locations, 'Location']
  ];

  generators.forEach(([source, type]: [any[], string]) => {
    source.forEach((data) =>
      writeFile(
        data.name as string,
        type + 's',
        interfaceTemplate(data.name as string, type, data)
      )
    );

    writeFile('index', type + 's', indexTemplate(source));
  });

  const globalImports = generators
    .map(([, name]) => `import * as ${name}Data from './${name}s';`)
    .join('\n');

  const globalExports = generators
    .map(([, name]) => `export const ${name}s = ${name}Data;`)
    .join('\n');

  writeFile('index', '.', `${globalImports}\n${globalExports}`);

  return Promise.resolve();
};
