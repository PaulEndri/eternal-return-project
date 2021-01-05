import fs from "fs";
import Master from "./generated/masterData/master.json";

const getEnumVal = (val) => (typeof val === "string" ? `"${val}"` : val.toString());

// const vals = (values) =>
//   Object.entries({
//     ...Object.fromEntries(values),
//     ...Object.fromEntries(values.map(([k, v]) => [v, k])),
//   });

const enumTemplate = (
  [first, ...rest]: string,
  values: [string | number, string][]
) => `// automatically generated file

export enum ${first.toUpperCase()}${rest.join("")}Lookup {
${values.map((val) => `\t"${val[0]}" = ${getEnumVal(val[1])}`).join(",\n")}
};

export enum ${first.toUpperCase()}${rest.join("")} {
${values.map((val) => `\t"${val[0]}" = "${val[0]}"`).join(",\n")}
};
`;

const writeFile = (name: string, content: string) => {
  fs.writeFileSync(`src/generated/enums/${name}.ts`, content);
};

const extractPropFromData = (data, prop) =>
  data[prop].map(({ name, id, code }, idx) => [name, id ? id : code || idx]);

const animals = extractPropFromData(Master, "animals");
const characters = extractPropFromData(Master, "characters");
const armors = extractPropFromData(Master, "armor");
const locations = extractPropFromData(Master, "locations");
const items = extractPropFromData(Master, "items");

writeFile("Animals", enumTemplate("Animals", animals));
writeFile("Characters", enumTemplate("characters", characters));
writeFile("Armors", enumTemplate("armors", armors));
writeFile(
  "Weapons",
  enumTemplate(
    "weapons",
    Master.weapon.map(({ name, apiMetaData: { type } }) => [name, type])
  )
);
writeFile("Locations", enumTemplate("locations", locations));
writeFile("Items", enumTemplate("items", items));

const rawCategorySet = Object.fromEntries(
  Master.items.map(({ apiMetaData, clientMetaData }) => [
    apiMetaData.category,
    clientMetaData.category,
  ])
);

writeFile("Categories", enumTemplate("categories", Object.entries(rawCategorySet) as any));
