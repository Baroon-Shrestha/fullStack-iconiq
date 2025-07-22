const express = require("express");
const router = express.Router();
const {
  postBlog,
  getAllBlogs,
  getOneBlog,
  deleteBlog,
} = require("../Controllers/blogController");
const { verifyAdmin } = require("../MIddlewares/verifyAdmin");

router.post("/post-blog", verifyAdmin, postBlog);
router.get("/blogs", getAllBlogs);
router.get("/:id", getOneBlog);
router.delete("/delete/:id", verifyAdmin, deleteBlog);

module.exports = router;
