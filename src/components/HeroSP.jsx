import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import TransitionOverlay from "../components/TransitionOverlay";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const heroImg = withBase("images/singularity-hero1.png");
const logo = withBase("images/singularity-logo1.png");

export default function HeroSP() {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const panelRef = useRef(null);
  const coreRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, {
        opacity: 0,
        y: -10,
        filter: "blur(8px)",
      });

      gsap.set([titleRef.current, copyRef.current, panelRef.current], {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      });

      gsap.set(coreRef.current, {
        opacity: 0,
        scale: 0.92,
        filter: "blur(14px)",
      });

      gsap.set(scanRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.72,
      })
        .to(
          coreRef.current,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.02,
          },
          "-=0.26"
        )
        .to(
          scanRef.current,
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.18,
            ease: "power2.inOut",
          },
          "-=0.88"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
          },
          "-=0.68"
        )
        .to(
          copyRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.84,
          },
          "-=0.52"
        )
        .to(
          panelRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.88,
          },
          "-=0.44"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#020611] md:hidden"
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover scale-[1.14] -translate-y-[4%] opacity-[0.09]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,17,0.14)_0%,rgba(3,8,20,0.72)_34%,rgba(1,3,10,0.98)_100%)]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.82]"
          style={{
            background: `
              radial-gradient(circle at 50% 20%, rgba(165,235,255,0.14), transparent 16%),
              radial-gradient(circle at 54% 33%, rgba(214,184,255,0.08), transparent 24%),
              radial-gradient(circle at 48% 58%, rgba(123,234,255,0.05), transparent 24%)
            `,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.036] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "74px 74px",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "18.5px 18.5px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-[6%] bottom-[11%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/14 to-transparent" />

        <div className="pointer-events-none absolute left-0 top-0 h-[48%] w-full bg-[linear-gradient(180deg,rgba(2,6,17,0.12)_0%,rgba(2,6,17,0.24)_56%,transparent_100%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#020611] to-transparent" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[14%] top-[16%] h-[7px] w-[7px] rounded-full bg-cyan-300/80 blur-[7px] animate-pulse" />
          <span className="absolute left-[82%] top-[22%] h-[8px] w-[8px] rounded-full bg-fuchsia-300/70 blur-[8px] animate-pulse" />
          <span className="absolute left-[74%] top-[57%] h-[7px] w-[7px] rounded-full bg-violet-300/70 blur-[7px] animate-pulse" />
          <span className="absolute left-[22%] top-[67%] h-[6px] w-[6px] rounded-full bg-white/70 blur-[8px] animate-pulse" />
        </div>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.02]"
          aria-hidden="true"
        >
          <filter id="spNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#spNoise)" />
        </svg>
      </div>

      {/* ========================================
          LOGO
      ======================================== */}
      <div ref={logoRef} className="absolute left-5 top-5 z-[30]">
        <img
          src={logo}
          alt="SINGULARITY Logo"
          className="w-[124px] opacity-[0.98] drop-shadow-[0_0_14px_rgba(255,255,255,0.08)]"
        />
      </div>

      {/* ========================================
          SCAN LINE
      ======================================== */}
      <div
        ref={scanRef}
        className="pointer-events-none absolute inset-x-0 top-[18.4rem] z-[9] h-px"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent" />
      </div>

      {/* ========================================
          CORE
      ======================================== */}
      <div
        ref={coreRef}
        className="pointer-events-none absolute left-1/2 top-[10.5rem] z-[8] h-[14rem] w-[14rem] -translate-x-1/2"
      >
        <div className="absolute inset-0 rounded-full border border-cyan-200/10 shadow-[0_0_24px_rgba(34,211,238,0.06)]" />
        <div className="absolute inset-[8%] rounded-full border border-fuchsia-200/8" />
        <div className="absolute inset-[16%] rounded-full border border-white/[0.06]" />

        <div className="absolute inset-[5%] rounded-full border border-cyan-200/10 [transform:rotate(20deg)_scaleX(1.03)]" />
        <div className="absolute inset-[12%] rounded-full border border-fuchsia-200/8 [transform:rotate(-30deg)_scaleX(0.92)]" />

        <div className="absolute left-1/2 top-1/2 h-[5.8rem] w-[5.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#c8f3ff_18%,#74dcff_36%,rgba(188,112,255,0.18)_55%,transparent_76%)]" />

        <div className="absolute left-1/2 top-1/2 h-[11rem] w-[0.62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,transparent_0%,rgba(123,234,255,0.07)_18%,rgba(123,234,255,0.15)_50%,rgba(123,234,255,0.07)_82%,transparent_100%)] blur-[10px]" />

        <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(102,216,255,0.07)_0%,rgba(102,216,255,0.02)_34%,transparent_68%)] blur-2xl" />
        <div className="absolute inset-[-16%] rounded-full bg-[radial-gradient(circle,rgba(207,122,255,0.05)_0%,rgba(207,122,255,0.015)_32%,transparent_70%)] blur-3xl" />

        <span className="absolute left-[14%] top-[27%] h-[7px] w-[7px] rotate-45 bg-cyan-300/54 shadow-[0_0_10px_rgba(103,232,249,0.18)]" />
        <span className="absolute right-[16%] top-[35%] h-[7px] w-[7px] rotate-45 bg-fuchsia-300/52 shadow-[0_0_10px_rgba(244,114,182,0.16)]" />
        <span className="absolute bottom-[21%] left-[24%] h-[6px] w-[6px] rotate-45 bg-violet-300/50 shadow-[0_0_10px_rgba(196,181,253,0.16)]" />
      </div>

      {/* ========================================
          TYPOGRAPHY
      ======================================== */}
      <div className="relative z-[12] pt-[6rem]">
        <div className="relative px-5">
          <div className="pointer-events-none absolute left-4 top-[5.2rem] select-none text-[46px] font-black uppercase leading-none tracking-[0.16em] text-white/[0.024]">
            HUMAN
          </div>
          <div className="pointer-events-none absolute right-0 top-[8.8rem] select-none text-[42px] font-black uppercase leading-none tracking-[0.12em] text-white/[0.022]">
            CORE
          </div>

          <div ref={titleRef}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.52)]" />
                <span className="text-[10.5px] tracking-[0.3em] text-cyan-200/84">
                  SINGULARITY LAB
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/54 to-transparent" />
            </div>

            <div className="relative">
              <p className="absolute left-[1px] top-[1px] text-[38px] font-semibold leading-[0.95] tracking-[-0.052em] text-cyan-300/10">
                HUMAN × AI
              </p>
              <h1 className="relative bg-[linear-gradient(180deg,#ffffff_0%,#d8f3ff_48%,#8fdcff_100%)] bg-clip-text text-[38px] font-semibold leading-[0.95] tracking-[-0.052em] text-transparent drop-shadow-[0_0_14px_rgba(143,220,255,0.08)]">
                HUMAN × AI
              </h1>
            </div>

            <div className="relative mt-1">
              <p className="absolute left-[1px] top-[1px] text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-fuchsia-300/[0.08]">
                INTERFACE
              </p>
              <p className="relative bg-[linear-gradient(90deg,#ffffff_0%,#e1c9ff_50%,#91efff_100%)] bg-clip-text text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-transparent drop-shadow-[0_0_14px_rgba(192,132,252,0.08)]">
                INTERFACE
              </p>
            </div>

            <div className="mt-[9.6rem] flex items-center gap-3">
              <p className="text-[12px] tracking-[0.22em] text-white/56">
                境界の研究室
              </p>
              <span className="h-px w-12 bg-gradient-to-r from-white/18 to-transparent" />
            </div>
          </div>

          <div ref={copyRef}>
            <p className="mt-4 max-w-[24rem] text-[13.5px] leading-[1.9] tracking-[0.01em] text-white/78">
              これは説明のためのトップではなく、
              人類と人工知能の境界面を視覚化した観測装置。
              思考、視覚、推論、生成が一点へ収束し、
              言語と光と演算が静かな臨界点として脈動している。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <StatusChipSP label="LANGUAGE" color="cyan" />
              <StatusChipSP label="VISION" color="fuchsia" />
              <StatusChipSP label="REASONING" color="violet" />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <EnterButtonSP />
              <div className="text-[10.5px] leading-[1.7] text-white/42">
                各知性層へ接続。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          ACCESS PANEL
      ======================================== */}
      <div ref={panelRef} className="relative z-[14] mb-10 mt-9 px-4">
        <div className="pointer-events-none mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative overflow-hidden rounded-[28px] border border-white/14 bg-[rgba(7,18,34,0.52)] p-4 backdrop-blur-[18px] shadow-[0_0_68px_-28px_rgba(140,110,255,0.16)]">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 via-transparent to-white/[0.03] opacity-[0.14]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          <div className="pointer-events-none absolute right-[-12%] top-[-10%] h-[8rem] w-[8rem] rounded-full bg-fuchsia-300/7 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] left-[-12%] h-[7rem] w-[7rem] rounded-full bg-cyan-300/7 blur-3xl" />

          <div className="relative z-10 mb-4">
            <div className="flex items-center gap-3">
              <p className="text-[10.5px] tracking-[0.24em] text-white/66">
                INTELLIGENCE PORTS
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
            </div>
            <p className="mt-2 text-[12px] leading-[1.75] text-white/50">
              各AIへ接続し、未来の構造を読む。
            </p>
          </div>

          <div className="relative z-10 mb-4 overflow-hidden rounded-[22px] border border-white/14 bg-[linear-gradient(135deg,rgba(4,14,28,0.92),rgba(10,20,38,0.72),rgba(110,76,255,0.14))] p-4 shadow-[0_18px_52px_-42px_rgba(120,90,255,0.30)]">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-[10.5px] tracking-[0.22em] text-fuchsia-200/78">
                CENTRAL CORE / AGI
              </p>
              <span className="font-mono text-[9.5px] tracking-[0.18em] text-white/34">
                NEXT PHASE
              </span>
            </div>

            <p className="mb-1 text-[16px] font-light text-white/94">
              すべてを統合する知性の核
            </p>

            <p className="text-[11.5px] leading-[1.76] text-white/66">
              個別機能の先で、それらを束ねる“次の知性”を
              仮説として展示する中枢区画。
            </p>
          </div>

          <div className="relative z-10 space-y-3">
            <CategorySP
              label="ChatGPT"
              desc="思考・言語・解釈に強い対話OS"
              meta="LANGUAGE / STRUCTURE"
              to="/chatgpt"
              glow="cyan"
            />
            <CategorySP
              label="Gemini"
              desc="検索・画像・動画を横断する統合知性"
              meta="SEARCH / MULTIMODAL"
              to="/gemini"
              glow="sky"
            />
            <CategorySP
              label="Claude"
              desc="長文読解と安定推論に寄った静かな側近"
              meta="LONG CONTEXT / STABILITY"
              to="/claude"
              glow="violet"
            />
            <CategorySP
              label="DeepSeek"
              desc="演算、推論、コスパへ振り切った計算炉"
              meta="COMPUTE / REASONING"
              to="/deepseek"
              glow="emerald"
            />
            <CategorySP
              label="Midjourney"
              desc="視覚世界を一枚へ圧縮する生成装置"
              meta="VISUAL / IMAGINATION"
              to="/midjourney"
              glow="fuchsia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterButtonSP() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = async () => {
    setIsPressed(true);
    await TransitionOverlay.play();
    navigate("/log");
  };

  return (
    <button
      type="button"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={handleClick}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-200/18 bg-[rgba(8,18,38,0.72)] px-4 py-[12px] shadow-[0_0_28px_-18px_rgba(34,211,238,0.28)] transition-all duration-300 active:scale-[0.985]"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent_36%,rgba(192,132,252,0.08))]" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/22 to-transparent" />
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.10), transparent 68%)",
          opacity: isPressed ? 1 : 0.72,
        }}
      />

      <span className="relative z-10 text-[10px] tracking-[0.24em] text-cyan-200">
        ENTER
      </span>
      <span className="relative z-10 text-[12px] text-white">
        観測記録を開く
      </span>
      <span className="relative z-10 text-[14px] text-cyan-200 transition-transform duration-300 group-active:translate-x-[2px]">
        →
      </span>
    </button>
  );
}

