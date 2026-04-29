import {
  BatteryCharging,
  Car,
  Clock,
  Leaf,
  Package,
  Plane,
  ShieldCheck,
  Users,
  Volume2,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";

export type IconType = ComponentType<{ className?: string }>;

export interface NavItem {
  to: string;
  label: string;
}

export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/dienstleistungen", label: "Dienstleistungen" },
  { to: "/nachhaltigkeit", label: "Nachhaltigkeit" },
  { to: "/team", label: "Team" },
  { to: "/kontakt", label: "Kontakt" },
];

export interface Service {
  icon: IconType;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: Car,
    title: "Personenbeförderung",
    desc:
      "Komfortable Taxi- und Privatfahrten zu jeder Tages- und Nachtzeit. Premium-Elektrofahrzeuge, diskrete Profifahrer.",
  },
  {
    icon: Plane,
    title: "Flughafentransfer",
    desc:
      "Zuverlässige Transfers nach Zürich, Basel und Genf. Flug-Tracking inklusive, immer pünktlich.",
  },
  {
    icon: Package,
    title: "Kurier & Express",
    desc:
      "CO₂-neutraler Paket- und Dokumentenversand. Schnell, sicher, nachhaltig – für Privat und Business.",
  },
  {
    icon: Users,
    title: "Business & Event-Shuttle",
    desc:
      "Shuttle-Services für Firmen, Hochzeiten und Events. Mehrere E-Vans, flexibel skalierbar.",
  },
];

export interface EcoFeature {
  icon: IconType;
  title: string;
  desc: string;
}

export const ecoFeatures: EcoFeature[] = [
  { icon: Zap, title: "100% Elektroflotte", desc: "Null Emissionen. Null Kompromisse." },
  { icon: Volume2, title: "Flüsterleise Fahrten", desc: "Ruhiger für Sie, leiser für alle." },
  { icon: Leaf, title: "Klimaneutral", desc: "Geladen mit Schweizer Ökostrom." },
  { icon: BatteryCharging, title: "Moderne Flotte", desc: "Tesla Model Y, Mercedes EQV & mehr." },
  { icon: ShieldCheck, title: "Schweizer Qualität", desc: "Pünktlich, diskret, lizenziert." },
  { icon: Clock, title: "24/7 Verfügbar", desc: "Rund um die Uhr für Sie bereit." },
];

export interface TeamMember {
  name: string;
  role: string;
  desc: string;
}

export const team: TeamMember[] = [
  {
    name: "Denis Gojak",
    role: "Inhaber & Gründer",
    desc: "Visionär hinter einer der grünsten Elektroflotten der Schweiz.",
  },
  {
    name: "Janos Zöldi",
    role: "Hauptfahrer",
    desc: "Erfahrener Chauffeur mit Auge fürs Detail.",
  },
  {
    name: "Gustavo Schoedl",
    role: "Hauptfahrer",
    desc: "Ortskundig, diskret, zuverlässig.",
  },
];
