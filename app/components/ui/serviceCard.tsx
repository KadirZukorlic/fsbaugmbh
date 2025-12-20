"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  href?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  className,
  href,
}: ServiceCardProps) {
  const content = (
    <>
      {icon && (
        <motion.div
          className="mb-4 text-yellow-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {href && (
        <motion.div
          className="mt-4 flex items-center text-yellow-500 font-medium"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
        </motion.div>
      )}
    </>
  );

  const cardClasses = cn(
    "p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col",
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} className={cardClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
