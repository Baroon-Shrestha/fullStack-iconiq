import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Calendar, Tag, ArrowLeft } from "lucide-react";

export default function BlogDescription() {
  const { id } = useParams(); // ID passed via route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const previousPage = () => {
    return navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/${id}`)
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-xl">Loading blog...</div>;
  }

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-20">
      <button
        onClick={() => {
          previousPage();
        }}
        className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Blogs
      </button>

      <img
        src={blog.heroImage?.url}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl shadow-lg mb-6"
      />

      <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {blog.categories?.length > 0 && (
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{blog.categories.join(", ")}</span>
          </div>
        )}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{blog.title}</h1>

      {/* Render blog content as HTML */}
      <div
        className="text-justify prose max-w-none prose-purple prose-img:rounded-xl prose-blockquote:border-l-4 prose-blockquote:pl-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Tags if available */}
      {blog.tags?.length > 0 && (
        <div className="mt-8">
          <h4 className="font-semibold text-gray-700 mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
