import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import type { TeamMember } from "../backend.d";
import { useGetTeamMembers } from "../hooks/useQueries";

const fallbackTeam: TeamMember[] = [
  {
    id: 1n,
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "20 years of enterprise IT leadership. Former VP of Engineering at Cisco and head of digital transformation at Fortune 500 companies.",
    image: "",
  },
  {
    id: 2n,
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    bio: "Cloud architecture expert with deep expertise in Kubernetes, multi-cloud deployments, and distributed systems engineering.",
    image: "",
  },
  {
    id: 3n,
    name: "Priya Nair",
    role: "Head of Cybersecurity",
    bio: "Certified CISSP and former NSA security researcher. Leads our red-team and zero-trust implementation practice.",
    image: "",
  },
  {
    id: 4n,
    name: "James O'Brien",
    role: "VP of Engineering",
    bio: "Full-stack architect with 15 years building scalable SaaS platforms. Champion of clean code and DevOps culture.",
    image: "",
  },
  {
    id: 5n,
    name: "Sofia Reyes",
    role: "Head of Data Science",
    bio: "PhD in Machine Learning from MIT. Builds AI/ML pipelines that turn raw data into revenue-generating insights.",
    image: "",
  },
  {
    id: 6n,
    name: "David Kim",
    role: "Director of Client Success",
    bio: "Obsessed with customer outcomes. Ensures every engagement delivers measurable ROI and long-term value.",
    image: "",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "To empower organizations of all sizes with enterprise-grade technology solutions that drive measurable business outcomes and competitive advantage.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "A world where every business can harness the full potential of technology — securely, efficiently, and at scale.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We invest heavily in R&D to stay ahead of emerging technologies, ensuring our clients always benefit from the latest advancements.",
  },
  {
    icon: Users,
    title: "People First",
    desc: "We hire the brightest minds and nurture a culture of continuous learning, diversity, and psychological safety.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Delivered" },
  { value: "250+", label: "Team Members" },
  { value: "97%", label: "Client Retention" },
];

const milestones = [
  {
    year: "2009",
    title: "Founded",
    desc: "Started as a 3-person network consultancy with a big dream.",
  },
  {
    year: "2012",
    title: "First 50 Clients",
    desc: "Reached a landmark of 50 satisfied clients across verticals.",
  },
  {
    year: "2016",
    title: "Went Global",
    desc: "Expanded operations to Europe and Asia-Pacific markets.",
  },
  {
    year: "2020",
    title: "500+ Projects",
    desc: "Crossed 500 successful digital transformation deliveries.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "Recognized as a top IT partner with 250+ team members worldwide.",
  },
];

