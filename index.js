const express = require('express');
const app = express();
const cors = require('cors');

//for cors
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//to except the data from from as well as using raw_json_data
app.use(express.json());

//to use staticfiles -- for images , css , js , and other static file that has to serve
app.use(express.static("public"))


//importing routes
const uploadRoute = require('./router/filehandling.router');
app.use('/api/v1/upload' , uploadRoute);

module.exports = app;