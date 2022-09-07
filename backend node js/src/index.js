const express = require ("express")

const app = express()
const port=process.env.PORT || 7785
app.use(express.json())
const connect = require("./configs/db")


const postController=require("./controllers/post.controller")
const commentController=require("./controllers/comments.controller")

app.use("/posts",postController)
app.use("/comments",commentController)

app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 7785 ")
    }catch(err){
        console.log(err.message)
    }
})