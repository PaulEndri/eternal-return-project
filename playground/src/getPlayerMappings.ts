import { ErBsClient } from "erbs-client";
import fs from "fs";
import dataSource from "./generated/playerData.json";
import mongoose from "mongoose";
import { Players } from "./models/player.model";

mongoose.connect(
  "mongodb+srv://local:test@cluster0.pvbke.mongodb.net/erbs?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const data = {
  processed: Object.values(dataSource.players),
  players: dataSource.players,
  queue: [...new Set(dataSource.queue)].concat([...new Set(dataSource.processed)]),
};

// const games = {};

const logs = [];

// const writeGame = (id) => {
// 	fs.writeFileSync(
// 		'src/generated/games/{id}.json'.replace('{id}', id),
// 		JSON.stringify(games[id], null, '\t')
// 	);
// };
const writeFile = () => {
  fs.writeFileSync("src/generated/playerData.json", JSON.stringify(data, null, "\t"));
};

const writeLogs = () => {
  fs.writeFileSync("src/generated/games/logs.json", JSON.stringify(logs, null, "\t"));
};

const client = new ErBsClient();

const bufferCalls = () => {
  return new Promise((res) => setTimeout(res, 1500));
};

const nextPlayer = async () => {
  const player = data.queue.shift();

  console.log("[Processing]", player);

  if (data.processed.includes(player)) {
    console.log("[Skipping]");
  }
  try {
    const results = await client.getGamesForPlayer(player);
    data.processed.push(player);
    data.players[results[0].nickname] = player;
    results.forEach((res) => {
      if (res && res.killDetail && res.killerUserNum && res.killer) {
        data.players[res.killer] = res.killerUserNum;

        if (
          !data.queue.includes(res.killerUserNum) &&
          !data.processed.includes(res.killerUserNum)
        ) {
          data.queue.push(res.killerUserNum);
        }
      }
    });
  } catch (e) {
    logs.push({
      errorMessage: e.message,
      error: "Failed to Sync Player",
      playerName: player,
      userNumber: null,
    });

    data.queue.push(player);
    writeLogs();
  }
};
// const init = async () => {
// 	const handleData = (res) => {
// 		res.forEach(({ userNum, nickname }) => {
// 			if (!data.queue.includes(userNum)) {
// 				data.queue.push(userNum);
// 			}

// 			data.players[nickname] = userNum;
// 		});

// 		writeFile();
// 	};

// 	handleData(await client.getTopDuos(1));
// 	await bufferCalls();

// 	handleData(await client.getTopSolos(1));
// 	await bufferCalls();

// 	handleData(await client.getTopSquads(1));
// 	await bufferCalls();
// };

const run = async () => {
  // await init();

  const documentsToInsert = Object.entries(data.players).map(([name, id]) => ({ name, id }));

  await Players.insertMany(documentsToInsert);

  data.queue = [...new Set(data.queue)];

  while (data.queue.length > 0) {
    await nextPlayer();
    writeFile();
    await bufferCalls();
  }
};

run()
  .then(() => {
    console.log("wat");
  })
  .catch((e) => {
    console.error(e);
  });
