const express = require ("express")

const router = express.Router();

const Post = require ("../models/post.model")

router.post("",async function(req,res){
    try{
        const user = await Post.create()
        return res.status(201).send(user)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async function(req,res){
    try{
        const user = await Post.find().lean().exec()
        return res.status(201).send(user)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;