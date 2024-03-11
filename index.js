const express = require('express')

console.log(typeof express)

const app = express()

app.listen(8080 , ()=>{
    console.log("server gets started")
})

app.get("/",(req,res)=>{
    res.end("Hello from the Express")
})

