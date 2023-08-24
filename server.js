const mongoose = require("mongoose");
const cors = require("cors")
const express = require ("express");

const app =express();
app.use(cors())
app.use(express.json())
const RegData = require( "./Models/RegisterData")

mongoose.connect('mongodb://0.0.0.0:27017/SGP',{
    useNewUrlParser : true,
    useUnifiedTopology:true,
}).then(console.log("ConnectedTO DB"))
app.post('/RegisterData' , async(req,res) => {
    try{
        const user = await RegData.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,

        })
        user.save()
        res.json({status:'ok'})
        console.log(req.body.name)
        console.log(req.body.email)
        console.log(req.body.password)
        
    }catch(err){
        console.log(err)
    }
})






app.post('/CheckCred' , async(req,res) => {
    
    const user = await RegData.findOne({
        
        email:req.body.email,
        password:req.body.password,

    })
    if(user){
        return res.json({status:'ok'})
    }else{
        return res.json({status:'error'})
    }
    
  
})


app.listen(1337,()=>{
    console.log("Server is running on port 1337")
})