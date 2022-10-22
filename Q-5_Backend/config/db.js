const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/meanStack").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})