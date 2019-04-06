const express = require('express');
const feedRouter = express.Router();
const axios = require('axios')


feedRouter.get('/', (req, res) => {
  console.log("am i working?")
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.ACCESS_TOKEN}`)
  .then(response => {
    console.log(response.data)
    return res.send(response.data)
  })
   
})

module.exports = feedRouter;