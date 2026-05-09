import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { HyperText } from "../components/HyperText";
import { SplitTextReveal } from "../components/ui/split-text-reveal";
import { BlurReveal } from "../components/BlurReveal";
import { HoverButton } from "../components/HoverButton";

export default function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 sm:mb-6 text-heading">
              About{" "}
              <HyperText
                text="AAROVAN.AI"
                className="gradient-text font-serif font-bold inline-flex"
              />
            </h1>
            <BlurReveal
              text="Transforming interview preparation through AI-powered practice and feedback"
              className="text-base sm:text-lg md:text-xl text-body-text/70 max-w-3xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-6 sm:py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-6 sm:mb-8 text-heading">
              A Growing Need for{" "}
              <span className="gradient-text font-serif font-bold">Structured Practice</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <AnimatedSection delay={0.2}>
              <div className="h-full flex flex-col space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-body-text/70 leading-relaxed">
                  India produces one of the largest pools of engineering
                  graduates globally, yet a significant number struggle to
                  convert preparation into placement outcomes.
                </p>
                <p className="text-base sm:text-lg text-body-text/70 leading-relaxed">
                  A key reason is not a lack of knowledge but a lack of
                  structured, repeatable interview practice.
                </p>
                <div className="mt-auto relative h-48 rounded-xl overflow-hidden border border-brand/20">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Professional interview preparation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-heading sm:mb-2">
                  Interview performance requires a different set of skills:
                </h3>
                <ul className="space-y-4 sm:space-y-3 flex-1">
                  {[
                    "Structuring thoughts in real time",
                    "Explaining reasoning clearly",
                    "Responding to follow-up questions",
                    "Communicating effectively under pressure",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="material-symbols-outlined text-brand mt-0.5 shrink-0 text-xl sm:text-2xl">
                        arrow_right
                      </span>
                      <span className="text-body-text/70 text-base sm:text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted mt-5 sm:mt-6 italic text-sm sm:text-base">
                  These are not developed through passive learning—they require
                  repeated, real-world practice.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Problem Persists */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              Why This Problem Persists
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-heading">
              The Current Limitations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-body-text/70">
              In most colleges, interview preparation depends on:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-center gap-4 sm:gap-6">
              {[
                { icon: "person", title: "Limited faculty bandwidth" },
                { icon: "groups", title: "External mentors or alumni" },
                { icon: "schedule", title: "Scheduling and coordination" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center space-x-5 sm:space-x-6 pl-6 sm:pl-10">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-brand shrink-0">
                      {item.icon}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-heading">
                      {item.title}
                    </h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Right side - As a result */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card rounded-2xl p-4 sm:p-5 h-full flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-heading mb-4 text-center">
                  As a result:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-brand mt-0.5 shrink-0 text-lg sm:text-xl">
                      arrow_right
                    </span>
                    <p className="text-body-text/70 text-sm sm:text-base leading-relaxed">
                      Interview exposure remains limited
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-brand mt-0.5 shrink-0 text-lg sm:text-xl">
                      arrow_right
                    </span>
                    <p className="text-body-text/70 text-sm sm:text-base leading-relaxed">
                      Feedback is inconsistent
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-brand mt-0.5 shrink-0 text-lg sm:text-xl">
                      arrow_right
                    </span>
                    <p className="text-body-text/70 text-sm sm:text-base leading-relaxed">
                      Many students don't get sufficient practice
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/20">
                  <p className="text-center text-sm sm:text-base text-brand font-semibold">
                    This creates a gap between preparation and performance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-6 sm:py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              Why Now
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 text-heading">
              The AI Advantage
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 h-full">
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Advances in AI have made it possible to simulate interview
                  environments, evaluate responses, and provide structured
                  feedback at scale.
                </p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  What was previously dependent on human evaluators can now be
                  delivered consistently across large student batches.
                </p>
                <div className="bg-brand/10 border border-brand/30 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">
                  <p className="text-base sm:text-lg md:text-xl text-white font-semibold text-center">
                    This enables interview preparation to move from a limited
                    resource to a scalable system.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-brand/30">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                  alt="AI and Machine Learning Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Aarovan.ai Does */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          <AnimatedSection className="text-center mb-6 sm:mb-8">
            <span className="text-primary text-2xl lg:text-5xl font-serif font-bold uppercase tracking-wider">
              What Aarovan.ai Does
            </span>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mt-4 sm:mt-2">Aarovan.ai introduces a structured approach to interview preparation.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Students engage in interview sessions where they:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  "Respond to role-based questions",
                  "Receive feedback on clarity, structure, and reasoning",
                  "Interact with follow-up questions that simulate real interview flow",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-brand mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <p className="text-white/70 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-base sm:text-lg text-white/60 mt-6 sm:mt-8 italic">
                This transforms preparation into an active, performance-driven
                process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Changes Preparation */}
      <section className="py-6 sm:py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <span className="text-primary text-base sm:text-lg font-semibold uppercase tracking-wider">
              How It Changes Preparation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-white">
              With consistent access to interview practice:
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              {
                icon: "play_circle",
                title: "Active Application",
                desc: "Students shift from passive learning to active application",
              },
              {
                icon: "speed",
                title: "Immediate Feedback",
                desc: "Feedback becomes immediate and actionable",
              },
              {
                icon: "trending_up",
                title: "Continuous Improvement",
                desc: "Improvement becomes continuous and measurable",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 text-center h-full">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl text-brand mb-3 sm:mb-4 block">
                    {item.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center text-base sm:text-lg text-white/70">
              Students can engage in multiple sessions, building confidence and
              refining performance over time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 sm:mb-8 text-white">
              Ready to Transform{" "}
              <span className="gradient-text font-serif font-bold">Interview Preparation</span>?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <HoverButton
                  text="Get Started"
                  hoverText="Start Now"
                  className="w-full"
                />
              </Link>
              <Link to="/features" className="w-full sm:w-auto">
                <HoverButton
                  text="Explore Features"
                  hoverText="Learn More"
                  className="w-full bg-transparent hover:bg-primary/20"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
