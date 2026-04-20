import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Clock, User } from "lucide-react";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: 1,
    category: "Web Dev",
    title: "Top Web Development Trends to Watch in 2026",
    excerpt:
      "From AI-assisted coding to edge-first architectures, the web development landscape is evolving rapidly. We break down the biggest trends shaping how modern applications are built and deployed this year.",
    author: "Arjun Mehta",
    initials: "AM",
    date: "March 18, 2026",
    readTime: "6 min read",
    accent: "oklch(0.77 0.12 196)",
  },
  {
    id: 2,
    category: "Mobile",
    title: "Why Your Business Needs a Mobile App in 2026",
    excerpt:
      "Mobile traffic now accounts for over 60% of all web visits globally. Discover why a dedicated mobile app — not just a responsive website — can dramatically improve customer engagement and conversions for your brand.",
    author: "Priya Nair",
    initials: "PN",
    date: "March 10, 2026",
    readTime: "5 min read",
    accent: "oklch(0.72 0.15 280)",
  },
  {
    id: 3,
    category: "ERP",
    title: "Custom ERP vs Off-the-Shelf Software: Which Is Right for You?",
    excerpt:
      "Generic ERP platforms often force businesses to adapt their processes to the software. We compare the real costs, flexibility, and long-term ROI of custom-built ERP systems versus popular out-of-the-box solutions like SAP and Oracle.",
    author: "Rahul Desai",
    initials: "RD",
    date: "February 27, 2026",
    readTime: "8 min read",
    accent: "oklch(0.72 0.15 45)",
  },
  {
    id: 4,
    category: "Design",
    title: "UI/UX Best Practices That Convert Visitors into Customers",
    excerpt:
      "Great design isn't just beautiful — it's functional and persuasive. We share the UX principles our design team uses to reduce bounce rates, simplify user journeys, and build interfaces people love to use.",
    author: "Sneha Kapoor",
    initials: "SK",
    date: "February 14, 2026",
    readTime: "7 min read",
    accent: "oklch(0.72 0.15 330)",
  },
  {
    id: 5,
    category: "Tech Tips",
    title: "Website Security Tips Every Business Owner Should Know",
    excerpt:
      "Cyberattacks on small and medium businesses are up 45% year-over-year. This practical guide covers SSL certificates, firewall configurations, regular backups, and the simple hygiene practices that protect your online presence.",
    author: "Vikram Singh",
    initials: "VS",
    date: "January 30, 2026",
    readTime: "5 min read",
    accent: "oklch(0.72 0.15 140)",
  },
  {
    id: 6,
    category: "Web Dev",
    title: "Choosing the Right Tech Stack for Your Next Project",
    excerpt:
      "With dozens of frameworks and cloud services competing for your attention, selecting the right technology stack can feel overwhelming. We walk through the key questions to ask and the trade-offs to evaluate before you write a single line of code.",
    author: "Arjun Mehta",
    initials: "AM",
    date: "January 15, 2026",
    readTime: "9 min read",
    accent: "oklch(0.77 0.12 196)",
  },
];

const categoryColors: Record<string, string> = {
  "Web Dev": "oklch(0.77 0.12 196 / 0.15)",
  Mobile: "oklch(0.72 0.15 280 / 0.15)",
  ERP: "oklch(0.72 0.15 45 / 0.15)",
  Design: "oklch(0.72 0.15 330 / 0.15)",
  "Tech Tips": "oklch(0.72 0.15 140 / 0.15)",
};

const categoryText: Record<string, string> = {
  "Web Dev": "oklch(0.77 0.12 196)",
  Mobile: "oklch(0.72 0.15 280)",
  ERP: "oklch(0.82 0.15 65)",
  Design: "oklch(0.82 0.12 330)",
  "Tech Tips": "oklch(0.72 0.15 140)",
};

export default function Blog() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section
        className="py-20 border-b border-gray-border"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.11 0.01 222), oklch(0.155 0.012 222))",
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Insights & Updates
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-5">
              Our Blog
            </h1>
            <p className="text-cool-gray max-w-2xl mx-auto leading-relaxed">
              Practical insights, industry trends, and technology deep-dives
              from the Ishana TechLab team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            data-ocid="blog.list"
          >
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-ocid={`blog.item.${i + 1}`}
              >
                <Card
                  className="border-gray-border hover:border-cyan-accent/40 transition-all duration-300 h-full flex flex-col group"
                  style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                >
                  <CardHeader className="pb-3">
                    <div className="mb-3">
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor:
                            categoryColors[post.category] ??
                            "oklch(0.77 0.12 196 / 0.15)",
                          color:
                            categoryText[post.category] ??
                            "oklch(0.77 0.12 196)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-base font-semibold text-off-white leading-snug group-hover:text-cyan-accent transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="pt-0 flex-1">
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-gray-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-charcoal"
                        style={{ backgroundColor: post.accent }}
                      >
                        {post.initials}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-off-white">
                          {post.author}
                        </p>
                        <p className="text-[10px] text-cool-gray">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-cool-gray text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>

                  <div className="px-6 pb-5">
                    <button
                      type="button"
                      className="text-xs font-medium text-cyan-accent hover:gap-2 flex items-center gap-1 transition-all"
                      data-ocid={`blog.item.${i + 1}`}
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 border-t border-gray-border text-center"
        style={{ backgroundColor: "oklch(0.165 0.013 222)" }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <User className="w-8 h-8 text-cyan-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-off-white mb-3">
            Have a topic you'd like us to cover?
          </h2>
          <p className="text-cool-gray text-sm mb-6">
            We love hearing from our community. Reach out and suggest topics,
            collaborate on a guest post, or just say hello.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-charcoal transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.77 0.12 196)" }}
            data-ocid="blog.primary_button"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
