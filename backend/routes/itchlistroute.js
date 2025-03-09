const express = require("express");
const {uploadMiddleware} = require("../middlewares/photouploadMiddleware");
const { newitchcontroller, getitchcontroller } = require("../controllers/itchlistcontroller");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, the application is running good!");
});

router.post("/newitch",uploadMiddleware, newitchcontroller);
router.get("/getitch", getitchcontroller);

module.exports = router;
