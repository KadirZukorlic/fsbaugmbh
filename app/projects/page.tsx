import { Section } from "../components/ui/section";
import { ProjectGallery } from "../components/projectGalery";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const terrasse = "/images/terrasse.jpg";
const außenbereich2 = "/images/projekat8.jpg";
const außenbereich3 = "/images/projekat7.jpg";
const plannung = "/images/3dplannung.jpg";
const renovierung2 = "/images/projekat1.jpg";
const garten = "/images/garten.jpg";

const projects = [
  {
    id: "1",
    title: "Komplette Hausrenovierung",
    description:
      "Umfassende Sanierung eines historischen Gebäudes mit Erhalt der charakteristischen Elemente.",
    imageSrc: plannung,
    category: "3D Plannung",
    href: "#",
  },
  {
    id: "2",
    title: "Moderne Terrasse",
    description:
      "Neugestaltung eines 500m² großen Gartens mit Terrasse, Wegen und umfangreichen Pflanzarbeiten.",
    imageSrc: terrasse,
    category: "Außenbereich",
    href: "#",
  },
  {
    id: "3",
    title: "Gartenumgestaltung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: garten,
    category: "Garten",
    href: "#",
  },
  {
    id: "4",
    title: "Badezimmersanierung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: renovierung2,
    category: "Renovierung",
    href: "#",
  },
  {
    id: "5",
    title: "Steinmauer",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: außenbereich2,
    category: "Außenbereich",
    href: "#",
  },
  {
    id: "6",
    title: "Pflasterarbeiten",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: außenbereich3,
    category: "Außenbereich",
    href: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Header />{" "}
      <Section
        id='projekte'
        title='Unsere Projekte'
        description='Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.'
        variant='gray'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectGallery
              id={project.id}
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              href={project.href}
              category={project.category}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
