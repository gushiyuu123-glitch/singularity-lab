import { Suspense, useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import TransitionOverlay from "../components/TransitionOverlay";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;
const heroImg = withBase("images/singularity-hero1.png");
const logo = withBase("images/singularity-logo1.png");

/* ─────────────────────────────────────────────────────────
   定数
───────────────────────────────────────────────────────── */
const CX = 0.12;
const CY = 0.16;
const CZ = 0.0;

/* ─────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────── */
export default function HeroPC() {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scanRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, { opacity: 0, y: -16, filter: "blur(12px)" });
      gsap.set(leftRef.current, { opacity: 0, x: -24, filter: "blur(14px)" });
      gsap.set(rightRef.current, { opacity: 0, x: 20, filter: "blur(12px)" });
      gsap.set(panelRef.current, { opacity: 0, y: 18, filter: "blur(10px)" });
      gsap.set(scanRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(scanRef.current, { scaleX: 1, opacity: 1, duration: 1.4, ease: "power4.inOut" }, 0.1);
      tl.to(logoRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, 0.2);
      tl.to(leftRef.current, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.1 }, 0.44);
      tl.to(rightRef.current, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.0 }, 0.6);
      tl.to(panelRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.95 }, 0.84);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative hidden h-screen w-full overflow-hidden bg-[#020611] md:block"
    >
      {/* 背景 */}
      <SceneBG />

      {/* WebGL */}
      <div className="absolute inset-0 z-[2] opacity-[0.88]">
        <Canvas camera={{ position: [0, 0, 9], fov: 46 }} gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020611"]} />
            <fog attach="fog" args={["#020611", 10, 26]} />
            <ambientLight intensity={0.62} />
            <pointLight position={[0, 0, 8]} color="#9bd7ff" intensity={7.0} />
            <pointLight position={[4, 2, 4]} color="#c084fc" intensity={3.6} />
            <pointLight position={[-4, -2, 4]} color="#22d3ee" intensity={2.8} />
            <pointLight position={[0, -4, 6]} color="#ffffff" intensity={1.2} />
            <pointLight position={[-5, 5, 2]} color="#818cf8" intensity={2.2} />
            <CoreScene />
          </Suspense>
        </Canvas>
      </div>

      {/* スキャンライン */}
      <div
        ref={scanRef}
        className="pointer-events-none absolute inset-x-0 z-[8]"
        style={{ top: "50%", height: "1px" }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent" />
      </div>

      {/* ロゴ */}
      <div ref={logoRef} className="absolute left-10 top-8 z-[20]">
        <img
          src={logo}
          alt="SINGULARITY Logo"
          className="w-[156px] opacity-[0.97] drop-shadow-[0_0_18px_rgba(147,221,255,0.12)]"
        />
      </div>

      {/* UI */}
      <div className="relative z-[10] mx-auto flex h-full w-full max-w-[1460px] items-center px-10">
        <div className="grid w-full grid-cols-[minmax(0,1.15fr)_minmax(400px,0.85fr)] items-center gap-10">
          <div ref={leftRef}>
            <HeroLeft panelRef={panelRef} />
          </div>
          <div ref={rightRef}>
            <HeroRight />
          </div>
        </div>
      </div>

      {/* ORIGIN LINK — 左下 */}
      <div className="fixed bottom-8 left-10 z-[40]">
        <a
          href="https://origin-gray.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ORIGIN"
          className="group inline-flex items-center gap-4 select-none"
        >
          <span
            className="block h-px w-[56px] transition-all duration-500 group-hover:w-[84px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(160,220,255,0), rgba(160,220,255,0.85), rgba(255,255,255,0.18))",
              opacity: 0.72,
              boxShadow: "0 0 10px rgba(120,170,255,0.18)",
            }}
          />

          <div
            className="transition-all duration-500 group-hover:-translate-y-[1px]"
            style={{
              color: "rgba(255,255,255,0.88)",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.35), 0 0 10px rgba(120,170,255,0.12)",
            }}
          >
            <p
              className="text-[9px] uppercase tracking-[0.42em] transition-all duration-500 group-hover:tracking-[0.48em]"
              style={{ opacity: 0.44 }}
            >
              Origin
            </p>
     <p
  className="mt-[6px] text-[13px] tracking-[0.18em] transition-all duration-500 group-hover:tracking-[0.24em]"
  style={{ opacity: 0.84 }}
