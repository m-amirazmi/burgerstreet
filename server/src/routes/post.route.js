const {
  getPosts,
  getPost,
  createPost,
} = require("../controllers/post.controller");

const router = require("express").Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);

module.exports = router;
