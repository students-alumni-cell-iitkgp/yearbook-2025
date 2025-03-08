const express = require("express");
const {upload} = require("../middlewares/photouploadMiddleware");

const {newitchcontroller,getitchcontroller} = require("../controllers/itchlistcontroller");



const router = express.Router();



router.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello the application is running good");
})

router.post("/newitch",upload.single("image"),newitchcontroller);
router.get("/getitch",getitchcontroller);


module.exports = router;