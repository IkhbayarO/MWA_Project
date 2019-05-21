let express = require('express');
let router = express.Router();
let purchseController = require('../api/controllers/purchasesController');

//your codes here
router.get("/", (req, res) => {
    purchseController.get(req, res);
});

router.post("/", (req, res) => {
    purchseController.create(req, res);
});

router.put("/", (req, res) => {
    purchseController.update(req, res);
});

router.delete("/:userId", (req, res) => { 
    purchseController.delete(req, res);
});

module.exports = router;