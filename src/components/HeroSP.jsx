import { useNavigate } from "react-router-dom";
import heroImg from "../assets/singularity-hero1.png";
import TransitionOverlay from "../components/TransitionOverlay";
import logo from "../assets/singularity-logo1.png";

export default function HeroSP() {
  return (
    <section
      className="
        relative flex min-h-screen w-full flex-col overflow-hidden
        bg-[#020611] md:hidden
      "
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Singularity SP Background"
          className="
            h-full w-full object-cover
            scale-[1.18] -translate-y-[7%]
            opacity-[0.14]
          "
        />

        {/* 深い暗幕 */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,17,0.22)_0%,rgba(3,8,20,0.78)_38%,rgba(1,3,10,0.97)_100%)]" />

        {/* 中央の光膜を少し弱める */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.64]"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, rgba(165,235,255,0.14), transparent 24%), radial-gradient(circle at 50% 36%, rgba(214,184,255,0.10), transparent 30%)",
          }}
        />

        {/* グリッド */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* 縦ライン */}
        <div className="pointer-events-none absolute left-1/2 top-[8%] bottom-[14%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/18 to-transparent" />

        {/* 上半分だけ少し読むための暗幕 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[54%] bg-[linear-gradient(180deg,rgba(2,6,17,0.14)_0%,rgba(2,6,17,0.34)_62%,transparent_100%)]" />

        {/* 粒子 */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[16%] top-[18%] h-[8px] w-[8px] rounded-full bg-cyan-300 blur-[6px] opacity-64 animate-pulse" />
          <span className="absolute left-[80%] top-[24%] h-[8px] w-[8px] rounded-full bg-fuchsia-300 blur-[8px] opacity-56 animate-pulse" />
          <span className="absolute left-[72%] top-[54%] h-[8px] w-[8px] rounded-full bg-violet-300 blur-[7px] opacity-52 animate-pulse" />
          <span className="absolute left-[24%] top-[64%] h-[7px] w-[7px] rounded-full bg-white blur-[7px] opacity-36 animate-pulse" />
        </div>
      </div>

      {/* =========================
          LOGO
      ========================== */}
      <div className="absolute left-5 top-5 z-[30]">
        <img
          src={logo}
          alt="SINGULARITY Logo"
          className="w-[124px] opacity-[0.96] drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]"
        />
      </div>

      {/* =========================
          FAKE CORE / FUTURE OBJECT
      ========================== */}
      <div className="pointer-events-none absolute left-1/2 top-[11.8rem] z-[8] h-[14.2rem] w-[14.2rem] -translate-x-1/2">
        {/* 外殻リング */}
        <div className="absolute inset-0 rounded-full border border-cyan-200/14 shadow-[0_0_24px_rgba(34,211,238,0.10)]" />
        <div className="absolute inset-[7%] rounded-full border border-fuchsia-200/12" />
        <div className="absolute inset-[15%] rounded-full border border-white/8" />

        {/* 中心コア */}
        <div className="absolute left-1/2 top-1/2 h-[6.2rem] w-[6.2rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#b6ecff_18%,#66d8ff_36%,rgba(91,104,255,0.20)_58%,transparent_76%)] blur-[0.2px]" />

        {/* 光ビーム */}
        <div className="absolute left-1/2 top-1/2 h-[12.2rem] w-[0.9rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,transparent_0%,rgba(123,234,255,0.12)_18%,rgba(123,234,255,0.20)_50%,rgba(123,234,255,0.12)_82%,transparent_100%)] blur-[10px]" />

        {/* オービット風リング */}
        <div className="absolute inset-[2%] rounded-full border border-cyan-200/16 [transform:rotate(24deg)_scaleX(1.06)]" />
        <div className="absolute inset-[9%] rounded-full border border-fuchsia-200/12 [transform:rotate(-33deg)_scaleX(0.88)]" />
        <div className="absolute inset-[13%] rounded-full border border-white/10 [transform:rotate(58deg)_scaleX(1.12)]" />

        {/* 破片 */}
        <span className="absolute left-[12%] top-[28%] h-[9px] w-[9px] rotate-45 bg-cyan-300/64 shadow-[0_0_10px_rgba(103,232,249,0.28)]" />
        <span className="absolute right-[14%] top-[34%] h-[9px] w-[9px] rotate-45 bg-fuchsia-300/64 shadow-[0_0_10px_rgba(244,114,182,0.28)]" />
        <span className="absolute bottom-[20%] left-[22%] h-[8px] w-[8px] rotate-45 bg-violet-300/60 shadow-[0_0_10px_rgba(196,181,253,0.28)]" />
      </div>

      {/* =========================
          TYPOGRAPHY
      ========================== */}
      <div className="relative z-[12] pt-[6.2rem]">
        <div className="relative px-5">
          {/* 背後巨大タイポを弱めて位置整理 */}
          <div className="pointer-events-none absolute left-4 top-[5.4rem] select-none text-[52px] font-black uppercase leading-none tracking-[0.16em] text-white/[0.035]">
            AI
          </div>
          <div className="pointer-events-none absolute right-0 top-[9.2rem] select-none text-[48px] font-black uppercase leading-none tracking-[0.12em] text-white/[0.03]">
            CORE
          </div>

          {/* ラベル */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] tracking-[0.32em] text-cyan-200/86">
              SINGULARITY LAB
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/62 to-transparent" />
          </div>

          {/* ド派手英字 */}
          <div className="relative">
            <p className="absolute left-[1px] top-[1px] text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-cyan-300/14">
              HUMAN × AI
            </p>
            <p className="relative text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] bg-[linear-gradient(180deg,#ffffff_0%,#cdefff_48%,#92dcff_100%)] bg-clip-text text-transparent">
              HUMAN × AI
            </p>
          </div>

          <div className="relative mt-1">
            <p className="absolute left-[1px] top-[1px] text-[36px] font-semibold leading-[0.98] tracking-[-0.04em] text-fuchsia-300/12">
              INTERFACE
            </p>
            <p className="relative text-[36px] font-semibold leading-[0.98] tracking-[-0.04em] bg-[linear-gradient(90deg,#ffffff_0%,#dfc6ff_48%,#93efff_100%)] bg-clip-text text-transparent">
              INTERFACE
            </p>
          </div>

          {/* 日本語タイポを少し近づける */}
          <div className="mt-[10.4rem]">
            <p className="text-[13px] tracking-[0.24em] text-white/50">
              境界の研究室
            </p>
          </div>

          {/* 説明 */}
          <p className="mt-4 max-w-[25rem] text-[14px] leading-[1.88] text-white/80">
            これは説明のためのトップではなく、
            人類と人工知能の境界面を視覚化した観測装置。
            思考、視覚、推論、生成が一点へ収束し、
            静かな特異点として脈動している。
          </p>

          {/* status chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusChipSP label="LANGUAGE" color="cyan" />
            <StatusChipSP label="VISION" color="fuchsia" />
            <StatusChipSP label="REASONING" color="violet" />
          </div>
        </div>
      </div>

      {/* =========================
          ACCESS PANEL
      ========================== */}
      <div className="relative z-[14] mt-10 mb-12 px-4">
        {/* 区切り */}
        <div className="pointer-events-none mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div
          className="
            relative overflow-hidden rounded-[28px]
            border border-white/16
            bg-[rgba(7,18,34,0.52)]
            p-4
            backdrop-blur-[18px]
            shadow-[0_0_60px_-24px_rgba(140,110,255,0.18)]
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 via-transparent to-white/3 opacity-[0.14]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          <div className="pointer-events-none absolute right-[-12%] top-[-10%] h-[8rem] w-[8rem] rounded-full bg-fuchsia-300/8 blur-3xl" />
          <div className="pointer-events-none absolute left-[-12%] bottom-[-10%] h-[7rem] w-[7rem] rounded-full bg-cyan-300/8 blur-3xl" />

          {/* top */}
          <div className="relative z-10 mb-4">
            <p className="text-[11px] tracking-[0.24em] text-white/66">
              INTELLIGENCE PORTS
            </p>
            <p className="mt-2 text-[12px] leading-[1.8] text-white/50">
              各AIへ接続し、未来の構造を読む。
            </p>
          </div>

          {/* AGI */}
          <div className="relative z-10 mb-4 overflow-hidden rounded-[22px] border border-white/16 bg-[linear-gradient(135deg,rgba(4,14,28,0.90),rgba(10,20,38,0.70),rgba(110,76,255,0.14))] p-4 shadow-[0_18px_52px_-40px_rgba(120,90,255,0.34)]">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] tracking-[0.24em] text-fuchsia-200/82">
                CENTRAL CORE / AGI
              </p>
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/38">
                NEXT PHASE
              </span>
            </div>

            <p className="mb-1 text-[17px] text-white">
              すべてを統合する知性の核
            </p>

            <p className="text-[12px] leading-[1.75] text-white/70">
              個別機能の先で、それらを束ねる“次の知性”を仮説として展示する中枢区画。
            </p>
          </div>

          {/* cards */}
          <div className="relative z-10 space-y-3">
            <CategorySP
              label="ChatGPT"
              desc="思考・言語・解釈に強い対話OS"
              meta="LANGUAGE / STRUCTURE"
              to="/chatgpt"
              glow="cyan"
            />
            <CategorySP
              label="Gemini"
              desc="検索・画像・動画を横断する統合知性"
              meta="SEARCH / MULTIMODAL"
              to="/gemini"
              glow="sky"
            />
            <CategorySP
              label="Claude"
              desc="長文読解と安定推論に寄った静かな側近"
              meta="LONG CONTEXT / STABILITY"
              to="/claude"
              glow="violet"
            />
            <CategorySP
              label="DeepSeek"
              desc="演算、推論、コスパへ振り切った計算炉"
              meta="COMPUTE / REASONING"
              to="/deepseek"
              glow="emerald"
            />
            <CategorySP
              label="Midjourney"
              desc="視覚世界を一枚へ圧縮する生成装置"
              meta="VISUAL / IMAGINATION"
              to="/midjourney"
              glow="fuchsia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusChipSP({ label, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.5)]",
    fuchsia: "bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.5)]",
    violet: "bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.5)]",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-[rgba(8,18,38,0.58)] px-3 py-[8px]">
      <span className={`h-[5px] w-[5px] rounded-full ${map[color]}`} />
      <span className="font-mono text-[10px] tracking-[0.18em] text-white/56">
        {label}
      </span>
    </div>
  );
}

