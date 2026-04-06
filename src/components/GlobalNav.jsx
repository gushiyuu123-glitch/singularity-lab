import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "HOME", to: "/", meta: "入口 / 中枢" },
  { label: "ChatGPT", to: "/chatgpt", meta: "言語 / 構造" },
  { label: "Claude", to: "/claude", meta: "長文 / 安定性" },
  { label: "Gemini", to: "/gemini", meta: "検索 / マルチモーダル" },
  { label: "DeepSeek", to: "/deepseek", meta: "演算 / 推論" },
  { label: "Midjourney", to: "/midjourney", meta: "視覚 / 想像" },
  { label: "AGI", to: "/agi", meta: "中枢 / 次段階" },
];

export default function GlobalNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const currentItem = useMemo(() => {
    return (
      NAV_ITEMS.find((item) => item.to === location.pathname) ?? NAV_ITEMS[0]
    );
  }, [location.pathname]);

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
          bg-[radial-gradient(circle_at_84%_10%,rgba(34,211,238,0.08),transparent_16%),radial-gradient(circle_at_72%_12%,rgba(192,132,252,0.10),transparent_20%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.38))]
          backdrop-blur-[2px]
          transition-opacity duration-500
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <div className="fixed right-8 top-8 z-[300] flex max-w-[calc(100vw-4rem)] items-start justify-end">
        {/* TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="
            group relative mt-3 inline-flex shrink-0 items-center gap-3 overflow-hidden
            rounded-[22px] border border-white/18
            bg-[rgba(7,18,34,0.68)] px-4 py-3
            backdrop-blur-xl
            shadow-[0_0_50px_-12px_rgba(168,85,247,0.28)]
            transition-all duration-300
            hover:border-cyan-200/34 hover:bg-[rgba(10,22,42,0.82)]
          "
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent_36%,rgba(192,132,252,0.10))] opacity-70" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <span className="relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-cyan-200/20 bg-black/10">
            <span className="h-[6px] w-[6px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.55)]" />
          </span>

          <span className="relative z-10 text-[11px] tracking-[0.28em] text-cyan-200">
            {open ? "閉じる" : "接続"}
          </span>

          <span className="relative z-10 text-[10px] tracking-[0.16em] text-white/62">
            {currentItem.label}
          </span>

          <span
            className={`
              relative z-10 text-[12px] text-white/54 transition-transform duration-300
              ${open ? "rotate-90" : "rotate-0"}
            `}
          >
            ▷
          </span>
        </button>

        {/* PANEL */}
        <nav
          aria-hidden={!open}
          className={`
            relative ml-3 overflow-hidden rounded-[30px]
            border border-white/18
            bg-[rgba(7,18,34,0.68)]
            backdrop-blur-xl
            shadow-[0_0_80px_-14px_rgba(168,85,247,0.34)]
            transition-[max-width,opacity,transform] duration-700
            ${open ? "max-w-[calc(100vw-11rem)] translate-x-0 opacity-100" : "pointer-events-none max-w-0 translate-x-6 opacity-0"}
          `}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[220px] bg-gradient-to-r from-cyan-300/10 to-transparent blur-2xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-fuchsia-300/10 to-transparent blur-2xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent" />

          <div
            className={`
              pointer-events-none absolute inset-y-0 left-0 w-[260px]
              bg-gradient-to-r from-cyan-300/14 to-transparent blur-3xl
              transition-all duration-[1400ms] ease-in-out
              ${open ? "translate-x-0 opacity-80" : "-translate-x-20 opacity-0"}
            `}
          />

          <div
            className={`
              flex max-w-full items-start gap-5 px-6 py-5
              transition-all duration-700
              ${open ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}
            `}
          >
            {/* left HUD */}
            <div className="mr-1 flex w-[220px] shrink-0 flex-col rounded-[22px] border border-white/10 bg-[rgba(8,18,38,0.72)] px-4 py-4">
              <span className="text-[10px] tracking-[0.28em] text-cyan-200/86">
                SINGULARITY LAB
              </span>

              <span className="mt-2 text-[19px] font-light tracking-[0.02em] text-white">
                制御パネル
              </span>

              <span className="mt-2 text-[10px] tracking-[0.16em] text-white/44">
                現在の接続先 / {currentItem.label}
              </span>

              <span className="mt-1 text-[10px] tracking-[0.14em] text-white/34">
                {currentItem.meta}
              </span>
            </div>

            <div className="mt-2 hidden h-12 w-px shrink-0 bg-gradient-to-b from-transparent via-white/12 to-transparent xl:block" />

            {/* nav items */}
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.to}
                  label={item.label}
                  meta={item.meta}
                  to={item.to}
                  active={location.pathname === item.to}
                  onMove={handleMove}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavItem({ label, meta, to, active, onMove }) {
  return (
    <button
      type="button"
      onClick={() => onMove(to)}
      className="group relative max-w-full text-left"
    >
      <div
        className={`
          relative overflow-hidden rounded-[22px] border px-4 py-3
          transition-all duration-300
          ${
            active
              ? "border-cyan-200/28 bg-[rgba(11,26,48,0.92)] shadow-[0_0_36px_-18px_rgba(34,211,238,0.48)]"
              : "border-white/10 bg-[rgba(8,18,38,0.64)] hover:border-white/22 hover:bg-[rgba(10,22,42,0.82)]"
          }
        `}
      >
        <div
          className={`
            pointer-events-none absolute inset-y-0 left-0 w-[96px]
            bg-gradient-to-r
            ${active ? "from-cyan-300/16" : "from-fuchsia-300/10"}
            to-transparent blur-2xl
          `}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

        <div
          className={`
            absolute left-3 top-[18px] h-[6px] w-[6px] rounded-full
            ${active ? "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.46)]" : "bg-white/16"}
          `}
        />

        <div className="pl-5">
          <p
            className={`
              text-[13px] tracking-[0.16em] transition-colors duration-300
              ${active ? "text-white" : "text-white/78 group-hover:text-white"}
            `}
          >
            {label}
          </p>

          <p
            className={`
              mt-[3px] text-[9px] tracking-[0.14em]
              ${active ? "text-cyan-200/74" : "text-white/34 group-hover:text-white/50"}
            `}
          >
            {meta}
          </p>
        </div>

        {active && (
          <>
            <span className="pointer-events-none absolute bottom-[2px] left-1/2 h-[1px] w-[72%] -translate-x-1/2 bg-cyan-200/72" />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-cyan-200/82">
              →
            </span>
          </>
        )}
      </div>
    </button>
  );
}