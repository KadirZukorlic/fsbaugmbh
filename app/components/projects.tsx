"use client";

import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { ProjectGallery } from "./projectGalery";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      id='projekte'
      title='Unsere Projekte'
      description='Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.'
      variant='gray'
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectGallery
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              href={project.href}
              category={project.category}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='mt-12 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"/Projects"}
            className='group relative block overflow-hidden rounded-lg'
          >
            <Button className='cursor-pointer' variant='primary' size='lg'>
              Alle Projekte ansehen
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
