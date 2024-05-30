const db = require('../config/connection')
const { Doctor, Rooms } = require('../models')

const doctorData = require('./doctorData.json')
const roomData = require('./roomData.json')

db.once('open', async () => {
    // bulk create
    const doctor = await Doctor.insertMany(doctorData);
    const room = await Rooms.insertMany(roomData);

    console.log('Seeds complete')
    process.exit(0);
})