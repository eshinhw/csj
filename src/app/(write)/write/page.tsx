"use client";

import { Article, getCategories } from "@/app/services/articles";
import React, { useEffect, useState } from "react";

export default function WritePage() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const articles = await response.json();
      const categories = [...new Set(articles.map((article: Article) => article.category))].sort();
      setCategories(categories as string[]);
    };

    fetchArticles();
  }, []);

  async function postJSON(data: Article) {
    try {
      const response = await fetch("/api/articles", {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const clickHandler = () => {
    const title = (document.getElementsByName("title")[0] as HTMLInputElement).value;
    const abstract = (document.getElementsByName("abstract")[0] as HTMLInputElement).value;
    const content = (document.getElementsByName("content")[0] as HTMLInputElement).value;
    const author = (document.getElementsByName("author")[0] as HTMLInputElement).value;
    console.log(title);
    postJSON({
      id: 9,
      title: title,
      description: abstract,
      body: content,
      date: new Date(),
      author: author,
      category: "abd",
      image: "",
      articleName: "adfa",
      featured: false,
    });
  };
  const cancelHandler = () => {};
  return (
    <section>
      {/* Mobile */}
      <div className="mx-auto max-w-sm flex flex-col justify-center lg:hidden">
        <h1 className="my-5 font-bold">Write an Article</h1>
        <div className="flex my-5">
          <div className="text-right mr-6">Category</div>
          <select name="cat">
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
            <button className="bg-gray-700 rounded-md p-3 w-1/2 text-white" onClick={clickHandler}>
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
          <input type="text" name="title" className="border-2 w-full" />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Abstract</div>
          <input type="text" name="abstract" className="border-2 w-full" />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Author</div>
          <input type="text" name="author" className="border-2 w-full" />
        </div>
        <div className="flex my-4">
          <div className="w-32 text-right mr-6">Text Area</div>
          <textarea name="content" className="border-2 w-full h-48" />
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button className="bg-gray-700 rounded-md p-5 text-white" onClick={clickHandler}>
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
