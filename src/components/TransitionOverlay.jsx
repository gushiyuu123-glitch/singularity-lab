import { useEffect, useRef } from "react";
import gsap from "gsap";

let isPlaying = false;

const DEFAULT_THEME = {
  accent: "rgba(103,232,249,0.92)",
  accentSoft: "rgba(103,232,249,0.18)",
  accentGlow: "rgba(103,232,249,0.10)",
  secondary: "rgba(244,114,182,0.14)",
  label: "TRANSITION",
  subLabel: "SYSTEM SHIFTING...",
};

export default function TransitionOverlay() {
  const overlayRef = useRef(null);
  const baseRef = useRef(null);
  const gridRef = useRef(null);
  const glowRef = useRef(null);
  const sideGlowLeftRef = useRef(null);
  const sideGlowRightRef = useRef(null);
  const lineRef = useRef(null);
  const scanRef = useRef(null);
  const coreRef = useRef(null);
  const coreOuterRef = useRef(null);
  const ringRef = useRef(null);
  const ring2Ref = useRef(null);
  const labelWrapRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const topNoiseRef = useRef(null);

  useEffect(() => {
    gsap.set(overlayRef.current, {
      y: "100%",
      opacity: 1,
      pointerEvents: "none",
    });

    gsap.set(baseRef.current, {
      opacity: 1,
    });

    gsap.set(gridRef.current, {
      opacity: 0.04,
    });

    gsap.set(glowRef.current, {
      opacity: 0,
      scaleY: 0.92,
      transformOrigin: "center center",
    });

    gsap.set([sideGlowLeftRef.current, sideGlowRightRef.current], {
      opacity: 0,
    });

    gsap.set(lineRef.current, {
      opacity: 0.22,
      scaleY: 0.78,
      transformOrigin: "center center",
    });

    gsap.set(scanRef.current, {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(coreOuterRef.current, {
      opacity: 0,
      scale: 0.86,
      transformOrigin: "center center",
    });

    gsap.set(coreRef.current, {
      opacity: 0,
      scale: 0.72,
      transformOrigin: "center center",
    });

    gsap.set(ringRef.current, {
      opacity: 0,
      scale: 0.84,
      rotate: 0,
      transformOrigin: "center center",
    });

    gsap.set(ring2Ref.current, {
      opacity: 0,
      scale: 0.9,
      rotate: 0,
      transformOrigin: "center center",
    });

    gsap.set(labelWrapRef.current, {
      opacity: 0,
      y: 12,
    });

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 8,
    });

    gsap.set(subTitleRef.current, {
      opacity: 0,
      y: 6,
    });

    gsap.set(topNoiseRef.current, {
      opacity: 0.018,
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

      if (scanRef.current) {
        scanRef.current.style.background = `linear-gradient(to right, transparent, ${merged.accent}, transparent)`;
      }

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(ellipse at center, ${merged.accentSoft} 0%, rgba(255,255,255,0.035) 34%, transparent 74%)`;
      }

      if (sideGlowLeftRef.current) {
        sideGlowLeftRef.current.style.background = merged.accentGlow;
      }

      if (sideGlowRightRef.current) {
        sideGlowRightRef.current.style.background = merged.secondary;
      }

      if (coreRef.current) {
        coreRef.current.style.background = `radial-gradient(circle, rgba(255,255,255,0.98) 0%, ${merged.accentSoft} 28%, transparent 72%)`;
        coreRef.current.style.boxShadow = `0 0 42px ${merged.accentSoft}`;
      }

      if (coreOuterRef.current) {
        coreOuterRef.current.style.background = `radial-gradient(circle, ${merged.accentGlow} 0%, transparent 68%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.borderColor = merged.accent;
        ringRef.current.style.boxShadow = `0 0 24px ${merged.accentSoft}`;
      }

      if (ring2Ref.current) {
        ring2Ref.current.style.borderColor = merged.secondary;
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
        duration: 0.52,
        ease: "power4.inOut",
      });

      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scaleY: 1.04,
          duration: 0.32,
          ease: "power2.out",
        },
        "<0.03"
      );

      tl.to(
        [sideGlowLeftRef.current, sideGlowRightRef.current],
        {
          opacity: 0.82,
          duration: 0.26,
          ease: "power2.out",
          stagger: 0.03,
        },
        "<"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.82,
          scaleY: 1,
          duration: 0.28,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        scanRef.current,
        {
          opacity: 0.9,
          scaleX: 1,
          duration: 0.38,
          ease: "power2.inOut",
        },
        "<0.02"
      );

      tl.to(
        coreOuterRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.34,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        coreRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.32,
          ease: "back.out(1.6)",
        },
        "<0.02"
      );

      tl.to(
        [ringRef.current, ring2Ref.current],
        {
          opacity: 0.78,
          scale: 1,
          duration: 0.34,
          ease: "power2.out",
          stagger: 0.02,
        },
        "<"
      );

      tl.to(
        labelWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "<0.03"
      );

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        subTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
        },
        "<0.02"
      );

      tl.to(
        ringRef.current,
        {
          rotate: 110,
          duration: 0.48,
          ease: "power1.inOut",
        },
        "-=0.03"
      );

      tl.to(
        ring2Ref.current,
        {
          rotate: -74,
          duration: 0.48,
          ease: "power1.inOut",
        },
        "<"
      );

      tl.to(
        coreRef.current,
        {
          scale: 1.07,
          opacity: 0.94,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "<0.05"
      );

      tl.to(
        labelWrapRef.current,
        {
          opacity: 0,
          y: -8,
          duration: 0.16,
          ease: "power2.in",
        },
        "+=0.02"
      );

      tl.to(
        scanRef.current,
        {
          opacity: 0,
          scaleX: 1.08,
          duration: 0.24,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        overlayRef.current,
        {
          y: "-100%",
          duration: 0.68,
          ease: "power4.inOut",
        },
        "<0.03"
      );

      tl.to(
        [glowRef.current, sideGlowLeftRef.current, sideGlowRightRef.current],
        {
          opacity: 0.16,
          duration: 0.4,
          ease: "power2.inOut",
          stagger: 0.02,
        },
        "<"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.08,
          scaleY: 1.12,
          duration: 0.38,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        coreOuterRef.current,
        {
          opacity: 0.05,
          scale: 1.12,
          duration: 0.36,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        coreRef.current,
        {
          opacity: 0.06,
          scale: 1.12,
          duration: 0.36,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        [ringRef.current, ring2Ref.current],
        {
          opacity: 0.04,
          scale: 1.08,
          duration: 0.36,
          ease: "power2.inOut",
          stagger: 0.01,
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
      {/* base */}
      <div
        ref={baseRef}
        className="absolute inset-0 bg-[linear-gradient(180deg,#020611_0%,rgba(5,14,30,0.95)_42%,#02040b_100%)]"
      />

      {/* hologram veil */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.07)_0%,transparent_34%,rgba(192,132,252,0.08)_100%)]" />

      {/* top subtle noise */}
      <svg
        ref={topNoiseRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <filter id="overlayNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#overlayNoise)" />
      </svg>

      {/* grid */}
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

      {/* glow membrane */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[300px] -translate-x-1/2 blur-[18px]"
      />

      {/* vertical line */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
      />

      {/* horizontal scan */}
      <div
        ref={scanRef}
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
      />

      {/* side glows */}
      <div
        ref={sideGlowLeftRef}
        className="pointer-events-none absolute left-[-6%] top-[16%] h-[180px] w-[180px] rounded-full blur-3xl"
      />
      <div
        ref={sideGlowRightRef}
        className="pointer-events-none absolute right-[-8%] top-[20%] h-[220px] w-[220px] rounded-full blur-3xl"
      />

      {/* scan edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* center core */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2">
        <div
          ref={ring2Ref}
          className="absolute inset-[2%] rounded-full border border-white/10"
        />
        <div
          ref={ringRef}
          className="absolute inset-[12%] rounded-full border"
        />
        <div
          ref={coreOuterRef}
          className="absolute left-1/2 top-1/2 h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
        />
        <div
          ref={coreRef}
          className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>

      {/* label */}
      <div
        ref={labelWrapRef}
        className="absolute left-1/2 top-1/2 z-[2] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 px-6 text-center"
      >
        <p className="mb-3 text-[10.5px] tracking-[0.32em] text-cyan-200/84">
          SINGULARITY LAB
        </p>

        <p
          ref={titleRef}
          className="text-[28px] font-semibold tracking-[0.12em] text-white md:text-[40px]"
        >
          TRANSITION
        </p>

        <p
          ref={subTitleRef}
          className="mt-3 text-[10.5px] tracking-[0.22em] text-white/42"
        >
          SYSTEM SHIFTING...
        </p>
      </div>
    </div>
  );
}