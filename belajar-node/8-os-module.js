const os = require(`os`)

// info tentang user saat ini
const user = os.userInfo();
console.log(user);

// info tentang system uptime dalam beberapa detik
console.log(`System telah hidup selama ${os.uptime} detik`);

const osSaatIni = {
    name: os.type,
    release: os.release,
    totalMem: os.totalmem,
    freeMem: os.freemem
}

console.log(osSaatIni);