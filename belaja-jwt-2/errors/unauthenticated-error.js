const { StatusCodes } = require("http-status-codes")
const CostumAPIError = require(`./custom-error`)

class UnauthenticatedError extends CostumAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError