import { Link, useLocation } from "react-router-dom";
import { ArrowRight, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const impressumContent = (
  <>
    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Inhaber</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Total Transport Company<br />
      Denis Gojak<br />
      Luzernerstrasse 133<br />
      6014 Luzern<br />
      Schweiz
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Kontakt</h2>
    <div className="space-y-2 mb-6">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <Phone className="h-4 w-4" /> Telefon: Auf Anfrage
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <Mail className="h-4 w-4" /> E-Mail: info@totaltransport.ch
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <MapPin className="h-4 w-4" /> Postadresse: Luzernerstrasse 133, 6014 Luzern
      </p>
    </div>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Rechtliche Angaben</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      Unternehmensform: Einzelunternehmen<br />
      Branchen: Personenbeförderung, Kurierdienst<br />
      Bewilligung: Gewerbebewilligung Stadt Luzern<br />
      MWST-Nummer: CHE-XXX.XXX.XXX MWST
    </p>
  </>
);

const datenschutzContent = (
  <>
    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Verantwortliche Stelle</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Total Transport Company<br />
      Denis Gojak<br />
      Luzernerstrasse 133<br />
      6014 Luzern<br />
      E-Mail: info@totaltransport.ch
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Erhobene Daten</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      Bei einer Buchung oder Kontaktaufnahme erheben wir folgende Daten:
    </p>
    <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed mb-6 space-y-1">
      <li>Name und Vorname</li>
      <li>Kontaktdaten (Telefonnummer, E-Mail-Adresse)</li>
      <li>Reisedaten (Abholort, Zielort, Datum, Uhrzeit)</li>
      <li>Zahlungsdaten (bei Rechnungsstellung)</li>
    </ul>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Zweck der Datenverarbeitung</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Ihre Daten werden ausschliesslich zur Abwicklung Ihrer Fahrtbuchung, zur Kommunikation 
      mit Ihnen sowie zur Rechnungsstellung verwendet. Eine Weitergabe an Dritte erfolgt nicht, 
      ausser an involvierte Dienstleister (z.B. Zahlungsabwicklung).
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Ihre Rechte</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      Gemäss Schweizer Datenschutzgesetz (revDSG) haben Sie das Recht auf:
    </p>
    <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed mb-6 space-y-1">
      <li>Auskunft über Ihre gespeicherten Daten</li>
      <li>Berichtigung unrichtiger Daten</li>
      <li>Löschung Ihrer Daten (sofern keine gesetzlichen Aufbewahrungspflichten bestehen)</li>
    </ul>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">Kontakt bei Datenschutzanliegen</h2>
    <p className="text-sm text-muted-foreground leading-relaxed">
      Bei Fragen zur Verarbeitung Ihrer Daten wenden Sie sich bitte an:<br />
      <strong>E-Mail:</strong> info@totaltransport.ch
    </p>
  </>
);

const agbContent = (
  <>
    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">1. Geltungsbereich</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Diese Allgemeinen Geschäftsbedingungen gelten für alle Buchungen und Dienstleistungen 
      der Total Transport Company (nachfolgend «Unternehmen»). Mit der Buchung akzeptiert 
      der Kunde diese AGB.
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">2. Buchung und Vertragsabschluss</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      Eine Buchung kommt durch die Bestätigung des Unternehmens zustande. Der Kunde erhält 
      eine Bestätigung per E-Mail oder SMS.
    </p>
    <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed mb-6 space-y-1">
      <li>Buchungen können telefonisch, per E-Mail oder über das Kontaktformular erfolgen</li>
      <li>Die Buchung ist erst nach Bestätigung durch das Unternehmen verbindlich</li>
      <li>Für Kurzfrist-Buchungen (unter 24 Stunden) behält sich das Unternehmen das Recht vor, 
        eine sofortige Bestätigung zu verlangen</li>
    </ul>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">3. Preise und Zahlung</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      Es gelten die bei der Buchung vereinbarten Preise:
    </p>
    <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed mb-4 space-y-1">
      <li>Flughafentransfers: Festpreis gemäss Offerte</li>
      <li>Stadt- und Individualfahrten: Preis gemäss Offerte</li>
      <li>Zahlung per TWINT, Kreditkarte, Rechnung oder bar in CHF/EUR</li>
    </ul>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Rechnungen sind innerhalb von 30 Tagen zu begleichen.
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">4. Stornierung</h2>
    <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed mb-6 space-y-1">
      <li>Kostenlose Stornierung bis 24 Stunden vor der Fahrt</li>
      <li>Bei Stornierung unter 24 Stunden: 50% des Fahrpreises</li>
      <li>Bei Nichterscheinen: 100% des Fahrpreises</li>
      <li>Flughafentransfers: Kostenlose Stornierung bis 48 Stunden vorher</li>
    </ul>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">5. Haftung</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Das Unternehmen haftet für Schäden, die durch grobfahrlässiges oder vorsätzliches 
      Verhalten verursacht werden. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen. 
      Das Unternehmen haftet nicht für Verspätungen, die durch höhere Gewalt, 
      Verkehrsbehinderungen oder Witterungseinflüsse entstehen.
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">6. Gerichtsstand</h2>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      Gerichtsstand ist Luzern, Schweiz. Es gilt Schweizer Recht.
    </p>

    <h2 className="font-display text-xl font-bold text-primary-deep mb-4">7. Unternehmen</h2>
    <p className="text-sm text-muted-foreground leading-relaxed">
      Total Transport Company<br />
      Denis Gojak<br />
      Luzernerstrasse 133<br />
      6014 Luzern<br />
      info@totaltransport.ch
    </p>
  </>
);

const content: Record<
  string,
  { title: string; chip: string; intro: string }
> = {
  "/impressum": {
    title: "Impressum",
    chip: "Rechtliches",
    intro: "Angaben gemäss Schweizer Recht.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung",
    chip: "Rechtliches",
    intro: "Informationen zur Bearbeitung Ihrer Personendaten gemäss revDSG.",
  },
  "/agb": {
    title: "Allgemeine Geschäftsbedingungen",
    chip: "Rechtliches",
    intro: "Geltungsbereich und Bedingungen unserer Dienstleistungen.",
  },
};

const Legal = () => {
  const { pathname } = useLocation();
  const data = content[pathname] ?? content["/impressum"];

  const renderContent = () => {
    switch (pathname) {
      case "/impressum":
        return impressumContent;
      case "/datenschutz":
        return datenschutzContent;
      case "/agb":
        return agbContent;
      default:
        return impressumContent;
    }
  };

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
          <div className="mt-10 space-y-8">
            {renderContent()}
            <div className="pt-6 border-t border-border/60">
              <p className="text-sm text-muted-foreground mb-4">
                Bei Fragen zu unseren rechtlichen Angaben erreichen Sie uns direkt.
              </p>
              <Button asChild variant="eco" size="lg">
                <Link to="/kontakt">
                  Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Legal;