>
  過去への扉を開く
</p>
          </div>
        </a>
      </div>

      {/* GUSHIKEN DESIGN LINK — 右下 */}
      <div className="fixed bottom-8 right-10 z-[40]">
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GUSHIKEN DESIGN"
          className="group inline-flex items-center gap-4 select-none"
        >
          <div
            className="text-right transition-all duration-500 group-hover:-translate-y-[1px]"
            style={{
              color: "rgba(255,255,255,0.88)",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="text-[9px] uppercase tracking-[0.42em] transition-all duration-500 group-hover:tracking-[0.48em]"
              style={{ opacity: 0.42 }}
            >
              Base
            </p>
            <p
              className="mt-[6px] text-[13px] tracking-[0.16em] transition-all duration-500 group-hover:tracking-[0.22em]"
              style={{ opacity: 0.82 }}
            >
              GUSHIKEN DESIGN
            </p>
          </div>

          <span
            className="block h-px w-[56px] transition-all duration-500 group-hover:w-[84px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(170,240,255,0.74), rgba(170,240,255,0))",
              opacity: 0.68,
              boxShadow: "0 0 8px rgba(170,240,255,0.12)",
            }}
          />
        </a>
      </div>

      {/* 前面縦光 */}
      <div className="pointer-events-none absolute left-1/2 top-[8%] z-[12] h-[82%] w-[180px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(170,240,255,0.06)_0%,rgba(170,240,255,0.02)_32%,transparent_72%)] blur-[18px]" />
      {/* 底部フェード */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-[26%] bg-gradient-to-t from-[#020611] to-transparent" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   背景
───────────────────────────────────────────────────────── */
function SceneBG() {
  return (
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover scale-[1.08] opacity-[0.10]"
      />

      {/* グラデーション */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_68%_54%_at_54%_42%,rgba(64,190,255,0.13),transparent_58%),radial-gradient(ellipse_48%_34%_at_52%_18%,rgba(255,255,255,0.04),transparent_50%),radial-gradient(ellipse_42%_34%_at_58%_76%,rgba(197,118,255,0.07),transparent_54%),linear-gradient(180deg,rgba(1,4,10,0.22)_0%,rgba(2,8,20,0.72)_44%,rgba(1,3,10,0.98)_100%)]" />

      {/* グリッド（大） */}
      <div
        className="absolute inset-0 opacity-[0.048] mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "94px 94px",
        }}
      />

      {/* グリッド（細） */}
      <div
        className="absolute inset-0 opacity-[0.020] mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "23.5px 23.5px",
        }}
      />

      {/* センター縦線 */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/14 to-transparent" />

      {/* 左グラデーション */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[54%] bg-[linear-gradient(90deg,rgba(2,6,17,0.84)_0%,rgba(2,6,17,0.66)_36%,rgba(2,6,17,0.20)_76%,transparent_100%)]" />

      {/* アクセントドット */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { l: "10%", t: "14%", c: "bg-cyan-300", s: "h-[10px] w-[10px]", d: "0s" },
          { l: "83%", t: "22%", c: "bg-fuchsia-300", s: "h-[10px] w-[10px]", d: "0.8s" },
          { l: "74%", t: "66%", c: "bg-violet-300", s: "h-[9px] w-[9px]", d: "1.4s" },
          { l: "20%", t: "74%", c: "bg-white", s: "h-[8px] w-[8px]", d: "0.4s" },
          { l: "60%", t: "9%", c: "bg-sky-300", s: "h-[8px] w-[8px]", d: "1.1s" },
          { l: "38%", t: "86%", c: "bg-indigo-300", s: "h-[7px] w-[7px]", d: "1.9s" },
        ].map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full blur-[8px] animate-pulse opacity-60 ${p.s} ${p.c}`}
            style={{ left: p.l, top: p.t, animationDelay: p.d }}
          />
        ))}
      </div>

      {/* SVGノイズ */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.022]" aria-hidden="true">
        <filter id="fn">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fn)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   左カラム
───────────────────────────────────────────────────────── */
function HeroLeft({ panelRef }) {
  return (
    <div className="relative z-[14] pl-2">
      {/* ラベル行 */}
      <div className="mb-6 flex items-center gap-4">
        <span className="flex items-center gap-2">
          <span className="h-[5px] w-[5px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse" />
          <span className="text-[10.5px] tracking-[0.36em] text-cyan-200/84 uppercase">
            Singularity Lab
          </span>
        </span>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-300/48 to-transparent" />
        <span className="font-mono text-[9.5px] tracking-[0.26em] text-white/34 uppercase">
          Future Node / 01
        </span>
      </div>

      {/* タイトル */}
      <div className="relative max-w-[760px]">
        <div className="pointer-events-none absolute -left-2 top-[-22px] select-none text-[96px] font-black uppercase leading-none tracking-[0.10em] text-white/[0.028] blur-[1.5px]">
          SINGULARITY
        </div>

        <h1 className="relative mb-5 text-[76px] font-semibold leading-[0.92] tracking-[-0.048em] text-white">
          <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#cceeff_44%,#8ad4ff_100%)] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(138,212,255,0.14)]">
            HUMAN × AI
          </span>
          <span className="mt-1 block bg-[linear-gradient(100deg,#ffffff_0%,#dcc6ff_40%,#9bf0ff_82%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_2px_26px_rgba(192,132,252,0.15)]">
            INTERFACE
          </span>
        </h1>

        <div className="relative mb-8">
          <p className="absolute left-[1px] top-[1px] select-none text-[32px] font-extralight tracking-[0.22em] text-cyan-300/14">
            境界の研究室
          </p>
          <p className="relative text-[32px] font-extralight tracking-[0.22em] text-white/90">
            境界の研究室
          </p>
          <span className="mt-2 block h-px w-20 bg-gradient-to-r from-cyan-300/30 to-transparent" />
        </div>
      </div>

      {/* 本文 */}
      <p className="max-w-[620px] text-[14.5px] leading-[2.05] text-white/74 tracking-[0.01em]">
        AIって結局何ができるの？
        それを、見てわかる形でまとめた研究室。
        考えるAI、調べるAI、作るAIを、
        ひとつずつ体験できる入口です。
      </p>

      {/* バッジ */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <StatusChip label="LANGUAGE" value="LIVE" color="cyan" pulse />
        <StatusChip label="VISION" value="MERGING" color="fuchsia" />
        <StatusChip label="REASONING" value="AWAKE" color="violet" pulse />
      </div>

      {/* CTAボタン */}
      <div className="mt-8 flex items-center gap-5">
        <EnterButton />
        <div className="text-[12px] leading-[1.84] text-white/44 tracking-[0.02em]">
          気になるAIを選んで、
          <br />
          違いを見ていけます。
        </div>
      </div>

      {/* AGIパネル */}
      <div
        ref={panelRef}
        className="mt-9 max-w-[650px] overflow-hidden rounded-[28px] border border-white/[0.13] bg-[linear-gradient(135deg,rgba(4,14,28,0.92),rgba(10,20,40,0.72),rgba(110,76,255,0.12))] p-5 shadow-[0_20px_60px_-40px_rgba(110,80,255,0.30),inset_0_0_0_0.5px_rgba(255,255,255,0.04)]"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-[4px] w-[4px] rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.9)] animate-pulse" />
            <p className="text-[10.5px] tracking-[0.28em] text-fuchsia-200/80 uppercase">
              Central Core / AGI
            </p>
          </div>
          <span className="font-mono text-[9.5px] tracking-[0.22em] text-white/34 uppercase">
            Next Phase
          </span>
        </div>

        <p className="mb-2.5 text-[21px] font-extralight tracking-[0.04em] text-white/94">
          いろんなAIをまとめて見る中枢
        </p>

        <p className="max-w-[540px] text-[12.5px] leading-[1.95] text-white/64">
          ChatGPT、Claude、Gemini、DeepSeek、Midjourney。
          それぞれの違いや役割を見ながら、
          その先にある“次のAI”まで考えるための部屋です。
        </p>

        {/* メトリクス行 */}
        <div className="mt-4 flex gap-6 border-t border-white/[0.07] pt-3.5">
          {[
            { k: "NODES", v: "5" },
            { k: "LAYERS", v: "∞" },
            { k: "STATUS", v: "INTEGRATING" },
          ].map(({ k, v }) => (
            <div key={k} className="flex flex-col gap-[5px]">
              <span className="font-mono text-[9px] tracking-[0.24em] text-white/28 uppercase">
                {k}
              </span>
              <span className="text-[13px] font-light text-white/76 tracking-[0.06em]">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnterButton() {
  const navigate = useNavigate();
  const [hov, setHov] = useState(false);

  const handleClick = useCallback(async () => {
    await TransitionOverlay.play();
    navigate("/log-room");
  }, [navigate]);

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-cyan-200/20 bg-[rgba(6,16,36,0.80)] px-7 py-[14px] shadow-[0_0_40px_-22px_rgba(34,211,238,0.32)] transition-all duration-350 hover:border-cyan-200/34 hover:shadow-[0_0_56px_-18px_rgba(34,211,238,0.44)]"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(34,211,238,0.08),transparent_32%,rgba(192,132,252,0.08))]" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/26 to-transparent" />
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-350"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.09), transparent 68%)",
          opacity: hov ? 1 : 0,
        }}
      />

      <span className="relative z-10 text-[10.5px] tracking-[0.28em] text-cyan-200/88 uppercase">
        Enter the Log Room
      </span>
      <span className="relative z-10 text-[13px] text-white/80">
        観測記録室へ
      </span>
      <span
        className="relative z-10 text-[15px] text-cyan-200 transition-transform duration-300"
        style={{ transform: hov ? "translateX(4px)" : "translateX(0)" }}
      >
        →
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   右カラム
───────────────────────────────────────────────────────── */
function HeroRight() {
  return (
    <div className="relative z-[14] flex flex-col items-end pt-10">
      <div className="mb-5 w-full max-w-[500px]">
        <div className="mb-1.5 flex items-center gap-3">
          <span className="h-px w-5 bg-gradient-to-r from-transparent to-white/20" />
          <p className="font-mono text-[10px] tracking-[0.30em] text-white/48 uppercase">
            AI Room Access
          </p>
        </div>
        <p className="text-[12px] leading-[1.82] text-white/36 tracking-[0.02em]">
          気になるAIを選んで、違いを見ていけます。
        </p>
      </div>

      <div className="grid w-full max-w-[500px] gap-[10px]">
        {[
          { label: "ChatGPT", desc: "考えを整理したり、文章に強いAI", meta: "LANGUAGE / STRUCTURE", to: "/chatgpt", glow: "cyan", idx: 0 },
          { label: "Gemini", desc: "検索や画像まで広く扱えるAI", meta: "SEARCH / MULTIMODAL", to: "/gemini", glow: "sky", idx: 1 },
          { label: "Claude", desc: "長い文章を読むのが得意なAI", meta: "LONG CONTEXT / STABILITY", to: "/claude", glow: "violet", idx: 2 },
          { label: "DeepSeek", desc: "推論やコードを速く回しやすいAI", meta: "COMPUTE / REASONING", to: "/deepseek", glow: "emerald", idx: 3 },
          { label: "Midjourney", desc: "イメージや世界観づくりに強いAI", meta: "VISUAL / IMAGINATION", to: "/midjourney", glow: "fuchsia", idx: 4 },
        ].map((c) => (
          <Category key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ステータスチップ
───────────────────────────────────────────────────────── */
function StatusChip({ label, value, color = "cyan", pulse = false }) {
  const cfg = {
    cyan: { dot: "bg-cyan-400", glow: "shadow-[0_0_10px_rgba(34,211,238,0.8)]" },
    fuchsia: { dot: "bg-fuchsia-400", glow: "shadow-[0_0_10px_rgba(232,121,249,0.7)]" },
    violet: { dot: "bg-violet-400", glow: "shadow-[0_0_10px_rgba(167,139,250,0.7)]" },
  };
  const { dot, glow } = cfg[color] ?? cfg.cyan;

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-[rgba(6,14,32,0.60)] px-4 py-[9px] backdrop-blur-sm">
      <span className={`relative h-[5px] w-[5px] rounded-full ${dot} ${glow}`}>
        {pulse && <span className={`absolute inset-0 rounded-full ${dot} animate-ping opacity-60`} />}
      </span>
      <span className="font-mono text-[10px] tracking-[0.20em] text-white/44 uppercase">{label}</span>
      <span className="text-[10.5px] text-white/82 font-light tracking-[0.05em]">{value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   カテゴリカード
───────────────────────────────────────────────────────── */
function Category({ label, desc, meta, to, glow = "cyan", idx = 0 }) {
  const navigate = useNavigate();
  const [hov, setHov] = useState(false);

  const G = {
    cyan: { from: "from-cyan-400/10", dot: "bg-cyan-400", bar: "bg-cyan-400" },
    sky: { from: "from-sky-400/10", dot: "bg-sky-400", bar: "bg-sky-400" },
    violet: { from: "from-violet-400/10", dot: "bg-violet-400", bar: "bg-violet-400" },
    emerald: { from: "from-emerald-400/10", dot: "bg-emerald-400", bar: "bg-emerald-400" },
    fuchsia: { from: "from-fuchsia-400/10", dot: "bg-fuchsia-400", bar: "bg-fuchsia-400" },
  };
  const { from, dot, bar } = G[glow] ?? G.cyan;

  const handleClick = useCallback(async () => {
    await TransitionOverlay.play();
    navigate(to);
  }, [navigate, to]);

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group w-full text-left"
    >
      <div
        className="relative overflow-hidden rounded-[22px] border border-white/[0.10] p-4 backdrop-blur-[10px] transition-all duration-300"
        style={{
          background: hov ? "rgba(8,20,42,0.62)" : "rgba(6,16,32,0.40)",
          borderColor: hov ? "rgba(255,255,255,0.18)" : undefined,
          transform: hov ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hov
            ? "0 18px 58px -30px rgba(255,255,255,0.22), inset 0 0 0 0.5px rgba(255,255,255,0.05)"
            : "inset 0 0 0 0.5px rgba(255,255,255,0.02)",
        }}
      >
        {/* グロウ */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-[110px] bg-gradient-to-r ${from} to-transparent blur-2xl transition-opacity duration-300`}
          style={{ opacity: hov ? 1.5 : 0.8 }}
        />
        {/* 上端ライン */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* 左カラーバー */}
        <div
          className={`absolute left-0 top-[20%] bottom-[20%] w-[2px] rounded-r-full ${bar} transition-opacity duration-300`}
          style={{ opacity: hov ? 0.65 : 0.28 }}
        />
        {/* 番号 */}
        <div
          className="pointer-events-none absolute right-4 top-3 font-mono text-[9px] tracking-[0.22em] text-white/16 transition-opacity duration-300"
          style={{ opacity: hov ? 0.42 : 0.16 }}
        >
          {String(idx + 1).padStart(2, "0")}
        </div>

        <div className="flex items-center justify-between gap-4 pl-5">
          <div className="flex-1">
            <div className="mb-[5px] flex items-center gap-3">
              <span className={`h-[5px] w-[5px] rounded-full ${dot}`} />
              <p className="text-[17.5px] font-light tracking-[0.01em] text-white/90">{label}</p>
              <span
                className="h-px bg-white/20 transition-all duration-300"
                style={{ width: hov ? "22px" : "12px" }}
              />
              <span className="font-mono text-[8.5px] tracking-[0.20em] text-white/26 uppercase">{meta}</span>
            </div>
            <p className="text-[12px] leading-[1.76] text-white/52 tracking-[0.01em]">{desc}</p>
          </div>
          <span
            className="flex-shrink-0 text-[15px] text-white/14 transition-all duration-300"
            style={{ transform: hov ? "translateX(5px)" : "translateX(0)", opacity: hov ? 0.86 : 0.18 }}
          >
            →
          </span>
        </div>
      </div>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   THREE.JS
═══════════════════════════════════════════════════════ */

function CoreScene() {
  return (
    <group>
      <Sparkles count={200} scale={[16, 12, 12]} size={2.3} speed={0.34} opacity={0.8} color="#9be7ff" />
      <Sparkles count={70} scale={[10, 8, 8]} size={1.3} speed={0.2} opacity={0.46} color="#d5b7ff" />

      <Float speed={1.2} rotationIntensity={0.32} floatIntensity={0.52}>
        <EnergyShell />
      </Float>

      <OrbitRings />
      <DataShards />
      <VerticalBeam />
      <FieldLines />
      <SatelliteOrbs />
      <PulseHalos />
    </group>
  );
}

/* ── エネルギーシェル ─────────────────────────────────── */
function EnergyShell() {
  const outerRef = useRef();
  const inner1Ref = useRef();
  const inner2Ref = useRef();
  const wireRef = useRef();
  const haloRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.17;
      outerRef.current.rotation.x = Math.sin(t * 0.22) * 0.12;
      outerRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.016);
    }
    if (inner1Ref.current) {
      inner1Ref.current.rotation.y = -t * 0.34;
      inner1Ref.current.rotation.z = t * 0.17;
    }
    if (inner2Ref.current) {
      inner2Ref.current.rotation.x = -t * 0.15;
      inner2Ref.current.rotation.y = t * 0.22;
      inner2Ref.current.rotation.z = Math.sin(t * 0.44) * 0.12;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.12;
      wireRef.current.rotation.y = -t * 0.2;
    }
    if (haloRef.current) {
      haloRef.current.material.opacity = 0.055 + Math.sin(t * 2.0) * 0.022;
      haloRef.current.scale.setScalar(1 + Math.sin(t * 2.0) * 0.042);
    }
  });

  return (
    <group position={[CX, CY, CZ]}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.65, 44]} />
        <MeshDistortMaterial
          color="#8ee7ff"
          emissive="#3ec8ff"
          emissiveIntensity={1.3}
          roughness={0.05}
          metalness={0.36}
          distort={0.27}
          speed={2.0}
          transparent
          opacity={0.16}
        />
      </mesh>

      <mesh ref={inner1Ref} scale={0.72}>
        <torusKnotGeometry args={[1.18, 0.2, 240, 32, 2, 3]} />
        <meshStandardMaterial
          color="#d5b7ff"
          emissive="#8844ff"
          emissiveIntensity={1.95}
          metalness={0.82}
          roughness={0.12}
        />
      </mesh>

      <mesh ref={inner2Ref} scale={0.46} rotation={[0.9, 0.4, 0.5]}>
        <torusKnotGeometry args={[1.12, 0.16, 180, 26, 3, 5]} />
        <meshStandardMaterial
          color="#9be7ff"
          emissive="#3ac8ff"
          emissiveIntensity={1.55}
          metalness={0.78}
          roughness={0.14}
        />
      </mesh>

      <mesh ref={wireRef} scale={1.14}>
        <torusGeometry args={[2.22, 0.026, 22, 200]} />
        <meshBasicMaterial color="#b7f0ff" transparent opacity={0.22} />
      </mesh>

      <mesh scale={1.36} rotation={[Math.PI / 3.2, 0.22, 0]}>
        <torusGeometry args={[2.5, 0.014, 16, 160]} />
        <meshBasicMaterial color="#d5b7ff" transparent opacity={0.1} />
      </mesh>

      <mesh scale={0.2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh ref={haloRef}>
        <sphereGeometry args={[2.75, 32, 32]} />
        <meshBasicMaterial color="#a0f0ff" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

/* ── オービットリング ─────────────────────────────────── */
function OrbitRings() {
  const g1Ref = useRef();
  const g2Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (g1Ref.current) {
      g1Ref.current.rotation.z = t * 0.055;
      g1Ref.current.rotation.y = t * 0.07;
    }
    if (g2Ref.current) {
      g2Ref.current.rotation.x = -t * 0.048;
      g2Ref.current.rotation.z = t * 0.038;
    }
  });

  return (
    <>
      <group ref={g1Ref} position={[CX, CY, CZ]}>
        {[
          { r: 2.92, t: 0.024, rot: [Math.PI / 2.4, 0, 0], c: "#7de8ff", o: 0.16 },
          { r: 3.22, t: 0.017, rot: [Math.PI / 3, Math.PI / 4, 0], c: "#d5b7ff", o: 0.12 },
          { r: 3.56, t: 0.012, rot: [Math.PI / 1.8, Math.PI / 6, Math.PI / 3.5], c: "#a8f2ff", o: 0.07 },
        ].map((cfg, i) => (
          <mesh key={i} rotation={cfg.rot}>
            <torusGeometry args={[cfg.r, cfg.t, 22, 200]} />
            <meshBasicMaterial color={cfg.c} transparent opacity={cfg.o} />
          </mesh>
        ))}
      </group>
      <group ref={g2Ref} position={[CX, CY, CZ]}>
        <mesh rotation={[0.5, 0.9, 0.3]}>
          <torusGeometry args={[4.2, 0.01, 12, 160]} />
          <meshBasicMaterial color="#e5d7ff" transparent opacity={0.04} />
        </mesh>
      </group>
    </>
  );
}

