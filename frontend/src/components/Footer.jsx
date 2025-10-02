// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">MyMERNApp</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Building scalable full-stack apps with MongoDB, Express, React, and Node.js.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
          <p className="mt-4 text-sm text-gray-400">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-4 flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 rounded-l-md w-full bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-r-md text-white hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MyMERNApp. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
