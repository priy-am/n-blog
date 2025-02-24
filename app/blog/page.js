// components/Blog.js
import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent)

const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`, 'utf-8');
  const {data} = matter(fileContent);
  return data;
})

// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/sample.webp',
//   },
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/sample.webp',
//   },
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/sample.webp',
//   },
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/sample.webp',
//   },
// ];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Link href={`/blogpost/${blog.slug}`}>
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{blog.author}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-8`}>Read more</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
