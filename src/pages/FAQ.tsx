import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/site";

const FaqAccordion = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <Card
      className={`border border-border/80 overflow-hidden transition-shadow ${
        isOpen ? "shadow-card-soft" : "shadow-none"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-semibold text-primary-deep pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {faq.a}
        </div>
      </div>
    </Card>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-ttc">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eco-chip mb-4">
                <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" /> FAQ
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
                Häufige <span className="gradient-text">Fragen.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-muted-foreground">
                Antworten auf das, was Kunden uns am häufigsten stellen.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-3 max-w-6xl">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60} variant="up">
                <FaqAccordion
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-14 max-w-3xl">
              <Card className="p-7 sm:p-10 border-border/80 shadow-card-soft bg-card">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 h-11 w-11 rounded-xl bg-eco-soft flex items-center justify-center"
                    style={{ color: "hsl(var(--eco))" }}
                  >
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-primary-deep">
                      Noch Fragen?
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Wir antworten innert 24 Stunden — persönlich, kein Bot.
                    </p>
                    <Button asChild variant="eco" size="lg" className="mt-4">
                      <Link to="/kontakt">
                        Kontakt aufnehmen{" "}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default FAQ;
