const {User} = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const logincontroller = async (req, res) => {
    try {
        const { rollno, dob } = req.body;

        const newdob = new Date(dob);
        // const dobnew = newdob.toISOString().split('T')[0];

        // Find user in database
        const user = await User.findOne({ rollno });

        console.log(user);
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        console.log(user.dob);
        console.log(newdob);

        const formattedNewDob = new Date(dob).toISOString().split('T')[0];
        const formattedUserDob = user.dob.toISOString().split('T')[0];

        // Verify password
        if (formattedNewDob!=formattedUserDob) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ id: user._id, rollno: user.rollno }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({ token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const verifycontroller = async (req, res) => {
    try {
        const user = await User.findOne({ rollno: req.user.rollno });
        console.log(user);
    
    res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }

}

const addtestimonialcontroller = async (req,res) => {
    try{
        
        const {to_user_name, from_user,to_user_rollno, content} = req.body;
        const user = await User.findOne({rollno:to_user_rollno});

        const testimonial = {
            to_user_name: to_user_name,
            from_user:from_user,
            to_user_rollno:to_user_rollno,
            content:content,

        }

        user.testimonials.push(testimonial);

        await user.save();

        res.status(200).json({ message: "Testimonial added successfully"});
        

    }
    catch(error){
        res.status(500).json({ message: "Server error", error: error.message });

    }
    
}

const updateusercontroller = async (req,res)=>{
    try {
        const user_id = req.body.user_id;
        const pro_pic = req.body.photo_url;
        const caption = req.body.caption;

        
        // console.log(user_id,user_name,photo_url,caption,date)

        if (!pro_pic) return res.status(400).json({ message: "File upload failed" });

        const user = await User.findById(user_id);
        user.pro_pic = pro_pic;
        user.caption = caption;
        await user.save();


        
        return res.status(200).json({message:"User updated successfully"});

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"});
    }
}

module.exports = { logincontroller, verifycontroller ,addtestimonialcontroller,updateusercontroller};