/**
 * Payment method logos.
 *
 * On dark backgrounds (footer): white logos via `brightness-0 invert`.
 * On light backgrounds (contact): original-colored logos.
 */

interface PaymentLogosProps {
  className?: string;
  label?: string;
  invert?: boolean;
}

const colorLogos = [
  { src: "/payment/twint.svg", label: "TWINT", w: "w-14" },
  { src: "/payment/mastercard.svg", label: "Mastercard", w: "w-10" },
  { src: "/payment/visa.svg", label: "Visa", w: "w-12" },
  { src: "/payment/amex.svg", label: "American Express", w: "w-14" },
  { src: "/payment/cash.svg", label: "Bargeld", w: "w-12" },
];

const monoLogos = [
  { src: "/payment/twint-mono.svg", label: "TWINT", w: "w-14" },
  { src: "/payment/mastercard-mono.svg", label: "Mastercard", w: "w-10" },
  { src: "/payment/visa-mono.svg", label: "Visa", w: "w-12" },
  { src: "/payment/amex-mono.svg", label: "American Express", w: "w-14" },
  { src: "/payment/cash-mono.svg", label: "Bargeld", w: "w-12" },
];

const PaymentLogos = ({ className = "", label, invert = false }: PaymentLogosProps) => {
  const logos = invert ? monoLogos : colorLogos;
  const labelClass = invert ? "text-white/50" : "text-muted-foreground";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {label && (
        <span className={`text-xs mr-1 uppercase tracking-wider font-semibold ${labelClass}`}>
          {label}
        </span>
      )}
      {logos.map((logo) => (
        <div key={logo.label} className={`h-8 ${logo.w} flex items-center`}>
          <img
            src={logo.src}
            alt={logo.label}
            loading="lazy"
            decoding="async"
            className={`max-h-full max-w-full object-contain ${invert ? "brightness-0 invert" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentLogos;
