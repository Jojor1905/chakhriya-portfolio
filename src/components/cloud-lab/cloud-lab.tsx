"use client";

import { Cloud, Clouds } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { MathUtils, type Group } from "three";
import styles from "./cloud-lab.module.css";

export type CloudLabControls = {
  segments: number;
  bounds: number;
  density: number;
  opacity: number;
  softness: number;
  driftSpeed: number;
  noiseSpeed: number;
  cameraStrength: number;
  background: string;
  light: string;
};

export const DEFAULT_CONTROLS: CloudLabControls = {
  segments: 54,
  bounds: 4.8,
  density: 5.8,
  opacity: 0.9,
  softness: 0.72,
  driftSpeed: 0.055,
  noiseSpeed: 0.09,
  cameraStrength: 1,
  background: "#dcecf4",
  light: "#fff9f0",
};

function useEnvironment() {
  const [environment, setEnvironment] = useState({
    webgl: true,
    mobile: false,
    reducedMotion: false,
    active: true,
  });

  useEffect(() => {
    const webgl = Boolean(document.createElement("canvas").getContext("webgl2") || document.createElement("canvas").getContext("webgl"));
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () =>
      setEnvironment({
        webgl,
        mobile: mobileQuery.matches,
        reducedMotion: reducedMotionQuery.matches,
        active: !document.hidden,
      });

    update();
    mobileQuery.addEventListener("change", update);
    reducedMotionQuery.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      reducedMotionQuery.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return environment;
}

export function CloudMotion({
  controls,
  mobile,
  reducedMotion,
}: {
  controls: CloudLabControls;
  mobile: boolean;
  reducedMotion: boolean;
}) {
  const mainCloud = useRef<Group>(null);
  const distantCloud = useRef<Group>(null);

  useFrame((state) => {
    if (reducedMotion) return;

    const pointerX = mobile ? 0 : state.pointer.x * 0.18 * controls.cameraStrength;
    const pointerY = mobile ? 0 : state.pointer.y * 0.1 * controls.cameraStrength;
    const time = state.clock.elapsedTime;

    state.camera.position.x += (pointerX - state.camera.position.x) * 0.025;
    state.camera.position.y += (0.08 + pointerY - state.camera.position.y) * 0.025;
    state.camera.lookAt(pointerX * 0.35, pointerY * 0.25, 0);

    if (mainCloud.current) {
      mainCloud.current.rotation.y += (pointerX * 0.13 - mainCloud.current.rotation.y) * 0.025;
      mainCloud.current.rotation.x += (pointerY * 0.09 - mainCloud.current.rotation.x) * 0.025;
      mainCloud.current.position.y = 0.1 + Math.sin(time * controls.driftSpeed) * 0.075;
    }

    if (distantCloud.current) {
      distantCloud.current.rotation.y += (pointerX * 0.055 - distantCloud.current.rotation.y) * 0.02;
      distantCloud.current.position.y = -1.25 + Math.sin(time * controls.driftSpeed * 0.55 + 1) * 0.035;
    }
  });

  const mobileSegments = Math.round(controls.segments * 0.58);

  return (
    <>
      <ambientLight intensity={1.35} color="#eaf6fb" />
      <directionalLight position={[-4, 5, 4]} intensity={1.6} color={controls.light} />
      <directionalLight position={[3, -2, 2]} intensity={0.24} color="#a5c4d5" />
      <Clouds
        texture="/Image/atmosphere/cloud.png"
        limit={mobile ? mobileSegments + 16 : controls.segments + 24}
        range={mobile ? mobileSegments + 16 : controls.segments + 24}
      >
        <group ref={mainCloud} position={[0.65, 0.1, 1.35]} scale={1.18}>
          <Cloud
            seed={8}
            segments={mobile ? mobileSegments : controls.segments}
            bounds={[controls.bounds, controls.bounds * 0.42, 1.45]}
            concentrate="inside"
            volume={controls.density}
            smallestVolume={0.18}
            growth={controls.softness * 5.6}
            fade={18}
            opacity={controls.opacity}
            speed={controls.noiseSpeed}
            color="#f8fcff"
          />
        </group>
        <group ref={distantCloud} position={[-3.15, -1.25, -3.4]} scale={0.72}>
          <Cloud
            seed={19}
            segments={mobile ? 16 : 24}
            bounds={[2.6, 0.72, 0.8]}
            concentrate="inside"
            volume={2.9}
            smallestVolume={0.16}
            growth={3.2}
            fade={11}
            opacity={0.24}
            speed={controls.noiseSpeed * 0.45}
            color="#dcebf3"
          />
        </group>
      </Clouds>
    </>
  );
}

export type CloudCurtainPhase = "entering" | "waiting" | "opening" | "complete";

export function CloudCurtainScene({
  phase,
  mobile,
  reducedMotion,
}: {
  phase: CloudCurtainPhase;
  mobile: boolean;
  reducedMotion: boolean;
}) {
  const leftCurtain = useRef<Group>(null);
  const rightCurtain = useRef<Group>(null);
  const opening = useRef(0);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    const target = phase === "opening" || phase === "complete" ? 1 : 0;
    opening.current = MathUtils.damp(opening.current, target, 3.4, delta);
    const progress = opening.current;
    const travel = mobile ? 4.2 : 6.2;

    if (leftCurtain.current) {
      leftCurtain.current.position.x = MathUtils.lerp(-0.85, -travel, progress);
      leftCurtain.current.position.y = MathUtils.lerp(0.18, 0.42, progress);
      leftCurtain.current.position.z = MathUtils.lerp(1.2, 1.65, progress);
      leftCurtain.current.scale.setScalar(MathUtils.lerp(1, 1.08, progress));
    }

    if (rightCurtain.current) {
      rightCurtain.current.position.x = MathUtils.lerp(0.95, travel, progress);
      rightCurtain.current.position.y = MathUtils.lerp(-0.2, -0.32, progress);
      rightCurtain.current.position.z = MathUtils.lerp(1.05, 1.55, progress);
      rightCurtain.current.scale.setScalar(MathUtils.lerp(1, 1.075, progress));
    }
  });

  const segments = mobile ? 28 : 48;

  return (
    <>
      <ambientLight intensity={1.4} color="#eaf6fb" />
      <directionalLight position={[-4, 5, 4]} intensity={1.5} color="#fff9f0" />
      <directionalLight position={[3, -2, 2]} intensity={0.28} color="#a5c4d5" />
      <Clouds texture="/Image/atmosphere/cloud.png" limit={mobile ? 60 : 96} range={mobile ? 60 : 96}>
        <group ref={leftCurtain} position={[-0.85, 0.18, 1.2]} rotation={[0.04, -0.12, 0.02]}>
          <Cloud seed={8} segments={segments} bounds={[4.65, 2.05, 1.5]} concentrate="inside" volume={5.8} smallestVolume={0.18} growth={4.1} fade={18} opacity={0.92} speed={0.065} color="#f8fcff" />
          <Cloud seed={13} segments={mobile ? 16 : 24} bounds={[2.5, 1.1, 1]} concentrate="inside" volume={3.3} smallestVolume={0.18} growth={3.2} fade={13} opacity={0.42} speed={0.04} color="#dcebf3" position={[-1.65, -0.55, -1.1]} />
        </group>
        <group ref={rightCurtain} position={[0.95, -0.2, 1.05]} rotation={[-0.03, 0.14, -0.03]}>
          <Cloud seed={21} segments={segments} bounds={[4.45, 2.25, 1.45]} concentrate="inside" volume={5.5} smallestVolume={0.18} growth={4.25} fade={18} opacity={0.9} speed={0.06} color="#fbfdff" />
          <Cloud seed={34} segments={mobile ? 16 : 22} bounds={[2.2, 0.95, 0.9]} concentrate="inside" volume={3} smallestVolume={0.16} growth={3.1} fade={12} opacity={0.36} speed={0.035} color="#d5e8f1" position={[1.55, 0.62, -1.2]} />
        </group>
      </Clouds>
    </>
  );
}

