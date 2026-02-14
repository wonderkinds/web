import { Link } from "wouter";
import { Zap, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-md bg-primary p-1.5">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight">VENTECH</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Enterprises</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Powering Green Energy. Connecting Industries. Delivering high-performance cables and industrial solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold" data-testid="text-footer-quicklinks">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/why-ventech", label: "Why Ventech" },
                { href: "/industries", label: "Industries" },
                { href: "/certifications", label: "Certifications" },
                { href: "/testimonials", label: "Testimonials" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm text-muted-foreground cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold" data-testid="text-footer-products">Products</h3>
            <div className="flex flex-col gap-2">
              {[
                "Solar DC Cables",
                "Wind Energy Cables",
                "EV & Automotive Cables",
                "Industrial Connectors",
                "Safety & PPE",
                "Packaging Support",
              ].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold" data-testid="text-footer-contact">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Contact Us</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">info@ventechenterprises.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Ventech Enterprises. All rights reserved. Powering Green Energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
