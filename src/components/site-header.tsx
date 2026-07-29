"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import type { Dictionary } from "@/content/types";

type SiteHeaderProps = {
  nav: Dictionary["nav"];
  tone?: "dark" | "light";
};

export function SiteHeader({ nav, tone = "light" }: SiteHeaderProps) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const activeTone = tone === "dark" && isHeroVisible ? "dark" : "light";
  const links = [
    { href: "/#about", label: nav.about },
    { href: "/#projects", label: nav.projects },
    { href: "/#activity", label: nav.activity },
    { href: "/#certificate", label: nav.certificate },
    { href: "/#contact", label: nav.contact },
  ];

  useEffect(() => {
    if (tone !== "dark") {
      return;
    }

    const hero = document.querySelector(".hero");

    if (!hero || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [tone]);

  return (
    <header className="site-header" data-tone={activeTone}>
      <div className="site-header__inner">
        <Link className="site-brand" href="/#top" aria-label="Chakhriya — back to homepage">
          Chakhriya<span aria-hidden="true">.</span>
        </Link>

        <nav className="primary-nav" aria-label={nav.menuLabel}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary>{nav.mobileMenu}</summary>
          <nav aria-label={nav.mobileMenuLabel}>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
      <ScrollProgress />
    </header>
  );
}
