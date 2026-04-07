import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useIsPC } from "./hooks/useIsPC";

import GlobalNav from "./components/GlobalNav";
import GlobalNavSP from "./components/GlobalNavSP";
import TransitionOverlay from "./components/TransitionOverlay";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import LogRoom from "./pages/LogRoom";
import ChatGPTRoom from "./rooms/ChatGPTRoom";
import ClaudeRoom from "./rooms/ClaudeRoom";
import GeminiRoom from "./rooms/GeminiRoom";
import DeepSeekRoom from "./rooms/DeepSeekRoom";
import MidjourneyRoom from "./rooms/MidjourneyRoom";
import AgiRoom from "./rooms/AgiRoom";

const SITE_URL = "https://singularity-lab-chi.vercel.app";
const SITE_NAME = "SINGULARITY LAB";

const pageSeo = {
  "/": {
    title: "SINGULARITY LAB | 人類とAIが交差する境界の研究室",
    description:
      "SINGULARITY LABは、ChatGPT、Claude、Gemini、DeepSeek、Midjourney、AGIなどを横断しながら、人類とAIが交差する境界を未来的な空間として体験できる研究室サイトです。",
    image: `${SITE_URL}/og/home.png`,
    imageAlt: "SINGULARITY LABの未来的な研究室ビジュアル",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SINGULARITY LAB",
      url: `${SITE_URL}/`,
      description:
        "ChatGPT、Claude、Gemini、DeepSeek、Midjourney、AGIなどを横断しながら、人類とAIが交差する境界を未来的な空間として体験できる研究室サイト。",
      inLanguage: "ja",
      author: {
        "@type": "Person",
        name: "Yuto Gushiken",
      },
    },
  },

  "/log-room": {
    title: "LOG ROOM | SINGULARITY LAB",
    description:
      "SINGULARITY LABの観測ログを収集・記録する部屋。AIと人類の接続点を、記録と断片からたどるログルーム。",
    image: `${SITE_URL}/og/log-room.png`,
    imageAlt: "LOG ROOMの研究ログイメージ",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "LOG ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/log-room`,
      description:
        "SINGULARITY LABの観測ログを収集・記録する部屋。AIと人類の接続点を、記録と断片からたどるログルーム。",
      inLanguage: "ja",
    },
  },

  "/chatgpt": {
    title: "ChatGPT ROOM | SINGULARITY LAB",
    description:
      "ChatGPTという知性を研究室空間として再構築した展示ページ。対話、推論、創造性、人間との接続を未来的な演出で体験する部屋。",
    image: `${SITE_URL}/og/chatgpt.png`,
    imageAlt: "ChatGPT ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "ChatGPT ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/chatgpt`,
      description:
        "ChatGPTという知性を研究室空間として再構築した展示ページ。対話、推論、創造性、人間との接続を未来的な演出で体験する部屋。",
      inLanguage: "ja",
    },
  },

  "/claude": {
    title: "Claude ROOM | SINGULARITY LAB",
    description:
      "ClaudeというAIの静かな知性と構造を研究室空間として再構築した展示ページ。思考の深度と美しい対話体験をたどる部屋。",
    image: `${SITE_URL}/og/claude.png`,
    imageAlt: "Claude ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Claude ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/claude`,
      description:
        "ClaudeというAIの静かな知性と構造を研究室空間として再構築した展示ページ。思考の深度と美しい対話体験をたどる部屋。",
      inLanguage: "ja",
    },
  },

  "/gemini": {
    title: "Gemini ROOM | SINGULARITY LAB",
    description:
      "GeminiというAIの接続性と拡張性を、未来的な研究室空間として体験する展示ページ。多層的な知性の広がりを観測する部屋。",
    image: `${SITE_URL}/og/gemini.png`,
    imageAlt: "Gemini ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Gemini ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/gemini`,
      description:
        "GeminiというAIの接続性と拡張性を、未来的な研究室空間として体験する展示ページ。多層的な知性の広がりを観測する部屋。",
      inLanguage: "ja",
    },
  },

  "/deepseek": {
    title: "DeepSeek ROOM | SINGULARITY LAB",
    description:
      "DeepSeekというAIの探索性と推論構造を、未来的な研究室空間として再構築した展示ページ。深く潜る知性の輪郭を観測する部屋。",
    image: `${SITE_URL}/og/deepseek.png`,
    imageAlt: "DeepSeek ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "DeepSeek ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/deepseek`,
      description:
        "DeepSeekというAIの探索性と推論構造を、未来的な研究室空間として再構築した展示ページ。深く潜る知性の輪郭を観測する部屋。",
      inLanguage: "ja",
    },
  },

  "/midjourney": {
    title: "Midjourney ROOM | SINGULARITY LAB",
    description:
      "Midjourneyという生成AIの視覚創造を未来的な研究室空間として体験する展示ページ。イメージ生成の感覚と拡張をたどる部屋。",
    image: `${SITE_URL}/og/midjourney.png`,
    imageAlt: "Midjourney ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Midjourney ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/midjourney`,
      description:
        "Midjourneyという生成AIの視覚創造を未来的な研究室空間として体験する展示ページ。イメージ生成の感覚と拡張をたどる部屋。",
      inLanguage: "ja",
    },
  },

  "/agi": {
    title: "AGI ROOM | SINGULARITY LAB",
    description:
      "AGIという汎用知能の概念を未来的な研究室空間として再構築した展示ページ。人類と人工知能の境界、その先にある可能性を観測する部屋。",
    image: `${SITE_URL}/og/agi.png`,
    imageAlt: "AGI ROOMのビジュアル",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AGI ROOM | SINGULARITY LAB",
      url: `${SITE_URL}/agi`,
      description:
        "AGIという汎用知能の概念を未来的な研究室空間として再構築した展示ページ。人類と人工知能の境界、その先にある可能性を観測する部屋。",
      inLanguage: "ja",
    },
  },
};

