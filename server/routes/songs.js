const router = require("express").Router();
const {User} = require("../models/song");
const {Song,validate} = require("../models/song");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validObjectId = require("../middleware/validObjectId");
const { route } = require("./users");

//create song

router.post("/",admin,async(req,res)=>{
    const{error} = validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message});
    }
    const song = await Song(req.body).save();
    res.status(201).send({data:song,message:"Song created successfully"});
})

//get all songs
router.get("/",async(req,res)=>{
    const songs = await Song.find();
    res.status(200).send({data:songs});
})

//update song
router.put("/:id",[validObjectId,admin],async(req,res)=>{
    const song =  await Song.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(200).send({data:song, message:"Upadted the song sucessfully"});
})

//delete the song by id
router.delete("/:id",[validObjectId,admin],async(req,res)=>{
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).send({message:"Song deleted Successfully"});
})

module.exports = router;