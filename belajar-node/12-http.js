const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === `/`) {
        res.end(`Selamat datang di dashboard`)
    } else if (req.url === '/about') {
        res.end(`Ini adalah laman history`)
    } else {
        res.end(`
        <h1>Oops ! Error</h1>
        <p>Kami tidak dapat menemukan halaman yang kamu cari</p>
        <a href="/"> Kembali ke Beranda </a>
    `)
    }
});

server.listen(5000)