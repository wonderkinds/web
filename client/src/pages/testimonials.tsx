import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building2, Star, Quote } from "lucide-react";

const clientLogos = [
  { name: "Tata Automotive", initials: "TA", sector: "Automotive" },
  { name: "Solar EPC Partners", initials: "SE", sector: "Solar Energy" },
  { name: "Industrial OEM Partners", initials: "IO", sector: "Manufacturing" },
  { name: "Wind Energy Corp", initials: "WE", sector: "Wind Power" },
  { name: "EV Solutions Ltd", initials: "EV", sector: "Electric Vehicles" },
  { name: "Infrastructure Projects", initials: "IP", sector: "Government" },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Project Manager",
    company: "Solar EPC Company",
    content: "Ventech has been our go-to supplier for solar DC cables. Their EN 50618 certified products consistently meet our quality requirements, and their delivery timelines are excellent. The technical support team is always available to help with specifications.",
    rating: 5,
  },
  {
    name: "Priya Kulkarni",
    role: "Procurement Head",
    company: "Automotive Manufacturer",
    content: "We've been working with Ventech for EV cable requirements. Their product quality is outstanding, and they understand the stringent requirements of automotive applications. Competitive pricing with no compromise on quality.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    role: "Operations Director",
    company: "Wind Energy Developer",
    content: "Reliable cable supply is critical for our wind farm projects. Ventech delivers consistently high-quality wind energy cables with proper certifications. Their custom packaging and logistics support saves us significant time on-site.",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    role: "Safety Manager",
    company: "Industrial Manufacturing",
    content: "The PPE and safety equipment from Ventech meets all our industrial safety requirements. Their on-site packaging team has been a great addition to our operations, providing skilled manpower exactly when we need it.",
    rating: 4,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  useSEO({
    title: "Testimonials - Trusted by Industry Leaders",
    description: "Hear from Solar EPC Companies, Automotive Manufacturers, Wind Energy Developers, and Industrial clients who trust Ventech Enterprises.",
  });

  return (
    <div>
      <section className="border-b bg-card py-16 sm:py-20" data-testid="section-testimonials-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-testimonials-heading">
              Trusted by Industry Leaders
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hear from the companies and professionals who trust Ventech Enterprises
              for their industrial cable and product needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-client-logos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-clients-heading">
              Our Clients
            </h2>
            <p className="mt-2 text-muted-foreground">
              Trusted partners across industries
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="flex flex-col items-center justify-center p-5 text-center" data-testid={`card-client-${i}`}>
                  <div className="flex items-center justify-center rounded-md bg-primary/10 p-3 mb-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold" data-testid={`text-client-name-${i}`}>{client.name}</span>
                  <span className="mt-0.5 text-xs text-muted-foreground">{client.sector}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16 sm:py-20" data-testid="section-reviews">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-reviews-heading">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-muted-foreground">
              Real feedback from our valued partners
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="flex h-full flex-col p-6" data-testid={`card-testimonial-${i}`}>
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`h-4 w-4 ${si < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>

                  <div className="mb-4 flex-1">
                    <Quote className="mb-2 h-5 w-5 text-primary/40" />
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-testimonial-content-${i}`}>
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t pt-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold" data-testid={`text-testimonial-name-${i}`}>{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
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
