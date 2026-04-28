import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Zap, Leaf, BatteryCharging, Car, Plane, Package, Users,
  MapPin, Phone, Mail, Clock, ShieldCheck, Volume2, Sparkles, ArrowRight, Menu, X
} from "lucide-react";
import { useState, type FormEvent } from "react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/eco-charging.jpg"; // Tesla in Lucerne
import vanImg from "@/assets/airport.jpg";       // Electric van by the lake
import chargingImg from "@/assets/hero-lucerne.jpg"; // Airport scene — used for service card
import leafPlug from "@/assets/electric-van.jpg"; // EV + leaf eco visual

const services = [
  {
    icon: Car,
    title: "Personenbeförderung",
    desc: "Taxi- und Uber/Bolt-Stil-Fahrten in und um Luzern. Premium-Elektrofahrzeuge, diskrete Profifahrer.",
  },
  {
    icon: Plane,
    title: "Flughafentransfer",
    desc: "Zuverlässige Transfers nach Zürich, Basel und Genf. Flug-Tracking inklusive, immer pünktlich.",
  },
  {
    icon: Package,
    title: "Kurier & Express",
    desc: "CO₂-neutraler Paket- und Dokumentenversand. Schnell, sicher, nachhaltig – für Privat und Business.",
  },
  {
    icon: Users,
    title: "Business & Event-Shuttle",
    desc: "Shuttle-Services für Firmen, Hochzeiten und Events. Mehrere E-Vans, flexibel skalierbar.",
  },
];

const ecoFeatures = [
  { icon: Zap, title: "100% Elektroflotte", desc: "Null Emissionen. Null Kompromisse." },
  { icon: Volume2, title: "Flüsterleise Fahrten", desc: "Ruhiger für Sie, leiser für Luzern." },
  { icon: Leaf, title: "Klimaneutral", desc: "Geladen mit Schweizer Ökostrom." },
  { icon: BatteryCharging, title: "Moderne Flotte", desc: "Tesla Model Y, Mercedes EQV & mehr." },
  { icon: ShieldCheck, title: "Schweizer Qualität", desc: "Pünktlich, diskret, lizenziert." },
  { icon: Clock, title: "24/7 Verfügbar", desc: "Rund um die Uhr für Sie bereit." },
];

