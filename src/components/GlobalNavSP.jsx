import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const NAV_ITEMS = [
  { label: "HOME", to: "/", meta: "入口 / 中枢" },
  { label: "ChatGPT", to: "/chatgpt", meta: "言語 / 構造" },
  { label: "Claude", to: "/claude", meta: "長文 / 安定性" },
  { label: "Gemini", to: "/gemini", meta: "検索 / マルチモーダル" },
  { label: "DeepSeek", to: "/deepseek", meta: "演算 / 推論" },
  { label: "Midjourney", to: "/midjourney", meta: "視覚 / 想像" },
  { label: "AGI", to: "/agi", meta: "絶対知能 / 観測不能領域", special: true },
];

export default function GlobalNavSP() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-sheet-reveal",
        { opacity: 0, y: 18, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".sp-nav-item-reveal",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power3.out",
          stagger: 0.045,
          delay: 0.05,
        }
      );
    });

    return () => ctx.revert();
  }, [open]);

  const currentItem = useMemo(() => {
    return NAV_ITEMS.find((item) => item.to === location.pathname) ?? NAV_ITEMS[0];
  }, [location.pathname]);

  const isAgiActive = currentItem.label === "AGI";

  const handleMove = (to) => {
    if (to === location.pathname) {
      setOpen(false);
      return;
    }
    navigate(to);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[380] md:hidden
          bg-[radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.08),transparent_16%),radial-gradient(circle_at_74%_10%,rgba(192,132,252,0.10),transparent_20%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.58))]
          backdrop-blur-[4px]
          transition-opacity duration-400
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <div className="fixed right-5 top-5 z-[400] md:hidden">
        {/* TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className={`
            group relative flex h-[56px] w-[56px] items-center justify-center overflow-hidden
            rounded-[20px] border border-white/16
            ${isAgiActive ? "bg-[rgba(14,14,20,0.84)]" : "bg-[rgba(7,18,34,0.76)]"}
            backdrop-blur-xl
            ${isAgiActive
              ? "shadow-[0_0_56px_-14px_rgba(255,255,255,0.18)]"
              : "shadow-[0_0_48px_-14px_rgba(168,85,247,0.30)]"}
            transition-all duration-300 active:scale-[0.96]
          `}
        >
          <span
            className={`pointer-events-none absolute inset-0 ${
              isAgiActive
                ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.08))]"
                : "bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.10))]"
            }`}
          />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <span
            className={`relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full border ${
              isAgiActive ? "border-white/18" : "border-cyan-200/20"
            } bg-black/10`}
          >
            <span
              className={`
                h-[8px] w-[8px] rounded-full transition-all duration-300
                ${
                  isAgiActive
                    ? open
                      ? "scale-110 bg-white shadow-[0_0_16px_rgba(255,255,255,0.74)]"
                      : "scale-100 bg-white shadow-[0_0_16px_rgba(255,255,255,0.56)]"
                    : open
                      ? "scale-110 bg-fuchsia-300 shadow-[0_0_14px_rgba(244,114,182,0.56)]"
                      : "scale-100 bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.56)]"
                }
              `}
            />
          </span>

          <span className="pointer-events-none absolute bottom-[5px] text-[9px] tracking-[0.18em] text-white/44">
            {open ? "閉じる" : "接続"}
          </span>
        </button>

        {/* BOTTOM CONTROL SHEET */}
        <div
          className={`
            fixed inset-x-0 bottom-0 z-[390]
            rounded-t-[32px] border-t border-white/12
            ${isAgiActive ? "bg-[rgba(12,12,18,0.94)]" : "bg-[rgba(7,18,34,0.92)]"}
            backdrop-blur-2xl
            ${isAgiActive
              ? "shadow-[0_-28px_90px_rgba(0,0,0,0.64)]"
              : "shadow-[0_-28px_80px_rgba(0,0,0,0.56)]"}
            transition-transform duration-500
            ${open ? "translate-y-0" : "translate-y-full"}
          `}
          style={{
            maxHeight: "min(84vh, 760px)",
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          }}
        >
          {/* visual layers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[32px]">
            <div
              className={`absolute inset-0 ${
                isAgiActive
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_24%,rgba(255,255,255,0.04)_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(34,211,238,0.05)_0%,transparent_24%,rgba(192,132,252,0.05)_100%)]"
              }`}
            />
            <div
              className={`absolute left-[-10%] top-[-8%] h-[9rem] w-[9rem] rounded-full ${
                isAgiActive ? "bg-white/8" : "bg-cyan-300/10"
              } blur-3xl`}
            />
            <div
              className={`absolute right-[-14%] top-[10%] h-[10rem] w-[10rem] rounded-full ${
                isAgiActive ? "bg-white/8" : "bg-fuchsia-300/10"
              } blur-3xl`}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          </div>

          {/* layout shell */}
          <div className="sp-sheet-reveal relative z-10 flex max-h-[inherit] flex-col">
            {/* handle */}
            <div className="mb-4 flex w-full shrink-0 justify-center pt-4">
              <div className="relative h-[6px] w-[56px] rounded-full bg-white/14">
                <span
                  className={`absolute left-1/2 top-1/2 h-[3px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    isAgiActive ? "bg-white/48" : "bg-cyan-200/44"
                  }`}
                />
              </div>
            </div>

            {/* header */}
            <div className="mb-4 shrink-0 px-5">
              <div
                className={`relative overflow-hidden rounded-[22px] border px-4 py-4 ${
                  isAgiActive
                    ? "border-white/14 bg-[rgba(16,16,22,0.84)]"
                    : "border-white/10 bg-[rgba(8,18,38,0.74)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                    isAgiActive ? "via-white/16" : "via-cyan-200/14"
                  } to-transparent`}
                />
                <div
                  className={`pointer-events-none absolute left-0 top-0 h-full w-[88px] ${
                    isAgiActive ? "bg-gradient-to-r from-white/10 to-transparent" : "bg-gradient-to-r from-cyan-300/10 to-transparent"
                  } blur-2xl`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          isAgiActive
                            ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.52)]"
                            : "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.46)]"
                        }`}
                      />
                      <p className={`text-[10.5px] tracking-[0.30em] ${isAgiActive ? "text-white/88" : "text-cyan-200/88"}`}>
                        {isAgiActive ? "ABSOLUTE INTELLIGENCE" : "SINGULARITY LAB"}
                      </p>
                    </div>

                    <p className="mt-3 text-[18px] font-light tracking-[0.02em] text-white">
                      {isAgiActive ? "最終観測パネル" : "制御パネル"}
                    </p>

                    <p className="mt-2 text-[10px] tracking-[0.16em] text-white/42">
                      {isAgiActive ? "最終接続先 / AGI" : `現在の接続先 / ${currentItem.label}`}
                    </p>
                    <p className="mt-1 break-words text-[10px] tracking-[0.14em] text-white/34">
                      {isAgiActive ? "絶対知能 / 観測不能領域" : currentItem.meta}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`h-[4px] w-[4px] rounded-full ${
                          isAgiActive ? "bg-white/86" : "bg-fuchsia-300/80"
                        }`}
                      />
                      <span className="text-[9px] tracking-[0.16em] text-white/40">
                        {isAgiActive ? "ABSOLUTE NODE" : "ACTIVE NODE"}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="
                      shrink-0 rounded-full border border-white/10
                      bg-white/[0.04] px-3 py-[7px]
                      text-[10px] tracking-[0.16em] text-white/58
                      transition-colors duration-300 active:bg-white/[0.08]
                    "
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>

            {/* section title */}
            <div className="mb-3 shrink-0 px-5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.22em] text-white/42">
                  {isAgiActive ? "INTELLIGENCE HIERARCHY" : "INTELLIGENCE PORTS"}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>
            </div>

            {/* scroll area */}
            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-2">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item, index) => (
                  <div key={item.to} className="sp-nav-item-reveal">
                    <NavItemSP
                      label={item.label}
                      meta={item.meta}
                      to={item.to}
                      active={location.pathname === item.to}
                      onMove={handleMove}
                      index={index}
                      special={item.special}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItemSP({ label, meta, to, active, onMove, index = 0, special = false }) {
  const accents = [
    {
      glow: "from-cyan-300/14",
      dot: "bg-cyan-300",
      activeShadow: "shadow-[0_0_36px_-18px_rgba(34,211,238,0.42)]",
      meta: "text-cyan-200/72",
      line: "bg-cyan-200/68",
    },
    {
      glow: "from-violet-300/14",
      dot: "bg-violet-300",
      activeShadow: "shadow-[0_0_36px_-18px_rgba(167,139,250,0.40)]",
      meta: "text-violet-200/72",
      line: "bg-violet-200/68",
    },
    {
      glow: "from-fuchsia-300/14",
      dot: "bg-fuchsia-300",
      activeShadow: "shadow-[0_0_36px_-18px_rgba(244,114,182,0.40)]",
      meta: "text-fuchsia-200/72",
      line: "bg-fuchsia-200/68",
    },
  ];

  const accent = accents[index % accents.length];
  const isAgi = label === "AGI" || special;

  return (
    <button
      type="button"
      onClick={() => onMove(to)}
      className="group relative mb-2 block w-full text-left transition-transform active:scale-[0.985]"
    >
      <div
        className={`
          relative overflow-hidden rounded-[22px] border px-4 py-4
          transition-all duration-300
          ${
            isAgi
              ? active
                ? "border-white/18 bg-[rgba(18,18,24,0.94)] shadow-[0_0_42px_-18px_rgba(255,255,255,0.22)]"
                : "border-white/12 bg-[rgba(14,14,20,0.78)]"
              : active
                ? `border-white/16 bg-[rgba(11,26,48,0.92)] ${accent.activeShadow}`
                : "border-white/10 bg-[rgba(8,18,38,0.68)]"
          }
        `}
      >
        <div
          className={`
            pointer-events-none absolute inset-y-0 left-0 w-[96px] bg-gradient-to-r
            ${isAgi ? "from-white/10" : active ? accent.glow : "from-white/[0.04]"}
            to-transparent blur-2xl
          `}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

        <span
          className={`
            absolute left-3 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full transition-all duration-300
            ${
              isAgi
                ? active
                  ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.42)]"
                  : "bg-white/24"
                : active
                  ? `${accent.dot} shadow-[0_0_10px_rgba(255,255,255,0.16)]`
                  : "bg-white/14"
            }
          `}
        />

        <span className="absolute right-4 top-4 text-[9px] tracking-[0.18em] text-white/16">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex items-start justify-between gap-3 pl-5 pr-5">
          <div className="min-w-0">
            <p
              className={`
                break-words text-[15px] tracking-[0.12em]
                ${
                  isAgi
                    ? active
                      ? "text-white"
                      : "text-white/86"
                    : active
                      ? "text-white"
                      : "text-white/80"
                }
              `}
            >
              {label}
            </p>

            <p
              className={`
                mt-[4px] break-words text-[10px] tracking-[0.14em] leading-[1.6]
                ${
                  isAgi
                    ? active
                      ? "text-white/70"
                      : "text-white/42"
                    : active
                      ? accent.meta
                      : "text-white/34"
                }
              `}
            >
              {meta}
            </p>
          </div>

          <span
            className={`
              mt-[2px] shrink-0 text-[15px] transition-all duration-300
              ${
                active
                  ? "translate-x-0 text-white/72 opacity-100"
                  : "translate-x-[-2px] text-white/24 opacity-70"
              }
            `}
          >
            →
          </span>
        </div>

        {active && (
          <span
            className={`pointer-events-none absolute bottom-[2px] left-1/2 h-[1px] w-[76%] -translate-x-1/2 ${
              isAgi ? "bg-white/72" : accent.line
            }`}
          />
        )}
      </div>
    </button>
  );
}