const express = require(`express`)
const app = express()
const login = require(`./router/people`)
app.use(express.static(`./methods-public`))
    //parse from data
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(`/api/people`, login)

var server = app.listen(5000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Program sedang listening di http://%s:%s", host, port)
})