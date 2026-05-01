import { Link } from "react-router-dom";
import { Clock, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteFooter = () => {
  return (
    <footer className="bg-primary-deep text-white py-14">
      <div className="container-ttc">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Startseite">
              <img src={logo} alt="" className="h-12 w-auto bg-white/95 rounded-lg p-1" />
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              Die grünste Transport-Lösung der Schweiz. 100% elektrisch, 100% professionell, 100% Schweizer Qualität.
            </p>
            <div className="mt-5 text-sm font-semibold" style={{ color: "hsl(var(--eco-soft))" }}>
              Green. Silent. Professional.
            </div>
          </div>
          <div>
            <div className="font-display font-bold mb-4">Kontakt</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Cheerstrasse 16, 6014 Luzern
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" /> info@ttc.taxi
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" /> 24/7 verfügbar
              </li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold mb-4">Services</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/dienstleistungen" className="hover:text-white">
                  Taxi & Personenbeförderung
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="hover:text-white">
                  Flughafentransfer
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="hover:text-white">
                  Kurierdienst
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="hover:text-white">
                  Event-Shuttle
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Total Transport Company · Denis Gojak</div>
          <div>Impressum · Datenschutz · AGB</div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
