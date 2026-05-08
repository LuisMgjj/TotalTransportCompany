import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className={`border-b border-border/60 transition-colors ${isOpen ? "border-primary/30" : "hover:border-border"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary rounded"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-medium text-foreground/90 pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef}>
          <p className="text-sm text-muted-foreground leading-relaxed pb-5">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-ttc">
          <div className="max-w-2xl mb-12">
            <span className="eco-chip mb-4 inline-flex items-center gap-2">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" /> FAQ
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-deep">
              Häufige <span className="gradient-text">Fragen.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Antworten auf das, was Kunden uns am häufigsten stellen.
            </p>
          </div>

          <div className="max-w-3xl">
            <div className="border-t border-border/60">
              {faqs.map((faq, i) => (
                <FaqAccordion
                  key={faq.q}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>

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
        </div>
      </section>
    </>
  );
};

export default FAQ;
