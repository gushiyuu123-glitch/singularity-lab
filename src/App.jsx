import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

const roomRoutes = [
  { path: "/chatgpt", Component: ChatGPTRoom },
  { path: "/claude", Component: ClaudeRoom },
  { path: "/gemini", Component: GeminiRoom },
  { path: "/deepseek", Component: DeepSeekRoom },
  { path: "/midjourney", Component: MidjourneyRoom },
  { path: "/agi", Component: AgiRoom },
];

function App() {
  const isPC = useIsPC();

  return (
    <BrowserRouter>
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
    </BrowserRouter>
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