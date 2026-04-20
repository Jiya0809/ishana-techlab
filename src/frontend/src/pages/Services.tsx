import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  Code2,
  Globe,
  LayoutDashboard,
  Palette,
  Smartphone,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Service } from "../backend.d";
import { useGetServices } from "../hooks/useQueries";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Palette,
  Smartphone,
  LayoutDashboard,
  Code2,
  Wrench,
  default: Code2,
};

const fallbackServices: Service[] = [
  {
    id: 1n,
    title: "Web Development",
    description:
      "Building fast, scalable, and modern web applications tailored to your business needs.",
    iconName: "Globe",
    content:
      "We craft custom websites and web applications using cutting-edge technologies like React, Next.js, Node.js, and modern cloud APIs. From landing pages to complex enterprise portals, our development team delivers performance-optimised, SEO-friendly solutions with clean code architecture, robust API integrations, and seamless CI/CD pipelines.",
  },
  {
    id: 2n,
    title: "Web Designing",
    description:
      "Creative, user-centric UI/UX designs that captivate your audience and elevate your brand.",
    iconName: "Palette",
    content:
      "Our design team works in Figma to create stunning, conversion-focused interfaces backed by solid UX research. We develop design systems, component libraries, and responsive layouts that work beautifully across all screen sizes. Every pixel is intentional — from typography and color theory to micro-interactions and accessibility standards (WCAG 2.1).",
  },
  {
    id: 3n,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that deliver seamless experiences.",
    iconName: "Smartphone",
    content:
      "We build high-performance mobile applications using React Native and Flutter for cross-platform efficiency, or Swift/Kotlin for fully native experiences. Our apps are optimized for speed, offline capability, and intuitive UX. From MVP launches to complex feature-rich applications, we handle the full lifecycle: design, development, QA, App Store submission, and post-launch support.",
  },
  {
    id: 4n,
    title: "Custom ERP System Development",
    description:
      "Fully customized ERP solutions to streamline your operations, automate workflows, and boost productivity.",
    iconName: "LayoutDashboard",
    content:
      "We design and build tailored ERP systems that replace fragmented tools with a single, unified platform. Our ERP solutions cover modules for inventory management, HR & payroll, CRM, procurement, accounting, and real-time analytics. Built with scalability in mind, our systems integrate with third-party APIs, legacy databases, and IoT devices — giving you complete visibility and control over your business.",
  },
  {
    id: 5n,
    title: "Software Development",
    description:
      "End-to-end custom software engineered precisely to your requirements and business goals.",
    iconName: "Code2",
    content:
      "From greenfield SaaS products to legacy system modernization, our engineers deliver clean, testable, maintainable software. We follow agile methodologies with two-week sprint cycles, continuous integration, and comprehensive automated testing. Our full-stack expertise spans React, Node.js, Python, Go, and cloud-native architectures on AWS, Azure, and GCP.",
  },
  {
    id: 6n,
    title: "Website Maintenance",
    description:
      "Reliable, ongoing website maintenance services to keep your site fast, secure, and up to date.",
    iconName: "Wrench",
    content:
      "We provide proactive website maintenance plans covering CMS updates, plugin/dependency patching, performance audits, uptime monitoring, daily backups, SSL management, and security hardening. Our team responds to incidents within hours and delivers monthly health reports so you always know the status of your digital presence — letting you focus on running your business.",
  },
];

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[svc.iconName] ?? iconMap.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      data-ocid={`services.item.${index + 1}`}
    >
      <Card
        className="border-gray-border hover:border-cyan-accent/40 transition-all duration-300"
        style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "oklch(0.77 0.12 196 / 0.12)" }}
            >
              <Icon className="w-6 h-6 text-cyan-accent" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-cool-gray hover:text-cyan-accent -mt-1"
              onClick={() => setExpanded((v) => !v)}
              data-ocid={`services.toggle.${index + 1}`}
            >
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </Button>
          </div>
          <CardTitle className="text-base font-semibold text-off-white">
            {svc.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-cool-gray leading-relaxed">
            {svc.description}
          </p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-gray-border">
                  <p className="text-sm text-cool-gray leading-relaxed">
                    {svc.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  const { data: services, isLoading } = useGetServices();
  const displayServices =
    services && services.length > 0 ? services : fallbackServices;

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
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-5">
              Our Services
            </h1>
            <p className="text-cool-gray max-w-2xl mx-auto leading-relaxed">
              From web development and mobile apps to custom ERP systems, we
              build technology solutions that power your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackServices.map((s) => (
                <div
                  key={String(s.id)}
                  className="h-56 rounded-lg animate-pulse"
                  style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                  data-ocid="services.loading_state"
                />
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="services.list"
            >
              {displayServices.map((svc, i) => (
                <ServiceCard key={String(svc.id)} svc={svc} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process section */}
      <section
        className="py-20 border-t border-gray-border"
        style={{ backgroundColor: "oklch(0.165 0.013 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-3xl font-bold text-off-white">
              Our Engagement Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We understand your business goals, challenges, and technical requirements in depth.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We craft a tailored technology roadmap with clear milestones and deliverables.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Our engineers implement solutions with precision, agile sprints, and quality assurance.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing monitoring, optimization, and responsive support to keep you running smoothly.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-gray-border"
                style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                data-ocid={`process.item.${i + 1}`}
              >
                <div className="text-3xl font-black text-cyan-accent/30 mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-off-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cool-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
