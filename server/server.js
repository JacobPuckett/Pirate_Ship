const express = require('express')
const cors = require('cors')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '4a9b9f9551954da8a6187b0f33687f36',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))



// const crew = ['Captain Jack Sparow', 'Joshamee Gibbs', 'Robert Greene']


// app.get('/', (req, res) => {
//     res.status(200).send(crew)
//     rollbar.info('crew list is sent')
// })

app.get('/', (req,res) => {
    rollbar.log('site visited')
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}) 

app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})
app.get('/js', (req,res) => {
    
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
    rollbar.error('black pearl does zoom')
})





app.listen(4000, console.log(`server running on 4000`))