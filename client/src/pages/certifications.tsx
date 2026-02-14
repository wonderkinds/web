import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Globe } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    code: "EN 50618",
    title: "European Standard for Solar Cables",
    description: "EN 50618 is the harmonized European standard for cables used in photovoltaic systems. It specifies requirements for single-core, cross-linked, halogen-free cables with rated voltages up to 1.5 kV DC. Our solar cables fully comply with this standard, ensuring safety and performance in solar installations across Europe and internationally.",
    features: [
      "Rated voltage up to 1.5 kV DC",
      "Cross-linked insulation",
      "Halogen-free construction",
      "Temperature range: -40\u00B0C to +90\u00B0C",
    ],
  },
  {
    icon: Award,
    code: "IEC 62930",
    title: "International Standard for PV Cables",
    description: "IEC 62930 defines requirements for electric cables for photovoltaic systems with a rated voltage of 1.5 kV DC. This international standard ensures our cables meet global benchmarks for electrical performance, mechanical durability, and environmental resistance in solar power applications.",
    features: [
      "International compliance",
      "UV resistance tested",
      "Ozone resistance verified",
      "25-year service life rating",
    ],
  },
  {
    icon: FileCheck,
    code: "ISO",
    title: "ISO Quality Management Compliance",
    description: "Our supply chain and product quality management processes are aligned with ISO standards. This ensures consistent product quality, traceability, and continuous improvement across all our product lines from solar cables to industrial safety equipment.",
    features: [
      "Quality management systems",
      "Supply chain traceability",
      "Continuous improvement",
      "Document control processes",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Certifications() {
  useSEO({
    title: "Certifications & Standards",
    description: "EN 50618, IEC 62930, and ISO compliance. Ventech Enterprises products meet the highest international certifications and quality standards.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-cert-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">Quality Assurance</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-cert-heading">
              Certifications &amp; Standards
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our products meet the highest international certifications and quality standards,
              ensuring reliability, safety, and compliance for every project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-cert-list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.code}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 sm:p-8" data-testid={`card-cert-${i}`}>
                  <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center rounded-md bg-primary/10 p-3">
                          <cert.icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-1">{cert.code}</Badge>
                          <h2 className="text-lg font-bold" data-testid={`text-cert-title-${i}`}>{cert.title}</h2>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                    </div>

                    <div className="shrink-0 md:w-64">
                      <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Key Aspects</h3>
                      <div className="space-y-2.5">
                        {cert.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <Globe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="text-sm">{f}</span>
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

      <section className="border-t bg-card py-12" data-testid="section-compliance-note">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Card className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold" data-testid="text-compliance-commitment">Our Compliance Commitment</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  At Ventech Enterprises, compliance is not just a checkbox \u2014 it's a core business principle.
                  We continuously verify our supply chain, conduct regular quality audits, and maintain
                  comprehensive documentation for every product we deliver. Our customers can request
                  certification documentation and test reports for any product in our catalog.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
