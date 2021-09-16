
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose');
const cros = require('cors')



const route = require('./route/routes')
const app = express();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cros())
app.use("/users",route)

const PORT = 8000;
const URL = 'mongodb+srv://user:vijaykumar@crud.qg3ez.mongodb.net/PROJECT0?retryWrites=true&w=majority'

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is Running${PORT}`)
    })
}).catch( error => {
    console.error(error.message);
})
