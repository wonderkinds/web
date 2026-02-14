import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sun, Wind, CarFront, Wrench, Factory, Landmark
} from "lucide-react";

const industries = [
  {
    icon: Sun,
    title: "Solar EPC Companies",
    description: "Comprehensive cable and connector solutions for solar power plant installations. From DC cables to MC4 connectors, we support the entire solar project lifecycle with certified products that ensure 25+ years of reliable performance.",
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Wind,
    title: "Wind Power Projects",
    description: "Specialized cables engineered for wind turbine applications, designed to withstand constant torsion, extreme temperatures, and mechanical stress. Our products ensure reliable power transmission from nacelle to grid.",
    color: "text-sky-500 dark:text-sky-400",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: CarFront,
    title: "EV Manufacturers",
    description: "High-voltage cables, battery connection solutions, and charging infrastructure components for electric vehicle manufacturers. EMC-shielded, flame-retardant cables meeting automotive safety standards.",
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Wrench,
    title: "Electrical Contractors",
    description: "Reliable industrial cable supply and connectors for electrical installation projects. We provide technical support, competitive pricing, and fast delivery to keep your projects on schedule and within budget.",
    color: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing Units",
    description: "Complete industrial solutions including cables, connectors, safety equipment, and packaging support for manufacturing facilities. From production line cables to warehouse packaging manpower.",
    color: "text-indigo-500 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Landmark,
    title: "Government & Infrastructure Projects",
    description: "Certified products for government tenders and large-scale infrastructure developments. Full compliance documentation, competitive pricing, and capacity to handle large-volume orders for public projects.",
    color: "text-teal-500 dark:text-teal-400",
    bgColor: "bg-teal-500/10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Industries() {
  useSEO({
    title: "Industries We Serve",
    description: "Ventech Enterprises serves Solar EPC Companies, Wind Power Projects, EV Manufacturers, Electrical Contractors, Industrial Manufacturing, and Government Infrastructure Projects.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-industries-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">Our Reach</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-industries-heading">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              From solar farms to EV factories, we provide specialized industrial solutions
              tailored to the unique demands of each sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-industries-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="flex h-full flex-col p-6" data-testid={`card-industry-${i}`}>
                  <div className={`flex items-center justify-center self-start rounded-md ${industry.bgColor} p-3 mb-4`}>
                    <industry.icon className={`h-7 w-7 ${industry.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" data-testid={`text-industry-title-${i}`}>
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {industry.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
