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
              Hinter jedem Wagen steht ein Team, das brennt: für leise, saubere Mobilität, für ortskundige Routen und für Gäste, die mehr erwarten als ein Taxi.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 140} variant="up">
              <Card className="group p-8 text-center shadow-card-soft hover-lift hover:shadow-elegant border border-border/80 h-full bg-card">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    style={{ objectPosition: m.imagePosition ?? "top" }}
                    className="mx-auto mb-5 h-32 w-32 rounded-full object-cover shadow-glow ring-4 ring-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  />
                ) : (
                  <div className="mx-auto mb-5 h-32 w-32 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-3xl shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                )}
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
