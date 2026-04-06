import { Suspense, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

import TransitionOverlay from "../components/TransitionOverlay";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const heroImg = withBase("images/singularity-hero1.png");
const logo = withBase("images/singularity-logo1.png");

export default function HeroPC() {
  return (
    <section className="relative hidden h-screen w-full overflow-hidden bg-[#020611] md:block">
      {/* 背景 */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Singularity Background"
          className="h-full w-full object-cover scale-[1.08] opacity-[0.18]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(64,180,255,0.14),transparent_22%),radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(1,4,10,0.24)_0%,rgba(2,8,20,0.74)_45%,rgba(1,3,10,0.97)_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "94px 94px",
          }}
        />

        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent" />

        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[54%] bg-[linear-gradient(90deg,rgba(2,6,17,0.82)_0%,rgba(2,6,17,0.66)_36%,rgba(2,6,17,0.22)_74%,transparent_100%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[10%] top-[16%] h-[8px] w-[8px] rounded-full bg-cyan-300 blur-[6px] opacity-70 animate-pulse" />
          <span className="absolute left-[82%] top-[24%] h-[10px] w-[10px] rounded-full bg-fuchsia-300 blur-[8px] opacity-58 animate-pulse" />
          <span className="absolute left-[74%] top-[66%] h-[8px] w-[8px] rounded-full bg-violet-300 blur-[8px] opacity-56 animate-pulse" />
          <span className="absolute left-[20%] top-[72%] h-[8px] w-[8px] rounded-full bg-white blur-[8px] opacity-38 animate-pulse" />
        </div>
      </div>

      {/* WEBGL CORE */}
      <div className="absolute inset-0 z-[2] opacity-[0.84]">
        <Canvas camera={{ position: [0, 0, 9], fov: 46 }}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020611"]} />
            <fog attach="fog" args={["#020611", 9, 22]} />
            <ambientLight intensity={0.66} />
            <pointLight position={[0, 0, 8]} color="#9bd7ff" intensity={5.8} />
            <pointLight position={[4, 2, 4]} color="#c084fc" intensity={2.8} />
            <pointLight position={[-4, -2, 4]} color="#22d3ee" intensity={2.2} />
            <CoreScene />
          </Suspense>
        </Canvas>
      </div>

      {/* ロゴ */}
      <div className="absolute left-10 top-8 z-[20]">
        <img
          src={logo}
          alt="SINGULARITY Logo"
          className="w-[156px] opacity-[0.95] drop-shadow-[0_0_14px_rgba(255,255,255,0.08)]"
        />
      </div>

      {/* タイポとUI */}
      <div className="relative z-[10] mx-auto flex h-full w-full max-w-[1460px] items-center px-10">
        <div className="grid w-full grid-cols-[minmax(0,1.15fr)_minmax(400px,0.85fr)] items-center gap-10">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      {/* 前面の縦光 */}
      <div className="pointer-events-none absolute left-1/2 top-[8%] z-[12] h-[82%] w-[180px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(170,240,255,0.08)_0%,rgba(170,240,255,0.03)_30%,transparent_74%)] blur-[14px]" />
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="relative z-[14] pl-2">
      <div className="mb-6 flex items-center gap-4">
        <span className="text-[11px] tracking-[0.34em] text-cyan-200/86">
          SINGULARITY LAB
        </span>
        <span className="h-px w-14 bg-gradient-to-r from-cyan-300/60 to-transparent" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-white/42">
          FUTURE NODE / 01
        </span>
      </div>

      <div className="relative max-w-[760px]">
        <div className="pointer-events-none absolute -left-2 top-[-22px] select-none text-[96px] font-black uppercase leading-none tracking-[0.10em] text-white/[0.035] blur-[1px]">
          SINGULARITY
        </div>

        <h1 className="relative mb-5 text-[72px] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
          <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#d3eeff_52%,#95ddff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(144,220,255,0.12)]">
            HUMAN × AI
          </span>
          <span className="mt-2 block bg-[linear-gradient(90deg,#ffffff_0%,#dfc5ff_48%,#96efff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(192,132,252,0.14)]">
            INTERFACE
          </span>
        </h1>

        <div className="relative mb-7">
          <p className="absolute left-[1px] top-[1px] text-[32px] font-light tracking-[0.18em] text-cyan-300/16">
            境界の研究室
          </p>
          <p className="relative text-[32px] font-light tracking-[0.18em] text-white">
            境界の研究室
          </p>
        </div>
      </div>

      <p className="max-w-[620px] text-[15px] leading-[1.95] text-white/80">
        これは説明のためのトップではなく、
        人類と人工知能の境界面を視覚化した観測装置。
        思考、視覚、推論、生成が一点へ収束し、
        静かな特異点として鼓動している。
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <StatusChip label="LANGUAGE" value="LIVE" color="cyan" />
        <StatusChip label="VISION" value="MERGING" color="fuchsia" />
        <StatusChip label="REASONING" value="AWAKE" color="violet" />
      </div>

      <div className="mt-8 flex items-center gap-5">
        <button
          type="button"
          className="
            group relative inline-flex items-center gap-4 overflow-hidden rounded-pill
            border border-cyan-200/22 bg-[rgba(8,18,38,0.74)] px-6 py-4
            shadow-[0_0_36px_-18px_rgba(34,211,238,0.36)]
            transition-all duration-300
            hover:border-cyan-200/38 hover:shadow-[0_0_52px_-18px_rgba(34,211,238,0.48)]
          "
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent_35%,rgba(192,132,252,0.08))]" />
          <span className="relative z-10 text-[11px] tracking-[0.26em] text-cyan-200">
            ENTER THE LOG
          </span>
          <span className="relative z-10 text-[13px] text-white">
            観測記録を開く
          </span>
          <span className="relative z-10 text-[16px] text-cyan-200 transition-transform duration-300 group-hover:translate-x-[4px]">
            →
          </span>
        </button>

        <div className="text-[12px] leading-[1.8] text-white/50">
          ここから各知性層へ接続。
          <br />
          作品としてのAI研究室へ。
        </div>
      </div>

      <div className="mt-9 max-w-[650px] overflow-hidden rounded-[28px] border border-white/14 bg-[linear-gradient(135deg,rgba(4,14,28,0.90),rgba(10,20,38,0.68),rgba(110,76,255,0.14))] p-5 shadow-[0_22px_56px_-44px_rgba(120,90,255,0.34)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11px] tracking-[0.26em] text-fuchsia-200/84">
            CENTRAL CORE / AGI
          </p>
          <span className="font-mono text-[10px] tracking-[0.20em] text-white/40">
            NEXT PHASE
          </span>
        </div>

        <p className="mb-2 text-[22px] font-light tracking-[0.05em] text-white">
          すべてを統合する知性の核
        </p>

        <p className="max-w-[540px] text-[13px] leading-[1.9] text-white/72">
          ChatGPT、Claude、Gemini、DeepSeek、Midjourney。
          個別機能の先で、それらを束ねる“次の知性”を仮説として展示する中枢区画。
        </p>
      </div>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="relative z-[14] flex flex-col items-end pt-10">
      <div className="mb-4 w-full max-w-[500px]">
        <p className="mb-2 text-[11px] tracking-[0.26em] text-white/66">
          AI ROOM ACCESS
        </p>
        <p className="max-w-[440px] text-[12px] leading-[1.8] text-white/48">
          各知性層へ接続。
        </p>
      </div>

      <div className="grid w-full max-w-[500px] gap-3">
        <Category
          label="ChatGPT"
          desc="思考・言語・解釈に強い対話OS"
          meta="LANGUAGE / STRUCTURE"
          to="/chatgpt"
          glow="cyan"
        />
        <Category
          label="Gemini"
          desc="検索・画像・動画を横断する統合知性"
          meta="SEARCH / MULTIMODAL"
          to="/gemini"
          glow="sky"
        />
        <Category
          label="Claude"
          desc="長文読解と安定推論に寄った静かな側近"
          meta="LONG CONTEXT / STABILITY"
          to="/claude"
          glow="violet"
        />
        <Category
          label="DeepSeek"
          desc="演算、推論、コスパへ振り切った計算炉"
          meta="COMPUTE / REASONING"
          to="/deepseek"
          glow="emerald"
        />
        <Category
          label="Midjourney"
          desc="視覚世界を一枚へ圧縮する生成装置"
          meta="VISUAL / IMAGINATION"
          to="/midjourney"
          glow="fuchsia"
        />
      </div>
    </div>
  );
}

