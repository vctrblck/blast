const router = require("express").Router();
const{User,validate} = require("../models/user");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validObjectId = require("../middleware/validObjectId");

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

//get all users
router.get("/",admin,async(req,res)=>{ //Only authorized by the admin
    const users = await User.find().select("-password-_v"); //hide the password
    res.status(200).send({data:users});
})

//get user by id
router.get("/:id",[validObjectId,auth],async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password-__v");
    res.status(200).send({data:user});
})

//update user by id
router.put("/:id",[validObjectId,auth],async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
    ).select("-password-__v");
    res.status(200).send({data:user})
})

//delete user
router.delete("/:id",[validObjectId,admin],async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({message:"Succesfully deted user"});
});


module.exports = router;