const fs = require("fs");
const netscape = require('netscape-bookmarks');

const bookmarks =
{
  "EdgeCollections": {
    "contents": {
      "Rails": {
        "contents": {
          "YouTube": "http://www.youtube.com",
          "GitHub": "https://github.com"
        }
      },
      "Docker": {
        "contents": {
          "YouTube": "http://www.youtube.com",
          "GitHub": "https://github.com"
        }
      }
    }
  }
};

const html = netscape(bookmarks);
console.log(html);
fs.writeFileSync('edgeCollectionsBookmark.html', html);
