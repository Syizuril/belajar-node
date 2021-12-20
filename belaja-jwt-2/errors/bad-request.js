const { StatusCodes } = require("http-status-codes")
const CostumAPIError = require(`./custom-error`)

class BadRequestError extends CostumAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError