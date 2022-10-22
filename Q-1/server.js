var express = require('express');
var app = express();
var multer = require('multer');
var path = require('path');

app.use(express.static('public'));
app.use(express.static('uploads'));

app.get("/", (req, res) => {
    res.send("Welcome to home page");
})

var options = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, (Math.random().toString(10)).slice(5, 10) + Date.now() + path.extname(file.originalname));
    }
});
            
var upload = multer({ 
    storage: options 
});

app.post('/file_upload', upload.single("myFile"), function(req, res, next) {
    res.write(req.body.fname + " " + req.body.lname + "\n");
    res.write("File Uploaded");
    res.end();
})

app.post('/photos_upload', upload.array('photos', 5), function(req, res, next) {
    console.log(req.files);
    res.write(req.body.fname + " " + req.body.lname + "\n");
    res.write("Files Uploaded");
    res.end();
})
app.listen(8000);
console.log("App is listening on server 8000");