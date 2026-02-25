import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { 
      label: "Serviços",
      submenu: [
        { href: "/services/corporate", label: "Consultoria para Empresas" },
        { href: "/services/mentoring", label: "Mentoria de Carreira" },
        { href: "/services/training", label: "Cursos & Treinamentos" },
        { href: "/services", label: "Todos os Serviços", separator: true },
      ]
    },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-2xl font-bold text-transparent font-heading">
            Bitt’n’Data
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            link.submenu ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none",
                  location.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                )}>
                  {link.label} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-white/10 bg-background/95 backdrop-blur-md">
                  {link.submenu.map((sub) => (
                    <DropdownMenuItem key={sub.href} asChild>
                      <Link 
                        href={sub.href}
                        className={cn(
                          "cursor-pointer w-full px-4 py-2 text-sm",
                          location === sub.href ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            <Link href="/contact">Começar Agora</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b border-white/10 bg-background md:hidden">
          <div className="container flex flex-col space-y-4 py-4 px-4">
            {links.map((link) => (
              link.submenu ? (
                <div key={link.label} className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-muted-foreground px-2">
                    {link.label}
                  </span>
                  {link.submenu.map((sub) => (
                    <Link 
                      key={sub.href} 
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary pl-4",
                        location === sub.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Começar Agora</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
