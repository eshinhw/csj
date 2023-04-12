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
      const categories = [...new Set(articles.map((article: Article) => article.category))].sort();
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
    window.location.replace("/")
  };
  return (
    <section>
      {/* Mobile */}
      <div className="mx-auto max-w-sm flex flex-col justify-center lg:hidden">
        <h1 className="my-5 font-bold">Write an Article</h1>
        <div className="flex my-5">
          <div className="text-right mr-6">Category</div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} name="cat">
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <input type="text" className="border-2 w-full h-12" placeholder="Title" />
          <input type="text" className="border-2 w-full h-12" placeholder="Abstract" />
          <input type="text" className="border-2 w-full h-12" placeholder="Author" />
          <input type="text" className="border-2 w-full h-12" placeholder="Title" />
          <textarea className="border-2 w-full h-36" placeholder="Content" />
          <div className="flex flex-row justify-evenly">
            <button
              className="bg-gray-700 rounded-md p-3 w-1/2 text-white"
              onClick={submitArticleHandler}
            >
              Submit
            </button>
            <button className="bg-red-700 rounded-md p-3 w-1/2 text-white" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="hidden lg:block mx-40">
        <h1 className="font-bold text-xl mb-5">Write an Article</h1>
        <div className="flex my-5">
          <div className="w-28 text-right mr-6">Category</div>
          <select name="cat">
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Title</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 w-full"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Abstract</div>
          <input
            type="text"
            name="abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            className="border-2 w-full"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Author</div>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 w-full"
          />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Content</div>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 w-full h-48"
          />
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button className="bg-gray-700 rounded-md p-5 text-white" onClick={submitArticleHandler}>
            Submit
          </button>
          <button className="bg-red-700 rounded-md p-5 text-white" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
