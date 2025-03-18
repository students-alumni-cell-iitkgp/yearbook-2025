const {Itchlist} = require("../models/itchlistmodel");

const newitchcontroller = async (req, res) => {
    try {
        console.log(req.body)
        const { user_id, user_name, photo_url,type } = req.body;

        if (!photo_url) return res.status(400).json({ message: "File upload failed" });

        const newitch = new Itchlist({
            user_id,
            user_name,
            photo_url,
            type,
            date: Date.now()
        });

        await newitch.save();
        res.status(200).json({ message: "Post created successfully", photo_url });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getitchcontroller = async (req, res) => {
    try {
        const { type } = req.query;

        const itches = type === "all" ? await Itchlist.find() : await Itchlist.find({ type });

        res.status(200).json(itches);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { newitchcontroller, getitchcontroller };
