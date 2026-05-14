import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { TypewriterText } from "../components/TypewriterText";
import { SplitTextReveal } from "../components/ui/split-text-reveal";
import { WaveCard } from "../components/WaveCard";
import { HoverButton } from "../components/HoverButton";

export default function Team() {
  const teamMembers = [
    {
      name: "Rohan Garg",
      role: "Co-Founder",
      image: "/Team/Rohan.jpg",
      bio: "Product leader with 10+ years of experience across India and the US, spanning product management and data analytics. At Dream11 and PokerBaazi, built growth and retention products at scale for ~20M daily active users. Previously at Publicis Media and comScore, developed data platforms and visualization tools for global ad agencies. MBA from ISB, MEM from Duke University, and an engineering degree from NIT Kurukshetra.",
      education: ["MBA - ISB", "MEM - Duke University", "B.Tech - NIT Kurukshetra"],
      achievements: ["10+ years in Product Management", "Built products for 20M+ DAU", "Dream11 & PokerBaazi"],
      linkedin: "#",
    },
    {
      name: "Avennya Goel",
      role: "Co-Founder",
      image: "/Team/Avennya.jpg",
      bio: "Finance professional with 4+ years of experience across analytics, financial strategy, and AI-enabled platforms. Worked at Deloitte on financial analysis, reporting automation, and performance evaluation across large-scale systems, and at Mercor on financial modelling within AI-driven workflows. MBA in Quantitative Finance and Entrepreneurship from Babson College, focused on building data-driven systems that measure performance, identify gaps, and drive measurable outcomes.",
      education: ["MBA - Babson College", "Quantitative Finance & Entrepreneurship"],
      achievements: ["4+ years in Finance & Analytics", "Deloitte & Mercor", "AI-driven Financial Systems"],
      linkedin: "#",
    },
  ];

  console.log('Team members:', teamMembers);

  const values = [
    {
      icon: "school",
      title: "Student-First",
      desc: "Every decision is made with student success in mind",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      desc: "Leveraging cutting-edge AI to solve real problems",
    },
    {
      icon: "verified",
      title: "Quality",
      desc: "Delivering consistent, high-quality interview experiences",
    },
    {
      icon: "trending_up",
      title: "Impact",
      desc: "Measuring success through student placement outcomes",
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero */}
      <section className="py-6 sm:py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 sm:mb-4 text-heading">
              Meet the{" "}
              <TypewriterText
                text={["Team", "Innovators", "Visionaries"]}
                className="gradient-text font-serif font-bold"
                speed={150}
                waitTime={2000}
              />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-body-text/70 max-w-3xl mx-auto">
              Empowering future engineers to succeed in interviews and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 sm:py-8 md:py-6 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-6 sm:mb-8 text-heading">
              How Aarovan.ai Began
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols gap-8 items-stretch">
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 h-full">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-heading mb-4">
                  How it all started
                </h3>
                <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                  Aarovan.ai started when Avennya Goel, after her time at Babson,
                  worked with the founder of an engineering college and conducted
                  a mock interview workshop. During these sessions, she observed
                  that while students were technically prepared, many struggled to
                  structure answers and communicate effectively due to lack of
                  consistent interview practice.
                </p>
                <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                  To address this gap at scale, she partnered with
                  Rohan Garg, who brought a product and systems perspective to
                  design a scalable solution.
                </p>
                <p className="text-sm sm:text-base text-body-text/70 leading-relaxed">
                  Together, they are building an AI-driven platform that enables
                  structured interview practice, consistent evaluation, and
                  continuous improvement across large student batches.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6 sm:mb-8">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              Mentorship
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 text-heading">
              Built with guidance from renowned <span className="gradient-text underline">AI faculty</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="max-w-4xl mx-auto mb-6 flex justify-center">
                <div className="text-left">
                  <p className="text-base sm:text-lg text-body-text/70 leading-relaxed mb-1">
                    Aarovan.ai is guided by mentorship from <span className="text-brand font-semibold">NYU Tandon School of Engineering</span>
                  </p>
                  <p className="text-base sm:text-lg text-body-text/70 leading-relaxed">
                   This mentorship combines academic expertise with real-world execution.
                  </p>
                </div>
              </div>
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-brand/30">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Academic mentorship and guidance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-4 sm:mb-0">
            <span className="text-brand text-base sm:text-lg font-semibold uppercase tracking-wider">
              The Founders
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 text-heading">
              Meet the Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <WaveCard
                  title={member.name}
                  subtitle={member.role}
                  gradient="linear-gradient(744deg, #509DD0, #244357 60%, #89A9BA)"
                  icon={
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      onError={(e) => {
                        console.error('Image failed to load:', member.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  }
                  titleClass="text-base sm:text-lg font-semibold"
                  subtitleClass="text-xs"
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Bios below cards */}
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover flex-shrink-0"
                      onError={(e) => {
                        console.error('Bio image failed to load:', member.image);
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        {member.role}
                      </p>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg text-brand">school</span>
                            Education
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.education.map((edu, i) => (
                              <span key={i} className="bg-brand/10 border border-brand/30 text-brand px-3 py-1 rounded-full text-xs font-medium">
                                {edu}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg text-brand">emoji_events</span>
                            Achievements
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.achievements.map((achievement, i) => (
                              <span key={i} className="bg-brand/10 border border-brand/30 text-brand px-3 py-1 rounded-full text-xs font-medium">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-4 sm:py-6 md:py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-4 sm:mb-6">
            <span className="text-primary text-base sm:text-lg font-semibold uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 text-white">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 text-center h-full"
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl text-primary mb-3 sm:mb-4 block">
                    {value.icon}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
                Join Our{" "}
                <span className="gradient-text font-serif font-bold">Mission</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                We're always looking for talented individuals who share our
                passion for education and technology.
              </p>
              <a
                href="mailto:careers@aarovan.ai"
                className="inline-block w-full sm:w-auto"
              >
                <HoverButton
                  text="View Open Positions"
                  hoverText="Join Us"
                  className="w-full sm:w-auto px-6 sm:px-8"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
