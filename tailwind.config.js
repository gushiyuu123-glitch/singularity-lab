/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },

    extend: {
      /* ==============================
         FONT SYSTEM
      ============================== */
      fontFamily: {
        sans: [
          '"Inter Tight"',
          '"Noto Sans JP"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        display: [
          '"Inter Tight"',
          '"Noto Sans JP"',
          "system-ui",
          "sans-serif",
        ],
      },

      /* ==============================
         COLOR PHILOSOPHY
         - 背景は青黒
         - 文字は白の濃淡
         - ガラスは青黒ベース
         - 紫は光として使う
      ============================== */
      colors: {
        /* ===== 背景 ===== */
        bg: {
          DEFAULT: "#040811",  // 全体の基底
          soft: "#08101C",     // セクション
          alt: "#0B1530",      // カード / HUD / ナビ
          panel: "rgba(6,18,34,0.52)", // ガラスパネル基準
          card: "rgba(7,18,34,0.46)",  // AIカード基準
        },

        /* ===== テキスト（白濃淡） ===== */
        text: {
          primary: "rgba(255,255,255,0.96)",
          secondary: "rgba(255,255,255,0.82)",
          muted: "rgba(255,255,255,0.62)",
          faint: "rgba(255,255,255,0.44)",
        },

        /* ===== アクセント ===== */
        accent: {
          DEFAULT: "#B084F8",
          soft: "#C8A7FF",
          deep: "#7C3AED",
          glow: "rgba(176,132,248,0.30)",
        },

        /* ===== 線 ===== */
        line: {
          subtle: "rgba(255,255,255,0.14)",
          mid: "rgba(255,255,255,0.22)",
          strong: "rgba(176,132,248,0.42)",
        },

        /* ===== 白い膜 / HUD光 ===== */
        glow: {
          soft: "rgba(255,255,255,0.08)",
          mid: "rgba(255,255,255,0.16)",
          strong: "rgba(255,255,255,0.28)",
        },

        /* ===== 追加の実用色 ===== */
        surface: {
          glass: "rgba(255,255,255,0.05)",
          glassStrong: "rgba(255,255,255,0.08)",
          dark: "rgba(5,10,18,0.34)",
          darkSoft: "rgba(5,10,18,0.18)",
        },
      },

      /* ==============================
         SHADOWS
      ============================== */
      boxShadow: {
        "soft-card":
          "0 18px 45px rgba(3, 8, 17, 0.56), 0 0 40px rgba(3, 8, 17, 0.72)",
        "accent-ring":
          "0 0 0 1px rgba(255,255,255,0.12), 0 0 35px rgba(168, 85, 247, 0.42)",
        "inner-glow":
          "inset 0 0 35px rgba(168, 85, 247, 0.20), 0 0 32px rgba(3, 8, 17, 0.72)",
        hud: "0 0 60px -18px rgba(168,85,247,0.28)",
        panel: "0 0 70px -20px rgba(140,110,255,0.20)",
      },

      /* ==============================
         RADIUS / SPACING
      ============================== */
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        pill: "9999px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      /* ==============================
         TRACKING
      ============================== */
      letterSpacing: {
        hero: "0.26em",
        label: "0.24em",
        micro: "0.18em",
      },

      backdropBlur: {
        xs: "2px",
      },

      /* ==============================
         TYPOGRAPHY
      ============================== */
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "66ch",
            color: theme("colors.text.secondary"),

            a: {
              color: theme("colors.accent.soft"),
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.text.primary"),
              },
            },

            strong: {
              color: theme("colors.text.primary"),
              fontWeight: "600",
            },

            "h1, h2, h3, h4": {
              color: theme("colors.text.primary"),
              letterSpacing: theme("letterSpacing.label"),
              fontWeight: "500",
            },

            h2: {
              fontSize: "1.3rem",
              marginTop: "1.6rem",
              marginBottom: "0.9rem",
            },

            p: {
              marginTop: "0.85rem",
              marginBottom: "0.85rem",
              lineHeight: "1.9",
              color: theme("colors.text.secondary"),
            },

            ul: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },

            li: {
              color: theme("colors.text.secondary"),
            },

            "ul > li::marker": {
              color: theme("colors.accent.soft"),
            },

            hr: {
              borderColor: theme("colors.line.subtle"),
            },

            code: {
              fontFamily: theme("fontFamily.mono").join(","),
              color: theme("colors.text.primary"),
              backgroundColor: "rgba(11,21,48,0.78)",
              padding: "0.12rem 0.4rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.08)",
            },

            pre: {
              backgroundColor: "rgba(6,18,34,0.72)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "1.25rem",
              color: theme("colors.text.secondary"),
            },

            blockquote: {
              borderLeftColor: theme("colors.accent.deep"),
              color: theme("colors.text.muted"),
            },
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
};