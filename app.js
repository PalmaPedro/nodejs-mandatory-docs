//import express, request
const app=require("express")();
const request=require("request");

// teste if server is running
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

// sets up first page of the table of contents
app.get("/about", (req,res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/1._about.html');
});

//set



// messages giving status of the server
app.listen(3000, error =>{
    if(error){
        console.log("error running the server");
    } else{
        console.log("server is running on port", 3000);
    }

});