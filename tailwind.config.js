/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "1.75rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
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
         COLOR SYSTEM
      ============================== */
      colors: {
        /* ===== background ===== */
        bg: {
          DEFAULT: "#040811",
          soft: "#08101C",
          alt: "#0B1530",
          deep: "#020611",
          panel: "rgba(6,18,34,0.52)",
          card: "rgba(7,18,34,0.46)",
          glass: "rgba(8,18,38,0.62)",
          glassStrong: "rgba(8,18,38,0.76)",
        },

        /* ===== text ===== */
        text: {
          primary: "rgba(255,255,255,0.96)",
          secondary: "rgba(255,255,255,0.82)",
          muted: "rgba(255,255,255,0.62)",
          faint: "rgba(255,255,255,0.44)",
          ghost: "rgba(255,255,255,0.16)",
        },

        /* ===== accent ===== */
        accent: {
          DEFAULT: "#B084F8",
          soft: "#C8A7FF",
          deep: "#7C3AED",
          cyan: "#67E8F9",
          sky: "#7DD3FC",
          emerald: "#34D399",
          pink: "#F472B6",
          glow: "rgba(176,132,248,0.30)",
        },

        /* ===== line ===== */
        line: {
          subtle: "rgba(255,255,255,0.10)",
          soft: "rgba(255,255,255,0.14)",
          mid: "rgba(255,255,255,0.22)",
          strong: "rgba(176,132,248,0.42)",
        },

        /* ===== glow ===== */
        glow: {
          soft: "rgba(255,255,255,0.08)",
          mid: "rgba(255,255,255,0.16)",
          strong: "rgba(255,255,255,0.28)",
          cyan: "rgba(103,232,249,0.22)",
          violet: "rgba(176,132,248,0.24)",
          pink: "rgba(244,114,182,0.22)",
        },

        /* ===== surface ===== */
        surface: {
          glass: "rgba(255,255,255,0.05)",
          glassStrong: "rgba(255,255,255,0.08)",
          dark: "rgba(5,10,18,0.34)",
          darkSoft: "rgba(5,10,18,0.18)",
          overlay: "rgba(0,0,0,0.42)",
        },

        /* ===== utility semantic ===== */
        status: {
          online: "#67E8F9",
          stable: "#34D399",
          warning: "#FBBF24",
          future: "#E9D5FF",
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
        float: "0 24px 60px rgba(0,0,0,0.34)",
        glass: "0 8px 32px rgba(0,0,0,0.28)",
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
        30: "7.5rem",
      },

      minHeight: {
        screenSafe: "100svh",
      },

      maxWidth: {
        content: "78rem",
        reading: "42rem",
        hud: "18rem",
      },

      /* ==============================
         TRACKING
      ============================== */
      letterSpacing: {
        hero: "0.26em",
        label: "0.24em",
        micro: "0.18em",
        dense: "0.12em",
      },

      /* ==============================
         EFFECTS
      ============================== */
      backdropBlur: {
        xs: "2px",
      },

      blur: {
        xs: "2px",
      },

      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-fine":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hero-cyan":
          "radial-gradient(circle at 50% 18%, rgba(165,235,255,0.08), transparent 24%)",
        "hero-violet":
          "radial-gradient(circle at 78% 10%, rgba(192,132,252,0.08), transparent 22%)",
      },

      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
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
              transition: "color 240ms ease",
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
              borderColor: theme("colors.line.soft"),
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