const roomRoutes = [
  { path: "/chatgpt", Component: ChatGPTRoom },
  { path: "/claude", Component: ClaudeRoom },
  { path: "/gemini", Component: GeminiRoom },
  { path: "/deepseek", Component: DeepSeekRoom },
  { path: "/midjourney", Component: MidjourneyRoom },
  { path: "/agi", Component: AgiRoom },
];

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(selector, rel, href) {
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function setSeo(pathname) {
  const seo = pageSeo[pathname] || {
    title: "404 NOT FOUND | SINGULARITY LAB",
    description:
      "指定されたページは存在しないか、すでに別のノードへ移動しています。",
    image: `${SITE_URL}/og/404.png`,
    imageAlt: "SINGULARITY LABの404ページビジュアル",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "404 NOT FOUND | SINGULARITY LAB",
      url: `${SITE_URL}${pathname}`,
      description:
        "指定されたページは存在しないか、すでに別のノードへ移動しています。",
      inLanguage: "ja",
    },
  };

  const url = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

  document.title = seo.title;

  upsertMeta('meta[name="description"]', "name", "description", seo.description);
  upsertMeta(
    'meta[name="robots"]',
    "name",
    "robots",
    "index, follow, max-image-preview:large"
  );

  upsertMeta('meta[property="og:type"]', "property", "og:type", seo.type);
  upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
  upsertMeta('meta[property="og:locale"]', "property", "og:locale", "ja_JP");
  upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
  upsertMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    seo.description
  );
  upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  upsertMeta('meta[property="og:image"]', "property", "og:image", seo.image);
  upsertMeta(
    'meta[property="og:image:alt"]',
    "property",
    "og:image:alt",
    seo.imageAlt
  );

  upsertMeta(
    'meta[name="twitter:card"]',
    "name",
    "twitter:card",
    "summary_large_image"
  );
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
  upsertMeta(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    seo.description
  );
  upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", seo.image);

  upsertLink('link[rel="canonical"]', "rel", "canonical", url);

  if (seo.schema) {
    upsertJsonLd("jsonld-dynamic", {
      ...seo.schema,
      url,
    });
  }
}

function App() {
  const isPC = useIsPC();
  const location = useLocation();

  useEffect(() => {
    setSeo(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <AppChrome isPC={isPC} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-room" element={<LogRoom />} />

        {roomRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function AppChrome({ isPC }) {
  return (
    <>
      {isPC ? <GlobalNav /> : <GlobalNavSP />}
      <TransitionOverlay />
    </>
  );
}

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 text-text-primary">
      <div className="pointer-events-none absolute inset-0">
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

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent" />
        <div className="absolute left-[18%] top-[18%] h-[220px] w-[220px] rounded-full bg-cyan-300/8 blur-3xl" />
        <div className="absolute right-[14%] top-[24%] h-[240px] w-[240px] rounded-full bg-fuchsia-300/8 blur-3xl" />
      </div>

      <div className="relative z-[1] w-full max-w-[720px] text-center">
        <p className="mb-4 text-[11px] tracking-[0.34em] text-cyan-200/82">
          SINGULARITY LAB
        </p>

        <h1 className="mb-4 text-[68px] font-semibold leading-none tracking-[0.16em] text-white md:text-[96px]">
          404
        </h1>

        <p className="mx-auto max-w-[32rem] text-[15px] leading-[1.95] text-text-secondary">
          指定されたページは存在しないか、
          すでに別のノードへ移動しています。
        </p>

        <p className="mt-2 text-[13px] leading-[1.9] text-text-muted">
          研究室の中枢へ戻って、別の接続先を選んでください。
        </p>

        <div className="mt-8 flex justify-center">
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
  );
}

export default App;