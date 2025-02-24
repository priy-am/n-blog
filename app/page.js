"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import Link from "next/link";

export default function Home() {
  // const [selectedPlan, setSelectedPlan] = useState("Standard");
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding ",
        "web development",
        "software engineering",
        "data science",
        "machine learning",
      ],
      typeSpeed: 50,
      loop: true, // Add loop for continuous typing
      backDelay: 1500, // Add a delay before backspacing
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const items = [
    {
      name: "John Doe",
      testimonial:
        "This service is amazing! It has changed my life for the better.",
      avatar: "/images.jpeg",
    },
    {
      name: "Jane Smith",
      testimonial:
        "I can’t believe how easy it was to get started. Highly recommend!",
      avatar: "/images.jpeg",
    },
    {
      name: "Sam Wilson",
      testimonial: "Fantastic customer support and great value for money.",
      avatar: "/images.jpeg",
    },
  ];

  const showcaseblog = [
    {
      title: "Understanding JavaScript Closures",
      excerpt: "A deep dive into closures in JavaScript and how they work.",
      image: "/sample.webp",
      link: "#",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Learn the differences between CSS Grid and Flexbox.",
      image: "/sample.webp",
      link: "#",
    },
    {
      title: "10 Tips for Writing Clean Code",
      excerpt: "Improve your coding skills with these clean code tips.",
      image: "/sample.webp",
      link: "#",
    },
  ];

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-[#312c8f] dark:to-[#4a1a76] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dive into{" "}
            <span className="underline decoration-yellow-400">
              <span ref={el} />
            </span>{" "}
            Knowledge
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore insightful articles and tutorials on various tech topics.
          </p>
          <Button className="bg-yellow-400 text-indigo-800 hover:bg-yellow-500 font-semibold text-lg">
           <Link href={'/blog'}> Start Exploring </Link>
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Choose a plan that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Basic", "Standard", "Premium"].map((plan, index) => (
              <div
                key={index}
                className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                  selectedPlan === plan
                    ? "border-2 border-purple-500 scale-105"
                    : "border border-transparent"
                }`}
                onClick={() => handleCardClick(plan)}
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {plan}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  ${(index + 1) * 10}/month
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Feature 1",
                    "Feature 2",
                    "Feature 3",
                    "Feature 4",
                    "Feature 5",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`ml-3 text-gray-700 dark:text-gray-300 ${
                          index === 0 && i >= 2 ? "line-through" : ""
                        } ${index === 1 && i >= 4 ? "line-through" : ""}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="border mt-6 w-full" variant="outline">
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {testimonial.name}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Top Blogs Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Explore our most popular blog posts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseblog.map((blog, index) => (
              <div
                key={index}
                className="transform transition-transform duration-500 hover:scale-105 shadow-lg"
              >
                <a
                  href={blog.link}
                  className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {blog.title}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {blog.excerpt}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
