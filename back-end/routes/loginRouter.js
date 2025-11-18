const express = require('express');
const router = express.Router();
// const auth = require("../middleware/auth");


const {
    getAllLogins,
    createLogin,
    getLoginById,
    updateLogin,
    deleteLogin
} = require('../controllers/loginControllers');
 
router.get('/', getAllLogins);
// router.use(auth);
router.post("/", createLogin);
router.get("/:loginId", getLoginById);
router.put("/:loginId", updateLogin);
router.delete("/:loginId", deleteLogin);

 module.exports = router;