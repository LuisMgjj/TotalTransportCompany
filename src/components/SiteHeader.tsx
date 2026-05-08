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
          type="button"
          className="md:hidden p-2 touch-manipulation active:opacity-60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="container-ttc py-4 flex flex-col gap-1">
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
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-eco-soft text-primary"
                        : "text-foreground hover:bg-secondary/60",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            <div className="mt-2 pt-3 border-t border-border">
              <Button asChild variant="eco" size="lg" className="w-full" onClick={closeMenu}>
                <Link to="/kontakt">
                  Jetzt Fahrt buchen
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
