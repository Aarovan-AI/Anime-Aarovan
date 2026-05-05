import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-2 sm:top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
    >
      <div
        className={cn(
          "backdrop-blur-xl bg-card-white/40 border border-border/40 rounded-full px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 md:py-3 transition-all duration-300 w-full max-w-6xl shadow-lg shadow-brand/5",
          isScrolled && "shadow-2xl shadow-brand/10 bg-card-white/50",
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0 gap-2">
            <img 
              src="/logo.png" 
              alt="Aarovan.ai Logo" 
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-120 md:w-12 object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-brand to-sky-blue bg-clip-text text-transparent">
              Aarovan.ai
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs lg:text-sm font-medium whitespace-nowrap transition-colors duration-300 relative",
                  location.pathname === link.path
                    ? "text-brand"
                    : "text-body-text/70 hover:text-heading",
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link to="/contact">
              <Button variant="secondary" size="sm" className="text-xs whitespace-nowrap">
                Request Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="sm" className="text-xs whitespace-nowrap">
                Partner with Us
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-heading p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-3 right-3 mt-2 backdrop-blur-xl bg-card-white/90 border border-border/40 rounded-2xl overflow-hidden shadow-xl shadow-brand/10"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200",
                    location.pathname === link.path
                      ? "text-brand bg-brand/10"
                      : "text-body-text/70 hover:text-heading hover:bg-brand/5",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border/20 mt-3">
                <Link to="/contact" className="block">
                  <Button variant="secondary" size="sm" className="w-full text-sm py-3">
                    Request Demo
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="primary" size="sm" className="w-full text-sm py-3">
                    Partner with Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
