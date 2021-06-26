#!/usr/bin/env node

const Database = require("sqlite-async");
const fs = require("fs");
const netscape = require("netscape-bookmarks");

const red = "\u001b[31m";
const green = "\u001b[32m";
const blue = "\u001b[34m";
const reset = "\u001b[0m";

const bookmarks = {
  EdgeCollections: {
    contents: {},
  },
};

const readUserInput = (question) => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
};

const main = async () => {
  const importDirectory = await readUserInput(
    green +
      "### Please enter the path for the edge collections file\n### Example in Windows: C:\\Users\\{UserName}\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Collections\\collectionsSQLite\n### Example in Mac: /Users/{UserName}/Library/Application Support/Microsoft Edge/Default/Collections/collectionsSQLite\n### Example in Linux: /home/{userName}/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite\n\n>> " +
      reset
  );
  try {
    if (!importDirectory) {
      throw `[ERROR] Please enter the path for the edge collections file`;
    }
    const db = await Database.open(
      importDirectory,
      Database.OPEN_READONLY
    ).catch((err) => {
      throw `[ERROR] No such a file. "${importDirectory}"\n[ERROR] Please enter the correct path.`;
    });
    const getCollectionsStatement = "select id, title from collections";
    const collections = await db.all(getCollectionsStatement).catch((err) => {
      throw "[ERROR] Get collection titles failed";
    });
    for (collection of collections) {
      Object.assign(bookmarks.EdgeCollections.contents, {
        [collection.title]: { contents: {} },
      });
      const getItemsStatement = `
          select title, source
          from collections_items_relationship
          join items on (collections_items_relationship.item_id=items.id)
          where parent_id='${collection.id}'
          and type='website'
        `;

      const items = await db.all(getItemsStatement).catch((err) => {
        throw "[ERROR] Get collection items failed";
      });
      for (item of items) {
        item.source = JSON.parse(item.source.toString("utf8")).url;
        Object.assign(
          bookmarks.EdgeCollections.contents[collection.title].contents,
          { [item.title]: item.source }
        );
      }
    }
    const html = netscape(bookmarks);
    fs.writeFileSync("EdgeCollectionBookmarks.html", html);
    console.log(
      blue +
        "[SUCCESS] Export Success!! \n[SUCCESS] Let's import EdgeCollectionBookmarks.html into your favarite browser!! " +
        reset
    );
  } catch (error) {
    return console.log(red + error);
  }
};

main();
``;
