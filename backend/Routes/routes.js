const express = require('express');
const app =express()
const router = express.Router();
const userinfodata = require('../../backend/Models/Userinfo');
const getListofData = require('../index')
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
app.use(cors());
router.post('/formdata', async (req, res) => {
    console.log(req.body);
    var postData = getListofData(req.body);
    var bandekadata = new userinfodata(req.body);
    try {
      await bandekadata.save();
      console.log('Document saved successfully');
    } catch (error) {
      console.error('Error while saving document:', error);
    }
    axios.post('https://api.getknit.ai/v1/router/run', postData, { headers: 
    { 'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTE0OTM4NjI5MTQzNTc2OTU5OTYyIn0sImlhdCI6MTcwNjc3NjIwMiwiZXhwIjoxNzA3ODU2MjAyfQ.kfT2oxYSPgJXJChaNJRG04Fedf45GQKsEpos3d4glpo", 'Content-Type': 'application/json' }})
    .then(response=>{
        console.log(response.data.responseText);
        return res.send(response.data);
    })
    .catch(err=>{ console.log(err); });
})

router.get("/", (req, res) => {
    res.send("Hello AI Peeps!")
})

module.exports = router;