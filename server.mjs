// const express = require('express')
import express from "express";

console.log("i am a sever machice or software");
const app = express()
const port = 3000

app.get('/', (req, res) => {

  console.log("request ip",req.ip);
  res.send('Hello World! saif is here'+ new Date().toString());

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})