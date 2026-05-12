import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";

const FORM_ACTION = "https://formspree.io/f/xbdwjezl";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORM_ACTION, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Anfrage gesendet!",
          description: "Wir melden uns innert 24 Stunden bei Ihnen.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Fehler");
      }
    } catch {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-ttc grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <span className="eco-chip mb-4">
                <Mail className="h-3.5 w-3.5" /> Kontakt
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Bereit für Ihre <span className="gradient-text">grüne Fahrt?</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Anfrage senden und innerhalb von 24 Stunden eine Offerte erhalten.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <Reveal delay={320} variant="left">
                {/* TODO: Platzhalter-Nummer durch echte TTC-Telefonnummer ersetzen */}
                <a
                  href="tel:+41000000000"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft hover-lift hover:shadow-elegant"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Telefon</div>
                    <div className="font-semibold text-primary-deep">24/7 erreichbar</div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={400} variant="left">
                <a
                  href="mailto:info@ttc.taxi"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft hover-lift hover:shadow-elegant"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">E-Mail</div>
                    <div className="font-semibold text-primary-deep">info@ttc.taxi</div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={480} variant="left">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card-soft">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Standort</div>
                    <div className="font-semibold text-primary-deep">Cheerstrasse 16, 6014 Luzern</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={560}>
              <div className="mt-6 rounded-2xl overflow-hidden shadow-card-soft border border-border">
                <iframe
                  title="Standort Total Transport Company Luzern"
                  src="https://www.google.com/maps?q=Cheerstrasse+16,+6014+Luzern&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={120}>
            <Card className="p-7 sm:p-10 shadow-elegant border-border/60">
              <h2 className="font-display text-2xl font-bold text-primary-deep mb-6">
                Preisanfrage senden
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required maxLength={100} className="mt-1.5" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" maxLength={30} className="mt-1.5" placeholder="+41 ..." />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="mt-1.5"
                    placeholder="ihre@email.ch"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from">Von</Label>
                    <Input id="from" name="from" className="mt-1.5" placeholder="Abholort" />
                  </div>
                  <div>
                    <Label htmlFor="to">Nach</Label>
                    <Input id="to" name="to" className="mt-1.5" placeholder="Ziel" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="msg">Nachricht</Label>
                  <Textarea
                    id="msg"
                    name="msg"
                    rows={4}
                    maxLength={1000}
                    className="mt-1.5"
                    placeholder="Datum, Uhrzeit, Passagiere, besondere Wünsche..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="eco"
                  size="lg"
                  className="w-full transition-transform duration-300 hover:-translate-y-0.5"
                  disabled={sending}
                >
                  {sending ? "Wird gesendet..." : "Anfrage senden"}
                  {!sending && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-ttc">
          <Reveal>
            <Card className="relative overflow-hidden p-10 md:p-14 bg-gradient-eco text-white shadow-elegant border-0">
              <div className="absolute inset-0 opacity-30 animate-gradient-shift bg-gradient-eco" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Sparkles className="h-3.5 w-3.5" /> 24/7 Service
                  </span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
                    Lieber direkt anrufen?
                  </h2>
                  <p className="mt-3 text-white/90 text-lg">
                    Unser Team ist rund um die Uhr für Sie erreichbar — auch am Sonntag und an Feiertagen.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  {/* TODO: Platzhalter-Nummer durch echte TTC-Telefonnummer ersetzen */}
                  <Button asChild variant="hero" size="xl">
                    <a href="tel:+41000000000">
                      Jetzt anrufen <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
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

export default Contact;
