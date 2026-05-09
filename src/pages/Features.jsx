import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { MorphingText } from "../components/MorphingText";
import { HyperText } from "../components/HyperText";
import { HoverButton } from "../components/HoverButton";
import { BlurReveal } from "../components/BlurReveal";
import { SpotlightText } from "../components/SpotlightText";

export default function Features() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <MorphingText
              words={["Designed for Scalable Interview Preparation in Colleges"]}
              className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-serif font-bold text-black mb-4 sm:mb-6"
            />
            <MorphingText
              words={["AI-Led Mock Interviews at Scale"]}
              className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-serif font-bold text-brand mb-4 sm:mb-6"
            />
            <div className="max-w-5xl mx-auto text justify-center text-body-text/70 text-sm sm:text-base">
              <p className="text-sm sm:text-base text-body-text/70 mb-3 sm:mb-4">
                Students practice interviews with an AI interviewer that asks
                relevant questions, evaluates responses, and provides
                follow-ups.
              </p>
              <p className="text-sm sm:text-base text-body-text/70">
                This enables interview practice to be delivered across large
                student batches without dependence on scheduling or mentor
                availability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System Flow */}
      <section className="py-6 sm:py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-6 sm:space-y-8">
            {/* Realistic Interview Simulation */}
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl text-brand shrink-0">
                    psychology
                  </span>
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-heading mb-3 sm:mb-4">
                      Realistic Interview Simulation
                    </h3>
                    <p className="text-base sm:text-lg text-body-text/70 mb-4 sm:mb-6">
                      The system replicates real interview dynamics:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        "Probing deeper into responses",
                        "Asking contextual follow-up questions",
                        "Guiding students when needed",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-brand text-sm shrink-0">
                            check
                          </span>
                          <span className="text-muted text-xs sm:text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-muted mt-4 sm:mt-6 italic text-sm sm:text-base">
                      This allows students to experience realistic interview
                      conditions before actual placements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Immediate Feedback */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl text-brand shrink-0">
                    feedback
                  </span>
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-heading mb-3 sm:mb-4">
                      Immediate Feedback on Responses
                    </h3>
                    <p className="text-base sm:text-lg text-body-text/70 mb-4 sm:mb-6">
                      After each interaction, students receive structured
                      feedback on:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        "Correctness of approach",
                        "Clarity of explanation",
                        "Gaps in understanding",
                      ].map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-brand text-sm shrink-0">
                            check
                          </span>
                          <span className="text-muted text-xs sm:text-sm">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-muted mt-4 sm:mt-6 italic text-sm sm:text-base">
                      This enables targeted improvement across sessions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Anytime Access */}
            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl text-brand shrink-0">
                    schedule
                  </span>
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-heading mb-3 sm:mb-4">
                      Anytime Access for Students
                    </h3>
                    <p className="text-base sm:text-lg text-body-text/70 mb-4 sm:mb-6">
                      Students can practice interviews:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        "Independently",
                        "Without waiting for faculty or mentors",
                        "At their own pace",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="material-symbols-outlined text-brand text-sm shrink-0">
                            check
                          </span>
                          <span className="text-muted text-xs sm:text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-muted mt-4 sm:mt-6 italic text-sm sm:text-base">
                      This ensures consistent engagement and wider participation
                      across batches.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              Why Aarovan.ai
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-heading">
              Built for Scale, Consistency, and Impact
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {[
              {
                icon: "groups",
                title: "Scalable",
                desc: "Supports interview preparation across entire student cohorts",
              },
              {
                icon: "verified",
                title: "Consistent",
                desc: "Ensures uniform evaluation and feedback",
              },
              {
                icon: "psychology",
                title: "Realistic",
                desc: "Simulates real-world interview conditions",
              },
              {
                icon: "schedule",
                title: "Accessible",
                desc: "Available anytime for continuous improvement",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 text-center h-full"
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl text-brand mb-3 sm:mb-4 block">
                    {item.icon}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-heading mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-text/60 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.5}>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand/30">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="AI-powered interview platform"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 sm:py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 sm:mb-8 text-heading">
              Ready to Scale Interview Preparation at{" "}
              <span className="gradient-text">Your Institution</span>?
            </h2>
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <HoverButton
                text="GET STARTED TODAY"
                hoverText="CONTACT US"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
