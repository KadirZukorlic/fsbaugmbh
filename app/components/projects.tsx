import { Section } from "./ui/section";
import { ProjectCard } from "./ui/projectCard";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Altbausanierung in Stuttgart",
    description:
      "Umfassende Sanierung eines historischen Gebäudes mit Erhalt der charakteristischen Elemente.",
    imageSrc: "/images/project1.jpg",
    href: "#",
  },
  {
    title: "Gartengestaltung in Böblingen",
    description:
      "Neugestaltung eines 500m² großen Gartens mit Terrasse, Wegen und umfangreichen Pflanzarbeiten.",
    imageSrc: "/images/project2.jpg",
    href: "#",
  },
  {
    title: "Renovierung eines Einfamilienhauses",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: "/images/project3.jpg",
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
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
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