function StatusChipSP({ label, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.46)]",
    fuchsia: "bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.42)]",
    violet: "bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.42)]",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(8,18,38,0.56)] px-3 py-[8px] backdrop-blur-sm">
      <span className={`h-[5px] w-[5px] rounded-full ${map[color]}`} />
      <span className="font-mono text-[9.5px] tracking-[0.18em] text-white/54">
        {label}
      </span>
    </div>
  );
}

function CategorySP({ label, desc, meta, to, glow = "cyan" }) {
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

  const barMap = {
    cyan: "bg-cyan-300/70",
    sky: "bg-sky-300/70",
    violet: "bg-violet-300/70",
    emerald: "bg-emerald-300/70",
    fuchsia: "bg-fuchsia-300/70",
  };

  const handleClick = async () => {
    await TransitionOverlay.play();
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group block w-full text-left transition-transform active:scale-[0.985]"
    >
      <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-[rgba(7,18,34,0.42)] p-4 backdrop-blur-[12px] transition-all duration-300 active:border-white/20">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-[88px] bg-gradient-to-r ${glowMap[glow]} to-transparent blur-2xl`}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div
          className={`absolute left-0 top-[20%] bottom-[20%] w-[2px] rounded-r-full ${barMap[glow]}`}
        />
        <div
          className={`absolute left-3 top-[18px] h-[6px] w-[6px] rounded-full ${dotMap[glow]} shadow-[0_0_10px_rgba(255,255,255,0.16)]`}
        />

        <div className="flex items-start justify-between gap-3 pl-6">
          <div>
            <div className="mb-[4px] flex flex-wrap items-center gap-2">
              <p className="text-[16px] font-light text-white/92">{label}</p>
              <span className="font-mono text-[9.5px] tracking-[0.16em] text-white/34">
                {meta}
              </span>
            </div>
            <p className="text-[11.5px] leading-[1.72] text-white/64">
              {desc}
            </p>
          </div>

          <span className="mt-[2px] text-[15px] text-white/20 transition-all duration-300 group-active:translate-x-[2px] group-active:text-white/70">
            →
          </span>
        </div>
      </div>
    </button>
  );
}