const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    description:String,
    imageUrl:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    likes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            }
        }
    ],
    comments:[
        {
            
        }
    ]
})