const Database = require('sqlite-async')
const fs = require("fs");
const netscape = require('netscape-bookmarks');

const bookmarks =
{
  "EdgeCollections": {
    "contents": {}
  }
};

const main = async () => {
  const db = await Database.open("/home/kanta/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite")
    .catch((err) => {
      console.log("Database Connection Error!")
    })
  const getCollectionsStatement = "select id, title from collections";
  const collections = await db.all(getCollectionsStatement)
    .catch((err) => {
      console.log("ERROR!! Get CollectionTitles Failed...")
    })
  for (collection of collections) {
    Object.assign(bookmarks.EdgeCollections.contents, { [collection.title]: { "contents": {} } })
    const getItemsStatement = `
          select title, source
          from collections_items_relationship
          join items on (collections_items_relationship.item_id=items.id)
          where parent_id='${collection.id}'
          and type='website'
        `

    const items = await db.all(getItemsStatement)
      .catch((err) => {
        console.log("ERROR!! Get CollectionItems Failed...")
      })
    for (item of items) {
      item.source = JSON.parse(item.source.toString('utf8')).url;
      Object.assign(bookmarks.EdgeCollections.contents[collection.title].contents, { [item.title]: item.source })
    }
  }
  const html = netscape(bookmarks);
  fs.writeFileSync('EdgeCollectionBookmarks.html', html);
  console.log("Export Success!! \n Let's import EdgeCollectionBookmarks.html into your favarite browser!! ")
}

main();
