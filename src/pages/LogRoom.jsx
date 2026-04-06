import { useMemo } from "react";
import { Link } from "react-router-dom";

const logEntries = [
  {
    id: "LOG-001",
    category: "THOUGHT",
    title: "AIがある時代ほど、自分で考える力が大事になる",
    summary:
      "AIは全部を代わりにやってくれる道具ではなく、考えを整理したり、方向を見つけたりする時に強い。使い方が浅いと浅い答えになり、深く使うほど自分の考えもはっきりしてくる。",
    date: "2026.04.06",
  },
  {
    id: "LOG-002",
    category: "DESIGN",
    title: "サイトは見た目だけじゃなく、伝わり方まで含めて作る",
    summary:
      "色やレイアウトを整えるだけではなく、見た人がどう感じるか、何が伝わるかまで考えて作ることで、サイトの印象は大きく変わる。",
    date: "2026.04.06",
  },
  {
    id: "LOG-003",
    category: "SYSTEM",
    title: "AIは全部同じじゃなく、役割で見るとわかりやすい",
    summary:
      "考えるのが得意なAI、調べるのが得意なAI、画像に強いAI。それぞれの役割で分けて見ると、何に使えばいいかがかなりはっきりする。",
    date: "2026.04.06",
  },
  {
    id: "LOG-004",
    category: "RECORD",
    title: "この研究室は、機能を並べるだけの場所ではない",
    summary:
      "どのAIにどんな特徴があるかだけでなく、実際にどう使えるのか、どんな違いがあるのかまで見えるようにしたい。ここはそのための記録部屋。",
    date: "2026.04.06",
  },
];

const archiveNotes = [
  "制作メモ",
  "AIごとの気づき",
  "実験記録",
  "思考メモ",
  "作品の裏側",
  "今後の構想",
];

export default function LogRoom() {
  const stats = useMemo(
    () => [
      { label: "ENTRIES", value: "04" },
      { label: "STATUS", value: "OPEN" },
      { label: "MODE", value: "ARCHIVE" },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-text-primary">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020611_0%,#040a16_42%,#02040b_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "88px 88px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px",
          }}
        />

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent" />
        <div className="absolute left-[14%] top-[12%] h-[260px] w-[260px] rounded-full bg-cyan-300/8 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-[280px] w-[280px] rounded-full bg-fuchsia-300/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#020611] to-transparent" />
      </div>

      <section className="relative z-[1] px-6 pb-12 pt-28 md:px-10 md:pt-32 xl:px-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.52)]" />
                  <span className="text-[10.5px] tracking-[0.32em] text-cyan-200/84 uppercase">
                    SINGULARITY LAB
                  </span>
                </span>
                <span className="h-px w-14 bg-gradient-to-r from-cyan-300/48 to-transparent" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-white/34 uppercase">
                  Log Room / Archive
                </span>
              </div>

              <div className="relative max-w-[860px]">
                <div className="pointer-events-none absolute -left-1 top-[-18px] select-none text-[68px] font-black uppercase leading-none tracking-[0.14em] text-white/[0.03] md:text-[98px]">
                  LOG ROOM
                </div>

                <h1 className="relative text-[42px] font-semibold leading-[0.94] tracking-[-0.04em] text-white md:text-[64px] xl:text-[78px]">
                  <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#d8f3ff_48%,#8fdcff_100%)] bg-clip-text text-transparent">
                    OBSERVATION
                  </span>
                  <span className="mt-1 block bg-[linear-gradient(100deg,#ffffff_0%,#e1c9ff_50%,#91efff_100%)] bg-clip-text text-transparent">
                    ARCHIVE
                  </span>
                </h1>

                <div className="mt-6 max-w-[640px] space-y-4">
                  <p className="text-[15px] leading-[2] text-text-secondary md:text-[16px]">
                    ここは、AIや制作についての記録を置いていく部屋です。
                    気づいたこと、試したこと、考えたことを、
                    少しずつ残していきます。
                  </p>
                  <p className="text-[14px] leading-[1.95] text-text-muted md:text-[15px]">
                    完成したものだけでなく、
                    途中で見えたことも記録していくための場所です。
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(8,18,38,0.62)] px-4 py-[10px] backdrop-blur-sm"
                    >
                      <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.46)]" />
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/50">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-white/92">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/" className="sg-button group">
                    <span className="sg-button-label">RETURN</span>
                    <span className="sg-button-text">HOMEへ戻る</span>
                    <span className="text-[14px] text-cyan-200 transition-transform duration-300 group-hover:translate-x-[3px]">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="sg-hud p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.24em] text-white/62 uppercase">
                  ROOM NOTES
                </span>
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/34 uppercase">
                  ACTIVE
                </span>
              </div>

              <p className="mb-4 text-[13px] leading-[1.9] text-text-secondary">
                ここには、完成した答えよりも、
                作る途中で見えたことを残していきます。
              </p>

              <div className="space-y-2">
                {archiveNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-[8px]"
                  >
                    <span className="h-[4px] w-[4px] rounded-full bg-fuchsia-300/80" />
                    <span className="text-[11px] text-white/66">{note}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative z-[1] px-6 pb-24 md:px-10 xl:px-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-6 flex items-center gap-3">
            <p className="text-[10.5px] tracking-[0.24em] text-white/62 uppercase">
              RECORD ENTRIES
            </p>
            <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {logEntries.map((entry) => (
              <article key={entry.id} className="sg-card p-6 md:p-7">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.46)]" />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/42">
                      {entry.id}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-white/26">
                    {entry.date}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-[6px] text-[9px] tracking-[0.18em] text-fuchsia-200/78 uppercase">
                    {entry.category}
                  </span>
                </div>

                <h2 className="mb-3 text-[20px] font-light leading-[1.45] text-white/94 md:text-[22px]">
                  {entry.title}
                </h2>

                <p className="text-[14px] leading-[1.95] text-text-secondary">
                  {entry.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}