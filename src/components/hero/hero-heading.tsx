import type { CSSProperties } from "react";

type HeroHeadingProps = {
  id: string;
  title: string;
};

type HeroLineStyle = CSSProperties & {
  "--hero-line-delay": string;
};

export function HeroHeading({ id, title }: HeroHeadingProps) {
  const words = title.trim().split(/\s+/);
  const leadingWords = words.slice(0, -2).join(" ");
  const lines =
    leadingWords && words.length >= 3
      ? [leadingWords, ...words.slice(-2)]
      : [title];

  return (
    <h1 id={id} aria-label={title}>
      {lines.map((line, index) => (
        <span className="hero-title__mask" aria-hidden="true" key={line}>
          <span
            className="hero-title__line"
            style={
              { "--hero-line-delay": `${60 + index * 80}ms` } as HeroLineStyle
            }
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
