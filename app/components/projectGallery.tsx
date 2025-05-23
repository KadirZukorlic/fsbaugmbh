import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   href?: string;
//   className?: string;
// }

interface ProjectGalleryProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  className?: string;
  category: string;
}

export function ProjectGallery({
  title,
  description,
  imageSrc,
  href,
  className,
  category,
}: ProjectGalleryProps) {
  return (
    // <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
    <div className='group relative overflow-hidden rounded-lg'>
      <div className='aspect-[4/3] w-full overflow-hidden'>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <div className='mb-2 text-sm font-medium text-yellow-400'>
          {category}
        </div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <Link
          href='#'
          className='mt-2 inline-flex items-center text-sm text-white/90 hover:text-white'
        >
          Details ansehen <ArrowUpRight className='ml-1 h-4 w-4' />
        </Link>
      </div>
    </div>
    // </div>
  );
}
