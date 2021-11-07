const { readFile } = require(`fs`);

console.log(`Menjalankan tugas pertama`);
//Mengecheck path berkas

readFile(`./content/pertama.txt`, `utf8`, (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(result);
    console.log(`Tugas pertama berhasil dijalankan`);
})

console.log(`Menjalankan tugas selanjutnya`);