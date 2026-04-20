import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const caseStudies = [
  {
    id: 1,
    industry: "Retail",
    industryColor: "oklch(0.82 0.15 65 / 0.15)",
    industryText: "oklch(0.82 0.15 65)",
    title: "E-Commerce Platform for RetailCo",
    client: "RetailCo Ltd.",
    challenge:
      "RetailCo was operating on a decade-old monolith that couldn't handle flash sale traffic spikes, resulting in frequent outages and cart abandonment rates exceeding 35%.",
    solution:
      "We re-architected the platform as a microservices-based e-commerce system using Next.js on the frontend and Node.js + PostgreSQL on the backend, deployed on AWS with auto-scaling.",
    result:
      "The new platform handled 10× their peak traffic without downtime, reduced cart abandonment to under 12%, and cut infrastructure costs by 28%.",
    metric: "40% faster load time",
    metricIcon: TrendingUp,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redis"],
  },
  {
    id: 2,
    industry: "Healthcare",
    industryColor: "oklch(0.72 0.15 140 / 0.15)",
    industryText: "oklch(0.72 0.15 140)",
    title: "Patient Management System for MedPlus",
    client: "MedPlus Hospitals",
    challenge:
      "MedPlus was managing patient records across 12 hospital branches using spreadsheets and paper forms, causing critical data inconsistencies, compliance risks, and delayed care.",
    solution:
      "We built a HIPAA-compliant Patient Management System with a role-based access control module, real-time bed management dashboard, appointment scheduling, and HL7 FHIR integrations.",
    result:
      "Patient intake time dropped by 60%, cross-branch data accuracy reached 99.8%, and the compliance audit passed with zero findings in its first year.",
    metric: "60% faster patient intake",
    metricIcon: CheckCircle2,
    technologies: ["React", "Python", "Django", "PostgreSQL", "HL7 FHIR"],
  },
  {
    id: 3,
    industry: "Finance",
    industryColor: "oklch(0.72 0.15 280 / 0.15)",
    industryText: "oklch(0.72 0.15 280)",
    title: "Investment Dashboard for WealthBridge",
    client: "WealthBridge Capital",
    challenge:
      "WealthBridge's portfolio managers were working with delayed data exports from multiple disparate systems, making it impossible to make informed real-time investment decisions.",
    solution:
      "We developed a unified investment intelligence dashboard with real-time market data feeds, portfolio performance analytics, risk scoring models, and a custom alerting engine.",
    result:
      "Portfolio managers reported a 3× improvement in decision velocity, and the firm saw a 22% increase in client retention within the first two quarters post-launch.",
    metric: "3× revenue growth",
    metricIcon: TrendingUp,
    technologies: ["React", "FastAPI", "TimescaleDB", "WebSockets", "GCP"],
  },
  {
    id: 4,
    industry: "Manufacturing",
    industryColor: "oklch(0.72 0.15 330 / 0.15)",
    industryText: "oklch(0.82 0.12 330)",
    title: "Custom ERP for PrecisionWorks Manufacturing",
    client: "PrecisionWorks Inc.",
    challenge:
      "PrecisionWorks was using five separate software tools for inventory, procurement, production scheduling, HR, and accounting — with no integration between them, causing costly errors and duplicated work.",
    solution:
      "We designed and built a fully integrated custom ERP system with modules for inventory management, purchase order automation, shop floor scheduling, payroll, and real-time financial reporting.",
    result:
      "Manual data entry was eliminated across departments, order fulfillment accuracy improved from 78% to 99%, and management gained real-time visibility into the entire production cycle.",
    metric: "99% order accuracy",
    metricIcon: CheckCircle2,
    technologies: ["React", "Node.js", "MySQL", "Redis", "Docker", "Azure"],
  },
];

export default function CaseStudies() {
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
              Proven Results
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-5">
              Case Studies
            </h1>
            <p className="text-cool-gray max-w-2xl mx-auto leading-relaxed">
              Real projects. Real impact. Explore how we've helped businesses
              across industries transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies grid */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-ocid="case_studies.list"
          >
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`case_studies.item.${i + 1}`}
              >
                <Card
                  className="border-gray-border hover:border-cyan-accent/40 transition-all duration-300 h-full"
                  style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: cs.industryColor,
                          color: cs.industryText,
                        }}
                      >
                        {cs.industry}
                      </span>
                      {/* Metric highlight */}
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                          color: "oklch(0.77 0.12 196)",
                        }}
                      >
                        <cs.metricIcon className="w-3.5 h-3.5" />
                        {cs.metric}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-off-white leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-xs text-cool-gray">{cs.client}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Challenge */}
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "oklch(0.82 0.15 65)" }}
                      >
                        Challenge
                      </h3>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "oklch(0.77 0.12 196)" }}
                      >
                        Solution
                      </h3>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "oklch(0.72 0.15 140)" }}
                      >
                        Result
                      </h3>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {cs.result}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-cool-gray mb-2">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cs.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[11px] px-2 py-0.5"
                            style={{
                              backgroundColor: "oklch(0.18 0.012 222)",
                              color: "oklch(0.65 0.05 222)",
                              border: "1px solid oklch(0.28 0.012 222)",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-semibold text-cyan-accent hover:gap-2 transition-all mt-2"
                      data-ocid={`case_studies.item.${i + 1}`}
                    >
                      View Full Case Study{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 border-t border-gray-border text-center"
        style={{ backgroundColor: "oklch(0.165 0.013 222)" }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-off-white mb-3">
            Ready to become our next success story?
          </h2>
          <p className="text-cool-gray text-sm mb-6">
            Tell us about your project and let's explore how Ishana TechLab can
            deliver results like these for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-charcoal transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.77 0.12 196)" }}
            data-ocid="case_studies.primary_button"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
