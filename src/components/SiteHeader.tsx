import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoNew from "@/assets/logo-new.png";
import { navItems } from "@/data/site";

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="w-full flex h-[72px] md:h-20 items-center justify-between pl-[40px] pr-8 sm:pr-16 lg:pr-32 xl:pr-48">
        <Link
          to="/"
          className="site-logo-link flex items-center gap-3 text-[0] md:pl-0 pl-0 -ml-4"
          aria-label="Total Transport Company Startseite"
        >
          <img src={logoNew} alt="" className="h-16 w-auto md:h-24 mt-5 md:mt-3" />
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
          type="button"
          className="md:hidden p-2 touch-manipulation active:opacity-60 transition-opacity"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block transition-transform duration-300",
              menuOpen ? "rotate-180" : "rotate-0",
            )}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </div>

      {/* Mobile menu - animated dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t border-border",
          menuOpen
            ? "max-h-[80vh] opacity-100 border-transparent shadow-elegant"
            : "max-h-0 opacity-0 border-transparent",
        )}
      >
        <div className="glass bg-background/95 pt-3 pb-4 px-5">
          <nav className="flex flex-col gap-1">
            {navItems
              .filter((n) => n.to !== "/")
              .map((n, i) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300",
                      "hover:bg-secondary/60 active:bg-secondary",
                      isActive
                        ? "bg-eco-soft text-primary"
                        : "text-foreground",
                    )
                  }
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {n.label}
                </NavLink>
              ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-border/50">
            <Button asChild variant="eco" size="lg" className="w-full" onClick={closeMenu}>
              <Link to="/kontakt">
                Jetzt Fahrt buchen
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
