//install the dotenv in order to use its functions
//dotenv ensures security in sensitive codes like port number.. 
//you can use .env file and use the function "process.env.(variableName)"
require('dotenv').config()

const express = require('express')

// invoke the function express
const app = express()

//middleware
//this function can display log all of the requests being made to the server
//like GET requests or POST requests, its good for debugging
app.use((request, respond, next) => {
    console.log(request.path, request.method)
    next()
})

//routes
app.get('/',(request, respond) => {
    respond.json({message: 'Welcome to the app'})
})

// listen for requests (use process.env to get the secret port number)
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

