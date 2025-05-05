import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "gray";
}

export function Section({
  title,
  description,
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16",
        variant === "gray" ? "bg-gray-50" : "bg-white",
        className
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>{title}</h2>
          {description && <p className='text-gray-600'>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
