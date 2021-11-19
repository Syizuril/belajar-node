const express = require(`express`)
const app = express()

const logger = require(`./logger`)
const authorize = require(`./authorize`)
const morgan = require(`morgan`)

app.use(morgan(`tiny`))
    // app.use([authorize, logger])
    // app.use(express.static(`./public`))

app.get(`/`, (req, res) => {
    res.send(`Home`)
})

app.get(`/about`, (req, res) => {
    res.send(`About`)
})

app.get(`/contact`, (req, res) => {
    res.status(200).send(`Data Kirim Sama Dengan`)
})

app.get(`/api/product`, (req, res) => {
    res.send(`Product baru testing`)
})

app.listen(5000, () =>
    "Server sedang berjalan di port 5000")