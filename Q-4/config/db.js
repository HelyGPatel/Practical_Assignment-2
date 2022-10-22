const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Student",{
    useNewUrlParser:true
}).then(() => {
    console.log("Succesfully ");
}).catch((err) => {
    console.log(err);
});