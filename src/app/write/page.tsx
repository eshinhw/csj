"use client";

import { Article } from "@/app/services/articles";
import React, { useEffect, useState } from "react";

export default function WritePage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const articles = await response.json();
      const categories = [
        ...new Set(articles.map((article: Article) => article.category)),
      ].sort();
      setCategories(categories as string[]);
    };

    fetchArticles();
  }, []);

  const submitArticleHandler = async () => {
    console.log(title);
    try {
      const response = await fetch("/api/articles", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: abstract,
          body: content,
          author: author,
          category: category,
          image: "",
          featured: false,
        }),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const cancelHandler = () => {
    window.location.replace("/");
  };
  return (
    <section>
      {/* Mobile */}
      <div className="flex flex-col justify-center max-w-sm mx-auto lg:hidden">
        <h1 className="my-5 font-bold">Write an Article</h1>
        <div className="flex my-5">
          <div className="mr-6 text-right">Category</div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="cat"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-full h-12 border-2"
            placeholder="Title"
          />
          <input
            type="text"
            className="w-full h-12 border-2"
            placeholder="Abstract"
          />
          <input
            type="text"
            className="w-full h-12 border-2"
            placeholder="Author"
          />
          <input
            type="text"
            className="w-full h-12 border-2"
            placeholder="Title"
          />
          <textarea className="w-full border-2 h-36" placeholder="Content" />
          <div className="flex flex-row justify-evenly">
            <button
              className="w-1/2 p-3 text-white bg-gray-700 rounded-md"
              onClick={submitArticleHandler}
            >
              Submit
            </button>
            <button
              className="w-1/2 p-3 text-white bg-red-700 rounded-md"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="hidden mx-40 lg:block">
        <h1 className="mb-5 text-xl font-bold">Write an Article</h1>
        <div className="flex my-5">
          <div className="mr-6 text-right w-28">Category</div>
          <select name="cat">
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex my-4">
          <div className="w-32 mr-6 text-right">Title</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 mr-6 text-right">Abstract</div>
          <input
            type="text"
            name="abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            className="w-full border-2"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 mr-6 text-right">Author</div>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border-2"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 mr-6 text-right">Content</div>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-48 border-2"
          />
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button
            className="p-5 text-white bg-gray-700 rounded-md"
            onClick={submitArticleHandler}
          >
            Submit
          </button>
          <button
            className="p-5 text-white bg-red-700 rounded-md"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
