import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-blue/20 to-brand/10 border-t border-brand/30 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl sm:text-2xl font-serif font-bold bg-gradient-to-r from-brand to-sky-blue bg-clip-text text-transparent">
                Aarovan.ai
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              AI-powered interview preparation platform for engineering
              students.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Interview Practice
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  AI Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Progress Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-brand transition-colors"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-2xl">work</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-brand transition-colors"
                aria-label="Twitter"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-brand transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-2xl">mail</span>
              </a>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow"></div>
                <span className="text-white/60 text-xs">Platform Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-white/10 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Aarovan.ai. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              to="#"
              className="text-white/10 hover:text-brand text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-white/60 hover:text-brand text-xs sm:text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
