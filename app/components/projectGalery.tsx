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
        <div className="group relative overflow-hidden rounded-lg cursor-pointer h-full">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-2 text-sm font-medium text-yellow-400"
            >
              {category}
            </motion.div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-lg font-semibold"
            >
              {title}
            </motion.h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 inline-flex items-center text-sm text-white/90 hover:text-white"
            >
              Details ansehen{" "}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
