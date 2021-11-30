const mongoose = require(`mongoose`)

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `nama wajib diisi`],
        trim: true,
        maxlength: [20, `nama tidak lebih dari 20 karakter`]
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model(`Task`, TaskSchema)