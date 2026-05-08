import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Fuel,
  Gauge,
  Leaf,
  Volume2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import leafPlug from "@/assets/electric-van.jpg";
import { ecoFeatures } from "@/data/site";

const stats = [
  { end: 0, prefix: "", suffix: " g", label: "CO₂ pro Kilometer", icon: Leaf, animate: false },
  { end: 100, prefix: "", suffix: " %", label: "Schweizer Ökostrom", icon: Zap, animate: true },
  { end: 65, prefix: "−", suffix: " %", label: "Weniger Lärmemission", icon: Volume2, animate: true },
  { end: 40, prefix: "+", suffix: " %", label: "Effizienter als Diesel", icon: Gauge, animate: true },
];

const comparison = [
  {
    label: "CO₂-Emissionen pro km",
    diesel: "≈ 165 g",
    electric: "0 g",
  },
  {
    label: "Lärm bei 50 km/h",
    diesel: "ca. 70 dB",
    electric: "ca. 55 dB",
  },
  {
    label: "Energieeffizienz",
    diesel: "≈ 30 %",
    electric: "≈ 90 %",
  },
  {
    label: "Wartungskosten",
    diesel: "Hoch",
    electric: "Tief",
  },
];

const Sustainability = () => {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-ttc grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal variant="left">
            <div className="relative">
              <img
                src={leafPlug}
                alt="Elektroauto wird aufgeladen mit grünem Blatt"
                loading="lazy"
                width={1280}
                height={960}
                className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-card rounded-2xl shadow-elegant p-5 gap-4 items-center border border-border/80">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                  <div className="relative h-12 w-12 rounded-full bg-eco flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-eco-foreground" />
                  </div>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-primary-deep tabular-nums">
                    0 g
                  </div>
                  <div className="text-xs text-muted-foreground">CO₂ pro Kilometer</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eco-chip mb-4">
                <Leaf className="h-3.5 w-3.5" /> Warum TTC?
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Leiser. Sauberer. <span className="gradient-text">Besser für die Umwelt.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Unsere reine Elektroflotte reduziert Lärm und Abgase auf jeder Strecke — ohne dass Sie auf Premium-Komfort verzichten müssen.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {ecoFeatures.map((f, i) => (
                <Reveal key={f.title} delay={300 + i * 80} variant="up">
                  <Card className="group p-5 border-border/60 shadow-card-soft hover-lift hover:shadow-elegant bg-card/80">
                    <div className="flex gap-4 items-start">
                      <div
                        className="shrink-0 h-11 w-11 rounded-xl bg-eco-soft flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ color: "hsl(var(--eco))" }}
                      >
                        <f.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-deep">{f.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="container-ttc">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Zahlen, die <span className="gradient-text">wirken.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} variant="up">
                <Card className="group p-7 text-center hover-lift hover:shadow-elegant border border-border/80 h-full bg-white shadow-card-soft relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-eco" />
                  <div
                    className="mx-auto mb-4 h-12 w-12 rounded-xl bg-eco-soft flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{ color: "hsl(var(--eco))" }}
                  >
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary-deep tabular-nums">
                    {s.animate ? (
                      <CountUp
                        end={s.end}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        duration={1800}
                      />
                    ) : (
                      <span>
                        {s.prefix}
                        {s.end}
                        {s.suffix}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="container-ttc grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <span className="eco-chip mb-4">
                <Fuel className="h-3.5 w-3.5" /> Diesel vs. Elektro
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Der direkte <span className="gradient-text">Vergleich.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Warum wir konsequent auf Elektro setzen — auf einen Blick.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right" delay={120}>
            <Card className="overflow-hidden border border-border/80 shadow-card-soft bg-white">
              <div className="grid grid-cols-3 bg-gradient-eco px-6 py-4 text-sm font-semibold text-white">
                <div>Kriterium</div>
                <div className="text-center">Diesel</div>
                <div className="text-center">TTC Elektro</div>
              </div>
              {comparison.map((row, idx) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 px-6 py-4 border-t border-border/60 text-sm ${idx % 2 === 1 ? "bg-secondary/30" : ""}`}
                >
                  <div className="text-muted-foreground">{row.label}</div>
                  <div className="text-center text-foreground">{row.diesel}</div>
                  <div className="text-center font-semibold text-eco">
                    {row.electric}
                  </div>
                </div>
              ))}
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
