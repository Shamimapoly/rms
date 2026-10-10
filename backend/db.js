const { default: mongoose } = require("mongoose")

const dbConnection =()=>{
    mongoose.connect('mongodb+srv://CRUD:CRUD@cluster0.mrku3wn.mongodb.net/CRUD?appName=Cluster0')
    .then(()=>{
        console.log("db connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
module.exports = dbConnection