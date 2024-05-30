const db = require('../config/connection')
const { Doctor, Rooms } = require('../models')

const roomData = require('./roomData.json')

db.once('open', async () => {
    // bulk create
    const room = await Rooms.insertMany(roomData);

    console.log('Seeds complete')
    process.exit(0);
})