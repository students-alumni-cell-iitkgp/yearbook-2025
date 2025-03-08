const express = require("express");
const {logincontroller,verifycontroller }= require("../controllers/usercontroller");

const {authenticateToken} = require("../middlewares/authMiddleware");

const router = express.Router();



router.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello the application is running good");
})

router.post("/login",logincontroller);
router.get("/verify",authenticateToken,verifycontroller);


// router.post("/upload",upload.single("image"),uploadtoCloud,uploadController);


module.exports = router;