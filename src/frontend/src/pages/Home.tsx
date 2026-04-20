import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Clock,
  Cloud,
  Code2,
  Database,
  HeartHandshake,
  Settings,
  Shield,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetServices } from "../hooks/useQueries";

const iconMap: Record<string, React.ElementType> = {
  Cloud,
  Code2,
  Database,
  Shield,
  Wifi,
  Settings,
  default: Settings,
};

const partnerLogos = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Cisco",
  "IBM",
  "Oracle",
];

const whyUsPoints = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    desc: "Over a decade of proven expertise delivering technology solutions across industries worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    desc: "Every engagement begins with deep discovery to align solutions with your unique business objectives.",
  },
  {
    icon: Clock,
    title: "24/7 Managed Support",
    desc: "Round-the-clock monitoring and rapid-response teams keep your systems running at peak performance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Architectures designed to grow with your business — from startup to enterprise.",
  },
];

const fallbackServices = [
  {
    id: 1n,
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud environments built for modern enterprise workloads and future growth.",
    iconName: "Cloud",
    content: "",
  },
  {
    id: 2n,
    title: "Cybersecurity",
    description:
      "End-to-end security posture management, threat detection, and zero-trust architecture.",
    iconName: "Shield",
    content: "",
  },
  {
    id: 3n,
    title: "Software Development",
    description:
      "Custom applications, APIs, and platforms engineered to your exact business requirements.",
    iconName: "Code2",
    content: "",
  },
  {
    id: 4n,
    title: "Data & Analytics",
    description:
      "Data engineering pipelines, business intelligence dashboards, and AI-powered insights.",
    iconName: "Database",
    content: "",
  },
];

export default function Home() {
  const { data: services, isLoading } = useGetServices();
  const displayServices = services?.slice(0, 4) ?? [];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/hero-server-room.dim_1920x900.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.11 0.01 222 / 0.82), oklch(0.155 0.012 222 / 0.96))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, oklch(0.77 0.12 196), transparent 70%)",
          }}
        />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-accent/30 text-cyan-accent text-xs font-medium mb-6"
            style={{ backgroundColor: "oklch(0.77 0.12 196 / 0.1)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
            Next-Generation IT Solutions
          </div>
          <h1
            className="text-5xl md:text-[62px] font-extrabold text-off-white leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Transform Your Business
            <br />
            <span className="text-cyan-accent">With Smart Technology</span>
          </h1>
          <p className="text-lg text-cool-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            Ishana TechLab delivers enterprise-grade IT infrastructure, cloud
            solutions, and digital transformation services — helping ambitious
            organizations thrive in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="text-white font-semibold px-8 gap-2"
                style={{ backgroundColor: "oklch(0.565 0.13 228)" }}
                data-ocid="hero.primary_button"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-border text-off-white hover:text-cyan-accent hover:border-cyan-accent font-semibold px-8"
                style={{ backgroundColor: "transparent" }}
                data-ocid="hero.secondary_button"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services section */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.155 0.012 222), oklch(0.165 0.013 222))",
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-[36px] font-bold text-off-white">
              Our Core Services
            </h2>
            <p className="text-cool-gray mt-4 max-w-xl mx-auto">
              A comprehensive suite of technology solutions tailored to
              accelerate your growth.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fallbackServices.map((s) => (
                <div
                  key={String(s.id)}
                  className="h-52 rounded-lg animate-pulse"
                  style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                  data-ocid="services.loading_state"
                />
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              data-ocid="services.list"
            >
              {(displayServices.length > 0
                ? displayServices
                : fallbackServices
              ).map((svc, i) => {
                const Icon = iconMap[svc.iconName] ?? iconMap.default;
                return (
                  <motion.div
                    key={String(svc.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <Card
                      className="h-full border-gray-border hover:border-cyan-accent/50 transition-all duration-300 hover:shadow-glow group cursor-pointer"
                      style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                    >
                      <CardContent className="p-6">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                          style={{
                            backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-cyan-accent" />
                        </div>
                        <h3 className="text-base font-semibold text-off-white mb-2">
                          {svc.title}
                        </h3>
                        <p className="text-sm text-cool-gray leading-relaxed">
                          {svc.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-gray-border text-cool-gray hover:text-cyan-accent hover:border-cyan-accent"
                style={{ backgroundColor: "transparent" }}
                data-ocid="services.secondary_button"
              >
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Our Advantages
            </p>
            <h2 className="text-3xl md:text-[36px] font-bold text-off-white">
              Why Choose Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="/assets/generated/team-office-illustration.dim_800x600.jpg"
                alt="Ishana TechLab team"
                className="w-full h-auto object-cover rounded-xl"
                style={{ border: "1px solid oklch(0.26 0.02 222)" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {whyUsPoints.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(0.77 0.12 196 / 0.12)" }}
                  >
                    <Icon className="w-5 h-5 text-cyan-accent" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-off-white mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-cool-gray leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        className="py-20 border-t border-gray-border"
        style={{ backgroundColor: "oklch(0.165 0.013 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-off-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-cool-gray mt-3 text-sm">
              Partnering with the world's most innovative technology companies.
            </p>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerLogos.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-cool-gray/40 font-bold text-lg tracking-wide hover:text-cool-gray/70 transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.565 0.13 228 / 0.15), oklch(0.77 0.12 196 / 0.1))",
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
              Ready to Elevate Your IT Infrastructure?
            </h2>
            <p className="text-cool-gray mb-8 leading-relaxed">
              Schedule a free consultation with our experts and discover how
              Ishana TechLab can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-white font-semibold px-8 gap-2"
                  style={{ backgroundColor: "oklch(0.565 0.13 228)" }}
                  data-ocid="cta.primary_button"
                >
                  Schedule a Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-border text-off-white font-semibold px-8"
                  style={{ backgroundColor: "transparent" }}
                  data-ocid="cta.secondary_button"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
