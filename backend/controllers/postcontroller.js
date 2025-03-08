const post = require("../models/postmodel");

const newpostcontroller = async (req,res)=>{
    try {
        const {user_id,user_name,photo_url,caption} = req.body;
        const date = Date.now();
        const newpost = new post({
            user_id,
            user_name,
            photo_url,
            caption,
            likes:0,
            comments:[],
            date
        });

        await newpost.save();

        res.status(200).json({message:"Post created successfully"});

    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

const likescontroller = async (req,res)=>{
    try {
        const {post_id} = req.body;
        const post = await post.findById(post_id);
        post.likes = post.likes+1;
        await post.save();
        res.status(200).json({message:"Liked"});
        } catch (error) {
        res.status(500).json({message:"Server error"});
        }
        
}

const commentscontroller = async (req,res)=>{
    try {
        const {post_id,comment,user_name} = req.body;
        const comment_object = {
            user_name:user_name,
            comment:comment,
            date:Date.now()
        }

        const post = await post.findById(post_id);
        post.comments.push(comment_object);
        await post.save();
        res.status(200).json({message:"Commented"});
    }
    catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

const getpostcontroller = async (req,res)=>{
    try {

        const type = req.query.type;

        if(type==="all"){
            const posts = await post.find();
            res.status(200).json(posts);
        }
        else if(type==="likes"){
            const posts = await post.find().sort({likes:-1});
            res.status(200).json(posts);
        }

        else if(type==="date"){
            const posts = await post.find().sort({date:-1});
            res.status(200).json(posts);
        }
    
        const posts = await post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}


module.exports = {newpostcontroller,likescontroller,commentscontroller,getpostcontroller};