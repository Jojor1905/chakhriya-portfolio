import Image from "next/image";
import type { CSSProperties } from "react";

type FloatingCloudConfig = {
  id: string;
  src: string;
  className: string;
  size: string;
  aspectRatio: string;
  opacity: number;
  mobile?: boolean;
};

type FloatingCloudsProps = {
  clouds: readonly FloatingCloudConfig[];
};

type CloudStyle = CSSProperties & {
  "--cloud-size": string;
  "--cloud-aspect-ratio": string;
  "--cloud-opacity": number;
};

export function FloatingClouds({ clouds }: FloatingCloudsProps) {
  return (
    <div className="floating-clouds" aria-hidden="true">
      {clouds.map((cloud) => {
        const style: CloudStyle = {
          "--cloud-size": cloud.size,
          "--cloud-aspect-ratio": cloud.aspectRatio,
          "--cloud-opacity": cloud.opacity,
        };

        return (
          <span
            className={`floating-cloud ${cloud.className}${
              cloud.mobile === false ? " floating-cloud--desktop-only" : ""
            }`}
            key={cloud.id}
            style={style}
          >
            <Image
              alt=""
              className="floating-cloud__image"
              fill
              sizes="(max-width: 767px) 0px, (max-width: 1440px) 34vw, 42vw"
              src={cloud.src}
            />
          </span>
        );
      })}
    </div>
  );
}
