const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { default: mongoose } = require("mongoose");

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
        {id:this._id, name:this.name, isAdmin:this. isAdmin},
        process.env.JWTPRIVATEKEY,
        {expiresln:"7d"}
    )
    return token;
}

//validate the data sent by the user before
//sending data to the database
const validate = (user)=>{
    const schema = Joi.object({
        name:Joi.string().min(5).max(10).required(),
        email:Joi.string().email.required(),
        password:passwordComplexity().required(),

    });
    return schema.validate(user);
}

const User = mongoose.model("user",userSchema);

module.exports = {User,validate}