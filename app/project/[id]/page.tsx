"use client";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { use } from "react";
import { Carousel } from "@/app/components/carousel";
import ScrollAnimationX from "@/app/components/ScrollAnimationX";
import Image from "next/image";

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

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <>
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <ScrollAnimationX sec={0.4} side="left">
            <div className="w-full h-full">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg min-h-[300px] lg:min-h-[500px]">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollAnimationX>

          <div className="flex flex-col justify-between h-full">
            <div>
              <ScrollAnimationX sec={0.4} side="right">
                <span className="text-sm text-yellow-500 font-semibold uppercase tracking-wide">
                  {project.category}
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
                  {project.title}
                </h1>

                <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </ScrollAnimationX>
            </div>

            <div className="mt-6">
              <button
                onClick={() => router.back()}
                className="px-6 py-3 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition duration-200"
              >
                Zurück
              </button>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      <Footer />
    </>
  );
}
