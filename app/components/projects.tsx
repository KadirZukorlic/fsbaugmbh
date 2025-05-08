import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { ProjectGallery } from "./projectGalery";

const imagePath = "/images/hero.jpg";

const projects = [
  {
    title: "Komplette Hausrenovierung",
    description:
      "Umfassende Sanierung eines historischen Gebäudes mit Erhalt der charakteristischen Elemente.",
    imageSrc: imagePath,
    category: "Renovierung",
    href: "#",
  },
  {
    title: "Moderne Terrasse",
    description:
      "Neugestaltung eines 500m² großen Gartens mit Terrasse, Wegen und umfangreichen Pflanzarbeiten.",
    imageSrc: imagePath,
    category: "Außenbereich",
    href: "#",
  },
  {
    title: "Gartenumgestaltung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: imagePath,
    category: "Garten",
    href: "#",
  },
  {
    title: "Badezimmersanierung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: imagePath,
    category: "Renovierung",
    href: "#",
  },
  {
    title: "Steinmauer",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: imagePath,
    category: "Außenbereich",
    href: "#",
  },
  {
    title: "Pflasterarbeiten",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: imagePath,
    category: "Außenbereich",
    href: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projekte"
      title="Unsere Projekte"
      description="Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte."
      variant="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectGallery
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
            category={project.category}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="primary" size="lg" href="#">
          Alle Projekte ansehen
        </Button>
      </div>
    </Section>
  );
}
