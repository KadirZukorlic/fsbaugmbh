import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
