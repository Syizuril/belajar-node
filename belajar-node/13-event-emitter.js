const EventEmitter = require(`events`);


const costumEmitter = new EventEmitter()

costumEmitter.on(`response`, (name, id) => {
    console.log(`Data telah diterima ${name} dengan id ${id}`);
})

costumEmitter.on(`response`, () => {
    console.log(`Logic event lainnya`);
})

costumEmitter.emit(`response`, `Syam`, 34);