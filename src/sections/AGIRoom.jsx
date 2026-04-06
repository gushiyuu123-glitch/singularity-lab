// src/sections/AGIRoom.jsx
export default function AGIRoom() {
  return (
    <section
      className="
        relative
        py-[140px]
        border-t border-line-soft/40
        bg-gradient-to-b from-bg via-bg to-bg-alt
      "
    >
      <div className="max-w-[1120px] mx-auto px-8 grid grid-cols-2 gap-16">
        {/* ===== LEFT：テキストブロック ===== */}
        <div>
          <p className="sg-label mb-4 text-accent-soft">AGI CORE ROOM</p>

          <h2 className="text-[30px] leading-[1.4] font-light mb-6">
            AGIは「ひとつのアプリ」ではなく、<br />
            すべてのAIを支える <span className="text-accent-soft">OS</span> である。
          </h2>

          <p className="text-[14px] leading-relaxed text-text-secondary mb-5">
            ChatGPT や Gemini は、AGIという土台の上で動く
            “拡張アプリケーション”に近い存在。<br />
            反復・暗記・計算・構築といった処理は、ほぼすべて
            この層に吸い込まれていく。
          </p>

          <p className="text-[14px] leading-relaxed text-text-secondary">
            だからこそ、人間側が担うべきなのは
            「どんな世界を設計し、その上で何を動かすか」という
            <span className="text-text-primary"> 意志と世界観の設計</span>。
            この部屋では、その境界線を観測していく。
          </p>

          {/* AGI ≒ OS のラベル */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-deep/20 border border-accent-soft/40">
            <span className="sg-label text-accent-soft">AGI = OS</span>
            <span className="text-[12px] text-text-secondary">
              その上で無数のAIエージェントが動き続ける
            </span>
          </div>
        </div>

        {/* ===== RIGHT：OS / APP / 人間の役割カード ===== */}
        <div className="space-y-4">
          <RoleCard
            title="AGI（OS）に吸い込まれる領域"
            items={[
              "反復作業・ルーティンワーク",
              "コードのバグ検出と自動修正",
              "システム設計・最適化のドラフト",
              "資料作成・要約・翻訳の下地",
            ]}
          />

          <RoleCard
            title="各AI（アプリ）の役割"
            items={[
              "ChatGPT：思考の外在化・構造化",
              "Gemini：マルチモーダルな理解",
              "Claude：読解・倫理・丁寧な文章",
              "生成AI：ビジュアル・音・質感の生成",
            ]}
          />

          <RoleCard
            title="それでも人間にしかできないこと"
            highlight
            items={[
              "世界観・コンセプトの設計",
              "0→1の“問い”を生むこと",
              "美意識・違和感検知・余白設計",
              "どこまでを自動化し、どこから手をかけるかを決める判断",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function RoleCard({ title, items, highlight }) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-3xl border px-6 py-5
        backdrop-blur-sm
        ${
          highlight
            ? "border-accent-soft/70 bg-accent-deep/15 shadow-accent-ring"
            : "border-line-subtle bg-bg-alt/70"
        }
      `}
    >
      {/* 右上の薄いグロー */}
      <div className="pointer-events-none absolute -top-10 -right-6 w-24 h-24 bg-accent-soft/20 blur-3xl" />
      <p className="text-[13px] mb-3 text-text-secondary">{title}</p>
      <ul className="space-y-1.5 text-[13px] text-text-primary">
        {items.map((text) => (
          <li key={text} className="flex gap-2">
            <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-accent-soft/70" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}