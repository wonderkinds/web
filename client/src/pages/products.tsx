import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sun, Wind, Zap, Cable, Shield, Package,
  Check
} from "lucide-react";

const products = [
  {
    icon: Sun,
    title: "Solar DC Cables",
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
    features: [
      "EN 50618 Certified",
      "IEC 62930 Compliant",
      "UV Resistant",
      "25 Years Life",
      "Tinned copper conductor",
      "XLPO insulation",
    ],
    description: "Premium quality solar cables designed for photovoltaic installations, meeting international standards for safety and durability in extreme weather conditions.",
  },
  {
    icon: Wind,
    title: "Wind Energy Cables",
    color: "text-sky-500 dark:text-sky-400",
    bgColor: "bg-sky-500/10",
    features: [
      "High Flexibility",
      "Weather Resistant",
      "Long-distance transmission",
      "Torsion resistant",
      "Low smoke zero halogen",
      "Cold bend rated",
    ],
    description: "Engineered for wind turbine applications, our cables withstand constant mechanical stress, extreme temperatures, and harsh environmental conditions.",
  },
  {
    icon: Zap,
    title: "EV & Automotive Cables",
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-500/10",
    features: [
      "High Voltage EV cables",
      "Battery connection cables",
      "Flame retardant",
      "EMC shielded",
      "Temperature resistant",
      "Abrasion proof",
    ],
    description: "Cutting-edge cables for electric vehicles, charging stations, and automotive applications with superior electrical performance and safety ratings.",
  },
  {
    icon: Cable,
    title: "Industrial Connectors",
    color: "text-indigo-500 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10",
    features: [
      "Heavy-duty connectors",
      "Waterproof connectors",
      "Panel connectors",
      "MC4 solar connectors",
      "Quick-lock systems",
      "IP68 rated options",
    ],
    description: "Robust industrial connectors for demanding applications, ensuring reliable electrical connections in solar, wind, EV, and manufacturing environments.",
  },
  {
    icon: Shield,
    title: "Industrial Safety & PPE",
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-500/10",
    features: [
      "Industrial gloves",
      "Protective equipment",
      "Safety helmets",
      "High-visibility gear",
      "Electrical safety tools",
      "Arc flash protection",
    ],
    description: "Comprehensive personal protective equipment and safety gear meeting industrial safety standards for hazardous work environments.",
  },
  {
    icon: Package,
    title: "Industrial Packaging & Manpower Support",
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    features: [
      "On-site packaging team",
      "Logistics manpower",
      "Custom industrial packaging",
      "Material handling",
      "Warehouse support",
      "Supply chain solutions",
    ],
    description: "End-to-end packaging and manpower solutions for industrial operations, providing skilled workforce and custom packaging to streamline your operations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Products() {
  useSEO({
    title: "Products - Industrial Solutions Catalog",
    description: "Explore Solar DC Cables, Wind Energy Cables, EV & Automotive Cables, Industrial Connectors, Safety & PPE, and Industrial Packaging solutions from Ventech Enterprises.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-products-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">Our Products</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-products-heading">
              Industrial Solutions Catalog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Explore our comprehensive range of cables, connectors, safety equipment, and industrial support
              services designed for the renewable energy and manufacturing sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-products-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 sm:p-8" data-testid={`card-product-${i}`}>
                  <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`flex items-center justify-center rounded-md ${product.bgColor} p-2.5`}>
                          <product.icon className={`h-6 w-6 ${product.color}`} />
                        </div>
                        <h2 className="text-xl font-bold" data-testid={`text-product-name-${i}`}>
                          {product.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-product-desc-${i}`}>
                        {product.description}
                      </p>
                    </div>

                    <div className="shrink-0 md:w-72">
                      <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Key Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="text-sm">{feature}</span>
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
