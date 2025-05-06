import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
