// ユーザからのキーボード入力を取得する Promise を生成する
const readUserInput = (question) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      answer = answer || "./"
      resolve(answer);
      readline.close();
    });
  });
}

// メイン処理
(async function main() {
  const importDirectory = await readUserInput(
    '### Please enter the directory for the edge collection file\n### example in Linux: /home/{userName}/.config/microsoft-edge-dev/Default/Collections/collectionsSQLite\n\n>> '
  );
  const exportDirectory = await readUserInput(
    '\n### Please enter the directory where you want to save the bookmark file\n### default: ~/\n\n>> ');
})();
