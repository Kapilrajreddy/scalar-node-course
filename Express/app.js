const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to Node JS')
})

app.listen(3000,()=>console.log("App running at port 3000"))