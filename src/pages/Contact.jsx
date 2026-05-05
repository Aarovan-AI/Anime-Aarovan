import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { HyperText } from "../components/HyperText";
import { SparklesText } from "../components/SparklesText";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 sm:mb-6 text-heading">
              Get in <SparklesText text="Touch" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-body-text/70 max-w-3xl mx-auto">
              Ready to transform interview preparation at your institution?
              Let's talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-heading mb-4 sm:mb-6">
                  Send us a message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-body-text/70 mb-1.5 sm:mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-border/20 rounded-lg text-heading text-sm sm:text-base placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-body-text/70 mb-1.5 sm:mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-border/20 rounded-lg text-heading text-sm sm:text-base placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs sm:text-sm font-medium text-body-text/70 mb-1.5 sm:mb-2"
                    >
                      Organization/College *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-border/20 rounded-lg text-heading text-sm sm:text-base placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="Your institution name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-body-text/70 mb-1.5 sm:mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-border/20 rounded-lg text-heading text-sm sm:text-base placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-body-text/70 mb-1.5 sm:mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-border/20 rounded-lg text-heading text-sm sm:text-base placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4 text-green-400 text-xs sm:text-sm"
                    >
                      Thank you! We'll get back to you soon.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-center text-sm sm:text-base px-6 py-3 rounded-full font-bold text-white border border-[#509DD0]/60 bg-gradient-to-r from-[#509DD0] to-[#3A7DB0] hover:shadow-[0_0_20px_rgba(80,157,208,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-heading mb-4 sm:mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <span className="material-symbols-outlined text-brand text-2xl sm:text-3xl shrink-0">
                        mail
                      </span>
                      <div className="min-w-0">
                        <p className="text-muted text-xs sm:text-sm mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:contact@aarovan.ai"
                          className="text-heading text-sm sm:text-base hover:text-brand transition-colors break-all"
                        >
                          contact@aarovan.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <span className="material-symbols-outlined text-brand text-2xl sm:text-3xl shrink-0">
                        call
                      </span>
                      <div>
                        <p className="text-muted text-xs sm:text-sm mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+911234567890"
                          className="text-heading text-sm sm:text-base hover:text-brand transition-colors"
                        >
                          +91 12345 67890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <span className="material-symbols-outlined text-brand text-2xl sm:text-3xl shrink-0">
                        location_on
                      </span>
                      <div>
                        <p className="text-muted text-xs sm:text-sm mb-1">
                          Address
                        </p>
                        <p className="text-heading text-sm sm:text-base">
                          Bangalore, Karnataka
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-heading mb-4 sm:mb-6">
                    Connect With Us
                  </h3>

                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href="#"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-border/20 flex items-center justify-center hover:bg-brand/20 hover:border-brand transition-all"
                      aria-label="LinkedIn"
                    >
                      <span className="material-symbols-outlined text-heading text-xl sm:text-2xl">
                        link
                      </span>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-border/20 flex items-center justify-center hover:bg-brand/20 hover:border-brand transition-all"
                      aria-label="Twitter"
                    >
                      <span className="material-symbols-outlined text-heading text-xl sm:text-2xl">
                        tag
                      </span>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-border/20 flex items-center justify-center hover:bg-brand/20 hover:border-brand transition-all"
                      aria-label="Instagram"
                    >
                      <span className="material-symbols-outlined text-heading text-xl sm:text-2xl">
                        photo_camera
                      </span>
                    </a>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2 text-white/70 text-sm sm:text-base">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 text-white">
              Have{" "}
              <HyperText
                text="QUESTIONS"
                className="gradient-text font-serif font-bold"
                animateOnLoad={false}
              />
              ?
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 sm:mb-8">
              Check out our frequently asked questions or schedule a demo to
              learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <a
                href="#"
                className="w-full sm:w-auto text-center text-sm sm:text-base px-6 py-3 rounded-full font-bold text-white border-2 border-[#509DD0]/50 bg-transparent hover:bg-[#509DD0]/10 hover:border-[#509DD0]/70 transition-all"
              >
                View FAQ
              </a>
              <a
                href="#"
                className="w-full sm:w-auto text-center text-sm sm:text-base px-6 py-3 rounded-full font-bold text-white border border-[#509DD0]/60 bg-gradient-to-r from-[#509DD0] to-[#3A7DB0] hover:shadow-[0_0_20px_rgba(80,157,208,0.6)] transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
