// src/components/TransitionOverlay.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

let isPlaying = false;

const DEFAULT_THEME = {
  accent: "rgba(103,232,249,0.92)",   // cyan
  accentSoft: "rgba(103,232,249,0.18)",
  accentGlow: "rgba(103,232,249,0.10)",
  secondary: "rgba(244,114,182,0.16)", // pink
  label: "TRANSITION",
  subLabel: "SYSTEM SHIFTING...",
};

export default function TransitionOverlay() {
  const overlayRef = useRef(null);
  const baseRef = useRef(null);
  const glowRef = useRef(null);
  const sideGlowLeftRef = useRef(null);
  const sideGlowRightRef = useRef(null);
  const lineRef = useRef(null);
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const labelWrapRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.set(overlayRef.current, {
      y: "100%",
      opacity: 1,
      pointerEvents: "none",
    });

    gsap.set([glowRef.current, sideGlowLeftRef.current, sideGlowRightRef.current], {
      opacity: 0.6,
    });

    gsap.set(lineRef.current, {
      opacity: 0.35,
      scaleY: 0.78,
      transformOrigin: "center center",
    });

    gsap.set(coreRef.current, {
      opacity: 0,
      scale: 0.72,
      transformOrigin: "center center",
    });

    gsap.set(ringRef.current, {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
      transformOrigin: "center center",
    });

    gsap.set(labelWrapRef.current, {
      opacity: 0,
      y: 14,
    });

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 10,
    });

    gsap.set(subTitleRef.current, {
      opacity: 0,
      y: 8,
    });

    gsap.set(gridRef.current, {
      opacity: 0.06,
    });
  }, []);

  TransitionOverlay.play = async (theme = {}) => {
    if (isPlaying) return;
    isPlaying = true;

    const merged = { ...DEFAULT_THEME, ...theme };

    return new Promise((resolve) => {
      if (titleRef.current) {
        titleRef.current.textContent = merged.label;
      }
      if (subTitleRef.current) {
        subTitleRef.current.textContent = merged.subLabel;
      }

      if (lineRef.current) {
        lineRef.current.style.background = `linear-gradient(to bottom, transparent, ${merged.accent}, transparent)`;
      }

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(ellipse at center, ${merged.accentSoft} 0%, rgba(255,255,255,0.04) 34%, transparent 74%)`;
      }

      if (sideGlowLeftRef.current) {
        sideGlowLeftRef.current.style.background = merged.accentGlow;
      }

      if (sideGlowRightRef.current) {
        sideGlowRightRef.current.style.background = merged.secondary;
      }

      if (coreRef.current) {
        coreRef.current.style.background = `radial-gradient(circle, rgba(255,255,255,0.98) 0%, ${merged.accentSoft} 26%, transparent 72%)`;
        coreRef.current.style.boxShadow = `0 0 40px ${merged.accentSoft}`;
      }

      if (ringRef.current) {
        ringRef.current.style.borderColor = merged.accent;
        ringRef.current.style.boxShadow = `0 0 24px ${merged.accentSoft}`;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          isPlaying = false;
          resolve();
        },
      });

      tl.set(overlayRef.current, { pointerEvents: "auto" });

      tl.to(overlayRef.current, {
        y: "0%",
        duration: 0.54,
        ease: "power4.inOut",
      });

      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scaleY: 1.06,
          duration: 0.34,
          ease: "power2.out",
          transformOrigin: "center center",
        },
        "<0.04"
      );

      tl.to(
        [sideGlowLeftRef.current, sideGlowRightRef.current],
        {
          opacity: 0.9,
          duration: 0.28,
          ease: "power2.out",
          stagger: 0.04,
        },
        "<"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.88,
          scaleY: 1,
          duration: 0.32,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        coreRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.34,
          ease: "back.out(1.6)",
        },
        "<0.02"
      );

      tl.to(
        ringRef.current,
        {
          opacity: 0.82,
          scale: 1,
          duration: 0.36,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        labelWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.24,
          ease: "power2.out",
        },
        "<0.02"
      );

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        subTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "<0.03"
      );

      tl.to(
        ringRef.current,
        {
          rotate: 120,
          duration: 0.52,
          ease: "power1.inOut",
        },
        "-=0.04"
      );

      tl.to(
        coreRef.current,
        {
          scale: 1.08,
          opacity: 0.92,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "<0.06"
      );

      tl.to(
        labelWrapRef.current,
        {
          opacity: 0,
          y: -8,
          duration: 0.18,
          ease: "power2.in",
        },
        "+=0.02"
      );

      tl.to(
        overlayRef.current,
        {
          y: "-100%",
          duration: 0.7,
          ease: "power4.inOut",
        },
        "<0.02"
      );

      tl.to(
        [glowRef.current, sideGlowLeftRef.current, sideGlowRightRef.current],
        {
          opacity: 0.2,
          duration: 0.44,
          ease: "power2.inOut",
          stagger: 0.02,
        },
        "<"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.12,
          scaleY: 1.12,
          duration: 0.42,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        coreRef.current,
        {
          opacity: 0.08,
          scale: 1.12,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        ringRef.current,
        {
          opacity: 0.06,
          scale: 1.1,
          rotate: 180,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.set(overlayRef.current, { pointerEvents: "none" });
    });
  };

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* ベース */}
      <div
        ref={baseRef}
        className="absolute inset-0 bg-[linear-gradient(180deg,#020611_0%,rgba(5,14,30,0.94)_42%,#02040b_100%)]"
      />

      {/* ホログラム膜 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08)_0%,transparent_34%,rgba(192,132,252,0.10)_100%)]" />

      {/* グリッド */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* 中央光膜 */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[280px] -translate-x-1/2 blur-[18px]"
      />

      {/* 中央ライン */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
      />

      {/* 左右グロー */}
      <div
        ref={sideGlowLeftRef}
        className="pointer-events-none absolute left-[-6%] top-[16%] h-[180px] w-[180px] rounded-full blur-3xl"
      />
      <div
        ref={sideGlowRightRef}
        className="pointer-events-none absolute right-[-8%] top-[20%] h-[220px] w-[220px] rounded-full blur-3xl"
      />

      {/* スキャンライン */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 中央コア */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2">
        <div
          ref={ringRef}
          className="absolute inset-[10%] rounded-full border"
        />
        <div
          ref={coreRef}
          className="absolute left-1/2 top-1/2 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>

      {/* ラベル */}
      <div
        ref={labelWrapRef}
        className="absolute left-1/2 top-1/2 z-[2] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 px-6 text-center"
      >
        <p className="mb-3 text-[11px] tracking-[0.34em] text-cyan-200/88">
          SINGULARITY LAB
        </p>

        <p
          ref={titleRef}
          className="text-[30px] font-semibold tracking-[0.12em] text-white md:text-[42px]"
        >
          TRANSITION
        </p>

        <p
          ref={subTitleRef}
          className="mt-3 text-[11px] tracking-[0.24em] text-white/46"
        >
          SYSTEM SHIFTING...
        </p>
      </div>
    </div>
  );
}