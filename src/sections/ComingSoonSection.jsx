// src/sections/ComingSoonSection.jsx
export default function ComingSoonSection() {
  return (
    <section className="py-[120px] bg-bg-alt border-t border-line-soft/40">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="sg-label mb-3 text-accent-soft">ROOMS</p>
            <h2 className="text-[26px] font-light">
              これから開く「特異点の部屋」たち
            </h2>
          </div>
          <p className="text-[12px] text-text-secondary">
            ※ 現在は観測準備中。順次アップデートしていきます。
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <RoomCard
            tag="AI MAP"
            title="AI地図室"
            desc="現在のAIを4分類で俯瞰する基礎の部屋。"
          />
          <RoomCard
            tag="AGI CORE"
            title="AGI中枢室"
            desc="OSとしてのAGIの構造を深掘りする本命ルーム。"
          />
          <RoomCard
            tag="FUTURE LOG"
            title="未来予測ログ"
            desc="裕人×Noaの対話ログから導いた未来の断片。"
          />
          <RoomCard
            tag="SINGULARITY LOG"
            title="観測記録室"
            desc="AIについての“気づき”だけを集める記録部屋。"
          />
        </div>
      </div>
    </section>
  );
}

function RoomCard({ tag, title, desc }) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-3xl border border-line-subtle
        bg-bg/80 backdrop-blur-sm
        px-5 py-5 flex flex-col justify-between
        hover:border-accent-soft hover:-translate-y-[2px]
        transition-all duration-300
      "
    >
      {/* COMING SOON ラベル */}
      <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-line-soft text-[10px] text-text-muted mb-3">
        COMING SOON
      </span>

      <div className="mb-4">
        <p className="sg-label text-accent-soft mb-1">{tag}</p>
        <p className="text-[15px] text-text-primary mb-1">{title}</p>
        <p className="text-[12px] text-text-secondary leading-relaxed">
          {desc}
        </p>
      </div>

      <span className="text-[12px] text-text-muted mt-2">準備中…</span>
    </div>
  );
}