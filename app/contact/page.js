"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form   className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={5} />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
            <p>Email: priyam2101753@gmail.com</p>
            <p> <a href="https://codepriyam.netlify.app/"> Website: https://codepriyam.netlify.app/ </a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;