import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Microscope, Truck, ShieldCheck, Wrench, BadgeDollarSign,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Industry-Focused Expertise",
    description: "Deep domain knowledge in renewable energy, EV, and industrial manufacturing sectors. Our team understands the unique technical requirements of each industry we serve, ensuring you get the right product every time.",
    highlights: ["Specialized solar & wind cable knowledge", "EV charging infrastructure expertise", "Manufacturing process understanding"],
  },
  {
    icon: Truck,
    title: "Fast Delivery & Technical Support",
    description: "Rapid turnaround times backed by comprehensive technical support. Our logistics network ensures timely delivery across India, with dedicated support teams available for installation guidance and troubleshooting.",
    highlights: ["Pan-India delivery network", "Dedicated technical support team", "Installation guidance available"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Based Supply",
    description: "Every product meets stringent international certifications and standards. We source only from manufacturers with verified EN, IEC, and ISO certifications, giving you confidence in quality and regulatory compliance.",
    highlights: ["EN 50618 & IEC 62930 certified products", "ISO compliant supply chain", "Regular quality audits"],
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored industrial solutions designed to meet your specific project requirements. From custom cable lengths and specifications to bespoke packaging and manpower arrangements, we adapt to your needs.",
    highlights: ["Custom cable configurations", "Project-specific packaging", "Flexible manpower deployment"],
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Best-in-class pricing without compromising on quality. Our strong relationships with manufacturers and efficient supply chain management allow us to offer competitive rates for all our products and services.",
    highlights: ["Volume-based pricing tiers", "Long-term partnership discounts", "Transparent pricing structure"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function WhyVentech() {
  useSEO({
    title: "Why Choose Ventech",
    description: "Industry-focused expertise, fast delivery, compliance-based supply, custom solutions, and competitive pricing. Discover why companies trust Ventech Enterprises.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-why-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-why-heading">
              Why Choose Ventech
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We combine deep industry expertise with reliable supply chain excellence to deliver
              products and services that power your success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-reasons">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 sm:p-8" data-testid={`card-reason-${i}`}>
                  <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                          <reason.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-xl font-bold" data-testid={`text-reason-title-${i}`}>{reason.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>

                    <div className="shrink-0 md:w-72">
                      <div className="space-y-2.5">
                        {reason.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
