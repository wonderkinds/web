import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sun, Wind, Zap, Cable, Shield, Package,
  Target, Eye, Building2, Globe
} from "lucide-react";

const specializations = [
  { icon: Sun, label: "Solar Cables (EN 50618 / IEC 62930)" },
  { icon: Wind, label: "Wind Energy Cables" },
  { icon: Zap, label: "EV Charging & Automotive Cables" },
  { icon: Cable, label: "Industrial Connectors" },
  { icon: Shield, label: "PPE & Industrial Safety Products" },
  { icon: Package, label: "Industrial Packaging & Logistics Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  useSEO({
    title: "About Us",
    description: "Ventech Enterprises is a Pune-based industrial solutions company specializing in Solar Cables, Wind Energy Cables, EV Charging Cables, Industrial Connectors, PPE & Safety Products.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-about-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-about-heading">
              Who We Are
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              Ventech Enterprises is a Pune-based industrial solutions company delivering globally compliant cables
              and industrial products to power the future of green energy and advanced manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-specializations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-specializations-heading">
              What We Specialize In
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our comprehensive range of industrial solutions
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="flex items-center gap-4 p-5">
                  <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium" data-testid={`text-spec-${i}`}>{item.label}</span>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold" data-testid="text-clients-served">Our Clients</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    We serve OEMs, EPC contractors, and manufacturing industries across India, providing reliable
                    industrial products with unmatched service quality and technical support.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="border-t bg-card py-16 sm:py-20" data-testid="section-mission-vision">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold" data-testid="text-mission-heading">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-content">
                  To deliver globally compliant industrial products with unmatched reliability and service excellence.
                  We are committed to powering the green energy revolution with products that meet the highest
                  international standards while maintaining competitive pricing and fast delivery.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center rounded-md bg-primary/10 p-2.5">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold" data-testid="text-vision-heading">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-vision-content">
                  To become a <span className="font-semibold text-foreground">&#x20B9;100 Crore</span> green energy
                  industrial solutions company by <span className="font-semibold text-foreground">2030</span>.
                  We envision Ventech Enterprises as a leading force in the renewable energy supply chain,
                  driving India's transition to sustainable power generation.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Aligned with India's Green Energy Goals</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
