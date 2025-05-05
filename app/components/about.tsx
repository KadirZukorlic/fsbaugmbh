import { CheckCircle } from "lucide-react";
import { Section, Button } from "./ui-components";

const benefits = [
  "Über 15 Jahre Erfahrung im Baugewerbe",
  "Qualifizierte und zuverlässige Fachkräfte",
  "Termintreue und transparente Kommunikation",
  "Hochwertige Materialien und moderne Techniken",
  "Umfassende Beratung und individuelle Lösungen",
  "Faire Preise und detaillierte Kostenvoranschläge",
];

export function About() {
  return (
    <Section
      id="ueber-uns"
      title="Über FS Bauunternehmer"
      description="Wir bauen für Sie - mit Leidenschaft, Präzision und Zuverlässigkeit."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            FS Bauunternehmer ist Ihr zuverlässiger Partner für alle Bauvorhaben
            in Böblingen und Umgebung. Seit unserer Gründung haben wir uns auf
            Renovierungs-, Sanierungs- und Umbauarbeiten spezialisiert und
            bieten unseren Kunden maßgeschneiderte Lösungen für ihre
            Bauprojekte.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Unser erfahrenes Team aus qualifizierten Fachkräften steht Ihnen von
            der Planung bis zur Fertigstellung mit Rat und Tat zur Seite. Wir
            legen großen Wert auf Qualität, Termintreue und eine transparente
            Kommunikation.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Button variant="primary" href="#kontakt">
            Kontaktieren Sie uns
          </Button>
        </div>

        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/about.jpg"
              alt="FS Bauunternehmer Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-lg font-bold text-red-600">Wir bauen für Sie</p>
            <p className="text-gray-700">
              Qualität und Zuverlässigkeit seit über 15 Jahren
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
