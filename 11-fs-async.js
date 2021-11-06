const { readFileSync, writeFileSync } = require(`fs`);

readFileSync(`./content/pertama.txt`, `utf8`, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const pertama = result
    readFileSync(`./content/kedua.txt`, `utf8`, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const kedua = result
        writeFileSync(`./content/result-sync.txt`, `Ini adalah hasilnya : ${pertama}, ${kedua}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        });
    })
})