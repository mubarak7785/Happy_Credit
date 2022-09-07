const express = require ("express")

const app = express()
const port=process.env.PORT || 7785
app.use(express.json())
const connect = require("./configs/db")



app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 4321 ")
    }catch(err){
        console.log(err.message)
    }
})