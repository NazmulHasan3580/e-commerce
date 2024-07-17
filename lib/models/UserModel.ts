import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name :{
        type :String,
        require :true,
    },
    email : {
        type :String,
        required :true,
        unique:true,
    },
    password : {
        type : String,
        required: true,
    },
    isAdmin : { 
        type : Boolean,
        required : true,
        default : false
    },
},
{
    timestamps: true,
})

export const userSchema = mongoose.models.users || mongoose.model('users', userModel)