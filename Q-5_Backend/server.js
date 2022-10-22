
const express = require("express");
const app = express();
const helmet = require("helmet");
const student_router = require("./routers/router");
app.use(express.urlencoded({extended:false}));
const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use(helmet());

app.use((err,req,res,next)=>{
    next(createError(404))
})

app.use("/",student_router);
app.listen(9000,()=>{
    console.log(`listen on 9000`)
})
