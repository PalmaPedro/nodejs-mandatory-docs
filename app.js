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

// set up a table of contents which have links to each topic
app.get("/index", (req, res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/index.html');
});

// serving pages
app.get("/about", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/1._about.html');
});

app.get("/terminal", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/2._terminal.html');
});


app.get("/install", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/3._install.html');
});





// messages giving status of the server
app.listen(3000, error =>{
    if(error){
        console.log("error running the server");
    } else{
        console.log("server is running on port", 3000);
    }

});