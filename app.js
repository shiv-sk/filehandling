//configuring dotenv file to load the essential connections
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const app = require('./index');
const dbConnection = require('./db/connection.db');

//calling dbConnectionmethod to ensure database is properly connected......
dbConnection().then(
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log('server is wroking fine');
        app.on('ERROR',(err)=>{
            console.log('ERROR::',err);
            throw err;
        })
    })
).catch((err)=>{
    console.log('database is not connected please resolve it' , err)
})