/* ── データシャード ───────────────────────────────────── */
function DataShards() {
  const group = useRef();

  const shards = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const radius = 3.9 + Math.random() * 1.6;
        const palette = [
          ["#91e8ff", "#28ccff"],
          ["#d9c2ff", "#9c61ff"],
          ["#a8f5e0", "#30e8b0"],
        ];
        return {
          position: [
            Math.cos(angle) * radius + CX,
            (Math.random() - 0.5) * 5.0,
            Math.sin(angle) * radius + CZ,
          ],
          rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
          scale: 0.06 + Math.random() * 0.11,
          col: palette[i % 3],
        };
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = -t * 0.078;
      group.current.rotation.z = Math.sin(t * 0.36) * 0.024;
    }
  });

  return (
    <group ref={group}>
      {shards.map((s, i) => (
        <mesh key={i} position={s.position} rotation={s.rotation} scale={s.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={s.col[0]} emissive={s.col[1]} emissiveIntensity={1.1} metalness={0.74} roughness={0.14} />
        </mesh>
      ))}
    </group>
  );
}

/* ── 縦ビーム ────────────────────────────────────────── */
function VerticalBeam() {
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (b1.current) {
      b1.current.scale.y = 1 + Math.sin(t * 1.55) * 0.058;
      b1.current.material.opacity = 0.16 + Math.sin(t * 1.9) * 0.04;
    }
    if (b2.current) {
      b2.current.scale.y = 1 + Math.cos(t * 1.2) * 0.044;
      b2.current.material.opacity = 0.055 + Math.cos(t * 1.6) * 0.018;
    }
    if (b3.current) {
      b3.current.material.opacity = 0.03 + Math.sin(t * 0.85 + 1.2) * 0.012;
    }
  });

  return (
    <>
      <mesh ref={b1} position={[CX, CY, CZ]}>
        <cylinderGeometry args={[0.38, 0.38, 8.4, 32, 1, true]} />
        <meshBasicMaterial color="#a8f2ff" transparent opacity={0.17} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={b2} position={[CX, CY, CZ]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 7.6, 28, 1, true]} />
        <meshBasicMaterial color="#cda8ff" transparent opacity={0.052} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={b3} position={[CX, CY, CZ]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.07, 0.07, 6.8, 20, 1, true]} />
        <meshBasicMaterial color="#a8ffe0" transparent opacity={0.03} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

