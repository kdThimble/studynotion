const mongoose = require('mongoose');
require('dotenv').config();

async function connectWithDB() {
    try {
        mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("DB connect successfully");
        }).catch((error) => { 
             console.log("Error in connection with database");
        });
        
    } catch (error) {
        console.log("Error in connection with database with error: ", error.message);

        process.exit(1);
        
    }
}


module.exports = connectWithDB;