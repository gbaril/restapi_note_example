const getDb = require('./database')

const collectionName = 'notes'

async function insertNote(note) {
    const db = await getDb()
    const {insertedId} = await db.collection(collectionName).insertOne(note)
    return insertedId
}

async function getNotes() {
    const db = await getDb()
    return await db.collection(collectionName).find({}).toArray()
}

module.exports = {
    insertNote,
    getNotes
}