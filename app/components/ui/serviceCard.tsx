import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

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
      {icon && <div className="mb-4 text-yellow-500">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {href && (
        <div className="mt-4 flex items-center text-yellow-500 font-medium">
          Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
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
