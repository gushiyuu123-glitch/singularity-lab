const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const aiRooms = {
  chatgpt: {
    slug: "chatgpt",
    title: "ChatGPT — 言語OS司令室",
    badge: "LANGUAGE INTELLIGENCE CORE",
    version: "v5.1",
    systemId: "OS-UT0001",
    sideLabel: "HUMAN INTERFACE",
    sideText:
      "考えを整理したり、曖昧なイメージを言葉にしたりするのが得意なAI。頭の中でぼんやりしていることを、会話しながら形にしていくための中枢。",
    heroImage: withBase("images/core-chatgpt10.png"),
    theme: {
      glow: "rgba(168,85,247,0.24)",
      soft: "rgba(244,244,255,0.26)",
      accentClass: "text-accent-soft",
      dotClass: "bg-accent-soft",
      barClass: "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-cyan-300",
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
      "考えを言葉にしやすい",
      "比較、整理、要約、相談が得意",
      "コードや文章など幅広い作業に使いやすい",
      "会話しながらアイデアを育てやすい",
    ],
    weaknesses: [
      "最新情報は外部検索なしだと弱い",
      "感情や空気は文脈から推定している",
      "事実確認が必要な場面では検索併用が安心",
    ],
    useCases: [
      "企画整理、思考の言語化、要件定義",
      "文章の下書き、比較検討、因果整理",
      "コード相談、実装方針、仕様の翻訳",
      "学習補助、壁打ち、長文の要約",
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
      "対話の質がそのまま出力に出やすい",
      "検索を組み合わせるとかなり強い",
      "考えを整理したい時に特に相性が良い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: LANGUAGE OS",
        title: "01｜ChatGPTとは何か",
        paragraphs: [
          "ChatGPTは、ただ文章を作るだけのAIではない。頭の中でぼんやりしている考えや、まだ言葉になっていない感覚を、意味の通る形にまとめるのが得意なAIだ。",
          "質問に答えるだけでなく、考えを整理したり、話しながら方向性を見つけたりできる。だから、思っていることをうまく言葉にしたい人と相性がいい。",
          "新しい情報を足すというより、もともと自分の中にある考えを見やすくしてくれる。その“整理役”みたいな強さが、ChatGPTの大きな特徴になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "ChatGPTの強みは、きれいな文章を書くことだけではない。曖昧な考えを整理したり、断片的な情報をつなげたりして、わかりやすい形にできるところが強い。",
          "要約、比較、構造化、発想整理、長文のまとめ直し。このあたりで特に使いやすい。『何を考えているか自分でもまだはっきりしない』状態からでも、会話しながら形にしていける。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "最新ニュースや現場の一次情報を見るのは、外部接続なしだと苦手。世界を直接見ているわけではなく、与えられた情報から考えるタイプだからだ。",
          "また、感情や空気を本当に感じているわけではない。言い方や文脈からかなり上手く推定しているが、重要な場面では人間の確認や一次資料が必要になる。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "企画整理、壁打ち、比較、文章の下書き、コード相談など、『頭の中を外に出したい』時に特に役立つ。",
          "単なる情報収集より、集めた情報をわかりやすく整理したい時に真価が出る。答えをもらうためだけでなく、自分の考えをはっきりさせる相手として使うと強い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "出力の質は、質問の出し方や文脈の渡し方にかなり左右される。",
          "検索や一次資料と組み合わせると、実務ではさらに使いやすくなる。考えを整理する役と、事実を確認する役を分けると安定しやすい。",
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
      "長い文章をまとめて読み、崩さず整理するのが得意なAI。情報量が多くても落ち着いて処理しやすい、長文向きの分析型コンソール。",
    heroImage: withBase("images/core-claude1.png"),
    theme: {
      glow: "rgba(245,158,11,0.20)",
      soft: "rgba(255,244,220,0.24)",
      accentClass: "text-amber-300",
      dotClass: "bg-amber-300",
      barClass: "bg-gradient-to-r from-amber-700 via-orange-500 to-yellow-300",
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
      "長い文書を崩さず読める",
      "整合性チェックや仕様整理に強い",
      "文脈保持が安定している",
      "安全性重視の応答と相性が良い",
    ],
    weaknesses: [
      "熱量の強い表現では少しおとなしくなりやすい",
      "爆発的な発想より整理向き",
      "速さより慎重さが前に出ることがある",
    ],
    useCases: [
      "長文資料の読解、要約、論点抽出",
      "仕様確認、整合性レビュー、比較評価",
      "安全性を重視した文面づくり",
      "大量テキストを抱えた分析",
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
      "長文や大規模資料で真価が出やすい",
      "勢いより一貫性を優先したい時に強い",
      "派手さより崩れなさで選ぶAI",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: ANALYSIS",
        title: "01｜Claudeとは何か",
        paragraphs: [
          "Claudeは、派手さより安定感が強みのAIだ。長い文章をまとめて読んでも崩れにくく、筋道を保ったまま整理しやすい。",
          "焦らず、暴れず、情報量が多くても形を保てる。そこがClaudeのいちばん大きな個性になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "長文要約、仕様整理、比較、論点抽出、整合性チェック。このあたりでClaudeはかなり強い。",
          "速さよりも、文脈を保ったまま崩れずに整理できることが武器。論点が多い文書でも、情報を散らしにくい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "強い世界観や熱量重視の文章では、少し優等生っぽく見えやすい。",
          "つまりClaudeは、爆発力より制御力に向いたAI。整理と安定では強いが、作家性を前に出したい時は別のモデルの方が合うこともある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "仕様書、議事録、研究資料、契約文、比較レビューなど、『長くて多い文章を整えたい』時に特に役立つ。",
          "派手な表現より、崩れない論理がほしい時に選ぶと強い。情報量が多いほど価値が出やすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "長文の質と整合性を重視するならかなり強い。",
          "勢いのある演出文より、落ち着いた分析文との相性が良い。長文を静かに読み切らせたい時に向いている。",
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
      "文章だけでなく、検索、画像、動画などにも広くつながるAI。外の世界とつながりながら情報を集めて処理するのが得意なタイプ。",
    heroImage: withBase("images/core-gemini.png"),
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
      "検索、画像、動画などをまとめて扱いやすい",
      "複雑な情報を横断的に処理しやすい",
      "最新情報との相性が良い",
      "大きな資料群やコードベースにも向く",
    ],
    weaknesses: [
      "文章の空気感に波が出ることがある",
      "接続力優先で、文体の芯は少し揺れやすい",
      "文章の質感勝負では他モデルが強い場面もある",
    ],
    useCases: [
      "検索補助、調査、最新情報整理",
      "画像や動画込みの理解や分析",
      "長大な資料やコードベースの把握",
      "マルチモーダル前提の作業",
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
      "外界に開いているのが最大の個性",
      "閉じた会話室というより観測装置に近い",
      "検索や複数メディアを混ぜると強さが見えやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: EXPANSION",
        title: "01｜Geminiとは何か",
        paragraphs: [
          "Geminiは、文章だけで完結するAIというより、検索や画像など外の世界につながるのが強みのAIだ。",
          "ひとつの思考室というより、いくつもの窓を持った観測装置に近い。外部情報を取り込みながら使うと真価が出やすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "最新情報、検索、画像理解、マルチモーダル処理。このあたりでGeminiは強い。",
          "深く考えるというより、広く取り込んでまとめるのが得意。いま動いている世界の情報を扱いたい時に向いている。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "文章の質感や、長い対話の一貫した空気では少し波が出ることがある。",
          "つまりGeminiは、閉じた美しさより開いた接続力に価値がある。会話の濃さより、情報到達力を重視すると強さが見えやすい。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "検索、調査、画像や動画を含む分析など、『外の情報を取り込みたい』時に特に役立つ。",
          "ただ会話するより、世界の情報を集めて整理したい用途で強い。最新性が必要な時ほど価値が上がる。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "検索や画像など、複数モードを混ぜるほど真価が出やすい。",
          "深く書かせるより、広く取り込みながら処理させる時に向いている。",
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
      "雰囲気より処理量、演出より効率を優先するAI。推論やコード、構造化出力を速く回したい時に強い計算型コンソール。",
    heroImage: withBase("images/core-deepseek.png"),
    theme: {
      glow: "rgba(34,197,94,0.22)",
      soft: "rgba(224,255,234,0.24)",
      accentClass: "text-emerald-300",
      dotClass: "bg-emerald-300",
      barClass: "bg-gradient-to-r from-emerald-800 via-lime-500 to-cyan-300",
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
      "推論と速度のバランスが良い",
      "thinking mode で精度を上げやすい",
      "JSONや構造化出力と相性が良い",
      "コスパ重視の運用に向いている",
    ],
    weaknesses: [
      "感性表現では機械的に見えやすい",
      "詩的な文章や空気感は他モデルが得意",
      "世界観づくりより処理密度重視",
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
      "thinking と non-thinking の使い分けが大事",
      "夢を見るAIではなく計算するAIとして強い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: COMPUTE",
        title: "01｜DeepSeekとは何か",
        paragraphs: [
          "DeepSeekは、雰囲気より処理効率を重視したAIだ。きれいさより、どれだけ速く密度高く返せるかに強みがある。",
          "静かな詩人というより、冷えた計算炉に近い。結果重視で動かしたい時に向いている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "論理処理、数理、コード、推論、コスパ重視の運用。このあたりでDeepSeekはかなり強い。",
          "無駄を減らして出力密度を上げるのが得意。ツール利用や構造化出力とも噛み合いやすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "ブランドの空気や感性の余韻を作る場面では、少し機械的に見えることがある。",
          "つまりDeepSeekは、夢を見るより現実を速く計算する方に向いたAI。詩的な質感より精度と効率を前に出したい時に強い。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "数理、論理、コード、JSON出力、構造化処理など、『速く密度高く回したい』場面で役立つ。",
          "感性を広げるより、明確な処理を高速で返してほしい時に選ぶと強い。コストや速度が重要な場面で特に実戦的。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "thinking / non-thinking の切り替えで考えるとわかりやすい。",
          "雰囲気より、コスパと処理密度で選ぶとズレにくい。",
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
      "言葉をもとに、雰囲気や色や世界観を一気に画像にしやすいAI。説明より印象を先に立ち上げたい時に強い視覚生成コンソール。",
    heroImage: withBase("images/core-midjourney.png"),
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
      "空気感、色、構図、質感が強い",
      "発想の初速を一気に上げやすい",
      "説明より印象を先に作るのが得意",
      "世界観づくりで強い",
    ],
    weaknesses: [
      "厳密なUI設計や文字制御は不安定",
      "実装前提の設計図には翻訳工程が必要",
      "細かい仕様管理より雰囲気重視",
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
      "後から人間や別AIが翻訳すると強い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: VISION",
        title: "01｜Midjourneyとは何か",
        paragraphs: [
          "Midjourneyは、情報処理AIというより、世界観を一気に画像にするためのAIだ。説明より印象、理屈より空気を先に出すのが得意。",
          "言葉にならない雰囲気を、一枚の視覚として早く出せる。その初速の強さが大きな魅力になっている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "空気感、色、光、構図、スタイル、質感。第一印象を作る領域でMidjourneyはかなり強い。",
          "発想の初速を上げたい時にも効く。文章では伝わりにくい感覚を、一枚の画像として先に見せられるのが大きい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "厳密なUI設計や、実装前提の整合性、文字制御では弱さが出やすい。",
          "つまりMidjourneyは、設計図より幻像に強い。印象は強烈でも、そのまま実装できるとは限らないので翻訳工程が必要になる。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "世界観探索、キービジュアル、ムードボード、コンセプト出しなど、『印象を一気に立ち上げたい』時に役立つ。",
          "構造設計より、まず方向性や空気感を決めたい時に強い。まだ形になっていないイメージの叩き台として使いやすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "設計図を作る道具ではなく、幻像を一気に出す道具として見ると強い。",
          "後から人間や別AIが翻訳する前提で使うと、実戦でかなり効く。",
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
      "まだ完成していない“次のAI”を考えるための部屋。製品紹介ではなく、未来の知性がどこへ向かうかを考えるための概念研究室。",
    heroImage: withBase("images/core-agi.png"),
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
      "幅広い課題に対応する未来像として語れる",
      "理解、推論、学習、計画、創造をまとめて考えられる",
      "状況に応じて知能の形を変える柔軟性が理想",
    ],
    weaknesses: [
      "まだ完成した製品として定義しにくい",
      "何をもって汎用と呼ぶか自体が曖昧",
      "技術だけでなく哲学や安全性の問題も含む",
    ],
    useCases: [
      "未来像の展示",
      "AIの到達点を考える概念整理",
      "各モデルを束ねる上位テーマ",
      "哲学・安全性・設計思想を含む議論",
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
      "完成済みモデルの紹介ではなく未来概念の部屋",
      "技術・哲学・安全性を同時に扱う必要がある",
      "一番すごい製品ではなく、向かう先として見るのが正しい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: FUTURE",
        title: "01｜AGIとは何か",
        paragraphs: [
          "AGIは、ひとつの用途だけでなく、いろいろな知的課題に柔軟に対応できるAIの理想像だ。今は完成品というより、人類が目指している方向に近い。",
          "ひとつの製品名ではなく、『次の知性』を表す言葉として使われることが多い。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "理解、推論、学習、計画、創造、適応。そうした知能を分けずにひとつへまとめる考え方がAGIの核にある。",
          "『この作業だけが得意』ではなく、未知の状況でも柔軟に知能を使い分けられることが理想になっている。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "知能の定義そのものがまだ曖昧で、評価の基準も固まりきっていない。",
          "だからAGIは、技術だけの話では終わらない。哲学や認知科学、安全性まで含めて考える必要がある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "完成品として使うというより、未来像を考えたり、AIの到達点を整理したりする上位テーマとして役立つ。",
          "個別のAIを見たあとに、その先に何を目指すのかを考えるための部屋として機能する。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "これは製品比較の部屋ではなく、未来概念の部屋。",
          "性能表だけでは足りず、人間側の問いまで含めて考える必要があるテーマだ。",
        ],
      },
    ],
  },
};