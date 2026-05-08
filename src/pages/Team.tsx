import { team } from "@/data/site";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const Team = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-ttc">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Unser <span className="gradient-text">Team.</span>
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
  );
};

export default Team;
