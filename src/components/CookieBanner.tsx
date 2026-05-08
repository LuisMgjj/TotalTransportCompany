import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ttc-cookie-consent-v1";

type Consent = "accepted" | "rejected";

const readConsent = (): Consent | null => {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
};

const writeConsent = (value: Consent) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore quota / privacy mode */
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) {
      // Slight delay so the banner doesn't fight the hero animation on first paint.
      const timer = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleChoice = (value: Consent) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md z-50 rounded-2xl border border-border bg-card text-card-foreground shadow-elegant p-5 sm:p-6 animate-fade-up"
    >
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 h-10 w-10 rounded-xl bg-eco-soft flex items-center justify-center"
          style={{ color: "hsl(var(--eco))" }}
        >
          <Cookie className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h2
            id="cookie-banner-title"
            className="font-display font-bold text-primary-deep"
          >
            Wir respektieren Ihre Privatsphäre
          </h2>
          <p
            id="cookie-banner-desc"
            className="mt-1 text-sm text-muted-foreground leading-relaxed"
          >
            Wir verwenden essenzielle Cookies, damit die Website funktioniert.
            Mit Ihrer Zustimmung laden wir zusätzlich Schriftarten und
            Karten-Dienste. Mehr in unserer{" "}
            <Link to="/datenschutz" className="underline hover:text-primary">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <button
          onClick={() => handleChoice("rejected")}
          aria-label="Schliessen"
          className="shrink-0 -mt-1 -mr-1 p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-5 flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleChoice("rejected")}
        >
          Nur essenziell
        </Button>
        <Button
          variant="eco"
          size="sm"
          onClick={() => handleChoice("accepted")}
        >
          Alle akzeptieren
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
