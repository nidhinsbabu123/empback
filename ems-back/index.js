// steps to create server using Express

// Importing dotenv
require('dotenv').config()

// import database connection
require('./DB-connection/connection')

// import express framework which we already installed.
const express = require('express')

// import router
const router=require('./Routes/router')

// Importing cors
const cors = require('cors')

// create server using express
const emsServer = express()

// use cors in server
emsServer.use(cors())

// Use parse
emsServer.use(express.json())

// use router
emsServer.use(router)

// Use static method 

emsServer.use('/uploads',express.static('./uploads'))

// setting up the port; if the port 4000 is not free then, by using the 'process' we will get any free port automatically.
const PORT = 4000 || process.env.PORT

// run server
emsServer.listen(PORT,()=>{
    console.log(`ems server started at port : ${PORT}`);
})

// Request
// emsServer.post('/',(req,res)=>{
//     res.send(`<h1>ems server at port 4000</h1>`)
// })


