import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sun, Wind, Zap, Cable, Shield, Package,
  ArrowRight, Download, ChevronRight
} from "lucide-react";

const productHighlights = [
  { icon: Sun, title: "Solar DC Cables", desc: "EN 50618 / IEC 62930 Certified, UV Resistant, 25-Year Life", color: "text-amber-500 dark:text-amber-400" },
  { icon: Wind, title: "Wind Energy Cables", desc: "High Flexibility, Weather Resistant, Long-distance transmission", color: "text-sky-500 dark:text-sky-400" },
  { icon: Zap, title: "EV & Automotive Cables", desc: "High Voltage, Battery connection, Flame retardant", color: "text-green-500 dark:text-green-400" },
  { icon: Cable, title: "Industrial Connectors", desc: "Heavy-duty, Waterproof, Panel connectors", color: "text-indigo-500 dark:text-indigo-400" },
  { icon: Shield, title: "Safety & PPE", desc: "Industrial gloves, Protective equipment", color: "text-red-500 dark:text-red-400" },
  { icon: Package, title: "Packaging & Manpower", desc: "On-site packaging, Logistics, Custom solutions", color: "text-purple-500 dark:text-purple-400" },
];

const stats = [
  { value: "100+", label: "Products" },
  { value: "50+", label: "Clients Served" },
  { value: "6+", label: "Industries" },
  { value: "25yr", label: "Cable Lifespan" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  useSEO({
    title: "Specialized Cables & Industrial Solutions",
    description: "Ventech Enterprises delivers high-performance cables and industrial products for Solar, Wind, EV & Advanced Manufacturing. Pune-based industrial solutions.",
  });

  return (
    <div>
      <section className="relative min-h-[85vh] flex items-center overflow-visible" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Solar panels and wind turbines"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Powering Green Energy
            </Badge>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" data-testid="text-hero-headline">
              Specialized Cables &amp; Industrial Solutions for the Future of Energy
            </h1>

            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl" data-testid="text-hero-subheadline">
              Delivering high-performance cables and industrial products for Solar, Wind, EV &amp; Advanced Manufacturing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/quote">
                <Button size="lg" className="bg-primary border-primary-border text-primary-foreground" data-testid="button-hero-quote">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="/api/company-profile" download>
                <Button size="lg" variant="outline" className="border-white/30 text-white backdrop-blur-sm bg-white/10" data-testid="button-hero-download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Company Profile
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-card border-b" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary sm:text-3xl" data-testid={`text-stat-value-${i}`}>{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-stat-label-${i}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-products-overview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">Our Products</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-products-heading">
              Comprehensive Industrial Solutions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              From solar cables to industrial safety equipment, we provide everything your project needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productHighlights.map((product, i) => (
              <motion.div
                key={product.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-5 hover-elevate active-elevate-2 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 ${product.color}`}>
                      <product.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold" data-testid={`text-product-title-${i}`}>{product.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline" data-testid="button-view-all-products">
                View All Products
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16 sm:py-20" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-cta-heading">
              Ready to Power Your Next Project?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get in touch with our team for custom solutions, competitive pricing, and fast delivery across India.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/quote">
                <Button size="lg" data-testid="button-cta-quote">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" data-testid="button-cta-about">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
