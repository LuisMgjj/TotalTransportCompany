import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar, Car, Heart, Music2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

const useCases = [
  {
    icon: Briefcase,
    title: "Geschäftsfahrt",
    desc: "Pünktlich zum Meeting — diskreter Chauffeur, ruhige Umgebung, mobiles Büro auf Rädern.",
  },
  {
    icon: Plane,
    title: "Flughafen",
    desc: "Stressfrei nach Zürich, Basel oder Genf. Wir tracken Ihren Flug und sind stets vor Ort.",
  },
  {
    icon: Heart,
    title: "Hochzeit",
    desc: "Stilvoller Auftritt für den schönsten Tag. Premium-Limousinen, blumengeschmückt auf Wunsch.",
  },
  {
    icon: Music2,
    title: "Konzert & Event",
    desc: "Sicher hin, sicher zurück — auch nach Mitternacht. Ideal für Gruppen und VIPs.",
  },
];

const Services = () => {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eco-chip mb-4">
                <Car className="h-3.5 w-3.5" /> Unsere Dienstleistungen
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Ein Team. <span className="gradient-text">Jede Fahrt.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Vom spontanen Stadttaxi bis zum geplanten Event-Shuttle — alles aus einer Hand, alles elektrisch.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 110} variant="up">
                <Card className="group relative p-7 bg-card shadow-card-soft hover-lift hover:shadow-elegant border-border/60 h-full">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-primary-deep">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eco-chip mb-4">
                <Calendar className="h-3.5 w-3.5" /> Anwendungsfälle
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Für jeden Anlass das <span className="gradient-text">passende Fahrzeug.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Egal ob geschäftlich, privat oder festlich — wir haben das richtige Set-up.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 100} variant="up">
                <Card className="group p-7 h-full hover-lift hover:shadow-elegant border-border/60">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-eco-soft transition-transform duration-500 group-hover:scale-110">
                    <u.icon className="h-6 w-6" style={{ color: "hsl(var(--eco))" }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-deep">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="container-ttc">
          <Reveal>
            <Card className="relative overflow-hidden p-10 md:p-14 bg-gradient-eco text-white shadow-elegant border-0">
              <div className="absolute inset-0 opacity-30 animate-gradient-shift bg-gradient-eco" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Bereit für Ihre nächste Fahrt?
                  </h2>
                  <p className="mt-3 text-white/90 text-lg">
                    Senden Sie eine unverbindliche Anfrage — innerhalb von 24 Stunden erhalten Sie ein massgeschneidertes Angebot.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/kontakt">
                      Offerte anfragen <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Services;
