import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { SparklesText } from "../components/SparklesText";
import { GlowCard } from "../components/GlowCard";
import { BlurReveal } from "../components/BlurReveal";
import { HoverButton } from "../components/HoverButton";
import { SpotlightText } from "../components/SpotlightText";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-surface/30 via-elevated/20 to-mint/10"></div>
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-brand/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-[500px] h-64 sm:h-80 md:h-[500px] bg-navy/15 rounded-full blur-3xl animate-pulse-glow"></div>
          <div
            className="absolute top-1/3 right-1/3 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-sky-blue/15 rounded-full blur-3xl"
            style={{ animation: "float 8s ease-in-out infinite reverse" }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent-surface/40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top - Centered Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              <span className="text-heading">Practice real </span>
              <SparklesText
                text="AI-powered"
                colors={{ first: "#509DD0", second: "#244357" }}
              />
              <span className="text-heading"> interviews</span>
              <br />
              <span className="text-body-text">
                before your campus placements
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <motion.div
                className="space-y-4 mb-8 sm:mb-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-base sm:text-lg md:text-xl text-body-text leading-relaxed font-semibold text-justify">
                  Students spend years building technical knowledge, yet many
                  struggle to apply that knowledge effectively in interview
                  settings.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-body-text leading-relaxed font-semibold text-justify">
                  Aarovan.ai provides a structured environment for interview
                  practice where students engage in realistic mock interviews,
                  receive feedback, and improve through repeated exposure.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
                <Link to="/contact" className="w-full sm:w-auto">
                  <HoverButton
                    text="Partner with Us"
                    hoverText="Let's Connect"
                    className="w-full"
                  />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <HoverButton
                    text="Request Demo"
                    hoverText="See it in Action"
                    className="w-full"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Right - Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="backdrop-blur-xl bg-card-white/60 border border-brand/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(80,157,208,0.4)] sm:shadow-[0_0_60px_rgba(80,157,208,0.6)] hover:shadow-[0_0_60px_rgba(80,157,208,0.6)] sm:hover:shadow-[0_0_80px_rgba(80,157,208,0.8)] transition-shadow duration-500">
                <img
                    src="/Aarovan.jpg"
                    alt="Aarovan Platform"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-heading/40"
          >
            <span className="material-symbols-outlined text-3xl sm:text-4xl">
              keyboard_arrow_down
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* What You Get Section */}
      <WhatYouGetSection />

      {/* How Students Improve */}
      <HowStudentsImproveSection />

      {/* Designed for Campus */}
      <DesignedForCampusSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function StatsSection() {
  const [ref, isInView] = useInView({ threshold: 0.3, once: true });
  const count1 = useCountUp(500, 2000, isInView);
  const count2 = useCountUp(45, 2000, isInView);

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center mb-8 sm:mb-12 text-white">
            Trusted by{" "}
            <span className="gradient-text">500+ engineering students</span>{" "}
            preparing for campus placements
          </h2>
        </AnimatedSection>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          <AnimatedSection delay={0.2}>
            <GlowCard
              value={`${count1}+`}
              label="Engineering Students"
              accentColor="#509DD0"
              className="w-full"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <GlowCard
              value={`${count2}%`}
              label="Communication Improvement"
              accentColor="#244357"
              className="w-full"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
            The Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-heading">
            <SpotlightText
              text="Interview Practice Doesn't Scale in Colleges?"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold"
              spotlightSize={150}
              litColor="#509DD0"
              dimColor="rgba(0, 0, 0, 0.7)"
            />
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <AnimatedSection delay={0.2}>
            <div className="h-full flex flex-col space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                Most engineering students enter placement season with strong
                academic preparation but limited experience in actual interview
                scenarios.
              </p>
              <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                Mock interviews require significant time, coordination, and
                mentor availability. For institutions managing large cohorts,
                providing consistent, high-quality interview exposure to every
                student becomes challenging.
              </p>
              <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                As a result, interview preparation often becomes uneven some students receive guidance, while many rely on self-preparation without real practice.
              </p>
              <div className="mt-auto relative h-48 sm:h-64 rounded-xl overflow-hidden border border-brand/20">
                <img
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80"
                  alt="Job interview preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="glass-card rounded-2xl p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-heading mb-6 sm:mb-8 text-center">
                Why This Happens
              </h3>
              <div className="space-y-5 sm:space-y-7">
                <div className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-brand mt-1 text-2xl sm:text-3xl shrink-0">
                    check_circle
                  </span>
                  <p className="text-body-text/70 text-base sm:text-lg leading-relaxed">
                    Mismatch between student readiness and interview
                    requirements
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-brand mt-1 text-2xl sm:text-3xl shrink-0">
                    check_circle
                  </span>
                  <p className="text-body-text/70 text-base sm:text-lg leading-relaxed">
                    Limited faculty bandwidth and resources
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-brand mt-1 text-2xl sm:text-3xl shrink-0">
                    check_circle
                  </span>
                  <p className="text-body-text/70 text-base sm:text-lg leading-relaxed">
                    Institutional constraints in scaling practice
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-brand mt-1 text-2xl sm:text-3xl shrink-0">
                    check_circle
                  </span>
                  <p className="text-body-text/70 text-base sm:text-lg leading-relaxed">
                    Gaps in communication and articulation skills
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  const features = [
    {
      icon: "psychology",
      title: "Role-aligned Sessions",
      description:
        "Practice with questions relevant to real placement roles",
    },
    {
      icon: "feedback",
      title: "Instant Feedback",
      description:
        "Get immediate, structured feedback on clarity, reasoning, and communication",
    },
    {
      icon: "trending_up",
      title: "Track Progress",
      description:
        "Monitor your improvement and identify patterns across multiple sessions",
    },
    {
      icon: "replay",
      title: "Unlimited Practice",
      description:
        "Build confidence through consistent exposure in a repeatable environment",
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-black/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-full">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-brand/10 blur-[80px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-navy/10 blur-[80px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
            What You Get?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 text-heading">
            A Structured System for <SpotlightText
              text="Interview Preparation"
              className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold"
              spotlightSize={120}
              litColor="#509DD0"
              dimColor="rgba(80, 157, 208, 0.3)"
            />
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full group overflow-hidden rounded-xl border border-border/20 p-4 sm:p-5"
              >
                {/* Ambient Gradient Background */}
                <div className="absolute w-40 h-40 rounded-full blur-3xl inset-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="relative z-10 flex items-start gap-4 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand/20 to-navy/10 border border-border/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-xl sm:text-2xl text-brand group-hover:text-navy transition-colors duration-500">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-base font-semibold text-heading mb-1.5 sm:mb-2 group-hover:translate-x-1 transition-transform duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body-text/60 leading-relaxed group-hover:text-body-text/80 transition-colors duration-500 flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowStudentsImproveSection() {
  const improvements = [
    {
      icon: "forum",
      text: "Improve how they structure and communicate responses",
    },
    {
      icon: "timer",
      text: "Learn to think clearly under time constraints",
    },
    {
      icon: "lightbulb",
      text: "Identify gaps in understanding and articulation",
    },
    {
      icon: "emoji_events",
      text: "Build confidence through experience",
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
            How Students Improve?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-heading">
            Building Interview Readiness
          </h2>
          <p className="text-sm sm:text-base text-body-text/70 max-w-2xl mx-auto">
            Interview readiness is not built through theory, it develops through
            repeated practice.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {improvements.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-4 sm:p-6 text-center h-full">
                <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl text-brand mb-3 sm:mb-4 block">
                  {item.icon}
                </span>
                <p className="text-body-text/70 text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-center text-sm sm:text-base text-body-text/60 italic">
            Over time, this creates a measurable improvement in performance
            rather than one-time preparation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function DesignedForCampusSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
            Designed for Campus Placements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-6 sm:mb-8 text-heading">
            Scale Interview Preparation Across Your Institution
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-8 sm:p-10 md:p-12 space-y-6 sm:space-y-8 h-full flex flex-col justify-center">
              <p className="text-base sm:text-lg md:text-xl text-body-text/70 leading-relaxed">
                Aarovan.ai enables institutions to deliver structured interview
                preparation across entire student batches without increasing
                operational complexity.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-body-text/70 leading-relaxed">
                Instead of relying on limited mock sessions, colleges can provide
                continuous access to interview practice for all students.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="relative h-full min-h-[16rem] sm:min-h-[20rem] rounded-2xl overflow-hidden border border-brand/30">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Professional development and training"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-brand/20 blur-[100px] sm:blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 text-white">
            Ready to Elevate Your Institution's{" "}
            <SparklesText text="Engineering Outcome" />?
          </h2>
          {/* <BlurReveal
            text="Join forward-thinking institutions transforming career trajectories of their technical scholars."
            className="text-sm sm:text-base text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto"
            delay={0.2}
          /> */}
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <HoverButton
                text="Get Started"
                hoverText="Start Now"
                className="w-full"
              />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <HoverButton
                text="Speak to an Advisor"
                hoverText="Contact Us"
                className="w-full bg-transparent hover:bg-primary/20"
              />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    // {
    //   text: "Aarovan.ai helped me structure my thoughts better during interviews. The feedback was incredibly detailed.",
    //   name: "Priya Sharma",
    //   role: "Computer Science, IIT Delhi",
    //   company: "Placed at Google",
    // },
  ];

  // return (
  //   <section className="py-10 sm:py-12 md:py-16 lg:py-20">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <AnimatedSection className="text-center mb-10 sm:mb-16">
  //         <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
  //           Student Success Stories
  //         </span>
  //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 text-white">
  //           Hear from Students Who{" "}
  //           <SpotlightText
  //             text="Transformed Their Interview Skills"
  //             className="gradient-text text-2xl sm:text-3xl md:text-4xl font-serif font-bold"
  //             spotlightSize={150}
  //           />
  //         </h2>
  //       </AnimatedSection>

  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
  //         {testimonials.map((testimonial, index) => (
  //           <AnimatedSection key={index} delay={index * 0.1}>
  //             <motion.div
  //               whileHover={{ y: -8 }}
  //               className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col"
  //             >
  //               <div className="flex-1">
  //                 <div className="text-brand text-3xl sm:text-4xl mb-3 sm:mb-4">
  //                   "
  //                 </div>
  //                 <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
  //                   {testimonial.text}
  //                 </p>
  //               </div>
  //               <div className="border-t border-white/10 pt-4 sm:pt-6">
  //                 <p className="text-white font-semibold text-sm sm:text-base">
  //                   {testimonial.name}
  //                 </p>
  //                 <p className="text-white/50 text-xs sm:text-sm mt-1">
  //                   {testimonial.role}
  //                 </p>
  //                 <p className="text-brand text-xs sm:text-sm mt-2 font-medium">
  //                   {testimonial.company}
  //                 </p>
  //               </div>
  //             </motion.div>
  //           </AnimatedSection>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
