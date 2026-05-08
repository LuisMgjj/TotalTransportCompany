import { Link, useLocation } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const content: Record<
  string,
  { title: string; chip: string; intro: string; placeholder: string }
> = {
  "/impressum": {
    title: "Impressum",
    chip: "Rechtliches",
    intro: "Angaben gemäss Schweizer Recht.",
    placeholder:
      "Hier folgen die vollständigen Angaben zu Total Transport Company (Inhaber, Adresse, UID-Nummer, Aufsichtsbehörde, Kontaktangaben).",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung",
    chip: "Rechtliches",
    intro: "Informationen zur Bearbeitung Ihrer Personendaten gemäss revDSG.",
    placeholder:
      "Hier folgt die vollständige Datenschutzerklärung: erfasste Daten, Zweck, Empfänger, Speicherdauer, Ihre Rechte sowie Kontakt zur datenverantwortlichen Stelle.",
  },
  "/agb": {
    title: "Allgemeine Geschäftsbedingungen",
    chip: "Rechtliches",
    intro: "Geltungsbereich und Bedingungen unserer Dienstleistungen.",
    placeholder:
      "Hier folgen die vollständigen AGB: Vertragsabschluss, Buchung, Zahlung, Stornierung, Haftung, Gerichtsstand.",
  },
};

const Legal = () => {
  const { pathname } = useLocation();
  const data = content[pathname] ?? content["/impressum"];

  return (
    <section className="py-20 md:py-28">
      <div className="container-ttc max-w-3xl">
        <Reveal>
          <span className="eco-chip mb-4">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> {data.chip}
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
            {data.title}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-4 text-lg text-muted-foreground">{data.intro}</p>
        </Reveal>
        <Reveal delay={320}>
          <Card className="mt-10 p-7 border-border/60">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {data.placeholder}
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Diese Seite wird laufend ergänzt. Bei Fragen erreichen Sie uns
              direkt.
            </p>
            <Button asChild variant="eco" size="lg" className="mt-6">
              <Link to="/kontakt">
                Kontakt aufnehmen{" "}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default Legal;
