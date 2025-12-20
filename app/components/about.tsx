"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Section } from "./ui/section";
import ScrollAnimationX from "./ScrollAnimationX";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const image6 = "/images/projekat6.jpg";

const benefits = [
  "Über 15 Jahre Erfahrung im Baugewerbe",
  "Qualifizierte und zuverlässige Fachkräfte",
  "Termintreue und transparente Kommunikation",
  "Hochwertige Materialien und moderne Techniken",
  "Umfassende Beratung und individuelle Lösungen",
  "Faire Preise und detaillierte Kostenvoranschläge",
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      id="ueber-uns"
      title="Über FS Bauunternehmer"
      description="Wir bauen für Sie - mit Leidenschaft, Präzision und Zuverlässigkeit."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollAnimationX sec={0.3} side="left">
            <p className="text-lg text-gray-700 mb-6">
              FS Bauunternehmer ist Ihr zuverlässiger Partner für alle
              Bauvorhaben in Böblingen und Umgebung. Seit unserer Gründung haben
              wir uns auf Renovierungs-, Sanierungs- und Umbauarbeiten
              spezialisiert und bieten unseren Kunden maßgeschneiderte Lösungen
              für ihre Bauprojekte.
            </p>
          </ScrollAnimationX>

          <ScrollAnimationX sec={0.5} side="left">
            <p className="text-lg text-gray-700 mb-8">
              Unser erfahrenes Team aus qualifizierten Fachkräften steht Ihnen
              von der Planung bis zur Fertigstellung mit Rat und Tat zur Seite.
              Wir legen großen Wert auf Qualität, Termintreue und eine
              transparente Kommunikation.
            </p>
          </ScrollAnimationX>

          <ScrollAnimationX sec={0.7} side="left">
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.3 }}
                  className="flex items-start"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.75,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" href="#kontakt">
                Kontaktieren Sie uns
              </Button>
            </motion.div>
          </ScrollAnimationX>
        </div>

        <div ref={ref} className="relative">
          <ScrollAnimationX sec={0.5} side="right">
            <motion.div
              className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image6}
                alt="FS Bauunternehmer Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollAnimationX>
          <motion.div
            className="absolute -bottom-6 -right-3 bg-white p-4 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={
              inView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: 20 }
            }
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <p className="text-lg font-bold text-red-600">Wir bauen für Sie</p>
            <p className="text-gray-700">
              Qualität und Zuverlässigkeit seit über 15 Jahren
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
