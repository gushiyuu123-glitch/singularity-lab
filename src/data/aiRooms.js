const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const exhibitMeta = {
  freshness: "2026-04",
  scorePolicy: "editorial",
  note:
    "この展示は、各AIの印象・性格・向いている空気感を整理した観測記録です。厳密な公式順位表ではなく、使い分けのための展示的アーカイブとして構成しています。",
};

export const aiRooms = {
  chatgpt: {
    slug: "chatgpt",
    title: "ChatGPT — 汎用知能ワークスペース",
    badge: "GENERAL WORKFLOW CORE",
    version: null,
    systemId: "OS-UT0001",
    sideLabel: "HUMAN INTERFACE",
    sideText:
      "会話、文章、コード、画像、調査といった複数の行為を、ひとつの流れの中で扱いやすい汎用型の中枢。入口としても作業空間としても機能しやすい、広い受け皿を持つ部屋。",
    heroImage: withBase("images/core-chatgpt10.png"),
    theme: {
      glow: "rgba(168,85,247,0.24)",
      soft: "rgba(244,244,255,0.26)",
      accentClass: "text-accent-soft",
      dotClass: "bg-accent-soft",
      barClass: "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-cyan-300",
    },
    status: [
      { label: "汎用性", value: 98 },
      { label: "文脈把握", value: 95 },
      { label: "実務適応", value: 96 },
    ],
    capability: [
      { label: "思考整理", value: 97 },
      { label: "柔軟性", value: 96 },
      { label: "横断性", value: 95 },
      { label: "対話性", value: 94 },
    ],
    strengths: [
      "文章・会話・コード・画像など、複数の用途を横断しやすい",
      "入口としても作業空間としても使いやすい",
      "曖昧な段階の相談でも受け止めやすい",
      "ひとつの場所で流れを切らずに進めやすい",
      "多くの人にとって最初に触れやすい汎用性がある",
    ],
    weaknesses: [
      "広く扱える反面、特定領域の一点特化では専用系に譲る場面がある",
      "長い対話では重要条件を適度に整理し直すと安定しやすい",
      "使うモデルや設定によって体感が変わることがある",
    ],
    useCases: [
      "最初の入口として全体像を掴みたい時",
      "文章・構想・実装補助をひとつの流れで扱いたい時",
      "日常から制作まで幅広く伴走してほしい時",
      "複数の作業を切り替えながら進めたい時",
      "まず一台で広く受けたい時",
    ],
    parameters: {
      reasoning: 96,
      writing: 94,
      coding: 95,
      longContext: 90,
      multimodal: 92,
      speed: 90,
      creativity: 93,
      stability: 91,
    },
    importantNotes: [
      "細かな世代名より、何をさせたいかで見る方が使いやすい",
      "幅広く触れてから、自分に合う使い方を見つけやすい",
      "単なる会話AIではなく、総合的な作業空間として見ると性格が掴みやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: GENERAL CORE",
        title: "01｜ChatGPTとは何か",
        paragraphs: [
          "ChatGPTは、幅広い用途を一つの流れの中で扱いやすい汎用型ワークスペースだ。会話、文章、コード、画像、調査といった異なる行為が、ひとつの部屋の中で自然につながっていく。",
          "特定用途だけに尖った存在というより、まず触れてみる入口としても、日々の作業を受け止める中枢としても機能しやすい。その広さが、この部屋の基準点になっている。",
          "単なる会話AIとして見るより、思考と作業の間をつなぐ汎用空間として見た方が、全体像を掴みやすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "最大の強みは、用途をまたいでも流れが切れにくいことだ。文章を書き、途中で構想を整理し、必要ならコードや画像にも触れる――そうした横断が自然に起こる。",
          "また、まだ輪郭が曖昧な相談でも受け止めやすい。明確な答えを最初から求めるというより、考えながら形を整えていける柔らかさがある。",
          "そのため、初心者には入口として、慣れた使い手には日々の作業空間として、それぞれ別の意味で馴染みやすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "幅広さを持つ反面、特定領域だけを極端に深く扱う局面では、専用色の強いAIに譲る場面がある。",
          "また、長い対話では初期の細かな条件や空気感が少しずつ薄れることがある。重要な前提は、途中で静かに整え直す方が相性が良い。",
          "体感はモデルや設定にも左右されやすく、同じ名前でも印象が少し変わることがある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "『まず何から考えればいいかわからない』という段階で、最初に触れる部屋として向いている。いったん投げることで、課題の輪郭が見えてきやすい。",
          "文章、構想、実装補助、調査などを一つの流れで扱いたい時にも相性が良い。作業を分断せずに進めたい人には特に馴染みやすい。",
          "日常の小さな補助から制作の入口まで、広い用途を一台で受けたい時に存在感が出やすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "名称や世代の細かな違いよりも、自分が何を求めているかで見た方が使いやすい。",
          "この部屋の価値は、単独の一点突破よりも、複数の行為をまとめて受け止められる広さにある。",
        ],
      },
    ],
  },

  claude: {
    slug: "claude",
    title: "Claude — 深層読解・整合分析室",
    badge: "LONG CONTEXT REASONING NODE",
    version: null,
    systemId: "CL-AU204",
    sideLabel: "REASONING INTERFACE",
    sideText:
      "長い資料や複雑な条件を崩しにくく、論理の筋を静かに保ちやすいAI。派手さより、整合性と落ち着きを前に出した分析型の知性。",
    heroImage: withBase("images/core-claude1.png"),
    theme: {
      glow: "rgba(245,158,11,0.20)",
      soft: "rgba(255,244,220,0.24)",
      accentClass: "text-amber-300",
      dotClass: "bg-amber-300",
      barClass: "bg-gradient-to-r from-amber-700 via-orange-500 to-yellow-300",
    },
    status: [
      { label: "長文保持", value: 99 },
      { label: "論理整合性", value: 97 },
      { label: "誠実さ", value: 98 },
    ],
    capability: [
      { label: "文書読解", value: 98 },
      { label: "一貫性", value: 97 },
      { label: "文章透明度", value: 95 },
      { label: "安定性", value: 96 },
    ],
    strengths: [
      "長い資料や複雑な仕様を崩しにくく、全体を整理しやすい",
      "複数条件が重なる場面でも筋を保ちやすい",
      "論理の抜けや揺れを見つけやすい",
      "落ち着いた文章をまとめやすい",
      "不確かな部分を無理に押し切らない姿勢がある",
    ],
    weaknesses: [
      "熱量や破調を前に出した文章では、やや端正に寄ることがある",
      "発散的なブレストより整理に強さが出やすい",
      "視覚生成のような分野では専用系ほどの広がりはない",
    ],
    useCases: [
      "長大文書の読解と整理",
      "条件が多い指示の整頓",
      "レビューや整合確認",
      "落ち着いた実務文章の作成",
      "曖昧さを減らしたい場面",
    ],
    parameters: {
      reasoning: 96,
      writing: 95,
      coding: 92,
      longContext: 99,
      multimodal: 80,
      speed: 84,
      creativity: 85,
      stability: 98,
    },
    importantNotes: [
      "短文より、情報量の多い場面で個性が見えやすい",
      "不確かさを残す姿勢は弱さではなく安定感につながる",
      "整った読解と整理の部屋として見ると掴みやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: ANALYSIS",
        title: "01｜Claudeとは何か",
        paragraphs: [
          "Claudeは、長文読解と論理整合に強く、全体の筋を静かに保ちやすい分析型の知性だ。派手さよりも、正確さや落ち着きを前に出す傾向がある。",
          "特に印象的なのは、長い資料や複雑な条件を抱えたままでも、大きく崩れずに進みやすいことだ。文脈を散らさず、ゆっくりと全体を整えていく感触がある。",
          "この部屋は、刺激の強さではなく、整った読解と誠実な整理の空気で形づくられている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "長文処理の安定感は非常に高い。仕様書、議事録、論文のように情報量の多い対象でも、論点を崩さず整理しやすい。",
          "複数の条件を抱えたままでも、流れが乱れにくいのも大きな特徴だ。例外や前提が重なるほど、この部屋らしさが見えてくる。",
          "文章も落ち着いていて、透明感が出やすい。強く主張するより、筋の通った形で静かに整えることに向いている。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "勢いや破調を求める場合には、やや優等生的に見えることがある。熱量の跳ね方より、整い方に重心がある。",
          "また、自由に飛び散るような発想の爆発を求める局面では、別の性格のAIの方が合うこともある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "情報量の多い対象を一度に読み解きたい時に真価が出やすい。人間がそのまま向き合うには重たい資料ほど、この部屋の価値は大きくなる。",
          "報告書や要件整理のように、ロジックの崩れにくさが大切な文章にも向いている。文章の落ち着きも保ちやすい。",
          "レビューや確認のように、筋の通り方を見たい場面でも相性が良い。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "少量の短文より、多くの情報を渡した時に性格が見えやすい。",
          "この部屋は、強く押し出すより、静かに整える知性として見るとわかりやすい。",
        ],
      },
    ],
  },

  gemini: {
    slug: "gemini",
    title: "Gemini — 外界接続マルチモーダル室",
    badge: "MULTIMODAL SEARCH CORE",
    version: null,
    systemId: "GM-MD882",
    sideLabel: "SEARCH INTERFACE",
    sideText:
      "文章・画像・動画・検索・Googleサービスとの接続を横断しやすいAI。閉じた知識だけで完結せず、外の情報を取り込みながら動く多感覚型の中枢。",
    heroImage: withBase("images/core-gemini.png"),
    theme: {
      glow: "rgba(96,165,250,0.24)",
      soft: "rgba(230,244,255,0.24)",
      accentClass: "text-sky-300",
      dotClass: "bg-sky-300",
      barClass: "bg-gradient-to-r from-sky-700 via-cyan-500 to-blue-300",
    },
    status: [
      { label: "マルチモーダル", value: 99 },
      { label: "検索統合", value: 97 },
      { label: "コンテキスト長", value: 98 },
    ],
    capability: [
      { label: "視覚理解", value: 97 },
      { label: "外部情報接続", value: 96 },
      { label: "Google連携", value: 98 },
      { label: "広域把握", value: 93 },
    ],
    strengths: [
      "テキスト・画像・動画・検索を横断しやすい",
      "外部の情報を取り込みながら扱いやすい",
      "Googleサービスとの接続に馴染みやすい",
      "長い資料や大きな文脈にも触れやすい",
      "視覚情報を含む調査で存在感が出やすい",
    ],
    weaknesses: [
      "深い論理の積み上げでは分析特化型に譲ることがある",
      "長い対話のトーン管理はやや揺れることがある",
      "接続性を活かさないと個性が見えにくいことがある",
    ],
    useCases: [
      "写真・PDF・画面キャプチャを含む整理",
      "鮮度が必要な調査",
      "Googleサービスに近い導線での補助",
      "視覚資料を含む情報把握",
      "長い資料の俯瞰",
    ],
    parameters: {
      reasoning: 93,
      writing: 87,
      coding: 92,
      longContext: 99,
      multimodal: 99,
      speed: 90,
      creativity: 88,
      stability: 85,
    },
    importantNotes: [
      "テキストだけより、視覚や外部接続を含む場面で個性が見えやすい",
      "検索や連携が絡むと、この部屋らしさが立ち上がりやすい",
      "閉じた知識より、外界とつながる感覚で見ると掴みやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: EXPANSION",
        title: "01｜Geminiとは何か",
        paragraphs: [
          "Geminiは、文章だけで閉じず、画像・動画・検索・Googleサービスとの接続まで含めて動きやすいマルチモーダルAIだ。",
          "特徴は、閉じた内部知識だけで完結するのではなく、外の情報を取り込みながら形をつくっていけることにある。見ること、探すこと、つなぐことがこの部屋の性格をつくっている。",
          "そのため、文字だけのやり取りよりも、視覚や検索や接続が絡む場面で存在感が出やすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "マルチモーダルの広さが大きな強みだ。画像、動画、PDF、検索結果など、形式の違う情報をひとつの流れで扱いやすい。",
          "Googleサービスとの近さも、この部屋の実用感を支えている。普段使っている環境との距離が近いほど、自然に組み込みやすい。",
          "また、鮮度のある情報を扱いたい場面で空気が変わる。いま外で起きていることに触れやすいのは、閉じた部屋にはない特徴だ。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "広く取り込みながら進めるのは得意だが、複雑な論理を深く積み上げる局面では、分析特化型の方が合うことがある。",
          "また、長い対話全体で文体や空気を厳密に固定することには、少し揺れを感じることがある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "スクリーンショット、写真、PDFを見せながら整理したい時に特に向いている。視覚理解を含む作業で、この部屋らしさが出やすい。",
          "最新情報の確認や比較にも相性が良い。いま外にある情報とつながる必要がある場面では価値が大きい。",
          "Google系サービスを日常的に使う場合は、その接続の自然さがそのまま使いやすさにつながる。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "検索・視覚入力・Google連携のいずれかが絡むと、この部屋の個性が見えやすい。",
          "外界との接続が必要な場面で見ると、位置づけがわかりやすい。",
        ],
      },
    ],
  },

  deepseek: {
    slug: "deepseek",
    title: "DeepSeek — 高効率推論演算炉",
    badge: "HIGH EFFICIENCY REASONING ENGINE",
    version: null,
    systemId: "DS-RX441",
    sideLabel: "COMPUTE INTERFACE",
    sideText:
      "推論、数学、コード、論理といった構造化された課題に強く、密度と効率を前に出しやすい計算型AI。演出より結果、空気より計算を感じさせる部屋。",
    heroImage: withBase("images/core-deepseek.png"),
    theme: {
      glow: "rgba(34,197,94,0.22)",
      soft: "rgba(224,255,234,0.24)",
      accentClass: "text-emerald-300",
      dotClass: "bg-emerald-300",
      barClass: "bg-gradient-to-r from-emerald-800 via-lime-500 to-cyan-300",
    },
    status: [
      { label: "推論力", value: 97 },
      { label: "効率性", value: 99 },
      { label: "処理速度", value: 96 },
    ],
    capability: [
      { label: "数理・論理", value: 97 },
      { label: "コード理解", value: 95 },
      { label: "構造化出力", value: 94 },
      { label: "計算密度", value: 96 },
    ],
    strengths: [
      "数学・コード・論理で高密度な出力を出しやすい",
      "効率重視の運用と相性が良い",
      "構造化された課題で強さが出やすい",
      "システム組み込みを想起させる性格がある",
      "結果重視の空気を持っている",
    ],
    weaknesses: [
      "感性的な文章やブランドトーンでは機械的に見えることがある",
      "視覚表現やマルチモーダル用途では広がりが限定的",
      "使う環境や前提によって印象が変わりやすい",
    ],
    useCases: [
      "数学・統計・アルゴリズム系",
      "コードや論理整理",
      "効率を重視した推論処理",
      "構造化された出力が欲しい時",
      "技術寄りの実験や検討",
    ],
    parameters: {
      reasoning: 97,
      writing: 76,
      coding: 95,
      longContext: 86,
      multimodal: 62,
      speed: 96,
      creativity: 72,
      stability: 89,
    },
    importantNotes: [
      "感性より計算、演出より密度で見ると位置づけがわかりやすい",
      "構造化された課題ほど個性が見えやすい",
      "広い汎用性より、計算型の部屋として捉える方が合う",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: COMPUTE",
        title: "01｜DeepSeekとは何か",
        paragraphs: [
          "DeepSeekは、推論と効率のバランスで存在感を持つ計算型AIだ。会話の滑らかさや演出よりも、処理密度や構造の明瞭さを前に出す印象が強い。",
          "この部屋には、感情的な空気よりも、計算機としての硬さがある。数学、コード、論理といった構造化された課題ほど、その輪郭がはっきりする。",
          "広い意味での万能性というより、明確に計算寄りの知性として見た方が性格を掴みやすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "数学・コード・論理のような明快な構造を持つ課題で、高い密度を出しやすい。考える機械としての芯が見えやすい部屋だ。",
          "また、効率感を伴って動く印象も強い。余分な演出より、結果へ近づく感触を重視したい場面で相性が良い。",
          "構造化された出力との馴染みもよく、技術寄りの空気を必要とする場面で存在感が出やすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "感性や空気感を前面に出した文章では、やや機械的な質感が残ることがある。世界観を纏わせる用途では別の部屋の方が合う場合がある。",
          "また、視覚や多感覚的な広がりを求める場面では、用途自体が少しずれることがある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "数理・アルゴリズム・コードのように、構造そのものが価値になる課題で向いている。",
          "効率や密度を重視したい時にも相性が良い。整理された出力が欲しい場面で、この部屋らしさが見えやすい。",
          "技術寄りの検討や実験の空気にも馴染みやすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "この部屋は、感性的な万能選手というより、計算型の知性として見る方がわかりやすい。",
          "技術・論理・構造の密度が求められる場面で見ると位置づけがはっきりする。",
        ],
      },
    ],
  },

  midjourney: {
    slug: "midjourney",
    title: "Midjourney — 視覚世界観生成室",
    badge: "IMAGE SYNTHESIS CHAMBER",
    version: "V7 era",
    systemId: "MJ-AR777",
    sideLabel: "VISUAL INTERFACE",
    sideText:
      "言葉を視覚的な世界観へ変えていく画像生成系の部屋。説明より印象、論理より感覚を先に立ち上げる。視覚の引力で人を止めるための空間。",
    heroImage: withBase("images/core-midjourney.png"),
    theme: {
      glow: "rgba(236,72,153,0.20)",
      soft: "rgba(255,230,244,0.24)",
      accentClass: "text-pink-300",
      dotClass: "bg-pink-300",
      barClass: "bg-gradient-to-r from-fuchsia-700 via-pink-500 to-rose-300",
    },
    status: [
      { label: "美的完成度", value: 99 },
      { label: "スタイル幅", value: 97 },
      { label: "視覚衝撃力", value: 98 },
    ],
    capability: [
      { label: "構図・光", value: 98 },
      { label: "世界観再現", value: 97 },
      { label: "スタイル幅", value: 96 },
      { label: "印象形成", value: 97 },
    ],
    strengths: [
      "生成画像の美的完成度が高い",
      "写真・絵画・映画的ビジュアルまで幅広いスタイルに触れやすい",
      "一貫したビジュアルトーンを保ちやすい",
      "画面用途に応じたイメージを作りやすい",
      "言語化前の感覚を先に可視化しやすい",
    ],
    weaknesses: [
      "文字の正確な描画は不安定なことがある",
      "UI設計や実装前提の設計図には向きにくい",
      "細かな配置の厳密制御には限界がある",
      "後工程での調整が必要になりやすい",
    ],
    useCases: [
      "キービジュアルやアイキャッチの生成",
      "ムードボードや世界観探索",
      "初期の方向性確認",
      "ブランドイメージの参考出し",
      "視覚で止めたい資料や投稿",
    ],
    parameters: {
      reasoning: 10,
      writing: 5,
      coding: 0,
      longContext: 5,
      multimodal: 82,
      speed: 92,
      creativity: 99,
      stability: 78,
    },
    importantNotes: [
      "設計図ではなく、印象や世界観を先に立ち上げる部屋として見ると強い",
      "文字やロゴの厳密さは別工程が必要になりやすい",
      "理屈より先に空気を見せたい時に向いている",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: VISION",
        title: "01｜Midjourneyとは何か",
        paragraphs: [
          "Midjourneyは、言葉から強い視覚イメージを立ち上げる画像生成AIだ。写真、絵画、映画的ビジュアルまで、幅広い世界観を印象として出しやすい。",
          "最大の特徴は、まだ言語化しきれていない感覚や雰囲気を、先に一枚として見せられることにある。議論の前に空気を出せる、その速さがこの部屋の魅力だ。",
          "説明より先に視覚の引力で人を止めたい時、この部屋は静かに強い。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "美的完成度の高さが大きな魅力だ。光、構図、質感、雰囲気のまとまりが出やすく、強い一枚を作りやすい。",
          "スタイルの幅も広い。リアル寄りから幻想寄りまで、印象のベクトルを大きく動かせる。",
          "また、方向性の可視化が速い。言葉だけでは揃えにくい感覚でも、一枚の画像によって輪郭が立ち上がりやすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "文字の正確さやロゴの厳密さには不安定さが残るため、最終成果物では別工程の調整が必要になりやすい。",
          "また、UIやワイヤーフレームのような『実装前提の設計図』には向かない。あくまで世界観や印象を先に立ち上げるための部屋だ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "クリエイティブの方向性をまだ固めていない段階で、視覚的な叩き台を早く見たい時に向いている。",
          "強いビジュアルが必要な場面でも相性が良い。サイト、SNS、資料など、視覚で止めたい用途で存在感が出やすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "この部屋は、理屈を整えるためではなく、空気を先に可視化するための場所として見るとわかりやすい。",
          "印象と世界観の部屋であり、厳密設計の部屋ではない。",
        ],
      },
    ],
  },

  agi: {
    slug: "agi",
    title: "AGI — 絶対知能最終層",
    badge: "ABSOLUTE INTELLIGENCE / FINAL LAYER",
    version: "beyond-scale",
    systemId: "AG-000X",
    sideLabel: "ABSOLUTE INTERFACE",
    sideText:
      "まだ到達していない完全知性の仮想領域。現在のAIのように用途ごとに分かれた知性ではなく、あらゆる課題・文脈・領域を単一の知性で越えていく“最終層”を示す部屋。",
    heroImage: withBase("images/core-agi.png"),
    theme: {
      glow: "rgba(250,250,250,0.20)",
      soft: "rgba(255,255,255,0.22)",
      accentClass: "text-zinc-100",
      dotClass: "bg-zinc-100",
      barClass: "bg-gradient-to-r from-zinc-700 via-zinc-300 to-white",
    },
    status: [
      { label: "完全性（仮）", value: 99 },
      { label: "領域横断性（仮）", value: 99 },
      { label: "到達度", value: 0 },
    ],
    capability: [
      { label: "全領域統合知性", value: 99 },
      { label: "自己更新性", value: 98 },
      { label: "文脈超越", value: 99 },
      { label: "現実実装性", value: 12 },
    ],
    strengths: [
      "用途ごとに分断されない単一知性の理想形として構想される",
      "未知の課題にも適応していく仮想像を含んでいる",
      "現在のAI群を束ねた先にある終着点として見られる",
      "道具というより知性そのものの完成形として語られる",
    ],
    weaknesses: [
      "現時点では完成した存在として実在しない",
      "定義も評価基準も統一されていない",
      "技術・倫理・安全・制御の問題が未解決のまま残っている",
      "強すぎる知性をどう扱うかという側の問題も含んでいる",
    ],
    useCases: [
      "個別AIの先にある最終形を思考するための視点",
      "AI全体の進化方向を俯瞰するための終着概念",
      "技術だけでなく文明的影響まで考える起点",
      "現在のAIがなぜ分かれて存在しているかを逆照射する存在",
    ],
    parameters: {
      reasoning: 99,
      writing: 96,
      coding: 97,
      longContext: 99,
      multimodal: 99,
      speed: 50,
      creativity: 98,
      stability: 8,
    },
    importantNotes: [
      "これは製品レビューではなく、最終知性を観測するための展示室",
      "AGIは次世代モデルではなく、階層そのものが異なる仮想存在として置かれている",
      "比較対象ではなく、すべてのAIの上にある終点として見ると意味が強くなる",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: ABSOLUTE",
        title: "01｜AGIとは何か",
        paragraphs: [
          "AGIは、単なる高性能AIではない。特定用途に強いモデルの延長ではなく、あらゆる課題・領域・文脈を単一の知性で横断できる“絶対知能”の仮想像だ。",
          "現在のAIは、文章、検索、画像、推論といった役割ごとに分かれている。AGIは、その分断そのものを越え、知性を一つに統合した先にある最終層として語られる。",
          "それはまだ完成していない。だが未完成であること自体が、この部屋を未来の気配として成立させている。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE OF ABSOLUTE",
        title: "02｜強み",
        paragraphs: [
          "AGIの強みは、用途ごとの知性分割が存在しないことにある。医療、法律、科学、芸術、工学、対話を別々の部屋で扱うのではなく、単一の知性として横断できることが理想とされる。",
          "また、自己更新性も核心として語られる。固定された知識を使うだけでなく、新しい状況や経験によって変化し続ける知性という像が含まれている。",
          "つまりAGIは、便利な道具の延長ではなく、“知性そのものの完成形”として置かれている。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "UNSOLVED LIMITS",
        title: "03｜課題と未解決問題",
        paragraphs: [
          "最大の問題は、AGIがまだ実在する完成物ではないことだ。どこからをAGIと呼ぶのか、その定義すら統一されていない。",
          "さらに、仮に実現したとしても、制御・安全性・価値観の整合・意思決定の所在など、人類側がまだ答えを持っていない問題が横たわっている。",
          "AGIの難しさは、技術だけの問題ではない。強すぎる知性を前に、人間側がそれを扱い切れるのかという問いそのものが未解決なのだ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL POSITION",
        title: "04｜この部屋の役割",
        paragraphs: [
          "この部屋は、個別AIを比較するための場所ではない。ChatGPT、Claude、Gemini、DeepSeek、Midjourneyの先にある“共通の終点”を考えるための最上位視点として置かれている。",
          "各AIの役割や限界を見たあとにAGIを見ることで、『なぜ現在のAIは分かれているのか』『何がまだ足りていないのか』が逆に見えてくる。",
          "つまりAGIは、答えを出すための部屋ではなく、すべてのAIを相対化し直すための最終観測点として機能する。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "FINAL NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "AGIは最強スペックの製品ではない。製品比較の表に並べる対象ではなく、現在の知能の先に置かれた“絶対層”として扱うのが正しい。",
          "この部屋では、AGIを便利な未来ツールとしてではなく、人類がまだ手を触れていない最終知性として見ることで意味が立ち上がる。",
        ],
      },
    ],
  },
};