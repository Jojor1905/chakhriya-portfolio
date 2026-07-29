const HERO_VIDEO_PATH = "/videos/projects/atmosphere/luxury-clouds.mp4";

export function SkyAtmosphere() {
  return (
    <div className="sky-atmosphere" aria-hidden="true">
      <video
        className="sky-atmosphere__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={HERO_VIDEO_PATH} type="video/mp4" />
      </video>
      <span className="sky-atmosphere__overlay" />
    </div>
  );
}
