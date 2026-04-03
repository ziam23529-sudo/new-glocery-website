// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide after 3 seconds
  };

  return (
    <section className="relative bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 py-24 px-5 md:px-20 overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-200 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-200 rounded-full opacity-15 animate-pulse mix-blend-multiply"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-center mb-12"
        >
          Have questions or want to work together? Send us a message and we’ll get back to you soon.
        </motion.p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          ></textarea>

          <div className="text-center">
            <Button content="Send Message" />
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center font-semibold mt-4"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}
