import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="py-24 md:py-36">
      <div className="container-ttc text-center">
        <span className="eco-chip mb-6">Fehler 404</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-deep">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block text-primary underline hover:text-primary/90"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
