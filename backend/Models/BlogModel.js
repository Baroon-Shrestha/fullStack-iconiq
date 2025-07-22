const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    categories: {
      type: [String], // e.g., ['web-dev', 'educational']
      required: true,
      default: [],
    },

    shortDescription: {
      type: String,
      trim: true,
      maxlength: 300, // limit for card previews or meta
    },

    content: {
      type: String,
      required: true, // Full blog HTML or Markdown
    },

    heroImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    tags: {
      type: [String],
      required: true,
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
