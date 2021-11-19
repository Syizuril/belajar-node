`use strict`

const express = require(`express`)
const eventController = require(`../controllers/event_controller`)
const router = express.Router()

const { getEvents, getById, addEvent, deleteEvent, updateEvent } = eventController

router.get(`/events`, getEvents)
router.get(`/event/:id`, getById)
router.post(`/events`, addEvent)
router.delete(`/event/:id`, deleteEvent)
router.put(`/event/:id`, updateEvent)

module.exports = {
    routes: router
}