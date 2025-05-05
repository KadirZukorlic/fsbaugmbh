import { cn } from "@/lib/utils";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

// Button Komponente
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";

  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-600 shadow",
    secondary: "bg-red-600 text-white hover:bg-red-700 shadow",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Service Card Komponente
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
      {icon && <div className='mb-4 text-yellow-500'>{icon}</div>}
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
      {href && (
        <div className='mt-4 flex items-center text-yellow-500 font-medium'>
          Mehr erfahren <ChevronRight className='ml-1 h-4 w-4' />
        </div>
      )}
    </>
  );

  const cardClasses = cn(
    "p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

// Section Komponente
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

// Project Card Komponente
export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  className,
}: ProjectCardProps) {
  const content = (
    <>
      <div className='relative h-64 overflow-hidden rounded-t-lg'>
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        {href && (
          <div className='flex items-center text-yellow-500 font-medium'>
            Projekt ansehen <ArrowRight className='ml-1 h-4 w-4' />
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = cn(
    "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

// Contact Card Komponente
export interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: string | ReactNode;
  className?: string;
}

export function ContactCard({
  icon,
  title,
  content,
  className,
}: ContactCardProps) {
  return (
    <div
      className={cn("p-6 bg-white rounded-lg shadow-md text-center", className)}
    >
      <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-yellow-500 mb-4'>
        {icon}
      </div>
      <h3 className='text-lg font-bold mb-2'>{title}</h3>
      <div className='text-gray-600'>{content}</div>
    </div>
  );
}
