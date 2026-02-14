import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/why-ventech", label: "Why Ventech" },
  { href: "/industries", label: "Industries" },
  { href: "/certifications", label: "Certifications" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" data-testid="link-home-logo">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-md bg-primary p-1.5">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight" data-testid="text-brand-name">VENTECH</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Enterprises</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={`text-sm font-medium ${location === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/quote">
            <Button size="sm" data-testid="button-get-quote-nav">
              Get a Quote
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col gap-1 p-6 pt-12">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-sm font-medium ${location === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <Link href="/quote" onClick={() => setOpen(false)}>
                  <Button className="mt-4 w-full" data-testid="button-mobile-quote">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
