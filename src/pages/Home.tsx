import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Clock,
  Globe2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/eco-charging.jpg";
import vanImg from "@/assets/airport.jpg";
import fleetImg from "@/assets/electric-van.jpg";

const serviceAreas = [
  { region: "Zentralschweiz", places: "Luzern, Zug, Schwyz, Stans, Sarnen" },
  { region: "Grossraum Zürich", places: "Stadt Zürich, Flughafen ZRH, Zugersee, Limmattal" },
  { region: "Flughafentransfer", places: "Zürich · Basel · Genf · Bern" },
  { region: "Schweizweit", places: "Auf Anfrage in die ganze Schweiz und ins angrenzende Ausland" },
];

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elektrofahrzeug bei Sonnenuntergang"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <div className="relative container-ttc py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <Reveal variant="fade" duration={700}>
              <span className="eco-chip mb-6 bg-white/90">
                <Leaf className="h-3.5 w-3.5" aria-hidden="true" /> 100% Elektro — 100% Öko unterwegs
              </span>
            </Reveal>
            <Reveal delay={100} duration={800}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                Premium-Mobilität.{" "}
                <span className="text-eco-soft">Klimaneutral.</span>
              </h1>
            </Reveal>
            <Reveal delay={200} duration={700}>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
                100% Elektrisch. 100% Zuverlässig. Ihre grüne Wahl für Taxi, Flughafentransfer und Kurierdienst in der Zentralschweiz.
              </p>
            </Reveal>
            <Reveal delay={300} duration={700}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/kontakt">
                    Jetzt Fahrt buchen <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/dienstleistungen">Dienstleistungen ansehen</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={420} duration={700}>
              <div className="mt-12 flex flex-wrap gap-6 text-white/85 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-eco-soft" aria-hidden="true" /> 0 g CO₂ pro km
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-eco-soft" aria-hidden="true" /> 24/7 Service
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-eco-soft" aria-hidden="true" /> Lizenziert in LU
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-secondary/40 via-secondary/15 to-background text-foreground relative overflow-hidden">
      <section className="py-20 md:py-28 relative">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-eco/10 blur-3xl pointer-events-none" />
        <div className="container-ttc relative">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="eco-chip">
                <BatteryCharging className="h-3.5 w-3.5" /> Unsere Flotte
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Premium Elektrofahrzeuge für jeden Anlass.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={120} variant="up">
              <div className="rounded-3xl overflow-hidden relative group hover-lift shadow-elegant">
                <img
                  src={fleetImg}
                  alt="Premium Elektro-Limousine an Ladestation"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-sm text-eco-soft font-semibold">Limousine</div>
                  <div className="font-display text-2xl font-bold text-white">Mercedes EQV</div>
                  <div className="text-sm text-white/75 mt-1">Bis 4 Passagiere · Premium-Komfort</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240} variant="up">
              <div className="rounded-3xl overflow-hidden relative group hover-lift shadow-elegant">
                <img
                  src={vanImg}
                  alt="Mercedes EQV Elektro-Van"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-sm text-eco-soft font-semibold">Van & Shuttle</div>
                  <div className="font-display text-2xl font-bold text-white">Mercedes Van</div>
                  <div className="text-sm text-white/75 mt-1">Bis 7 Passagiere · Events & Gruppen</div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/dienstleistungen">
                  Dienstleistungen entdecken <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/nachhaltigkeit">Warum elektrisch?</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 relative">
        <div className="container-ttc relative">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="eco-chip mb-4">
                <Globe2 className="h-3.5 w-3.5" /> Servicegebiet
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Wir fahren Sie <span className="gradient-text">überall hin.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Hauptsächlich Zentralschweiz und Grossraum Zürich — auf Wunsch in die ganze Schweiz und darüber hinaus.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((a, i) => (
              <Reveal key={a.region} delay={i * 110} variant="up">
                <Card className="p-7 h-full hover-lift hover:shadow-elegant border-border/60 bg-card/80 backdrop-blur-sm">
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-eco-soft"
                    style={{ color: "hsl(var(--eco))" }}
                  >
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-deep">{a.region}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.places}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
