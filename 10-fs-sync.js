const { readFileSync, writeFileSync } = require(`fs`);

const pertama = readFileSync(`./content/pertama.txt`, `utf-8`);
const kedua = readFileSync(`./content/kedua.txt`, `utf-8`);

console.log(pertama, kedua);

writeFileSync(
    `./content/result-sync.txt`,
    `Ini adalah text hasilnya : ${pertama}, ${kedua}`, { flag: `a` }
)