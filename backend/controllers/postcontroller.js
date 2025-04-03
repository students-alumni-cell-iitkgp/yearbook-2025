const {Post} = require("../models/postmodel");

const newpostcontroller = async (req,res)=>{
    try {
        const user_id = req.body.user_id;
        const user_name = req.body.user_name;
        const photo_url = req.body.photo_url;
        const caption = req.body.caption;

        const date = Date.now();
        // console.log(user_id,user_name,photo_url,caption,date)

        if (!photo_url) return res.status(400).json({ message: "File upload failed" });

        const newpost = new Post({
            user_id,
            user_name,
            photo_url,
            caption,
            likes:0,
            comments:[],
            date
        });

        await newpost.save();

        return res.status(200).json({message:"Post created successfully"});

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"});
    }
}

const likescontroller = async (req,res)=>{
    try {
        const {post_id,liked} = req.body;
        const post = await Post.findById(post_id);
        if(liked){
            post.likes = post.likes-1;
        }else{
            post.likes = post.likes +1;
        }
        
        await post.save();
        return res.status(200).json({message:"Likes updated"});
        } catch (error) {
        return res.status(500).json({message:"Server error"});
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

        const post = await Post.findById(post_id);
        post.comments.push(comment_object);
        await post.save();
        return res.status(200).json({message:"Commented"});
    }
    catch (error) {
        return res.status(500).json({message:"Server error"});
    }
}

const getpostcontroller = async (req,res)=>{
    try {

        const type = req.query.type;

        if(type==="all"){
            const posts = await Post.find();
            return res.status(200).json(posts);
        }
        else if(type==="likes"){
            const posts = await Post.find().sort({likes:-1});
            return res.status(200).json(posts);
        }

        else if(type==="date"){
            const posts = await Post.find().sort({date:-1});
            return res.status(200).json(posts);
        }
    
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({message:"Server error"});
    }
}


module.exports = {newpostcontroller,likescontroller,commentscontroller,getpostcontroller};