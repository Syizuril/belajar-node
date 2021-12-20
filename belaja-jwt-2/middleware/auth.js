const { UnauthenticatedError } = require(`../errors`)
const jwt = require(`jsonwebtoken`)


const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith(`Bearer`)) {
        throw new UnauthenticatedError(`No token provided`)
    }
    try {
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        console.log(decoded);
        req.user = { id, username }
        next()
    } catch (error) {
        throw new UnauthenticatedError("Not Authorized to access this token")
    }
}

module.exports = authenticationMiddleware