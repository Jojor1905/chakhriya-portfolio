"use client";

import { DimensionalCloud } from "@/components/atmosphere/dimensional-cloud";

type FloatingCloudConfig = {
  id: string;
  className: string;
  size: string;
  aspectRatio: string;
  opacity: number;
  depth: number;
  pointer: number;
  variant?: "mist" | "dusk";
  mobile?: boolean;
};

type FloatingCloudsProps = { clouds: readonly FloatingCloudConfig[] };

export function FloatingClouds({ clouds }: FloatingCloudsProps) {
  return (
    <div className="floating-clouds" aria-hidden="true">
      {clouds.map((cloud) => (
        <DimensionalCloud key={cloud.id} {...cloud} />
      ))}
    </div>
  );
}
