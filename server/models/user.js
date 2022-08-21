const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { JsonWebTokenError } = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    likedSongs:{type:[String],default:[]},
    isAdmin: {type:Boolean,default:false},
})

//sign in require two params, payload and the sign in
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id:this._id, name:this.name, isAdmin:this. isAdmin},
        process.env.JWTPRIVATEKEY
    );
    return token;
}

//validate the data sent by the user before
//sending data to the database
const validate = (user)=>{
    const schema = Joi.object({
        name:Joi.string().min(5).max(10).required(),
        email:Joi.string().required(),
        password:passwordComplexity().required(),
        isAdmin:Joi.boolean().required()
    });
    return schema.validate(user);
}

const User = mongoose.model("user",userSchema);

module.exports = {User,validate}