/* ── フィールドライン ─────────────────────────────────── */
function FieldLines() {
  const group = useRef();

  const lines = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const pts = Array.from({ length: 42 }, (__, j) => {
          const s = j / 41;
          const r = 2.0 + Math.sin(s * Math.PI) * 1.8;
          const a = angle + s * 0.38;
          return new THREE.Vector3(
            Math.cos(a) * r + CX,
            (s - 0.5) * 5.8,
            Math.sin(a) * r + CZ
          );
        });
        return {
          geom: new THREE.BufferGeometry().setFromPoints(new THREE.CatmullRomCurve3(pts).getPoints(42)),
          color: i % 2 === 0 ? "#7de8ff" : "#d5b7ff",
          opacity: 0.04 + Math.random() * 0.04,
        };
      }),
    []
  );

  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = clock.getElapsedTime() * 0.038;
  });

  return (
    <group ref={group}>
      {lines.map((l, i) => (
        <line key={i} geometry={l.geom}>
          <lineBasicMaterial color={l.color} transparent opacity={l.opacity} />
        </line>
      ))}
    </group>
  );
}

/* ── サテライトオーブ ─────────────────────────────────── */
function SatelliteOrbs() {
  const orbData = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        baseAngle: (i / 6) * Math.PI * 2,
        radius: 3.2 + (i % 3) * 0.7,
        height: (i - 2.5) * 0.85,
        speed: 0.2 + i * 0.036,
        color: ["#7de8ff", "#d5b7ff", "#9be7ff", "#f5b7d5", "#b7f5d5", "#ffe5a8"][i],
        emissive: ["#28ccff", "#9c61ff", "#36c8ff", "#e060a0", "#30c880", "#e8b040"][i],
        scale: 0.065 + i * 0.012,
      })),
    []
  );

  const meshRefs = useRef(orbData.map(() => null));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const o = orbData[i];
      const a = o.baseAngle + t * o.speed;
      mesh.position.set(
        Math.cos(a) * o.radius + CX,
        o.height + Math.sin(t * 0.65 + i) * 0.28,
        Math.sin(a) * o.radius + CZ
      );
    });
  });

  return (
    <group>
      {orbData.map((o, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          scale={o.scale}
        >
          <sphereGeometry args={[1, 14, 14]} />
          <meshStandardMaterial color={o.color} emissive={o.emissive} emissiveIntensity={2.2} metalness={0.58} roughness={0.22} />
        </mesh>
      ))}
    </group>
  );
}

/* ── パルスハロー ─────────────────────────────────────── */
function PulseHalos() {
  const r1 = useRef();
  const r2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) {
      r1.current.scale.setScalar(1 + Math.sin(t * 1.85) * 0.05);
      r1.current.material.opacity = 0.058 + Math.sin(t * 1.85) * 0.018;
    }
    if (r2.current) {
      r2.current.scale.setScalar(1 + Math.sin(t * 1.28 + 1.3) * 0.038);
      r2.current.material.opacity = 0.032 + Math.sin(t * 1.28 + 1.3) * 0.011;
    }
  });

  return (
    <>
      <mesh ref={r1} position={[CX, 0.1, CZ - 1.4]}>
        <ringGeometry args={[3.6, 4.42, 128]} />
        <meshBasicMaterial color="#6fe5ff" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={r2} position={[CX, 0.1, CZ - 1.7]} rotation={[0.28, 0, 0]}>
        <ringGeometry args={[5.0, 5.65, 128]} />
        <meshBasicMaterial color="#c4a8ff" transparent opacity={0.034} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}