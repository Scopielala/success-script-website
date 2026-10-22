"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
] as const;

export function NavigationPanel() {
  const pathname = usePathname();

  return (
    <aside className="navigation-panel">
      <Link className="wordmark" href="/" aria-label="SuccessScript home">
        SuccessScript<span className="wordmark-period">.</span>
      </Link>

      <p className="navigation-label">Navigate</p>
      <nav aria-label="Main navigation" className="navigation-links">
        {navigationItems.map(({ href, label }, index) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`navigation-link${isActive ? " is-active" : ""}`}
              href={href}
              key={href}
            >
              <span aria-hidden="true" className="navigation-index">
                0{index + 1}
              </span>
              <span>{label}</span>
              <span aria-hidden="true" className="navigation-arrow">
                ↗
              </span>
            </Link>
          );
        })}
      </nav>

      <p className="navigation-note">Software for web and mobile</p>
    </aside>
  );
}
