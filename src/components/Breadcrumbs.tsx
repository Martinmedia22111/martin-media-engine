import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className={`text-sm text-muted-foreground mb-6 ${className}`}>
    <ol className="flex flex-wrap items-center gap-1.5">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={i} className="flex items-center gap-1.5">
            {i === 0 && <Home size={14} aria-hidden="true" />}
            {item.url && !isLast ? (
              <Link to={item.url} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className={isLast ? "text-foreground font-medium" : ""}>{item.name}</span>
            )}
            {!isLast && <ChevronRight size={14} className="text-muted-foreground/50" aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
