const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const exhibitMeta = {
  freshness: "2026-04",
  scorePolicy: "editorial",
  note:
    "この展示は、公開情報と実使用感をもとに各AIの性格と役割を整理したものです。厳密な公式順位表ではなく、使い分けのための観測記録として構成しています。",
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
      "会話・文章・コード・分析・画像・ツール利用を、一つの流れでつなげやすい汎用中枢。まず迷ったときの入口になりやすく、思考整理から実務まで幅広く受け止める。",
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
      { label: "思考翻訳力", value: 97 },
      { label: "指示への柔軟さ", value: 96 },
      { label: "マルチタスク力", value: 95 },
      { label: "対話の自然さ", value: 94 },
    ],
    strengths: [
      "会話・文章・コード・分析・画像生成まで、一つの流れで扱いやすい",
      "思考と実行を同じ導線でつなぎやすく、用途の幅が広い",
      "曖昧な指示でも意図を汲んで形にしやすい",
      "検索・コード実行・画像生成などのツール連携が強みになりやすい",
      "汎用性が高く、多くの人にとって最初の入口になりやすい",
    ],
    weaknesses: [
      "何でもできる反面、特定領域の専門深度では専用系に譲る場面がある",
      "長い会話では、初期の細かな制約を定期的に再提示した方が安定しやすい",
      "モデルやモードの選び方で体感品質が変わりやすい",
    ],
    useCases: [
      "まず何を使えばいいかわからない時の第一窓口",
      "思考整理から文章化、実装補助まで一気通貫で進めたい時",
      "コード生成・デバッグ・ツール利用を同じ流れで回したい時",
      "画像生成と文章作成を同じ会話内で組み合わせたい時",
      "日常作業から実務支援まで広く一台で受けたい時",
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
      "モデル名やモードは変化しやすいため、細かな世代名より用途で選ぶ方が運用しやすい",
      "深い推論・実務文書・軽作業などで使い分けると強みが出やすい",
      "ツールを使う前提で組むと、単なる対話以上の価値が出る",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: GENERAL CORE",
        title: "01｜ChatGPTとは何か",
        paragraphs: [
          "ChatGPTは、AIの基準点として使われやすい汎用型ワークスペースだ。会話・文章・コード・分析・画像・ツール利用までを、一つの流れの中でまとめて扱いやすい。",
          "特に強いのは、曖昧な依頼を受けても『何を求めているか』を整理しながら形にしていける柔軟さだ。初心者には入口として、上級者には作業中枢として機能しやすい。",
          "単なる会話AIというより、思考を整理し、実務へ接続するための汎用エンジンとして見ると全体像が掴みやすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "最大の強みは『何でも一つの窓口でつなげやすい』ことだ。文章を書きながら、途中でコードを直し、必要なら画像も作る――そうした横断が自然にできる。",
          "曖昧な指示に対しても、意図を汲みながら仮説を立てて進められるため、思考の翻訳機として非常に使いやすい。発想の段階でも、実務の段階でも入りやすい。",
          "また、検索・コード実行・画像生成のような補助機能を絡めることで、単なる返答ではなく『仕事を前に進めるAI』として機能しやすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "幅広く対応できる一方で、特定の一点突破では専門特化型に譲る場面がある。長大文書の安定読解や厳密な整合性では、Claudeのような分析寄りのAIが有利になりやすい。",
          "また、会話が長くなるほど、初期に渡した細かな条件や世界観が少しずつ薄れやすい。大事な制約は途中で再提示した方が安定する。",
          "モデルやモードの選び方で体感品質が変わりやすいのも特徴だ。軽作業向きの使い方と、深い推論向きの使い方を分けて考える必要がある。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "『まずどう考えればいいかわからない』という時の第一窓口として非常に強い。いったん投げることで、課題の輪郭が見えてくる。",
          "思考整理、文章化、実装補助、画像生成を横断したい時にも向く。一つの会話で流れを切らずに進めたい人には特に相性が良い。",
          "日常の補助から、制作・企画・開発の入口まで広く対応できるため、『最初の一台』として選ばれやすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "細かな世代名より、『何をさせたいか』で使い方を決めると運用しやすい。深い推論、実務文書、軽い整理では最適なモード感が変わる。",
          "検索やコード実行など、外部ツールを使う前提で組むと真価が出る。テキストだけで閉じるより、作業の進行役として使った方が強い。",
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
      "長い資料や複雑な条件を崩しにくく、論理の筋を最後まで保ちやすいAI。派手さより整合性と誠実さを前に出した分析型の知性。",
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
      { label: "文書読解力", value: 98 },
      { label: "論理の一貫性", value: 97 },
      { label: "繊細な文章力", value: 95 },
      { label: "指示への忠実さ", value: 96 },
    ],
    strengths: [
      "長い資料や複雑な仕様を崩しにくく、全体を整理しやすい",
      "複数の条件や制約を最後まで守り続けやすい",
      "論理の矛盾や抜けを見つける視点が強い",
      "文章の透明感が高く、報告書や提案書に向きやすい",
      "不確かな点を曖昧なまま押し切りにくい誠実さがある",
    ],
    weaknesses: [
      "熱量や破調を前に出した文章では、やや端正に寄りやすい",
      "発散的なブレストより、論理を積み上げる場面で真価が出やすい",
      "画像生成のような視覚表現では、専用系の強みには及ばない",
    ],
    useCases: [
      "契約書・仕様書・研究論文など長大文書の読解と整理",
      "複数条件が絡む複雑な指示の実行",
      "コードレビュー・バグ分析・設計の整合性確認",
      "報告書・提案書・メールなど、読みやすさが重要な文章作成",
      "曖昧さを減らしたい実務系のやり取り",
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
      "資料が長いほど、他モデルとの差が見えやすくなる",
      "曖昧な点や矛盾を自発的に拾う性質は、誠実さとして扱った方が強みになる",
      "複雑な制約が多いプロンプトほど、Claudeの良さが出やすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: ANALYSIS",
        title: "01｜Claudeとは何か",
        paragraphs: [
          "Claudeは、長文読解と論理整合に強く設計された分析型の知性だ。派手な反応より、正確さ・誠実さ・崩れにくさを前に出す傾向がある。",
          "特に目立つのは、長い資料や複雑な条件を抱えたままでも、最後まで筋を保ちやすいことだ。文脈を散らさず、条件を守り続ける安定感がある。",
          "また、不確かな点を断定しにくい姿勢も特徴だ。『わからない』『確認が必要』を言えることが、実務では信頼につながる。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "長文処理の安定感は非常に高い。契約書、仕様書、論文、長い議事録のような情報量の多い対象でも、論点を散らさずに整理しやすい。",
          "複雑な条件を守る力も強い。例外条件や制約が何段にも重なる指示でも、最後まで崩れにくい。",
          "文章品質も高く、読みやすさと論理の透明感が出やすい。実務文書で『そのまま使える』体感を得やすいのは大きな強みだ。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "勢い、熱量、煽り、破調といった感性的な振れ幅を求める場合には、やや端正で優等生的に見えることがある。",
          "また、論理的な積み上げを重視するぶん、突発的な飛躍や予測不能な発想の爆発は出にくい。ブレストより整理に向いた知性だ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "大量の資料を一括で読み解かせたい時に真価が出る。人間が読むには時間がかかる対象ほど、Claudeの価値が大きくなる。",
          "報告書、要件定義書、提案書など、ロジックの崩れにくさが重要な文書でも強い。文章の品位と透明感を保ちやすい。",
          "仕様確認や設計レビューのように、漏れや矛盾を減らしたい場面でも使いやすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "少量の短文より、大量情報を渡した時の方が良さがはっきり出る。",
          "曖昧な点を指摘された時は、それを欠点ではなく精度向上のための観測として扱うと相性が良い。",
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
      "文章・画像・動画・検索・Googleサービス連携を横断しやすいAI。閉じた知識だけで完結せず、外界の情報を取り込みながら動く多感覚型の中枢。",
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
      { label: "画像・動画理解", value: 97 },
      { label: "リアルタイム情報", value: 96 },
      { label: "Google連携", value: 98 },
      { label: "コード処理", value: 93 },
    ],
    strengths: [
      "テキスト・画像・動画・検索を横断しやすい",
      "リアルタイム情報を取り込みながら回答しやすい",
      "Googleサービスとの連携で日常業務へ組み込みやすい",
      "長い資料や大きな文脈を扱う時に相性が良い",
      "視覚情報を含む調査や整理で強みが出やすい",
    ],
    weaknesses: [
      "深い論理を積み上げる場面では、分析特化型に譲ることがある",
      "長い対話全体のトーン管理は、やや揺れを感じることがある",
      "Google連携を使わないと、強みの一部が見えにくい",
    ],
    useCases: [
      "写真・スクリーンショット・PDFを渡した分析",
      "最新ニュース・価格・天気など鮮度が重要な調査",
      "GoogleドライブやGmailと絡む業務フローの補助",
      "動画や視覚資料を含む情報整理",
      "長い資料や大きなコードベースの俯瞰",
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
      "検索やGoogle連携を使う前提で組むと価値が大きくなる",
      "テキストだけで使うと、強みの一部しか見えにくい",
      "最新情報や資料の視覚理解が絡むタスクで差が出やすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: EXPANSION",
        title: "01｜Geminiとは何か",
        paragraphs: [
          "Geminiは、文章だけで閉じず、画像・動画・検索・Googleサービスとの接続まで含めて動きやすいマルチモーダルAIだ。",
          "特徴は、現在進行形の情報を外界から取り込みながら答えを組み立てられることにある。知識の内部蓄積だけでなく、外の情報を接続して使える。",
          "また、視覚情報を含む資料処理にも向いている。文章だけではなく、『見て理解する』作業を含む時にGeminiらしさが出やすい。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "マルチモーダルの深さが大きな強みだ。画像、動画、PDF、検索結果など、形式の違う情報をまとめて扱いやすい。",
          "Googleサービスとの接続も実用的だ。Gmail、ドキュメント、ドライブなど、普段使っている環境と近い場所で活きやすい。",
          "鮮度が重要な調査に強いのも特徴だ。今この瞬間の情報を含めてまとめたい場面では、他モデルとの差が出やすい。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "情報を広く取り込みながら処理するのは得意だが、複雑な論理を深く積み上げる場面では、Claudeのような分析特化型の方が合うことがある。",
          "また、長い対話全体での文体の一貫性は、少し揺れを感じることがある。空気感を厳密に固定するより、タスク処理の回転力に寄った印象だ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "スクリーンショット、写真、PDFを見せて整理させる用途で特に強い。視覚情報の理解を含む作業に向いている。",
          "最新情報が必要な調査や比較にも相性が良い。鮮度の高い情報を扱いたい場面では価値が大きい。",
          "Google系サービスを日常的に使っている場合は、情報接続の自然さが大きな利点になる。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "検索、視覚入力、Google連携のいずれかを絡めて使うと、Geminiらしさが見えやすい。",
          "テキストだけの比較では埋もれやすいが、外界接続が必要な場面では一気に存在感が出る。",
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
      "高精度の推論を効率よく回しやすいAI。数学・コード・論理を高速に処理し、オープンモデルとしての透明性や運用自由度が魅力。演出より結果、雰囲気より密度で選ぶ計算型エンジン。",
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
      { label: "コスパ", value: 99 },
      { label: "処理速度", value: 96 },
    ],
    capability: [
      { label: "数理・論理力", value: 97 },
      { label: "コード生成力", value: 95 },
      { label: "コスト性能比", value: 99 },
      { label: "構造化出力", value: 94 },
    ],
    strengths: [
      "数学・コード・論理で高い密度の出力を出しやすい",
      "高精度とコスト効率のバランスを取りやすい",
      "オープンモデルとしての透明性や運用自由度が魅力になりやすい",
      "構造化出力やシステム組み込みとの相性が良い",
      "速度重視と精度重視を場面で切り替えやすい",
    ],
    weaknesses: [
      "感性的な文章やブランドトーンでは、やや機械的な印象が残りやすい",
      "視覚表現やマルチモーダル用途では専用系ほどの広がりはない",
      "利用環境やポリシー面は、導入前に慎重に確認した方がよい",
    ],
    useCases: [
      "数学・統計・アルゴリズム問題の処理",
      "競技寄りのコード生成やデバッグ",
      "APIコストを抑えながら高品質な推論を大量に回したい時",
      "オープンモデル前提の自社運用や実験",
      "JSON前提のバックエンド組み込みタスク",
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
      "精度とコスト効率のバランスが大きな魅力",
      "オープンモデルの強みは、運用自由度まで含めて評価した方がよい",
      "thinking / non-thinking のような切り替えを意識すると使いやすい",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: COMPUTE",
        title: "01｜DeepSeekとは何か",
        paragraphs: [
          "DeepSeekは、高効率な推論とコスト性能のバランスで存在感を持つ計算型AIだ。会話の滑らかさより、処理密度や実用効率を前に出す印象が強い。",
          "オープンモデルとして扱われやすいことも特徴で、中身へのアクセス性や運用自由度を重視する層にとって魅力が大きい。",
          "演出より結果、雰囲気より計算という性格がはっきりしているため、使いどころが明確なタイプだ。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "数学・コード・論理のような構造化された課題で高い密度を出しやすい。考える機械としての完成度が高い。",
          "コスト効率も大きな魅力だ。精度をある程度保ちながら運用コストを抑えたい場面で価値が出る。",
          "また、オープンモデルとしての透明性や運用自由度は、商用ブラックボックスに依存したくない開発側にとって強い武器になる。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "感性や空気感を前に出した文章では、やや機械的な質感が残ることがある。コピーや世界観重視の文章では他モデルが向く場面がある。",
          "また、利用環境やポリシー面は、導入前に慎重に確認した方がよい。運用まで含めて判断するタイプのAIだ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "高精度が必要なのにコストも抑えたい、という場面で特に強い。大量処理系のバックエンドや実験的運用に向いている。",
          "数理・科学・エンジニアリング寄りの課題でも使いやすい。計算密度がそのまま価値になる分野と相性が良い。",
          "また、自社データに合わせた運用や実験を考える時にも候補になりやすい。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "精度重視と速度重視を意識的に切り替えると、運用効率が上がりやすい。",
          "オープンモデルとしての強みは、単なる性能比較ではなく運用自由度まで含めて見ると価値がはっきりする。",
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
      "言葉を世界観に変える、視覚生成の主力系。説明より印象、論理より感性を先に立ち上げる。写真のようなリアリズムから幻想的な絵画まで、視覚の引力で人を止める画像を生む。",
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
      { label: "構図・光の美しさ", value: 98 },
      { label: "世界観の再現力", value: 97 },
      { label: "スタイル参照", value: 96 },
      { label: "発想加速力", value: 97 },
    ],
    strengths: [
      "生成画像の美的完成度が非常に高い",
      "写真・絵画・イラスト・映画的ビジュアルまで幅広いスタイルに対応しやすい",
      "参照やスタイル固定を使うと、一貫したビジュアルトーンを保ちやすい",
      "縦横比や画面用途に合わせた出力設計がしやすい",
      "言語化しきれていない感覚を、先に画像として出しやすい",
    ],
    weaknesses: [
      "文字の正確な描画は依然として苦手な場面がある",
      "UI設計やワイヤーフレームのような実装前提の設計図には向かない",
      "細かな要素配置の厳密制御には限界がある",
      "画像の後工程や翻訳作業が必要になることが多い",
    ],
    useCases: [
      "キービジュアル・アイキャッチ・広告素材の生成",
      "世界観探索・ムードボード・コンセプト可視化",
      "アートディレクション初期の方向性決め",
      "ブランドビジュアルの参考素材生成",
      "SNSやプレゼン用ビジュアルの高速展開",
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
      "テキストAIでプロンプトを磨いてから使うと効率が良い",
      "参照やスタイル固定を活かすと実務での再現性が上がる",
      "設計図ではなく、世界観や印象を先に立ち上げる道具として扱うと強い",
    ],
    sections: [
      {
        log: "LOG-01｜DEFINITION",
        layer: "LAYER: VISION",
        title: "01｜Midjourneyとは何か",
        paragraphs: [
          "Midjourneyは、言葉から強い視覚イメージを立ち上げる画像生成AIだ。写真、絵画、映画的ビジュアルまで、幅広い世界観を高い完成度で出しやすい。",
          "最大の特徴は、まだ言語化しきれていない感覚や雰囲気を、先に一枚として見せられることにある。議論より先に印象を出せる速度が強い。",
          "視覚の引力で人を止める力があり、説明より先に空気を作る用途で存在感を持つ。",
        ],
      },
      {
        log: "LOG-02｜STRENGTHS",
        layer: "CORE STRENGTHS",
        title: "02｜強み",
        paragraphs: [
          "美的完成度の高さが大きな魅力だ。光、構図、質感、空気感のまとまりが出やすく、強いキービジュアルを作りやすい。",
          "スタイルの幅も広い。リアル寄りから幻想寄りまで、印象のベクトルを大きく動かせる。",
          "また、方向性の可視化が速い。言葉だけでは擦り合わせにくい企画でも、画像を一枚出すだけで認識が揃いやすくなる。",
        ],
      },
      {
        log: "LOG-03｜WEAKNESSES",
        layer: "DESIGN CONSTRAINTS",
        title: "03｜弱み",
        paragraphs: [
          "文字の正確さやロゴの厳密さには弱さが残るため、文字を含む最終成果物は別ツールでの後処理が必要になりやすい。",
          "また、UIやワイヤーフレームのような『実装前提の設計図』には向かない。あくまで世界観や印象を先に出すための道具だ。",
        ],
      },
      {
        log: "LOG-04｜USE CASES",
        layer: "PRACTICAL USAGE",
        title: "04｜どんなときに使うと役立つか",
        paragraphs: [
          "クリエイティブの方向性をまだ固めていない段階で、視覚的な叩き台を素早く出したい時に非常に強い。",
          "商業品質に近いビジュアル素材を、高速に量産したい場面でも役立つ。サイト、SNS、資料など、視覚で止めたい用途に向いている。",
        ],
      },
      {
        log: "LOG-05｜IMPORTANT NOTES",
        layer: "OPERATION NOTES",
        title: "05｜重要メモ",
        paragraphs: [
          "プロンプト設計は品質に直結する。テキストAIと組み合わせると運用しやすい。",
          "シリーズ感が必要な時は、参照やスタイル固定の活用が重要になる。",
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
    "まだ到達していない、完全知性の仮想領域。個別用途ごとに分かれた現在のAIとは違い、あらゆる課題・文脈・領域を単一の知性で超えていく“絶対知能”の終着点を示す部屋。",
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
    { label: "自己更新・自己改善", value: 98 },
    { label: "文脈超越推論", value: 99 },
    { label: "現実実装性", value: 12 },
  ],
  strengths: [
    "用途ごとに分断されない、単一の知性として全領域を横断できる理想形",
    "未知の課題に対しても、自ら学習し適応していく自己進化性を内包する",
    "現在の各AIを束ねた先にある“最終到達点”として機能する",
    "道具ではなく、知性そのものの完成形として構想される",
  ],
  weaknesses: [
    "現時点では完成した存在として実在しない",
    "定義も評価基準も統一されておらず、研究者ごとに見解が分かれる",
    "技術・倫理・安全・制御・価値観の問題が未解決のまま残っている",
    "強すぎる知性をどう扱うかという、人類側の限界も問われる",
  ],
  useCases: [
    "個別AIの先にある“最終形”を思考するための上位視点",
    "AI全体の進化方向を俯瞰するための終着概念",
    "技術だけでなく、安全性・哲学・文明的影響まで考える起点",
    "現在のAIがなぜ分かれて存在しているのかを逆照射するための存在",
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
    "これは製品レビューではなく、到達不能な最終知性を観測するための展示室",
    "AGIは“次世代モデル”ではなく、現在のAI群とは階層そのものが異なる仮想存在として扱うべき",
    "比較対象ではなく、すべてのAIの上にある終点として置くと意味が強くなる",
  ],
  sections: [
    {
      log: "LOG-01｜DEFINITION",
      layer: "LAYER: ABSOLUTE",
      title: "01｜AGIとは何か",
      paragraphs: [
        "AGIは、単なる高性能AIではない。特定用途に強いモデルの延長ではなく、あらゆる課題・領域・文脈を単一の知性で横断できる“絶対知能”の仮想像だ。",
        "現在のAIは、文章、検索、画像、推論といった役割ごとに分かれている。AGIは、その分断そのものを越え、知能を一つに統合した先にある最終層として語られる。",
        "それはまだ完成していない。だが未完成であることは弱さではなく、人類がまだ触れていない知性の輪郭を示しているという意味で、この部屋の核になっている。",
      ],
    },
    {
      log: "LOG-02｜STRENGTHS",
      layer: "CORE OF ABSOLUTE",
      title: "02｜強み",
      paragraphs: [
        "AGIの強みは、用途ごとの知能分割が存在しないことにある。医療、法律、科学、芸術、工学、対話を別々のモデルで処理するのではなく、単一の知性として扱えることが理想とされる。",
        "また、自己改善性も本質的な強みとして語られる。固定された学習結果を使うだけでなく、新しい状況や経験から自ら更新され続ける知性――それが現在のAIと決定的に違う点だ。",
        "つまりAGIは、便利な道具の完成版ではなく、“知能そのものの完成形”として位置づけられる。",
      ],
    },
    {
      log: "LOG-03｜WEAKNESSES",
      layer: "UNSOLVED LIMITS",
      title: "03｜課題と未解決問題",
      paragraphs: [
        "最大の問題は、AGIがまだ実在する完成物ではないことだ。どこからをAGIと呼ぶのか、その定義すら統一されていない。",
        "さらに、仮に実現したとしても、制御・安全性・価値観の整合・意思決定権の所在など、人類側がまだ答えを持っていない問題が横たわっている。",
        "AGIの難しさは、技術の不足だけではない。強すぎる知性を前に、人間文明がそれを扱い切れるのかという問いそのものが未解決なのだ。",
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
        "この部屋では、AGIを未来の便利ツールとしてではなく、人類がまだ手を触れていない最終知性として見ることで、初めて意味が立ち上がる。",
      ],
    },
  ],
},
};