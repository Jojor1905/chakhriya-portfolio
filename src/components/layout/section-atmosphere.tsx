export type SectionAtmosphereTone =
  | "mist"
  | "structured"
  | "quiet"
  | "airy"
  | "dusk";

type CloudAsset = {
  src: string;
  position?: "edge" | "wide";
};

type SectionAtmosphereProps = {
  tone: SectionAtmosphereTone;
  cloudAsset?: CloudAsset;
  cloudSlot?: CloudAsset["position"];
  motion?: "none" | "drift";
};

type CloudAssetSlotProps = {
  asset?: CloudAsset;
  position?: CloudAsset["position"];
};

export function CloudAssetSlot({ asset, position }: CloudAssetSlotProps) {
  if (!asset) {
    return null;
  }

  return (
    <span
      className={`section-atmosphere__asset section-atmosphere__asset--${asset.position ?? position ?? "edge"}`}
    >
      <Image src={asset.src} alt="" fill sizes="(max-width: 767px) 78vw, 52vw" />
    </span>
  );
}

export function SectionHaze() {
  return <span className="section-atmosphere__haze" />;
}

export function AtmosphericGrain() {
  return <span className="section-atmosphere__grain" />;
}

export function SectionAtmosphere({
  tone,
  cloudAsset,
  cloudSlot,
  motion = "none",
}: SectionAtmosphereProps) {
  return (
    <div
      className={`section-atmosphere section-atmosphere--${tone}`}
      data-motion={motion}
      aria-hidden="true"
    >
      <span className="section-atmosphere__sky" />
      <SectionHaze />
      <AtmosphericGrain />
      <CloudAssetSlot asset={cloudAsset} position={cloudSlot} />
    </div>
  );
}
import Image from "next/image";
