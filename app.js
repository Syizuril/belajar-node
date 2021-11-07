const { readFile, writeFile } = require(`fs`).promises
    // const util = require(`util`);
    // const readFilePromise = util.promisify(readFile)
    // const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, `utf-8`, (err, result) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

// getText(`./content/pertama.txt`)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async() => {
    try {
        const pertama = await readFile(`./content/pertama.txt`, `utf-8`)
        const kedua = await readFile(`./content/kedua.txt`, `utf-8`)
        await writeFile(`./content/result-grenade.txt`, `INI LUAR BIASA : ${pertama} ${kedua}`, { flag: `a` })
        console.log(pertama, kedua);
    } catch (error) {
        console.log(error);
    }
}

start()