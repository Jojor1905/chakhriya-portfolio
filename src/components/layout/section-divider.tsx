import { Reveal } from "@/components/motion/reveal";

type SectionDividerProps = {
  variant?: "line" | "centered";
};

export function SectionDivider({
  variant = "line",
}: SectionDividerProps) {
  return (
    <Reveal
      as="div"
      className={`section-divider section-divider--${variant}`}
      aria-hidden="true"
    >
      <div className="section-divider__inner">
        <span className="section-divider__mark" />
      </div>
    </Reveal>
  );
}
