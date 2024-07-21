const express = require("express");
const path = require("path");

const app = express();
const port = 3000;


app.use("/static" , express.static(path.join(__dirname , "public")))


app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname , "public" , "images" , "images.jpg"))
});


app.listen(port , () =>{
    console.log(`Listeninig on port ${port}`)
});