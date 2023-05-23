const postModel = require("../models/post.model");

exports.getPosts = async (req, res) => {
  const posts = await postModel.find({});

  try {
    if (posts.length === 0) return res.json({ message: "No posts found!" });
    return res.json({ messsage: "OK!", data: posts });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getPost = (req, res) => {
  const id = req.params.id;
  return res.send(`<h1>Hi there 1 post only ${id}</h1>`);
};

exports.createPost = async (req, res) => {
  const post = new postModel(req.body);

  try {
    await post.save();
    res.status(201).json({ message: "Post successfully created!", data: post });
  } catch (error) {
    res.status(500).send(error);
  }
};
