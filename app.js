const express = require("express");

const app = express();
const port = 3000;


app.get("/" , (req , res)=>{
    res.send("Hey , This is Sogand")
});

app.listen(port , () =>{
    console.log(`Listeninig on port ${port}`)
});