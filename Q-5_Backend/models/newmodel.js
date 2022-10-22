const mongoose = require("mongoose");
require("../config/db");
const studentschema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String
})
const Student = mongoose.model("Student",studentschema)
module.exports=Student;