import { Link } from "react-router-dom";
import { ArrowRight, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { team } from "@/data/site";

const Team = () => {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Schweizer Pünktlichkeit.{" "}
                <span className="gradient-text">Höchste Diskretion.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-lg text-muted-foreground">
                Hinter Total Transport Company steht Denis Gojak mit seinen erfahrenen Fahrern Janos Zöldi und Gustavo Schoedl.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 140} variant="up">
                <Card className="group p-8 text-center shadow-card-soft hover-lift hover:shadow-elegant border border-border/80 h-full bg-card">
                  <div className="mx-auto mb-5 h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <h2 className="font-display text-xl font-bold text-primary-deep">
                    {m.name}
                  </h2>
                  <div
                    className="text-sm font-semibold mt-1"
                    style={{ color: "hsl(var(--eco))" }}
                  >
                    {m.role}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{m.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-ttc max-w-4xl">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <Reveal>
                  <span className="eco-chip mb-4">
                    <Quote className="h-3.5 w-3.5" aria-hidden="true" /> Zitat
                  </span>
                </Reveal>
                <Reveal delay={120}>
                  <blockquote className="font-display text-2xl md:text-3xl font-medium text-primary-deep leading-relaxed">
                    „Mobilität soll bequem sein — und gleichzeitig die Welt nicht belasten. Mit unserer Elektroflotte zeigen wir, dass Premium-Service und Verantwortung perfekt zusammenpassen."
                  </blockquote>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-glow">
                      DG
                    </div>
                    <div>
                      <div className="font-display font-bold text-primary-deep">
                        Denis Gojak
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "hsl(var(--eco))" }}
                      >
                        Inhaber & Gründer
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={300}>
                <div className="flex flex-col gap-3 lg:min-w-56">
                  <Button asChild variant="eco" size="lg">
                    <Link to="/kontakt">
                      Mit dem Team sprechen{" "}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/dienstleistungen">Dienstleistungen</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Team;
