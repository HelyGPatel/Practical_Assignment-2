const express = require('express');
const app = express();
var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(session({ secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new FileStore,
    cookie: { maxAge: 3600000,secure: false, httpOnly: true }
  })
);

let username;
let password;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    req.session.username = "HelyPatel";
    req.session.password = "hely@123"
    username = req.body.username;
    password = req.body.password;
    if(username === req.session.username && password === req.session.password)
    {
        next();
    }
    else
    {
        res.send("Wrong username / Password");
    }
});

app.post('/validate', (req, res) => {
    res.send("Hello =>" + username + "<br>" + "Login Done");
    res.end();
});

app.listen(8000, () => {
    console.log("Listen on 8000");
});