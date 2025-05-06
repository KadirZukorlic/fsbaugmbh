import { Hammer, Home, Shovel, Trash2, Wrench, Flower2 } from "lucide-react";
import { Section } from "./ui/section";
import { ServiceCard } from "./ui/serviceCard";

const services = [
  {
    title: "Renovierung",
    description:
      "Umfassende Renovierungsarbeiten für Innen- und Außenbereiche, um Ihr Zuhause in neuem Glanz erstrahlen zu lassen.",
    icon: <Wrench className="h-10 w-10" />,
    href: "#",
  },
  {
    title: "Sanierung",
    description:
      "Professionelle Sanierungsarbeiten für Altbauten, Feuchtigkeitsschäden und energetische Verbesserungen.",
    icon: <Home className="h-10 w-10" />,
    href: "#",
  },
  {
    title: "Abbrucharbeiten",
    description:
      "Fachgerechte und sichere Durchführung von Abbruch- und Rückbauarbeiten mit umweltgerechter Entsorgung.",
    icon: <Trash2 className="h-10 w-10" />,
    href: "#",
  },
  {
    title: "Mauerarbeiten",
    description:
      "Hochwertige Mauerarbeiten für Neubauten, Anbauten, Gartenmauern und Ausbesserungsarbeiten.",
    icon: <Hammer className="h-10 w-10" />,
    href: "#",
  },
  {
    title: "Außenanlagen",
    description:
      "Gestaltung und Pflege von Außenanlagen, Terrassen, Wegen und Einfahrten nach Ihren Wünschen.",
    icon: <Shovel className="h-10 w-10" />,
    href: "#",
  },
  {
    title: "Gartenarbeiten",
    description:
      "Professionelle Gartengestaltung, Pflanzarbeiten, Rasenpflege und Bewässerungssysteme für Ihren Traumgarten.",
    icon: <Flower2 className="h-10 w-10" />,
    href: "#",
  },
];

export function Services() {
  return (
    <Section
      id="leistungen"
      title="Unsere Leistungen"
      description="Wir bieten ein umfassendes Angebot an Baudienstleistungen für Privat- und Gewerbekunden."
      variant="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
          />
        ))}
      </div>
    </Section>
  );
}
