const router = require("express").Router();
const Student = require("../models/newmodel");

const bodyparser = require("body-parser");
const path = require("path");

router.post("/add-student", async (req, res) => {         
     Student.create(req.body,(error,data)=>{
        if(!error)
        {
            return error;            
        }
       
        else{
            res.json(data);          
        }      
     })
})
router.get("/",(req, res) => {
     Student.find((err, data) => {
        if (!err) {
            res.json(data);          
        }
    })
})


router.put("/edit-student/:id", (req, res) => {
  
    Student.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,data)=>{
        if(!err)
        {
          res.json(req.body);           
        }else{
            console.log("not update");
        }
    })
   

})

// router.put("/edit/:id", async (req, res) => {
//     var data = await Student.updateOne({ _id: req.body._id }, req.body, { new: true });
//     res.json(data);
// })
router.get("/edit-student/:id",(req,res)=>{
    Student.findOne({_id:req.params.id},(err,data)=>{
        if(!err)
        {
            res.status(200).json(data);
        }
    })
})

router.delete("/delete/:id", (req, res,next) => {
    Student.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
        if (!err) {
          res.status(200).json(data)            
        }
    })
})

module.exports = router