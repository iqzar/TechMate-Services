'use client';

import Link from 'next/link';
import {Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-300 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TM</span>
              </div>
              <span className="font-bold text-xl">TechMate</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We build future-ready mobile, web, and backend solutions to empower startups and enterprises with reliable and scalable digital solutions.
            </p>
            <div className="space-y-2">
              {/*<div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>superfixsolutionz@gmail.com</span>
  </div>*/}
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+92 319 8400943</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-text">
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>Backend Development</li>
              <li>UI/UX Design</li>
              <li>Custom Software</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-3 text-center text-text">
          <p>&copy; 2022 TechMate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
