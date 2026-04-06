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

export default function GlobalNavSP() {
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
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[380] md:hidden
          bg-[radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.08),transparent_16%),radial-gradient(circle_at_74%_10%,rgba(192,132,252,0.10),transparent_20%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.54))]
          backdrop-blur-[3px]
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
          className="
            group relative flex h-[54px] w-[54px] items-center justify-center overflow-hidden
            rounded-[20px] border border-white/16
            bg-[rgba(7,18,34,0.74)]
            backdrop-blur-xl
            shadow-[0_0_48px_-12px_rgba(168,85,247,0.34)]
            transition-all duration-300 active:scale-[0.96]
          "
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.10))]" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <span className="relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full border border-cyan-200/20 bg-black/10">
            <span
              className={`
                h-[8px] w-[8px] rounded-full transition-all duration-300
                ${
                  open
                    ? "bg-fuchsia-300 shadow-[0_0_14px_rgba(244,114,182,0.58)]"
                    : "bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.58)]"
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
            rounded-t-[30px] border-t border-white/12
            bg-[rgba(7,18,34,0.90)]
            backdrop-blur-2xl
            shadow-[0_-28px_80px_rgba(0,0,0,0.54)]
            transition-transform duration-500
            ${open ? "translate-y-0" : "translate-y-full"}
          `}
          style={{
            maxHeight: "min(82vh, 760px)",
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          }}
        >
          {/* visual layers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[30px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,211,238,0.05)_0%,transparent_24%,rgba(192,132,252,0.05)_100%)]" />
            <div className="absolute left-[-10%] top-[-8%] h-[9rem] w-[9rem] rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute right-[-14%] top-[10%] h-[10rem] w-[10rem] rounded-full bg-fuchsia-300/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
          </div>

          {/* layout shell */}
          <div className="relative z-10 flex max-h-[inherit] flex-col">
            {/* handle */}
            <div className="mb-4 flex w-full shrink-0 justify-center pt-4">
              <div className="relative h-[6px] w-[54px] rounded-full bg-white/16">
                <span className="absolute left-1/2 top-1/2 h-[3px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/46" />
              </div>
            </div>

            {/* header */}
            <div className="mb-4 shrink-0 px-5">
              <div className="rounded-[22px] border border-white/10 bg-[rgba(8,18,38,0.72)] px-4 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.30em] text-cyan-200/88">
                      SINGULARITY LAB
                    </p>
                    <p className="mt-2 text-[18px] font-light tracking-[0.02em] text-white">
                      制御パネル
                    </p>
                    <p className="mt-2 text-[10px] tracking-[0.16em] text-white/42">
                      現在の接続先 / {currentItem.label}
                    </p>
                    <p className="mt-1 break-words text-[10px] tracking-[0.14em] text-white/34">
                      {currentItem.meta}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="
                      shrink-0 rounded-pill border border-white/10
                      bg-white/[0.04] px-3 py-[7px]
                      text-[10px] tracking-[0.16em] text-white/58
                    "
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>

            {/* scroll area */}
            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-2">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <NavItemSP
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
          </div>
        </div>
      </div>
    </>
  );
}

function NavItemSP({ label, meta, to, active, onMove }) {
  return (
    <button
      type="button"
      onClick={() => onMove(to)}
      className="group relative mb-2 w-full text-left transition-transform active:scale-[0.985]"
    >
      <div
        className={`
          relative overflow-hidden rounded-[22px] border px-4 py-4
          transition-all duration-300
          ${
            active
              ? "border-cyan-200/26 bg-[rgba(11,26,48,0.92)] shadow-[0_0_36px_-18px_rgba(34,211,238,0.44)]"
              : "border-white/10 bg-[rgba(8,18,38,0.68)]"
          }
        `}
      >
        <div
          className={`
            pointer-events-none absolute inset-y-0 left-0 w-[92px] bg-gradient-to-r
            ${active ? "from-cyan-300/14" : "from-fuchsia-300/10"}
            to-transparent blur-2xl
          `}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

        <span
          className={`
            absolute left-3 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full transition-all duration-300
            ${
              active
                ? "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.48)]"
                : "bg-white/14"
            }
          `}
        />

        <div className="flex items-start justify-between gap-3 pl-5">
          <div className="min-w-0">
            <p
              className={`
                break-words text-[15px] tracking-[0.12em]
                ${active ? "text-white" : "text-white/80"}
              `}
            >
              {label}
            </p>

            <p
              className={`
                mt-[4px] break-words text-[10px] tracking-[0.14em]
                ${active ? "text-cyan-200/72" : "text-white/34"}
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
                  ? "translate-x-0 text-cyan-200/86 opacity-100"
                  : "translate-x-[-2px] text-white/26 opacity-70"
              }
            `}
          >
            →
          </span>
        </div>

        {active && (
          <span className="pointer-events-none absolute bottom-[2px] left-1/2 h-[1px] w-[76%] -translate-x-1/2 bg-cyan-200/68" />
        )}
      </div>
    </button>
  );
}