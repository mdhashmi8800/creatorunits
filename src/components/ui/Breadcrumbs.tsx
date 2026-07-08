import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <li aria-hidden="true" style={{ margin: "0 0.5rem", color: "var(--text-muted)", fontSize: "0.75rem" }}>
                  /
                </li>
              )}
              <li style={{ display: "inline-flex", alignItems: "center" }}>
                {isLast || !item.href ? (
                  <span aria-current="page" style={{ color: "var(--text-primary)", fontWeight: "600" }}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="breadcrumb-item-link">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
