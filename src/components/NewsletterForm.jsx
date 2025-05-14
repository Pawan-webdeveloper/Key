"use client";

import React, { useState } from "react";
import Button from "./Button";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="min-w-60 w-[400px]">
      <div className="w-full text-base text-black">
        <h3 className="font-bold">Subscribe</h3>
        <p className="mt-4 leading-6">
          Join our newsletter for the latest updates and exclusive offers.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 w-full">
        <div className="flex gap-4 items-start w-full text-base">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Here"
            className="flex-1 shrink gap-2 self-stretch px-3 py-2 text-black rounded-xl border border-solid basis-6 bg-black bg-opacity-10 border-black border-opacity-10 min-w-60"
            required
          />
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </div>
        <p className="mt-3 text-xs leading-5 text-black">
          By subscribing, you consent to receive updates in accordance with our
          Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
