"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  className?: string;
  category: string;
}

export function ProjectGallery({
  id,
  title,
  description,
  imageSrc,
  className,
  category,
}: ProjectGalleryProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link
        href={`/project/${id}`}
        className="group relative block overflow-hidden rounded-lg cursor-pointer h-full"
      >
        <div className="relative overflow-hidden rounded-lg cursor-pointer h-full bg-gray-200">
          {/* Fixed aspect ratio container to ensure same size for all images */}
          <div className="aspect-[4/3] w-full overflow-hidden relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                width={600}
                height={450}
                className="h-full w-full object-cover object-center"
                priority={false}
              />
            </motion.div>
          </div>
          {/* Dark overlay with details - always visible at the bottom */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white pointer-events-none">
            <div className="mb-2 text-sm font-medium text-yellow-400">
              {category}
            </div>
            <h3 className="text-lg font-semibold mb-1">
              {title}
            </h3>
            <div className="mt-2 inline-flex items-center text-sm text-white/90">
              Details ansehen{" "}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
