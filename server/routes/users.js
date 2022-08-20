const router = require("express").Router();
const{User,validate} = require("../models/user");
const bcrypt = require("bcrypt");

//Create user
router.post("/",async(req,res)=>{
    const {error} = validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message});   
    }
    const user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(403).send({message:"User already exist bruv!!"});
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    let newUser = await new User({
        ...req.body,password:hashPassword
    }).save();

    //Don't send the password to the client side
    newUser.password = undefined;
    newUser.__v=undefined;

    res.status(200).send({data: newUser,message:"Accout was created succesfully, Nice!!"});

})

module.exports = router;