const team = [
  { name: "Denis Gojak", role: "Inhaber & Gründer", desc: "Visionär hinter der grünsten Flotte Luzerns." },
  { name: "Janos Zöldi", role: "Hauptfahrer", desc: "Erfahrener Chauffeur mit Auge fürs Detail." },
  { name: "Gustavo Schoedl", role: "Hauptfahrer", desc: "Ortskundig, diskret, zuverlässig." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Anfrage gesendet", description: "Wir melden uns innerhalb von 2 Stunden bei Ihnen." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const nav = [
    { href: "#services", label: "Dienstleistungen" },
    { href: "#eco", label: "Nachhaltigkeit" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 glass">
        <div className="container-ttc flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Total Transport Company Logo" className="h-9 w-auto" />
            <span className="hidden sm:block font-display font-bold text-primary-deep">Total Transport Company</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/75 hover:text-primary transition-smooth">
                {n.label}
              </a>
            ))}
            <Button asChild variant="eco" size="sm">
              <a href="#contact">Jetzt buchen</a>
            </Button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container-ttc py-4 flex flex-col gap-4">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-base font-medium">
                  {n.label}
                </a>
              ))}
              <Button asChild variant="eco">
                <a href="#contact" onClick={() => setMenuOpen(false)}>Jetzt buchen</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Elektrofahrzeug in Luzern bei Sonnenuntergang" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative container-ttc py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-up">
            <span className="eco-chip mb-6 bg-white/90">
              <Leaf className="h-3.5 w-3.5" /> 100% Elektro — 100% Öko für Luzern
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              Total Transport Company — <span className="text-eco-soft">Ihre grüne Wahl</span> in Luzern.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              100% Elektrisch. 100% Zuverlässig. Transport aller Art durch Denis Gojak & sein Profi-Team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="#contact">Jetzt Fahrt buchen <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#contact">Offerte anfragen</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-white/85 text-sm">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-eco-soft" /> 0 g CO₂ pro km</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-eco-soft" /> 24/7 Service</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-eco-soft" /> Lizenziert in LU</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <span className="eco-chip mb-4"><Car className="h-3.5 w-3.5" /> Unsere Dienstleistungen</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Ein Team. <span className="gradient-text">Jede Fahrt.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vom spontanen Stadttaxi bis zum geplanten Event-Shuttle — alles aus einer Hand, alles elektrisch.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="group relative p-7 bg-card shadow-card-soft hover:shadow-elegant transition-smooth hover:-translate-y-1 border-border/60">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ECO / WHY */}
      <section id="eco" className="py-20 md:py-28">
        <div className="container-ttc grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={leafPlug}
              alt="Elektroauto wird aufgeladen mit grünem Blatt"
              loading="lazy"
              width={1280} height={960}
              className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-card rounded-2xl shadow-elegant p-5 gap-4 items-center border border-border">
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                <div className="relative h-12 w-12 rounded-full bg-eco flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-eco-foreground" />
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-primary-deep">0 g</div>
                <div className="text-xs text-muted-foreground">CO₂ pro Kilometer</div>
              </div>
            </div>
          </div>
          <div>
            <span className="eco-chip mb-4"><Leaf className="h-3.5 w-3.5" /> Warum TTC?</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Leiser. Sauberer. <span className="gradient-text">Besser für Luzern.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Unsere reine Elektroflotte reduziert Lärm und Abgase in der Altstadt und am Vierwaldstättersee — ohne dass Sie auf Premium-Komfort verzichten müssen.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {ecoFeatures.map(f => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-eco-soft flex items-center justify-center" style={{ color: 'hsl(var(--eco))' }}>
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-deep">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <section className="py-20 md:py-28 bg-primary-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-eco" />
        <div className="container-ttc relative">
          <div className="max-w-2xl mb-12">
            <span className="eco-chip bg-white/10 border-white/20" style={{ color: 'hsl(var(--eco-soft))' }}>
              <BatteryCharging className="h-3.5 w-3.5" /> Unsere Flotte
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">
              Premium Elektrofahrzeuge für jeden Anlass.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={heroImg} alt="Tesla Model Y Limousine" loading="lazy" width={1280} height={960}
                className="w-full aspect-[4/3] object-cover transition-smooth group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-sm text-eco-soft font-semibold">Limousine</div>
                <div className="font-display text-2xl font-bold">Tesla Model Y</div>
                <div className="text-sm text-white/75 mt-1">Bis 4 Passagiere · Premium-Komfort</div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={vanImg} alt="Mercedes EQV Elektro-Van" loading="lazy" width={1280} height={960}
                className="w-full aspect-[4/3] object-cover transition-smooth group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-sm text-eco-soft font-semibold">Van & Shuttle</div>
                <div className="font-display text-2xl font-bold">Mercedes EQV</div>
                <div className="text-sm text-white/75 mt-1">Bis 7 Passagiere · Events & Gruppen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 md:py-28">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <span className="eco-chip mb-4"><Users className="h-3.5 w-3.5" /> Das Team</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Schweizer Pünktlichkeit. <span className="gradient-text">Höchste Diskretion.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hinter Total Transport Company steht Denis Gojak mit seinen erfahrenen Fahrern Janos Zöldi und Gustavo Schoedl.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Card key={m.name} className="p-7 text-center shadow-card-soft hover:shadow-elegant transition-smooth border-border/60">
                <div className="mx-auto mb-5 h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-glow">
                  {m.name.split(" ").map(p => p[0]).join("")}
                </div>
                <h3 className="font-display text-xl font-bold text-primary-deep">{m.name}</h3>
                <div className="text-sm font-semibold mt-1" style={{ color: 'hsl(var(--eco))' }}>{m.role}</div>
                <p className="text-sm text-muted-foreground mt-3">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-ttc grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eco-chip mb-4"><Mail className="h-3.5 w-3.5" /> Kontakt</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Bereit für Ihre <span className="gradient-text">grüne Fahrt?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Anfrage senden und innerhalb von 2 Stunden eine Offerte erhalten.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+41000000000" className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft hover:shadow-elegant transition-smooth">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground"><Phone className="h-5 w-5" /></div>
                <div><div className="text-xs text-muted-foreground">Telefon</div><div className="font-semibold text-primary-deep">24/7 erreichbar</div></div>
              </a>
              <a href="mailto:info@totaltransport.ch" className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft hover:shadow-elegant transition-smooth">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground"><Mail className="h-5 w-5" /></div>
                <div><div className="text-xs text-muted-foreground">E-Mail</div><div className="font-semibold text-primary-deep">info@totaltransport.ch</div></div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground"><MapPin className="h-5 w-5" /></div>
                <div><div className="text-xs text-muted-foreground">Standort</div><div className="font-semibold text-primary-deep">Cheerstrasse 16, 6014 Luzern</div></div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden shadow-card-soft border border-border">
              <iframe
                title="Standort Total Transport Company Luzern"
                src="https://www.google.com/maps?q=Cheerstrasse+16,+6014+Luzern&output=embed"
                width="100%" height="280" loading="lazy" style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <Card className="p-7 sm:p-10 shadow-elegant border-border/60">
            <h3 className="font-display text-2xl font-bold text-primary-deep mb-6">Preisanfrage senden</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required maxLength={100} className="mt-1.5" placeholder="Ihr Name" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" maxLength={30} className="mt-1.5" placeholder="+41 ..." />
                </div>
              </div>
              <div>
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" required maxLength={255} className="mt-1.5" placeholder="ihre@email.ch" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="from">Von</Label>
                  <Input id="from" className="mt-1.5" placeholder="Abholort" />
                </div>
                <div>
                  <Label htmlFor="to">Nach</Label>
                  <Input id="to" className="mt-1.5" placeholder="Ziel" />
                </div>
              </div>
              <div>
                <Label htmlFor="msg">Nachricht</Label>
                <Textarea id="msg" rows={4} maxLength={1000} className="mt-1.5" placeholder="Datum, Uhrzeit, Passagiere, besondere Wünsche..." />
              </div>
              <Button type="submit" variant="eco" size="lg" className="w-full" disabled={sending}>
                {sending ? "Wird gesendet..." : "Anfrage senden"}
                {!sending && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-deep text-white py-14">
        <div className="container-ttc">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={logo} alt="TTC Logo" className="h-10 w-auto bg-white/95 rounded-lg p-1" />
                <span className="font-display font-bold text-xl">Total Transport Company</span>
              </div>
              <p className="mt-4 text-white/70 max-w-md">
                Die grünste Transport-Lösung in Luzern. 100% elektrisch, 100% professionell, 100% Schweizer Qualität.
              </p>
              <div className="mt-5 text-sm font-semibold" style={{ color: 'hsl(var(--eco-soft))' }}>
                Green. Silent. Professional.
              </div>
            </div>
            <div>
              <div className="font-display font-bold mb-4">Kontakt</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Cheerstrasse 16, 6014 Luzern</li>
                <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> info@totaltransport.ch</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5" /> 24/7 verfügbar</li>
              </ul>
            </div>
            <div>
              <div className="font-display font-bold mb-4">Services</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Taxi & Personenbeförderung</li>
                <li>Flughafentransfer</li>
                <li>Kurierdienst</li>
                <li>Event-Shuttle</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/60">
            <div>© {new Date().getFullYear()} Total Transport Company · Denis Gojak</div>
            <div>Impressum · Datenschutz · AGB</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
