import type { Dictionary } from "@/content/types";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";

type SiteFooterProps = {
  footer: Dictionary["footer"];
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <SectionAtmosphere tone="dusk" cloudSlot="wide" />
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <a href="#top">{footer.backToTop} <span aria-hidden="true">↗</span></a>
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
