`use strict`

const eventData = require(`../data/events`)

const getEvents = async(req, res, next) => {
    try {
        const events = await eventData.getEvents()
        res.send(events)
    } catch (error) {
        res.status(400).send(error.message)
    }
    next()
}

const getById = async(req, res, next) => {
    try {
        const eventId = req.params.id
        console.log(eventId);
        const oneEvent = await eventData.getById(eventId)
        res.send(oneEvent)
    } catch (error) {
        res.status(400).send(error.message)
    }
    next()
}

const addEvent = async(req, res, next) => {
    try {
        const data = req.body
        const created = await eventData.createEvent(data)
        res.send(created)
    } catch (error) {
        res.status(400).send(error.message)
    }
    next()
}

const deleteEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id
        const deleteEvent = await eventData.deleteEvent(eventId)
        res.send(deleteEvent)
    } catch (error) {
        res.status(400).send(error.message)
    }
    next()
}

const updateEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id
        const data = req.body
        const updateEvent = await eventData.updateEvent(eventId, data)
        res.send(updateEvent)
    } catch (error) {
        res.status(400).send(error.message)
    }
    next()
}

module.exports = {
    getEvents,
    getById,
    addEvent,
    deleteEvent,
    updateEvent
}