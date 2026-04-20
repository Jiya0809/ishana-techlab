import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section
        className="py-20 border-b border-gray-border"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.11 0.01 222), oklch(0.155 0.012 222))",
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-5">
              Contact Us
            </h1>
            <p className="text-cool-gray max-w-xl leading-relaxed">
              Whether you need a technology audit, a custom solution, or just
              want to explore how we can help — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.155 0.012 222)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="border-gray-border"
                style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
                data-ocid="contact.card"
              >
                <CardContent className="p-8">
                  {submitted ? (
                    <div
                      className="flex flex-col items-center justify-center py-12 text-center"
                      data-ocid="contact.success_state"
                    >
                      <CheckCircle2 className="w-14 h-14 text-cyan-accent mb-5" />
                      <h3 className="text-xl font-bold text-off-white mb-3">
                        Message Received!
                      </h3>
                      <p className="text-cool-gray max-w-sm">
                        Thank you for reaching out. One of our specialists will
                        contact you within 24 business hours.
                      </p>
                      <Button
                        className="mt-6"
                        style={{ backgroundColor: "oklch(0.565 0.13 228)" }}
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        data-ocid="contact.secondary_button"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="name"
                            className="text-sm text-cool-gray"
                          >
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={form.name}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, name: e.target.value }))
                            }
                            required
                            placeholder="Alexandra Chen"
                            className="border-gray-border text-off-white placeholder:text-cool-gray/40 focus:border-cyan-accent"
                            style={{
                              backgroundColor: "oklch(0.26 0.02 222 / 0.5)",
                            }}
                            data-ocid="contact.input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="text-sm text-cool-gray"
                          >
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, email: e.target.value }))
                            }
                            required
                            placeholder="alex@company.com"
                            className="border-gray-border text-off-white placeholder:text-cool-gray/40 focus:border-cyan-accent"
                            style={{
                              backgroundColor: "oklch(0.26 0.02 222 / 0.5)",
                            }}
                            data-ocid="contact.input"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="subject"
                          className="text-sm text-cool-gray"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          value={form.subject}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, subject: e.target.value }))
                          }
                          required
                          placeholder="Cloud migration project inquiry"
                          className="border-gray-border text-off-white placeholder:text-cool-gray/40 focus:border-cyan-accent"
                          style={{
                            backgroundColor: "oklch(0.26 0.02 222 / 0.5)",
                          }}
                          data-ocid="contact.input"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="text-sm text-cool-gray"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={form.message}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, message: e.target.value }))
                          }
                          required
                          rows={6}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          className="border-gray-border text-off-white placeholder:text-cool-gray/40 focus:border-cyan-accent resize-none"
                          style={{
                            backgroundColor: "oklch(0.26 0.02 222 / 0.5)",
                          }}
                          data-ocid="contact.textarea"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full text-white font-semibold py-5"
                        style={{ backgroundColor: "oklch(0.565 0.13 228)" }}
                        data-ocid="contact.submit_button"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                className="border-gray-border"
                style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-off-white mb-5">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                        }}
                      >
                        <MapPin className="w-4 h-4 text-cyan-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-off-white mb-0.5">
                          Address
                        </p>
                        <p className="text-sm text-cool-gray">
                          350 Fifth Avenue, Suite 2100
                          <br />
                          New York, NY 10118
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                        }}
                      >
                        <Phone className="w-4 h-4 text-cyan-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-off-white mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+12125551234"
                          className="text-sm text-cool-gray hover:text-cyan-accent transition-colors"
                        >
                          +1 (212) 555-1234
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                        }}
                      >
                        <Mail className="w-4 h-4 text-cyan-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-off-white mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:hello@synapsedynamics.io"
                          className="text-sm text-cool-gray hover:text-cyan-accent transition-colors"
                        >
                          hello@synapsedynamics.io
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "oklch(0.77 0.12 196 / 0.12)",
                        }}
                      >
                        <Clock className="w-4 h-4 text-cyan-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-off-white mb-0.5">
                          Business Hours
                        </p>
                        <p className="text-sm text-cool-gray">
                          Mon – Fri: 9:00 AM – 6:00 PM EST
                        </p>
                        <p className="text-sm text-cool-gray">
                          24/7 for managed clients
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="border-gray-border"
                style={{ backgroundColor: "oklch(0.21 0.015 222)" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-off-white mb-3">
                    Emergency Support
                  </h3>
                  <p className="text-sm text-cool-gray mb-4">
                    Existing managed services clients have access to our 24/7
                    emergency response line.
                  </p>
                  <a href="tel:+12125559911">
                    <Button
                      variant="outline"
                      className="w-full border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent/10"
                      style={{ backgroundColor: "transparent" }}
                      data-ocid="contact.secondary_button"
                    >
                      +1 (212) 555-9911
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
