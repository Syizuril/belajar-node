const http = require(`http`)

const server = http.createServer((req, res) => {
    console.log(`request event`);
    res.end(`Hallo dunia`);
})

server.listen(5000, () => {
    console.log(`Server listening di port : 5000 ....`);
})