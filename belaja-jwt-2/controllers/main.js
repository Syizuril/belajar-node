const { BadRequestError } = require(`../errors`)
const jwt = require(`jsonwebtoken`)

const login = async(req, res) => {
    const { username, password } = req.body
    const id = new Date().getDate()
    if (!username || !password) {
        throw new BadRequestError(`Username dan Password wajib diisi`)
    }
    console.log(username, password);
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async(req, res) => {
    console.log(req.user);
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Ini adalah nomor randommu yakni ${randomNumber}` })
}

module.exports = {
    login,
    dashboard
}