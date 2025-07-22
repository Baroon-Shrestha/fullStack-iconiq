import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { useAuth } from "../Context/AuthContext";

export default function BlogForm() {
  const { admin } = useAuth(); // 🔐 get authenticated user
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    content: "",
    categories: "",
    tags: "",
    isPublished: false,
  });

  const [heroImage, setHeroImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setHeroImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }
    form.append("heroImage", heroImage);

    if (!admin) {
      return setMessage("You must be logged in as admin to submit a blog.");
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/blog/post-blog",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setMessage(res.data.message || "Blog submitted.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Blog Post
          </h1>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter your blog title..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    placeholder="Brief description of your blog post (max 300 characters)..."
                    maxLength={300}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    value={formData.shortDescription}
                    onChange={handleChange}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.shortDescription.length}/300
                  </div>
                </div>
              </div>
            </div>

            {/* Categories and Tags Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Organization
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categories
                  </label>
                  <input
                    type="text"
                    name="categories"
                    placeholder="e.g., Technology, Web Development"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                    value={formData.categories}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate multiple categories with commas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="e.g., React, JavaScript, Tutorial"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate multiple tags with commas
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Featured Image
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Featured Image *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended size: 1200x630 pixels (JPG, PNG)
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Content
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Content
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <Editor
                    apiKey="ydtp0lw09fpf7s9xyyrq1mykcs7go1xp994sjtypxghsx8d9"
                    initialValue=""
                    value={formData.content}
                    init={{
                      height: 400,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic underline | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help",
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </div>
              </div>
            </div>

            {/* Publishing Options */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Publishing Options
              </h2>

              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Publish immediately
                  </span>
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Uncheck to save as draft. You can publish it later from your
                dashboard.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-105"
                >
                  {formData.isPublished ? "Publish Blog" : "Save as Draft"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              message.includes("failed") || message.includes("must be logged")
                ? "bg-red-50 border border-red-200 text-red-700"
                : "bg-green-50 border border-green-200 text-green-700"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full mr-3 ${
                  message.includes("failed") ||
                  message.includes("must be logged")
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              ></div>
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
