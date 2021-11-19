`use strict`

const express = require(`express`)
const config = require(`./config`)
const cors = require(`cors`)
const eventRoutes = require("./routes/event_routes")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(`/api`, eventRoutes.routes)

app.listen(config.port, () => {
    console.log(`Server listening ${config.host} on port ${config.port} ...`);
})