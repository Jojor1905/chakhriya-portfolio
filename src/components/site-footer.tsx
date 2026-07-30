import type { Dictionary } from "@/content/types";
import { ArrowUpRightIcon } from "@/components/icons/arrow-icons";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";

type SiteFooterProps = {
  footer: Dictionary["footer"];
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <SectionAtmosphere tone="dusk" />
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <a href="#top">{footer.backToTop} <ArrowUpRightIcon className="arrow-icon" aria-hidden="true" /></a>
        </div>
        <div className="site-footer__meta">
          <p>{footer.note}</p>
          <p>{footer.location}</p>
          <p>{footer.status}</p>
        </div>
      </div>
    </footer>
  );
}
