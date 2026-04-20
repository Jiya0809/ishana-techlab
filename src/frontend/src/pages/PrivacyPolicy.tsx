import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";
import { motion } from "motion/react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        key: "intro-1",
        text: 'Welcome to Ishana TechLab ("ITL", "we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
      },
      {
        key: "intro-2",
        text: "Please read this policy carefully. If you disagree with its terms, please discontinue use of our site. We reserve the right to make changes to this policy at any time, and we will notify you of any material updates.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: [
      {
        key: "info-1",
        text: "We may collect information about you in a variety of ways:",
      },
      {
        key: "info-2",
        text: "Personal Data: Personally identifiable information such as your name, email address, phone number, and company name that you voluntarily provide when contacting us, requesting a quote, or subscribing to our communications.",
      },
      {
        key: "info-3",
        text: "Usage Data: Information your browser sends automatically when you visit our site — including your IP address, browser type and version, the pages you visit, the time and date of your visit, time spent on pages, and other diagnostic data.",
      },
      {
        key: "info-4",
        text: "Cookies and Tracking Data: We use cookies and similar tracking technologies to monitor activity on our site and to improve your experience. You can instruct your browser to refuse cookies, but some portions of our site may not function correctly as a result.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      {
        key: "use-1",
        text: "We use the information we collect for the following purposes:",
      },
      {
        key: "use-2",
        text: "• To provide, operate, and maintain our website and services.",
      },
      {
        key: "use-3",
        text: "• To respond to your inquiries, project requests, and customer service needs.",
      },
      {
        key: "use-4",
        text: "• To send you updates, newsletters, and marketing communications (where you have opted in).",
      },
      {
        key: "use-5",
        text: "• To analyze usage patterns and improve website performance and user experience.",
      },
      {
        key: "use-6",
        text: "• To comply with legal obligations and resolve disputes.",
      },
      {
        key: "use-7",
        text: "• To prevent fraudulent activity and ensure the security of our systems.",
      },
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      {
        key: "sec-1",
        text: "We implement commercially reasonable technical and organizational security measures to protect your personal information from unauthorized access, use, or disclosure. These include encryption in transit (TLS/HTTPS), access controls, and regular security audits.",
      },
      {
        key: "sec-2",
        text: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
      },
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies Policy",
    content: [
      {
        key: "cook-1",
        text: "Cookies are small text files placed on your device to help us understand how you interact with our website. We use the following types of cookies:",
      },
      {
        key: "cook-2",
        text: "Essential Cookies: Required for the website to function correctly. They enable core functionality such as security, network management, and accessibility.",
      },
      {
        key: "cook-3",
        text: "Analytics Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).",
      },
      {
        key: "cook-4",
        text: "Preference Cookies: Allow the website to remember choices you make (such as language or region) to provide a more personalized experience.",
      },
      {
        key: "cook-5",
        text: "You may disable cookies in your browser settings at any time. Note that disabling some cookies may affect the functionality of our website.",
      },
    ],
  },
  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: [
      {
        key: "third-1",
        text: "Our website may contain links to third-party websites and integrations with third-party services (such as analytics providers, payment processors, or communication platforms). We are not responsible for the privacy practices of these third parties and encourage you to review their respective privacy policies.",
      },
      {
        key: "third-2",
        text: "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or as necessary to provide our services (e.g., sharing your email with an email delivery service to send you a confirmation).",
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      {
        key: "rights-1",
        text: "Depending on your location, you may have the following rights with respect to your personal data:",
      },
      {
        key: "rights-2",
        text: "• Right to Access: Request a copy of the personal data we hold about you.",
      },
      {
        key: "rights-3",
        text: "• Right to Rectification: Request correction of inaccurate or incomplete data.",
      },
      {
        key: "rights-4",
        text: "• Right to Erasure: Request deletion of your personal data under certain conditions.",
      },
      {
        key: "rights-5",
        text: "• Right to Restrict Processing: Request that we limit how we use your data.",
      },
      {
        key: "rights-6",
        text: "• Right to Data Portability: Request a machine-readable copy of your data.",
      },
      {
        key: "rights-7",
        text: "• Right to Object: Object to our processing of your personal data for certain purposes.",
      },
      {
        key: "rights-8",
        text: "To exercise any of these rights, please contact us using the details in Section 8.",
      },
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: [
      {
        key: "contact-1",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      },
      { key: "contact-2", text: "Ishana TechLab (ITL)" },
      { key: "contact-3", text: "Email: privacy@ishanatechlab.io" },
      { key: "contact-4", text: "Phone: +1 (212) 555-1234" },
      {
        key: "contact-5",
        text: "Address: 350 Fifth Avenue, New York, NY 10118",
      },
      {
        key: "contact-6",
        text: "We will respond to your inquiry within 5 business days.",
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      {
        key: "change-1",
        text: 'We reserve the right to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page and, where appropriate, notify you by email or a prominent notice on our website.',
      },
      {
        key: "change-2",
        text: "Your continued use of our website after any changes to this policy constitutes your acknowledgment and acceptance of those changes.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
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
            <Shield className="w-10 h-10 text-cyan-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-cool-gray text-sm">
              Last Updated: March 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-10"
          >
            {sections.map((section, i) => (
              <div key={section.id} data-ocid="privacy.section">
                <h2 className="text-xl font-bold text-off-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para) => (
                    <p
                      key={para.key}
                      className="text-sm text-cool-gray leading-relaxed"
                    >
                      {para.text}
                    </p>
                  ))}
                </div>
                {i < sections.length - 1 && (
                  <Separator
                    className="mt-10"
                    style={{ backgroundColor: "oklch(0.28 0.012 222)" }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
