import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GrainOverlay from "./components/GrainOverlay";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen">
          <GrainOverlay />
          <Navbar />
          <ScrollToTop />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
