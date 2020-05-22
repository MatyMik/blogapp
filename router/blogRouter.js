const {Router} = require("express");
const router = Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.getPosts);
router.post("/addnewpost", blogController.postAddNewPost);

module.exports = router;