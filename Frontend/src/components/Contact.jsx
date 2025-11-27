import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Get in <span className="text-pink-500">Touch</span>
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Have any questions, suggestions, or feedback? Fill out the form below and
        we’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8 border">
        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Type your message here..."
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-pink-600 transition-all"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 text-center text-gray-600">
        <p>
          Email: <span className="text-pink-500">support@bookstore.com</span>
        </p>
        <p>
          Phone: <span className="text-pink-500">+91 98765 43210</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
