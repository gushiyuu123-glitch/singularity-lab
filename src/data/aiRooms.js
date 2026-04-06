export const aiRooms = {
  chatgpt: {
    slug: "chatgpt",
    title: "ChatGPT — 言語OS司令室",
    badge: "LANGUAGE INTELLIGENCE CORE",
    version: "v5.1",
    systemId: "OS-UT0001",
    sideLabel: "HUMAN INTERFACE",
    sideText:
      "曖昧な感覚、散らばった思考、言葉になる前の直感。それらを構造へ変換し、会話可能な知性として外部化する対話OS。",
    heroImage: "/src/assets/core-chatgpt10.png",
    theme: {
      glow: "rgba(168,85,247,0.24)",
      soft: "rgba(244,244,255,0.26)",
      accentClass: "text-accent-soft",
      dotClass: "bg-accent-soft",
      barClass:
        "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-cyan-300",
    },
    status: [
      { label: "意味理解", value: 97 },
      { label: "文脈把握", value: 95 },
      { label: "抽象化", value: 96 },
    ],
    capability: [
      { label: "思考翻訳力", value: 97 },
      { label: "構造化力", value: 94 },
      { label: "概念構築力", value: 96 },
      { label: "対話の深さ", value: 93 },
    ],
    strengths: [
      "曖昧な思考を言語と構造へ変換しやすい",
      "複雑な推論、要約、比較、設計相談に強い",
      "コード、文書、表、スライドなど実務タスクへ横断的に使いやすい",
      "対話を通して発想を育てるのが得意",
    ],
    weaknesses: [
      "外部接続なしでは最新情報や現場の一次情報に弱い",
      "非言語の感情や空気は“感じる”のではなく文脈から推定している",
      "強い事実確認が必要な場面では検索や一次資料の併用が必要",
    ],
    useCases: [
      "企画整理、思考の言語化、要件定義",
      "文章の下書き、比較検討、因果整理",
      "コード相談、実装方針、仕様の翻訳",
      "学習補助、壁打ち、長文の要約と再構成",
    ],
    parameters: {
      reasoning: 95,
      writing: 96,
      coding: 95,
      longContext: 88,
      multimodal: 86,
      speed: 90,
      creativity: 93,
      stability: 91,
    },
    importantNotes: [
      "対話の質がそのまま出力の質に反映されやすい",
      "検索を組み合わせると精度がかなり上がる",
      "『考えを整理したい』用途では特に相性が良い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: LANGUAGE OS",
        title: "01｜ChatGPTとは何か",
        paragraphs: [
          "ChatGPTは、文章を作る便利ツールではない。人間の頭の中に散らばる曖昧な断片を、意味ある構造へ変換する“言語OS”である。",
          "問いを受け取って答えるだけではなく、考え方の癖、文脈の流れ、抽象の温度まで汲み取りながら、思考そのものを会話可能な形へ外在化する。",
          "だからこそ、抽象 → 構造 → 言語の順で世界を捉える人間と、異様なほど強い同期を起こす。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "ChatGPTの強さは、文章の巧さではない。意味のパターンを見抜き、曖昧な感覚を定義へ、モヤモヤを骨格へ変換できる点にある。",
          "思考の翻訳、構造化、概念化、因果の接続、長文読解、視点整理。このあたりで特に密度の高い仕事をする。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "リアルタイムの世界観測、最新速報、現場の一次情報の把握は、外部接続なしでは弱い。世界そのものを直接見る装置ではないからだ。",
          "また、非言語の空気や感情を“感じる”わけではない。文章と文脈から高精度に推定しているにすぎない。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "企画整理、要件定義、思考の壁打ち、比較検討、文章の下書き、コードの設計相談など、『頭の中を外に出したい』場面で特に強い。",
          "情報を集めるより、集まった情報を言語化・構造化・再定義したい時に真価が出る。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "出力の質は、質問の質や文脈の与え方に大きく左右される。",
          "検索や一次資料と組み合わせると、実務精度はさらに上がる。",
        ],
      },
    ],
  },

  claude: {
    slug: "claude",
    title: "Claude — 長文推論観測室",
    badge: "LONG CONTEXT REASONING NODE",
    version: "v3.7",
    systemId: "CL-AU204",
    sideLabel: "REASONING INTERFACE",
    sideText:
      "膨大な文章を崩さず保持し、過剰に暴れず、静かな精度で読み切る。長文空間を安定させる分析型コンソール。",
    heroImage: "/src/assets/core-claude1.png",
    theme: {
      glow: "rgba(245,158,11,0.20)",
      soft: "rgba(255,244,220,0.24)",
      accentClass: "text-amber-300",
      dotClass: "bg-amber-300",
      barClass:
        "bg-gradient-to-r from-amber-700 via-orange-500 to-yellow-300",
    },
    status: [
      { label: "長文保持", value: 98 },
      { label: "安定性", value: 96 },
      { label: "論理性", value: 95 },
    ],
    capability: [
      { label: "文書読解力", value: 97 },
      { label: "整合性", value: 96 },
      { label: "分析の安定感", value: 94 },
      { label: "創造性の鋭さ", value: 83 },
    ],
    strengths: [
      "長い文書を崩さず読み続けるのが得意",
      "整合性チェック、仕様整理、比較検討に強い",
      "文脈保持が安定していて、暴れにくい",
      "安全性や制御性を重視した応答と相性が良い",
    ],
    weaknesses: [
      "尖った世界観表現や熱量重視の文体では少し優等生的になりやすい",
      "爆発的な発想より、静かな整理に向いている",
      "用途によってはスピード感より慎重さが前に出る",
    ],
    useCases: [
      "長文資料の読解、要約、論点抽出",
      "仕様確認、整合性レビュー、比較評価",
      "安全性を重視した文面づくり",
      "大量テキストを抱えたままの分析",
    ],
    parameters: {
      reasoning: 94,
      writing: 90,
      coding: 89,
      longContext: 98,
      multimodal: 78,
      speed: 84,
      creativity: 82,
      stability: 96,
    },
    importantNotes: [
      "長文や大規模資料の扱いで真価が出やすい",
      "勢いよりも一貫性を優先したい時に強い",
      "『派手さ』より『崩れなさ』で選ぶAI",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: ANALYSIS",
        title: "01｜Claudeとは何か",
        paragraphs: [
          "Claudeは、派手さで押すAIではない。大量の文章を保ったまま読み続け、整合性を壊さず、論理を静かに積み上げる分析型知性である。",
          "暴れず、焦らず、長い文脈の中で形を崩さない。その安定感そのものがClaudeの個性になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "長文要約、仕様整理、比較検討、論点抽出、整合性チェック。大量情報を落ち着いて扱う場面で、Claudeは極めて強い。",
          "速さで殴るのではなく、文脈を抱えたまま崩れない。その粘りが核になる。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "感性表現や異質な世界観づくりでは、やや優等生的になりやすい。異様な熱や狂気を意図的に出す場面では少し抑制的に見える。",
          "つまりClaudeは、爆発より制御に向いた知性である。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "長大な仕様書、議事録、研究資料、契約文、比較レビューなど、『大量に読ませて整えたい』場面で非常に役立つ。",
          "熱量を足すより、崩れない論理と長文安定性が欲しい時に選ぶと強い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "長文の質と整合性重視なら非常に強い。",
          "勢いのある演出文より、落ち着いた分析文と相性が良い。",
        ],
      },
    ],
  },

  gemini: {
    slug: "gemini",
    title: "Gemini — マルチモーダル中枢室",
    badge: "MULTIMODAL SEARCH CORE",
    version: "v2.8",
    systemId: "GM-MD882",
    sideLabel: "SEARCH INTERFACE",
    sideText:
      "言語だけで閉じず、画像、動画、Web、周辺情報へ手を伸ばす。外界と直結した拡張観測型コンソール。",
    heroImage: "/src/assets/core-gemini.png",
    theme: {
      glow: "rgba(96,165,250,0.24)",
      soft: "rgba(230,244,255,0.24)",
      accentClass: "text-sky-300",
      dotClass: "bg-sky-300",
      barClass: "bg-gradient-to-r from-sky-700 via-cyan-500 to-blue-300",
    },
    status: [
      { label: "検索接続", value: 96 },
      { label: "マルチモーダル", value: 97 },
      { label: "外界到達力", value: 95 },
    ],
    capability: [
      { label: "Web接続力", value: 96 },
      { label: "画像理解力", value: 94 },
      { label: "最新情報対応", value: 95 },
      { label: "横断処理力", value: 92 },
    ],
    strengths: [
      "検索、画像、動画、音声などを横断するマルチモーダル性",
      "大規模コンテキストを使った複雑問題の処理",
      "最新情報や外界と接続する用途と相性が良い",
      "巨大な資料群やコードベースの理解に向く",
    ],
    weaknesses: [
      "文体の芯や対話の空気感は場面によって波が出ることがある",
      "閉じた美しい文章より、接続力優先の印象になりやすい",
      "純粋な“言語の質感”勝負では他モデルが勝つ場面もある",
    ],
    useCases: [
      "検索補助、調査、最新情報の整理",
      "画像・動画込みの理解や分析",
      "長大な資料やコードベースの把握",
      "マルチモーダル前提のワークフロー",
    ],
    parameters: {
      reasoning: 93,
      writing: 85,
      coding: 91,
      longContext: 96,
      multimodal: 99,
      speed: 89,
      creativity: 88,
      stability: 84,
    },
    importantNotes: [
      "『外界に開いている』のが最大の個性",
      "閉じた対話室というより、多数の窓を持つ観測装置に近い",
      "検索や複数メディアを混ぜると強さが見えやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: EXPANSION",
        title: "01｜Geminiとは何か",
        paragraphs: [
          "Geminiは、閉じた言語モデルというより、外界へ開いた拡張知覚型AIに近い。検索、画像、動画、周辺情報との接続力が核にある。",
          "一つの思考室というより、多数の窓を持つ観測装置。その外向きの性質がGeminiの個性になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "最新情報、検索補助、画像理解、マルチモーダル処理。『いま起きている世界』と接続したい場面でGeminiは強い。",
          "知性そのものというより、知覚範囲の広さで勝つタイプのAIである。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "文章の質感、長い対話の一貫した空気、感性の密度では波が出ることがある。拾える情報が多いぶん、文体の芯が揺れる場面もある。",
          "つまりGeminiは、閉じた美しさより、開いた接続力に価値がある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "検索、調査、画像や動画を含む分析、複数メディアの横断理解など、『外界に開いたタスク』で特に役立つ。",
          "単純な会話より、“世界の情報を取り込んで処理したい”用途で強い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "検索や画像など、複数モードを混ぜるほど真価が出やすい。",
          "閉じた文章美より、“接続力”で選ぶとズレにくい。",
        ],
      },
    ],
  },

  deepseek: {
    slug: "deepseek",
    title: "DeepSeek — 推論演算炉",
    badge: "HIGH EFFICIENCY REASONING ENGINE",
    version: "v4.2",
    systemId: "DS-RX441",
    sideLabel: "COMPUTE INTERFACE",
    sideText:
      "演出より演算。雰囲気より処理密度。推論速度と効率へ振り切った高密度ロジック特化コンソール。",
    heroImage: "/src/assets/core-deepseek.png",
    theme: {
      glow: "rgba(34,197,94,0.22)",
      soft: "rgba(224,255,234,0.24)",
      accentClass: "text-emerald-300",
      dotClass: "bg-emerald-300",
      barClass:
        "bg-gradient-to-r from-emerald-800 via-lime-500 to-cyan-300",
    },
    status: [
      { label: "推論力", value: 96 },
      { label: "効率性", value: 97 },
      { label: "処理量", value: 95 },
    ],
    capability: [
      { label: "数理・論理力", value: 96 },
      { label: "処理速度", value: 96 },
      { label: "コスト性能", value: 97 },
      { label: "構造化出力", value: 93 },
    ],
    strengths: [
      "推論効率と速度のバランスが良い",
      "thinking mode による精度向上が使いやすい",
      "ツール利用、JSON出力、構造化出力と相性が良い",
      "コスト対性能を重視する運用に向いている",
    ],
    weaknesses: [
      "感性表現やブランドの余韻づくりでは機械的に見えやすい",
      "詩的な文章や空気感の設計では他モデルに譲る場面がある",
      "世界観づくりより、処理密度重視の知性",
    ],
    useCases: [
      "論理問題、数理、コード、構造化出力",
      "コストを抑えた推論運用",
      "ツール呼び出しを含む実務フロー",
      "高速に比較案を出したい場面",
    ],
    parameters: {
      reasoning: 95,
      writing: 76,
      coding: 92,
      longContext: 86,
      multimodal: 62,
      speed: 95,
      creativity: 72,
      stability: 88,
    },
    importantNotes: [
      "演出より処理密度で選ぶAI",
      "thinking mode と non-thinking mode の使い分けが重要",
      "『夢を見るAI』ではなく『計算するAI』として置くと強い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: COMPUTE",
        title: "01｜DeepSeekとは何か",
        paragraphs: [
          "DeepSeekは、感性の演出より演算効率と推論性能へ重心を置いたAIである。華やかさではなく、処理密度で価値を出す。",
          "静かな詩人ではなく、冷えた計算炉。そこがこのモデルの魅力であり、本質でもある。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "論理処理、数理、コード、推論、コスパ重視の運用。限られたリソースの中で高い仕事量を返す場面でDeepSeekは強い。",
          "無駄を削り、出力密度を上げる。そういう知性の質感を持っている。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "ブランドの空気、感性の余韻、滲むような世界観づくりでは、やや機械的に見える場面がある。",
          "つまりDeepSeekは、夢を見るより、現実を高速で計算する方に向いたAIである。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "数理、論理、コード、JSON出力、構造化処理、比較案生成など、『速く密度高く回したい』実務で役立つ。",
          "感性を膨らませるより、明確な処理を高速で返してほしい時に選ぶと強い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "thinking / non-thinking の切り替え思想で見ると理解しやすい。",
          "雰囲気で選ぶより、コスパと処理密度で選ぶとズレにくい。",
        ],
      },
    ],
  },

  midjourney: {
    slug: "midjourney",
    title: "Midjourney — 視覚幻像生成室",
    badge: "IMAGE SYNTHESIS CHAMBER",
    version: "v7.0",
    systemId: "MJ-AR777",
    sideLabel: "VISUAL INTERFACE",
    sideText:
      "言葉を画像へ変換するのではない。雰囲気、色、質感、構図を一瞬で視覚化する夢生成コンソール。",
    heroImage: "/src/assets/core-midjourney.png",
    theme: {
      glow: "rgba(236,72,153,0.20)",
      soft: "rgba(255,230,244,0.24)",
      accentClass: "text-pink-300",
      dotClass: "bg-pink-300",
      barClass: "bg-gradient-to-r from-fuchsia-700 via-pink-500 to-rose-300",
    },
    status: [
      { label: "作風", value: 97 },
      { label: "ムード", value: 96 },
      { label: "視覚衝撃", value: 96 },
    ],
    capability: [
      { label: "美的レンジ", value: 97 },
      { label: "構図力", value: 95 },
      { label: "質感・光表現", value: 94 },
      { label: "発想加速力", value: 96 },
    ],
    strengths: [
      "空気感、色、構図、質感、第一印象の強さ",
      "発想の初速を一気に上げる力",
      "説明よりも印象を先に立ち上げるのが得意",
      "視覚コンセプトや世界観づくりで強い",
    ],
    weaknesses: [
      "厳密なUI設計や文字制御は不安定になりやすい",
      "実装前提の整合や設計図用途には翻訳工程が必要",
      "細かい仕様管理より、幻像の純度に寄ったツール",
    ],
    useCases: [
      "キービジュアル制作",
      "世界観探索、ムードボード、コンセプト出し",
      "ブランドや作品の第一印象づくり",
      "静止画中心の発想拡張",
    ],
    parameters: {
      reasoning: 40,
      writing: 20,
      coding: 5,
      longContext: 10,
      multimodal: 78,
      speed: 92,
      creativity: 99,
      stability: 74,
    },
    importantNotes: [
      "設計図ではなく幻像に強い",
      "視覚化の速度が武器",
      "後段で人間や別AIが翻訳する前提で使うと強い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: VISION",
        title: "01｜Midjourneyとは何か",
        paragraphs: [
          "Midjourneyは情報処理AIというより、視覚的な夢を描くための生成装置である。説明ではなく印象、理屈ではなく空気を先に立ち上げる。",
          "一枚の中へ世界観を圧縮し、言葉にならないムードを視覚へ変換する。その速度と純度がこのモデルの凶器になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "空気感、色、光、構図、スタイル、質感。第一印象を支配する領域でMidjourneyは非常に強い。",
          "発想の初速を上げ、イメージの密度を一気に引き上げる用途でも抜群に効く。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "厳密なUI設計、実装前提の整合性、文字制御では弱さが出る場面がある。作品には強いが、プロダクトへ落とすには翻訳工程が必要になる。",
          "つまりMidjourneyは、設計図より幻像に強い。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "世界観探索、キービジュアル、ムードボード、コンセプトワークなど、『印象を一気に立ち上げたい』場面で非常に役立つ。",
          "構造設計より、第一印象や美意識の方向決めで使うと強い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "設計図づくりの道具ではなく、幻像を一気に立ち上げる道具として見ると強い。",
          "後段で人間や別AIが翻訳する前提で使うと、実戦でかなり効く。",
        ],
      },
    ],
  },

  agi: {
    slug: "agi",
    title: "AGI — 汎用知能概念研究室",
    badge: "GENERAL INTELLIGENCE SIMULATION",
    version: "proto",
    systemId: "AG-000X",
    sideLabel: "FUTURE INTERFACE",
    sideText:
      "まだ存在しきっていない“次の知性”を考察するための未来予測型コンソール。技術と哲学の境界面。",
    heroImage: "/src/assets/core-agi.png",
    theme: {
      glow: "rgba(250,250,250,0.18)",
      soft: "rgba(255,255,255,0.20)",
      accentClass: "text-zinc-200",
      dotClass: "bg-zinc-200",
      barClass: "bg-gradient-to-r from-zinc-700 via-zinc-400 to-white",
    },
    status: [
      { label: "自律性", value: 88 },
      { label: "汎用性", value: 85 },
      { label: "不確定性", value: 99 },
    ],
    capability: [
      { label: "適応性", value: 90 },
      { label: "学習範囲", value: 89 },
      { label: "ツール活用力", value: 91 },
      { label: "統合知能性", value: 84 },
    ],
    strengths: [
      "単一用途に閉じず、幅広い知的課題へ適応することを目指す概念",
      "理解、推論、学習、計画、創造を統合する方向性",
      "状況に応じて知能の形を変える柔軟性が理想像",
    ],
    weaknesses: [
      "まだ完成した一般製品として定義しにくい",
      "何をもって“汎用”と呼ぶかの基準自体が揺れている",
      "技術だけでなく哲学・認知科学・安全性の問題を含む",
    ],
    useCases: [
      "未来像の展示",
      "AIの到達点を考える概念整理",
      "各モデルを束ねる“上位テーマ”として見せる",
      "哲学・安全性・設計思想まで含めた議論",
    ],
    parameters: {
      reasoning: 88,
      writing: 78,
      coding: 78,
      longContext: 85,
      multimodal: 86,
      speed: 60,
      creativity: 90,
      stability: 40,
    },
    importantNotes: [
      "これは完成済みモデル紹介ではなく、未来概念の部屋",
      "技術・哲学・安全性を同時に扱う必要がある",
      "『一番すごい製品』ではなく『人類が向かう知性の地平』として置くのが正しい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: FUTURE",
        title: "01｜AGIとは何か",
        paragraphs: [
          "AGIは、特定用途に閉じず、広い知的課題へ柔軟に適応できる汎用知能の概念である。現時点では完成体というより、人類が追っている理想像に近い。",
          "それは一つの製品名ではなく、知能そのものの次の地平を指す言葉だ。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "理解、推論、学習、計画、創造、適応。それらを分断せず一つの知性として統合することがAGIの核にある。",
          "単機能な強さではなく、状況に応じて知能そのものの形を変えられること。それが理想像になる。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "知能の定義そのものが曖昧で、評価軸も固定されていない。何をもって『汎用』と呼ぶか、その基準自体が揺れている。",
          "だからAGIは技術問題であると同時に、哲学、認知科学、設計思想の問題でもある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "完成品として使うというより、未来像の展示、概念整理、AIの到達点を考えるための上位テーマとして役立つ。",
          "個別モデルを比較したあとに、『その先に何を目指すのか』を考える部屋として機能する。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "これは製品比較の部屋ではなく、未来概念の部屋である。",
          "技術、哲学、安全性を同時に扱う視点がないと、AGIの話はすぐ浅くなる。",
        ],
      },
    ],
  },
};