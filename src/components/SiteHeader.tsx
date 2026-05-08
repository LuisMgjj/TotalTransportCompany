import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { navItems } from "@/data/site";

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="w-full flex h-[72px] md:h-20 items-center justify-between pl-[40px] pr-8 sm:pr-16 lg:pr-32 xl:pr-48">
        <Link
          to="/"
          className="site-logo-link flex items-center gap-3 text-[0]"
          aria-label="Total Transport Company Startseite"
          onClick={closeMenu}
        >
          <img src={logo} alt="" className="h-10 w-auto md:h-12" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navItems
            .filter((n) => n.to !== "/")
            .map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end
                className={({ isActive }) =>
                  cn(
                    "underline-grow text-base font-medium leading-6 transition-smooth",
                    isActive
                      ? "text-primary is-active"
                      : "text-foreground/75 hover:text-primary",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          <Button asChild variant="eco" className="h-10 text-base px-6">
            <Link to="/kontakt">Jetzt buchen</Link>
          </Button>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile slide-in overlay */}
      {menuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-[60] md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
            onClick={closeMenu}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl flex flex-col animate-slide-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
              <img src={logo} alt="" className="h-10 w-auto" />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
            {navItems
              .filter((n) => n.to !== "/")
              .map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-eco-soft text-primary"
                        : "text-foreground hover:bg-secondary/60",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild variant="eco" size="lg" className="w-full" onClick={closeMenu}>
                <Link to="/kontakt">
                  Jetzt Fahrt buchen
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
      )}
    </header>
  );
};

export default SiteHeader;
