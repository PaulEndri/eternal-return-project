import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const readDirectory = () => {
  const matches = {};

  return new Promise((resolve) => {
    fs.readdir('src/generated/mongo/', (e, f) => {
      if (e) {
        console.error('ruh roh shaggy', e);
      } else {
        f.forEach((fileName) => {
          const contents = fs.readFileSync(
            `src/generated/mongo/${fileName}`
          ) as any;
          const data = JSON.parse(contents);

          if (matches[data.gameId]) {
            matches[data.gameId].push(data);
          } else {
            matches[data.gameId] = [data];
          }
        });
      }

      resolve(matches);
    });
  });
};

const writeFile = (data, part) => {
  fs.writeFileSync(
    `src/generated/organizedMasterList-partial-${part}.json`,
    JSON.stringify(data, null, 2)
  );
};

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const main = async () => {
  const matchHistory = await readDirectory();
  const data = Object.entries(matchHistory);

  const slices = [];
  const size = Math.ceil(data.length / 10);
  let index = 0;
  for (let i = 0; i < data.length; i += size) {
    let chunk = data.slice(i, i + size);
    slices.push;

    writeFile(Object.fromEntries(chunk), index);
    index++;
  }

  return slices;
};

main().then(() => {
  console.log('we done boy');
});
