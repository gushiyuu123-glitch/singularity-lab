// src/components/TransitionOverlay.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

let isPlaying = false;

export default function TransitionOverlay() {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const glowRef = useRef(null);
  const lineRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    gsap.set(overlayRef.current, {
      y: "100%",
      opacity: 1,
      pointerEvents: "none",
    });

    gsap.set(panelRef.current, {
      opacity: 1,
    });

    gsap.set(glowRef.current, {
      opacity: 0.7,
      scaleY: 0.9,
    });

    gsap.set(lineRef.current, {
      opacity: 0.4,
      scaleY: 0.8,
    });

    gsap.set(labelRef.current, {
      opacity: 0,
      y: 10,
    });
  }, []);

  TransitionOverlay.play = async () => {
    if (isPlaying) return;
    isPlaying = true;

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          isPlaying = false;
          resolve();
        },
      });

      tl.set(overlayRef.current, {
        pointerEvents: "auto",
      });

      tl.to(overlayRef.current, {
        y: "0%",
        duration: 0.56,
        ease: "power4.inOut",
      });

      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scaleY: 1.08,
          duration: 0.42,
          ease: "power2.out",
        },
        "<0.04"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.82,
          scaleY: 1,
          duration: 0.38,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        labelRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        "<0.06"
      );

      tl.to(
        glowRef.current,
        {
          opacity: 0.72,
          duration: 0.18,
          ease: "sine.out",
        },
        "+=0.02"
      );

      tl.to(labelRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: "power2.in",
      });

      tl.to(
        overlayRef.current,
        {
          y: "-100%",
          duration: 0.68,
          delay: 0.02,
          ease: "power4.inOut",
        },
        "<0.02"
      );

      tl.to(
        glowRef.current,
        {
          opacity: 0.18,
          scaleY: 1.14,
          duration: 0.52,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0.12,
          scaleY: 1.1,
          duration: 0.46,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.set(overlayRef.current, {
        pointerEvents: "none",
      });
    });
  };

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* ベースパネル */}
      <div
        ref={panelRef}
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,#020611_0%,rgba(5,14,30,0.94)_42%,#02040b_100%)]
        "
      />

      {/* ホログラム膜 */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(135deg,rgba(34,211,238,0.08)_0%,transparent_34%,rgba(192,132,252,0.10)_100%)]
        "
      />

      {/* 微グリッド */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
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
        className="
          pointer-events-none absolute left-1/2 top-0 h-full w-[280px]
          -translate-x-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(170,240,255,0.18)_0%,rgba(170,240,255,0.05)_34%,transparent_74%)]
          blur-[18px]
        "
      />

      {/* 中央ライン */}
      <div
        ref={lineRef}
        className="
          pointer-events-none absolute left-1/2 top-0 h-full w-px
          -translate-x-1/2
          bg-gradient-to-b from-transparent via-cyan-200/72 to-transparent
        "
      />

      {/* 上下スキャンライン */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 左右グロー */}
      <div className="pointer-events-none absolute left-[-6%] top-[16%] h-[180px] w-[180px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[20%] h-[220px] w-[220px] rounded-full bg-fuchsia-300/10 blur-3xl" />

      {/* ラベル */}
      <div
        ref={labelRef}
        className="
          absolute left-1/2 top-1/2 z-[2]
          w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2
          px-6 text-center
        "
      >
        <p className="mb-3 text-[11px] tracking-[0.34em] text-cyan-200/88">
          SINGULARITY LAB
        </p>

        <p className="text-[30px] font-semibold tracking-[0.12em] text-white md:text-[42px]">
          TRANSITION
        </p>

        <p className="mt-3 text-[11px] tracking-[0.24em] text-white/46">
          SYSTEM SHIFTING...
        </p>
      </div>
    </div>
  );
}