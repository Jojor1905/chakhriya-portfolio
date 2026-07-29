import type { ReactNode } from "react";

type HeroSceneProps = {
  children: ReactNode;
};

export function HeroScene({ children }: HeroSceneProps) {
  return <div className="hero-scene">{children}</div>;
}