function StatusChip({ label, value, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.55)]",
    fuchsia: "bg-fuchsia-300 shadow-[0_0_14px_rgba(244,114,182,0.55)]",
    violet: "bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.55)]",
  };

  return (
    <div className="inline-flex items-center gap-3 rounded-pill border border-white/10 bg-[rgba(8,18,38,0.56)] px-4 py-[10px] backdrop-blur-xs">
      <span className={`h-[6px] w-[6px] rounded-full ${map[color]}`} />
      <span className="font-mono text-[11px] tracking-[0.18em] text-white/54">
        {label}
      </span>
      <span className="text-[11px] text-white">{value}</span>
    </div>
  );
}

function Category({ label, desc, meta, to, glow = "cyan" }) {
  const navigate = useNavigate();

  const glowMap = {
    cyan: "from-cyan-300/10",
    sky: "from-sky-300/10",
    violet: "from-violet-300/10",
    emerald: "from-emerald-300/10",
    fuchsia: "from-fuchsia-300/10",
  };

  const dotMap = {
    cyan: "bg-cyan-300",
    sky: "bg-sky-300",
    violet: "bg-violet-300",
    emerald: "bg-emerald-300",
    fuchsia: "bg-fuchsia-300",
  };

  const handleClick = async () => {
    await TransitionOverlay.play();
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group w-full text-left"
    >
      <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[rgba(7,18,34,0.38)] p-4 backdrop-blur-[8px] transition-all duration-300 group-hover:-translate-y-[3px] group-hover:border-white/22 group-hover:bg-[rgba(9,22,42,0.56)] group-hover:shadow-[0_20px_70px_-48px_rgba(255,255,255,0.28)]">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-[132px] bg-gradient-to-r ${glowMap[glow]} to-transparent blur-2xl`}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
        <div
          className={`absolute left-4 top-[20px] h-[6px] w-[6px] rounded-full ${dotMap[glow]} shadow-[0_0_12px_rgba(255,255,255,0.24)]`}
        />

        <div className="flex items-start justify-between gap-4 pl-5">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <p className="text-[18px] font-light tracking-[0.02em] text-white">
                {label}
              </p>
              <span className="font-mono text-[9px] tracking-[0.18em] text-white/34">
                {meta}
              </span>
            </div>
            <p className="text-[12px] leading-[1.75] text-white/62">{desc}</p>
          </div>

          <span className="mt-[2px] text-[16px] text-white/14 transition-all duration-300 group-hover:translate-x-[5px] group-hover:text-white/82">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

/* =========================
   THREE CORE
========================= */

function CoreScene() {
  return (
    <group>
      <Sparkles
        count={140}
        scale={[14, 10, 10]}
        size={2}
        speed={0.36}
        opacity={0.82}
        color="#9be7ff"
      />

      <Float speed={1.2} rotationIntensity={0.34} floatIntensity={0.56}>
        <EnergyShell />
      </Float>

      <OrbitRings />
      <DataShards />
      <VerticalBeam />
    </group>
  );
}

function EnergyShell() {
  const outerRef = useRef();
  const innerRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.18;
      outerRef.current.rotation.x = Math.sin(t * 0.24) * 0.14;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.36;
      innerRef.current.rotation.z = t * 0.18;
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.16;
      wireRef.current.rotation.y = -t * 0.26;
    }
  });

  return (
    <group position={[0.12, 0.16, 0]}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.65, 40]} />
        <MeshDistortMaterial
          color="#8ee7ff"
          emissive="#49c9ff"
          emissiveIntensity={1.15}
          roughness={0.06}
          metalness={0.36}
          distort={0.28}
          speed={1.9}
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh ref={innerRef} scale={0.7}>
        <torusKnotGeometry args={[1.18, 0.18, 220, 28, 2, 3]} />
        <meshStandardMaterial
          color="#d5b7ff"
          emissive="#9a5cff"
          emissiveIntensity={1.75}
          metalness={0.74}
          roughness={0.16}
        />
      </mesh>

      <mesh ref={wireRef} scale={1.12}>
        <torusGeometry args={[2.2, 0.03, 20, 160]} />
        <meshBasicMaterial color="#b7f0ff" transparent opacity={0.24} />
      </mesh>

      <mesh scale={0.22}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function OrbitRings() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * 0.06;
      groupRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0.12, 0.16, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          rotation={[
            i === 0 ? Math.PI / 2.4 : i === 1 ? Math.PI / 3 : Math.PI / 1.7,
            i === 0 ? 0 : i === 1 ? Math.PI / 4 : Math.PI / 6,
            i === 2 ? Math.PI / 3 : 0,
          ]}
        >
          <torusGeometry args={[2.9 + i * 0.3, 0.024, 20, 200]} />
          <meshBasicMaterial
            color={i === 0 ? "#7de8ff" : i === 1 ? "#d5b7ff" : "#ffffff"}
            transparent
            opacity={i === 1 ? 0.22 : 0.18}
          />
        </mesh>
      ))}
    </group>
  );
}

function DataShards() {
  const group = useRef();
  const shards = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const angle = (i / 18) * Math.PI * 2;
      const radius = 3.9 + Math.random() * 1.2;
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 4.2,
          Math.sin(angle) * radius,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: 0.08 + Math.random() * 0.1,
      };
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = -t * 0.09;
    }
  });

  return (
    <group ref={group}>
      {shards.map((item, i) => (
        <mesh
          key={i}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#91e8ff" : "#d9c2ff"}
            emissive={i % 2 === 0 ? "#35cfff" : "#9c61ff"}
            emissiveIntensity={1.1}
            metalness={0.72}
            roughness={0.16}
          />
        </mesh>
      ))}
    </group>
  );
}

function VerticalBeam() {
  const beamRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (beamRef.current) {
      beamRef.current.scale.y = 1 + Math.sin(t * 1.6) * 0.06;
      beamRef.current.material.opacity = 0.18 + Math.sin(t * 2) * 0.04;
    }
  });

  return (
    <mesh ref={beamRef} position={[0.12, 0.16, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 8.2, 32, 1, true]} />
      <meshBasicMaterial
        color="#a8f2ff"
        transparent
        opacity={0.18}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}