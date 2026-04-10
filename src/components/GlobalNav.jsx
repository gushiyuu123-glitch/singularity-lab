import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const NAV_ITEMS = [
  { label: "HOME", to: "/", meta: "入口 / 中央" },
  { label: "ChatGPT", to: "/chatgpt", meta: "汎用 / 対話" },
  { label: "Claude", to: "/claude", meta: "読解 / 整理" },
  { label: "Gemini", to: "/gemini", meta: "接続 / 多感覚" },
  { label: "DeepSeek", to: "/deepseek", meta: "演算 / 密度" },
  { label: "Midjourney", to: "/midjourney", meta: "視覚 / 印象" },
  { label: "AGI", to: "/agi", meta: "最終層 / 未踏領域", special: true },
];

export default function GlobalNav() {
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
        ".nav-panel-inner",
        { opacity: 0, y: 14, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.56,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".nav-item-reveal",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power3.out",
          stagger: 0.045,
          delay: 0.06,
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
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[280]
          bg-[radial-gradient(circle_at_86%_9%,rgba(34,211,238,0.08),transparent_16%),radial-gradient(circle_at_72%_10%,rgba(192,132,252,0.10),transparent_20%),linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.46))]
          backdrop-blur-[3px]
          transition-opacity duration-500
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <div className="fixed right-4 top-4 z-[300] flex max-w-[calc(100vw-2rem)] items-start justify-end md:right-6 md:top-6 xl:right-8 xl:top-8">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="
            group relative mt-2 inline-flex shrink-0 items-center gap-3 overflow-hidden
            rounded-[22px] border border-white/16
            bg-[rgba(7,18,34,0.68)] px-4 py-[12px]
            backdrop-blur-xl
            shadow-[0_0_46px_-16px_rgba(168,85,247,0.26)]
            transition-all duration-300
            hover:border-cyan-200/30 hover:bg-[rgba(10,22,42,0.82)]
            active:scale-[0.985]
          "
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent_36%,rgba(192,132,252,0.10))] opacity-70" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <span className="relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-cyan-200/18 bg-black/10">
            <span
              className={`
                h-[6px] w-[6px] rounded-full
                ${isAgiActive ? "bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)]" : "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.55)]"}
                transition-all duration-300
                ${open ? "scale-110" : "scale-100"}
              `}
            />
          </span>

          <span className={`relative z-10 text-[10px] tracking-[0.26em] ${isAgiActive ? "text-white/82" : "text-cyan-200"}`}>
            {open ? "閉じる" : "接続"}
          </span>

          <span className="relative z-10 hidden text-[10px] tracking-[0.16em] text-white/58 sm:block">
            {currentItem.label}
          </span>

          <span
            className={`
              relative z-10 text-[12px] text-white/52 transition-transform duration-300
              ${open ? "rotate-90" : "rotate-0"}
            `}
          >
            ▷
          </span>
        </button>

        <nav
          aria-hidden={!open}
          className={`
            relative ml-3 overflow-hidden rounded-[30px]
            border border-white/16
            ${isAgiActive ? "bg-[rgba(10,12,18,0.76)]" : "bg-[rgba(7,18,34,0.70)]"}
            backdrop-blur-xl
            ${isAgiActive
              ? "shadow-[0_0_90px_-18px_rgba(255,255,255,0.16)]"
              : "shadow-[0_0_74px_-18px_rgba(168,85,247,0.30)]"}
            transition-[max-width,opacity,transform] duration-700
            ${open ? "max-w-[min(92vw,980px)] translate-x-0 opacity-100" : "pointer-events-none max-w-0 translate-x-6 opacity-0"}
          `}
        >
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-[180px] ${isAgiActive ? "bg-gradient-to-r from-white/8 to-transparent" : "bg-gradient-to-r from-cyan-300/10 to-transparent"} blur-2xl`} />
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-[180px] ${isAgiActive ? "bg-gradient-to-l from-white/8 to-transparent" : "bg-gradient-to-l from-fuchsia-300/10 to-transparent"} blur-2xl`} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className={`pointer-events-none absolute right-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent ${isAgiActive ? "via-white/20" : "via-cyan-200/24"} to-transparent`} />

          <div className="nav-panel-inner relative px-4 py-4 md:px-5 md:py-5">
            <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-5">
              <div
                className={`
                  relative overflow-hidden rounded-[22px] border px-4 py-4
                  ${isAgiActive
                    ? "border-white/14 bg-[rgba(16,16,22,0.84)]"
                    : "border-white/10 bg-[rgba(8,18,38,0.76)]"}
                `}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${isAgiActive ? "via-white/18" : "via-cyan-200/16"} to-transparent`} />
                <div className={`pointer-events-none absolute left-0 top-0 h-full w-[90px] ${isAgiActive ? "bg-gradient-to-r from-white/10 to-transparent" : "bg-gradient-to-r from-cyan-300/10 to-transparent"} blur-2xl`} />

                <span className={`text-[10px] tracking-[0.26em] ${isAgiActive ? "text-white/82" : "text-cyan-200/84"}`}>
                  {isAgiActive ? "ABSOLUTE INTELLIGENCE" : "SINGULARITY LAB"}
                </span>

                <div className="mt-3">
                  <p className="text-[18px] font-light tracking-[0.02em] text-white/96">
                    {isAgiActive ? "最終観測パネル" : "制御パネル"}
                  </p>

                  <p className="mt-2 text-[10px] leading-[1.7] tracking-[0.14em] text-white/42">
                    {isAgiActive ? "最終接続先 / AGI" : `現在の接続先 / ${currentItem.label}`}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.7] tracking-[0.14em] text-white/32">
                    {isAgiActive ? "最終層 / 未踏領域" : currentItem.meta}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={`h-[5px] w-[5px] rounded-full ${
                      isAgiActive
                        ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.58)]"
                        : "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.44)]"
                    }`}
                  />
                  <span className="text-[9px] tracking-[0.18em] text-white/42">
                    {isAgiActive ? "ABSOLUTE NODE" : "ACTIVE NODE"}
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.22em] text-white/44">
                    {isAgiActive ? "INTELLIGENCE HIERARCHY" : "INTELLIGENCE PORTS"}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
                </div>

                <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {NAV_ITEMS.map((item, index) => (
                    <div key={item.to} className="nav-item-reveal">
                      <NavItem
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
        </nav>
      </div>
    </>
  );
}

function NavItem({ label, meta, to, active, onMove, index = 0, special = false }) {
  const accentMap = [
    {
      glow: "from-cyan-300/14",
      dot: "bg-cyan-300",
      activeGlow: "shadow-[0_0_34px_-16px_rgba(34,211,238,0.52)]",
      activeLine: "bg-cyan-200/72",
      activeText: "text-cyan-200/76",
    },
    {
      glow: "from-violet-300/12",
      dot: "bg-violet-300",
      activeGlow: "shadow-[0_0_34px_-16px_rgba(167,139,250,0.44)]",
      activeLine: "bg-violet-200/72",
      activeText: "text-violet-200/76",
    },
    {
      glow: "from-fuchsia-300/12",
      dot: "bg-fuchsia-300",
      activeGlow: "shadow-[0_0_34px_-16px_rgba(244,114,182,0.42)]",
      activeLine: "bg-fuchsia-200/72",
      activeText: "text-fuchsia-200/76",
    },
  ];

  const accent = accentMap[index % accentMap.length];
  const isAgi = label === "AGI" || special;

  return (
    <button
      type="button"
      onClick={() => onMove(to)}
      className="group relative block w-full text-left"
    >
      <div
        className={`
          relative overflow-hidden rounded-[22px] border px-4 py-3.5
          transition-all duration-300
          ${
            isAgi
              ? active
                ? "border-white/22 bg-[rgba(18,18,24,0.94)] shadow-[0_0_46px_-18px_rgba(255,255,255,0.24)]"
                : "border-white/12 bg-[rgba(14,14,20,0.78)] hover:border-white/22 hover:bg-[rgba(18,18,24,0.90)]"
              : active
                ? `border-white/18 bg-[rgba(11,26,48,0.90)] ${accent.activeGlow}`
                : "border-white/10 bg-[rgba(8,18,38,0.62)] hover:border-white/18 hover:bg-[rgba(10,22,42,0.80)]"
          }
        `}
      >
        <div
          className={`
            pointer-events-none absolute inset-y-0 left-0 w-[94px]
            bg-gradient-to-r ${isAgi ? "from-white/10" : active ? accent.glow : "from-white/[0.04]"} to-transparent blur-2xl
          `}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <div
          className={`
            absolute left-3 top-[19px] h-[6px] w-[6px] rounded-full
            ${
              isAgi
                ? active
                  ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.42)]"
                  : "bg-white/26"
                : active
                  ? `${accent.dot} shadow-[0_0_10px_rgba(255,255,255,0.20)]`
                  : "bg-white/14"
            }
          `}
        />

        <div className="pl-5">
          <div className="flex items-start justify-between gap-3">
            <p
              className={`
                text-[13px] tracking-[0.14em] transition-colors duration-300
                ${
                  isAgi
                    ? active
                      ? "text-white"
                      : "text-white/86 group-hover:text-white"
                    : active
                      ? "text-white"
                      : "text-white/78 group-hover:text-white"
                }
              `}
            >
              {label}
            </p>

            <span
              className={`
                mt-[1px] text-[13px] transition-all duration-300
                ${
                  active
                    ? "translate-x-0 text-white/72"
                    : "translate-x-0 text-white/14 group-hover:translate-x-[2px] group-hover:text-white/34"
                }
              `}
            >
              →
            </span>
          </div>

          <p
            className={`
              mt-[4px] text-[9px] tracking-[0.14em] leading-[1.6]
              ${
                isAgi
                  ? active
                    ? "text-white/70"
                    : "text-white/42 group-hover:text-white/58"
                  : active
                    ? accent.activeText
                    : "text-white/34 group-hover:text-white/48"
              }
            `}
          >
            {meta}
          </p>
        </div>

        {active && (
          <span
            className={`pointer-events-none absolute bottom-[2px] left-1/2 h-[1px] w-[72%] -translate-x-1/2 ${
              isAgi ? "bg-white/72" : accent.activeLine
            }`}
          />
        )}
      </div>
    </button>
  );
}