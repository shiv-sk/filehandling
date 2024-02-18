const mongoose = require('mongoose');


//connecting the db using dotenv and mongoose
const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connection is successfully established')
    }catch(err){
        console.log('db is not connected' , err);
        process.exit(1)
    }
}
module.exports = dbConnection