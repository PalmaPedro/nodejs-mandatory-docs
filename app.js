//import express, request
const express = require ("express");
const app = express();
const request = require("request");


// load css file
app.use(express.static('public'));


// test if server is running
app.get("/", (req,res) => {
    const response = {
        response: "test server"
    }
    res.send(response);
});

// serving website content
app.get("/index", (req, res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/index.html');
});

app.get("/what-is-node", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/1._node.html');
});

app.get("/terminal", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/2._terminal.html');
});


app.get("/install", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/3._install.html');
});


app.get("/frameworks", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/4._frameworks.html');
});


app.get("/running", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/5._running.html');
});


app.get("/js-basics", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/6._javascript_basics.html');
});


app.get("/html-basics", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/7._html_basics.html');
});


app.get("/css-basics", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/8._css_basics.html');
});


app.get("/jquery", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/9._jquery.html');
});


app.get("/api", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/10._api.html');
});

app.get("/rest", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/11._rest.html');
});

app.get("/requests", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/12._requests.html');
});

app.get("/tutorial", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/13._tutorial.html');
});





// messages giving status of the server
app.listen(3000, error =>{
    if(error){
        console.log("error running the server");
    } else{
        console.log("server is running on port", 3000);
    }

});