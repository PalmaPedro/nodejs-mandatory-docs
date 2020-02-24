//import express, request
const app=require("express")();
const request=require("request");

app.get("/", (req,res) => {
    const response = {
        response: "Welcome to my website"
    }
    res.send(response);
});

app.get("/index", (req, res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + '/public/index.html');
});



app.listen(3000, error =>{
    if(error){
        console.log("error running the server");
    } else{
        console.log("server is running on port", 3000);
    }

});