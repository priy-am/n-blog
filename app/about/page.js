"use client"
import React from "react";
import { motion } from "framer-motion"; // Assuming you're using Framer Motion for animations

const AboutHero = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Blog</h1>
          <p className="text-lg text-muted-foreground">
            Welcome to our programming blog where we share insights, tutorials, and projects on various programming topics. Our mission is to educate and inspire developers of all levels.
          </p>
        </div>

        {/* Showcase Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Project Showcase"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Project Title</h2>
              <p className="text-muted-foreground">
                Brief description of the project. Highlight the key features and technologies used.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Project Showcase"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Project Title</h2>
              <p className="text-muted-foreground">
                Brief description of the project. Highlight the key features and technologies used.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

