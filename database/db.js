const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://Admin:Admin@cluster0.5zbvpmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
       
    ).then(() => {
        console.log("mongoDb connected");
    }).catch((err) =>{console.log(err);
    })
}

module.exports = connectToDb;