const express = require(`express`)
const app = express()

app.get(`/`, (req, res) => {
    res.status(200).send(`Home Page`)
})

app.get(`/about`, (req, res) => {
    res.status(200).send(`About Page`)
})

app.all(`*`, (req, res) => {
    res.status(404).send(`<h1>Halaman tidak ditemukan</h1>`)
})

app.listen(5000, () => {
    console.log(`Server sedang mendengarkan di port 5000`);
})