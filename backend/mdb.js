const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
const mongoDB = async () => {
    await mongoose.connect(uri);
    const users = mongoose.connection.db.collection('users');
    console.log('Connected');
    try {
     const data = await users.find({}).toArray();
     console.log("blah blah data");
    } catch (error) {
    console.error (error);
    }
    };
module.exports =mongoDB;
