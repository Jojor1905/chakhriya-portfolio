import Image from "next/image";

export function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="hero-portrait__backdrop" aria-hidden="true" />
      <div className="hero-portrait__accent" aria-hidden="true">
        <span />
      </div>
      <div className="hero-portrait__frame">
        <Image
          src="/Image/profile/chakhriya-hero.jpg"
          alt="Portrait of Chakhriya Korada"
          fill
          priority
          sizes="(max-width: 900px) calc(100vw - 40px), 52vw"
        />
      </div>
      <figcaption>Chakhriya Korada</figcaption>
    </figure>
  );
}
