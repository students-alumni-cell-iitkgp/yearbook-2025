const itchlist = require('../models/itchlistmodel');

const newitchcontroller = async (req,res)=>{
    try {
        const {user_id,user_name,photo_url,type} = req.body;
        const date = Date.now();
        const newitch = new itchlist({
            user_id,
            user_name,
            photo_url,
            type,
            date
        });

        await newitch.save();

        res.status(200).json({message:"Post created successfully"});

    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

const getitchcontroller = async (req,res)=>{
    try {
        const type = req.query

        if(type==="all"){
            const itches = await itchlist.find();
            res.status(200).json(itches);
        }

        else{
            const itches = await itchlist.find({type});
            res.status(200).json(itches);
        }

    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

module.exports = {newitchcontroller,getitchcontroller};