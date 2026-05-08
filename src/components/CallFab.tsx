import { Phone } from "lucide-react";

/**
 * Sticky floating action button for instant tap-to-call on mobile.
 * Hidden on md+ where the header CTA is reachable without scrolling.
 *
 * TODO: Platzhalter-Nummer durch echte TTC-Telefonnummer ersetzen.
 */
const CallFab = () => {
  return (
    <a
      href="tel:+41000000000"
      aria-label="Jetzt anrufen"
      className="md:hidden fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-eco text-white shadow-elegant hover:shadow-glow transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Jetzt anrufen</span>
    </a>
  );
};

export default CallFab;
