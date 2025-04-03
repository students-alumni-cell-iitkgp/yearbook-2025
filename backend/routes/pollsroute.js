const express = require("express");
const {addvotecontroller, getwinnercontroller} = require("../controllers/pollscontroller");


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, the application is running good!");
});

router.post("/addvote", addvotecontroller);
router.get("/getwinner", getwinnercontroller);

module.exports = router;
