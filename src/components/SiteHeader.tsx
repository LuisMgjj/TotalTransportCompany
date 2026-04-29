import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menü"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-ttc py-4 flex flex-col gap-4">
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
                      "text-base font-medium",
                      isActive ? "text-primary" : "text-foreground",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            <Button asChild variant="eco">
              <Link to="/kontakt" onClick={closeMenu}>
                Jetzt buchen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
