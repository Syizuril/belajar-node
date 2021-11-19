`use strict`

const utils = require(`../utils`)
const config = require(`../../config`)
const sql = require(`mssql`)

const getEvents = async() => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries(`events`)
        const list = await pool.request().query(sqlQueries.event_list)
        return list.recordset
    } catch (error) {
        return error.message
    }
}

const getById = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries(`events`)
        const oneEvent = await pool.request()
            .input(`eventId`, sql.Int, eventId)
            .query(sqlQueries.event_by_id)

        return oneEvent.recordset
    } catch (error) {
        return error.message
    }
}

const createEvent = async(eventData) => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries(`events`)
        const insertEvent = await pool.request()
            .input(`eventTitle`, sql.NVarChar(100), eventData.eventTitle)
            .input(`eventDescription`, sql.NVarChar(1500), eventData.eventDescription)
            .input(`startDate`, sql.Date, eventData.startDate)
            .input(`endDate`, sql.Date, eventData.endDate)
            .input(`avenue`, sql.NVarChar(200), eventData.avenue)
            .input(`maxMembers`, sql.NVarChar, eventData.maxMembers)
            .query(sqlQueries.create_event)
        return insertEvent.recordset
    } catch (error) {
        return error.message
    }
}

const deleteEvent = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries(`events`)
        const deleteEvent = await pool.request()
            .input(`eventId`, sql.Int, eventId)
            .query(sqlQueries.delete_event)
        return `${deleteEvent.rowsAffected} data telah dihapus`
    } catch (error) {
        return error.recordset
    }
}

const updateEvent = async(eventId, eventData) => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries(`events`)
        const updateEvent = await pool.request()
            .input(`eventId`, sql.Int, eventId)
            .input(`eventTitle`, sql.NVarChar(100), eventData.eventTitle)
            .input(`eventDescription`, sql.NVarChar(1500), eventData.eventDescription)
            .input(`startDate`, sql.Date, eventData.startDate)
            .input(`endDate`, sql.Date, eventData.endDate)
            .input(`avenue`, sql.NVarChar(200), eventData.avenue)
            .input(`maxMembers`, sql.NVarChar, eventData.maxMembers)
            .query(sqlQueries.update_event)
        return updateEvent.recordset
    } catch (error) {
        return error.recordset
    }
}

module.exports = {
    getEvents,
    getById,
    createEvent,
    deleteEvent,
    updateEvent
}