function CategorySP({ label, desc, meta, to, glow = "cyan" }) {
  const navigate = useNavigate();

  const glowMap = {
    cyan: "from-cyan-300/10",
    sky: "from-sky-300/10",
    violet: "from-violet-300/10",
    emerald: "from-emerald-300/10",
    fuchsia: "from-fuchsia-300/10",
  };

  const dotMap = {
    cyan: "bg-cyan-300",
    sky: "bg-sky-300",
    violet: "bg-violet-300",
    emerald: "bg-emerald-300",
    fuchsia: "bg-fuchsia-300",
  };

  const handleClick = async () => {
    await TransitionOverlay.play();
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group block w-full text-left transition-transform active:scale-[0.985]"
    >
      <div className="relative overflow-hidden rounded-[22px] border border-white/14 bg-[rgba(7,18,34,0.42)] p-4 backdrop-blur-[10px] transition-all duration-300 active:border-white/22">
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-[88px] bg-gradient-to-r ${glowMap[glow]} to-transparent blur-2xl`} />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
        <div className={`absolute left-3 top-[18px] h-[6px] w-[6px] rounded-full ${dotMap[glow]} shadow-[0_0_10px_rgba(255,255,255,0.22)]`} />

        <div className="flex items-start justify-between gap-3 pl-6">
          <div>
            <div className="mb-[3px] flex flex-wrap items-center gap-2">
              <p className="text-[17px] text-white">{label}</p>
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/38">
                {meta}
              </span>
            </div>
            <p className="text-[12px] leading-[1.72] text-white/68">
              {desc}
            </p>
          </div>

          <span className="mt-[2px] text-[16px] text-white/22 transition-all duration-300 group-active:translate-x-[2px] group-active:text-white">
            →
          </span>
        </div>
      </div>
    </button>
  );
}