function DevControls({
  controls,
  onChange,
}: {
  controls: CloudLabControls;
  onChange: (key: keyof CloudLabControls, value: number | string) => void;
}) {
  const sliders: Array<[keyof CloudLabControls, string, number, number, number]> = [
    ["segments", "Segments", 20, 72, 1],
    ["bounds", "Bounds", 2.5, 5.5, 0.1],
    ["density", "Density", 2, 7, 0.1],
    ["opacity", "Opacity", 0.2, 0.9, 0.01],
    ["softness", "Softness", 0.3, 1, 0.01],
    ["driftSpeed", "Drift", 0, 0.12, 0.005],
    ["noiseSpeed", "Noise", 0, 0.2, 0.005],
    ["cameraStrength", "Camera", 0, 1, 0.05],
  ];

  return (
    <aside className={styles.controls} aria-label="Cloud laboratory controls">
      <p>Cloud laboratory</p>
      {sliders.map(([key, label, min, max, step]) => (
        <label key={key}>
          <span>{label}</span>
          <input type="range" min={min} max={max} step={step} value={controls[key] as number} onChange={(event) => onChange(key, Number(event.target.value))} />
        </label>
      ))}
      <label>
        <span>Sky</span>
        <input type="color" value={controls.background} onChange={(event) => onChange("background", event.target.value)} />
      </label>
      <label>
        <span>Light</span>
        <input type="color" value={controls.light} onChange={(event) => onChange("light", event.target.value)} />
      </label>
    </aside>
  );
}

export function CloudLab() {
  const [controls, setControls] = useState(DEFAULT_CONTROLS);
  const environment = useEnvironment();
  const development = process.env.NODE_ENV === "development";
  const canvasStyle = useMemo(
    () => ({ background: `radial-gradient(ellipse at 62% 22%, #f9fdff 0%, ${controls.background} 47%, #b9d4e2 100%)` }),
    [controls.background],
  );

  const updateControl = (key: keyof CloudLabControls, value: number | string) =>
    setControls((current) => ({ ...current, [key]: value } as CloudLabControls));

  return (
    <main className={styles.lab} style={canvasStyle}>
      <div className={styles.heading}>
        <p>Cloud Lab Active</p>
        <h1>Cloud laboratory</h1>
        <span>Sprite-based volume study — not integrated into the portfolio.</span>
      </div>
      {environment.webgl ? (
        <Canvas
          className={styles.canvas}
          camera={{ position: [0, 0.08, 9], fov: 32, near: 0.1, far: 40 }}
          dpr={environment.mobile ? [1, 1.25] : [1, 1.5]}
          frameloop={environment.active && !environment.reducedMotion ? "always" : "demand"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <CloudMotion controls={controls} mobile={environment.mobile} reducedMotion={environment.reducedMotion} />
        </Canvas>
      ) : (
        <div className={styles.fallback}>This browser does not support WebGL.</div>
      )}
      {development ? <DevControls controls={controls} onChange={updateControl} /> : null}
    </main>
  );
}
