import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoMM from "@/assets/logo-mm.png";
import { cn } from "@/lib/utils";
import { companyInfo } from "@/data/company";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Кейсы", href: "/kejsy" },
  { label: "Блог", href: "/blog" },
  { label: "О нас", href: "/o-kompanii" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
            <img src={logoMM} alt="Martin Media logo" className="h-7 md:h-8 w-auto" />
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-primary">
              MARTIN MEDIA
            </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname.startsWith(link.href)
                  ? "text-primary"
                  : isScrolled ? "text-muted-foreground" : "text-neutral-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className={cn("flex items-center gap-1.5 text-sm hover:text-primary transition-colors", isScrolled ? "text-muted-foreground" : "text-neutral-300")}>
            <Phone size={14} />
            {companyInfo.phoneFormatted}
          </a>
          <Button asChild variant="default" size="default">
            <Link to="/brief">Обсудить проект</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Меню"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-lg font-heading font-medium py-3 border-b border-border transition-colors",
                  location.pathname.startsWith(link.href)
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 mt-auto">
            <Button asChild variant="default" size="lg" className="w-full">
              <Link to="/brief">Обсудить проект</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;