const differentiators = [
  {
    num: "01",
    icon: CheckCircle2,
    title: "Client-First Approach",
    desc: "We measure success by your results. Every decision we make is guided by what delivers real value to your business.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Proven Track Record",
    desc: "500+ successful deliveries across industries. Our portfolio speaks louder than promises.",
  },
  {
    num: "03",
    icon: ArrowRight,
    title: "End-to-End Expertise",
    desc: "From ideation to deployment and ongoing support — we're your partner at every stage of the journey.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function About() {
  const { data: team, isLoading } = useGetTeamMembers();
  const displayTeam = team && team.length > 0 ? team : fallbackTeam;

  return (
    <div className="pt-16">
      {/* HERO */}
      <section
        className="relative min-h-[560px] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.09 0.015 240) 0%, oklch(0.13 0.02 222) 40%, oklch(0.11 0.025 196) 100%)",
        }}
      >
        {/* Animated blobs */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(0.77 0.12 196) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-8"
            style={{
              background:
                "radial-gradient(circle, oklch(0.565 0.13 228) 0%, transparent 70%)",
            }}
          />
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.77 0.12 196 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.77 0.12 196 / 0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-accent inline-block" />
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-off-white mb-6 leading-[1.05] tracking-tight">
              Turning Ideas Into{" "}
              <span
                className="relative"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.77 0.12 196), oklch(0.65 0.15 220))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Reality
              </span>
            </h1>
            <p className="text-cool-gray text-lg max-w-xl leading-relaxed mb-8">
              Founded in 2009, Ishana TechLab has grown from a 3-person
              consultancy into a 250+ person global IT firm trusted by Fortune
              500 companies and fast-growing startups alike.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                data-ocid="about.hero.button"
                className="group gap-2 font-semibold"
                style={{
                  background: "oklch(0.77 0.12 196)",
                  color: "oklch(0.11 0.01 222)",
                }}
              >
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE — Story */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              15 Years Strong
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-off-white">
              Built on Trust & Results
            </h2>
          </motion.div>

          {/* Milestones timeline */}
          <div className="relative mb-16">
            {/* Center line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.77 0.12 196 / 0.4), transparent)",
              }}
            />
            <div className="space-y-10 md:space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`md:flex md:items-center md:gap-8 mb-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className="inline-block p-5 rounded-xl border"
                      style={{
                        backgroundColor: "oklch(0.21 0.015 222)",
                        borderColor: "oklch(0.26 0.02 222)",
                      }}
                    >
                      <span className="text-cyan-accent text-xs font-bold uppercase tracking-widest">
                        {m.year}
                      </span>
                      <h3 className="text-off-white font-bold text-lg mt-1">
                        {m.title}
                      </h3>
                      <p className="text-cool-gray text-sm mt-1 max-w-xs">
                        {i % 2 === 0 ? m.desc : m.desc}
                      </p>
                    </div>
                  </div>
                  {/* dot */}
                  <div
                    className="hidden md:flex w-5 h-5 rounded-full shrink-0 items-center justify-center z-10"
                    style={{
                      background: "oklch(0.77 0.12 196)",
                      boxShadow: "0 0 16px oklch(0.77 0.12 196 / 0.5)",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl border text-center cursor-default transition-all duration-300"
                style={{
                  backgroundColor: "oklch(0.21 0.015 222)",
                  borderColor: "oklch(0.26 0.02 222)",
                }}
                whileHover={{
                  boxShadow: "0 0 32px oklch(0.77 0.12 196 / 0.2)",
                  borderColor: "oklch(0.77 0.12 196 / 0.5)",
                }}
                data-ocid={`about.stat.${i + 1}`}
              >
                <div className="text-4xl font-black text-cyan-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cool-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="py-24 border-t border-gray-border"
        style={{ backgroundColor: "oklch(0.165 0.013 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Our DNA
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-off-white">
              What We Stand For
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`values.item.${i + 1}`}
                className="group"
              >
                <Card
                  className="h-full border transition-all duration-300 group-hover:border-cyan-accent/40"
                  style={{
                    backgroundColor: "oklch(0.21 0.015 222)",
                    borderColor: "oklch(0.26 0.02 222)",
                  }}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                      style={{ backgroundColor: "oklch(0.77 0.12 196 / 0.1)" }}
                      whileHover={{
                        boxShadow: "0 0 20px oklch(0.77 0.12 196 / 0.4)",
                      }}
                    >
                      <Icon className="w-6 h-6 text-cyan-accent" />
                    </motion.div>
                    <h3 className="text-base font-semibold text-off-white mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="py-24 border-t border-gray-border"
        style={{ backgroundColor: "oklch(0.13 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Why ITL
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-off-white">
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`why.item.${i + 1}`}
                className="relative rounded-2xl p-8 border overflow-hidden group"
                style={{
                  backgroundColor: "oklch(0.195 0.015 222)",
                  borderColor: "oklch(0.26 0.02 222)",
                }}
                whileHover={{
                  borderColor: "oklch(0.77 0.12 196 / 0.4)",
                  boxShadow: "0 8px 40px oklch(0.77 0.12 196 / 0.12)",
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute -top-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none opacity-[0.05] group-hover:opacity-[0.09] transition-opacity"
                  style={{ color: "oklch(0.77 0.12 196)" }}
                >
                  {num}
                </span>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "oklch(0.77 0.12 196 / 0.12)" }}
                >
                  <Icon className="w-7 h-7 text-cyan-accent" />
                </div>
                <h3 className="text-xl font-bold text-off-white mb-3">
                  {title}
                </h3>
                <p className="text-cool-gray text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        className="py-24 border-t border-gray-border"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-off-white">
              Meet the Team
            </h2>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackTeam.map((m) => (
                <div
                  key={String(m.id)}
                  className="h-48 rounded-xl animate-pulse"
                  style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                  data-ocid="team.loading_state"
                />
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="team.list"
            >
              {displayTeam.map((member, i) => (
                <motion.div
                  key={String(member.id)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  data-ocid={`team.item.${i + 1}`}
                >
                  <Card
                    className="border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.77_0.12_196_/_0.15)]"
                    style={{
                      backgroundColor: "oklch(0.21 0.015 222)",
                      borderColor: "oklch(0.26 0.02 222)",
                    }}
                  >
                    {/* Cyan top border accent */}
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.77 0.12 196), oklch(0.565 0.13 228))",
                      }}
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-cyan-accent shrink-0"
                          style={{
                            backgroundColor: "oklch(0.77 0.12 196 / 0.15)",
                          }}
                        >
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            initials(member.name)
                          )}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-off-white">
                            {member.name}
                          </h3>
                          <Badge
                            className="mt-1 text-xs font-medium"
                            style={{
                              backgroundColor: "oklch(0.77 0.12 196 / 0.15)",
                              color: "oklch(0.77 0.12 196)",
                              border: "1px solid oklch(0.77 0.12 196 / 0.3)",
                            }}
                          >
                            {member.role}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.03 222) 0%, oklch(0.15 0.04 196) 50%, oklch(0.12 0.03 240) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.77 0.12 196) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.565 0.13 228) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Let's Collaborate
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-off-white mb-5 leading-tight">
              Ready to Build Something{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.77 0.12 196), oklch(0.65 0.15 220))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Great?
              </span>
            </h2>
            <p className="text-cool-gray text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Partner with Ishana TechLab to bring your vision to life — from
              concept and design through to deployment and ongoing support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  data-ocid="about.cta.primary_button"
                  className="gap-2 font-semibold px-8"
                  style={{
                    background: "oklch(0.77 0.12 196)",
                    color: "oklch(0.11 0.01 222)",
                  }}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="about.cta.secondary_button"
                  className="gap-2 font-semibold px-8 border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent/10"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
