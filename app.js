//import express, request
const app=require("express")();
const request=require("request");

app.get("/", (req,res) => {
    const response = {
        response: "Welcome to my website"
    }
    res.send(response);
});



app.listen(3000, error =>{
    if(error){
        console.log("error running the server");
    } else{
        console.log("server is running on port", 3000);
    }

});