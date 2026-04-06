import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsPC } from "./hooks/useIsPC";

import GlobalNav from "./components/GlobalNav";
import GlobalNavSP from "./components/GlobalNavSP";
import TransitionOverlay from "./components/TransitionOverlay";

import Home from "./pages/Home";
import ChatGPTRoom from "./rooms/ChatGPTRoom";
import ClaudeRoom from "./rooms/ClaudeRoom";
import GeminiRoom from "./rooms/GeminiRoom";
import DeepSeekRoom from "./rooms/DeepSeekRoom";
import MidjourneyRoom from "./rooms/MidjourneyRoom";
import AgiRoom from "./rooms/AgiRoom";

const roomRoutes = [
  { path: "/chatgpt", element: <ChatGPTRoom /> },
  { path: "/claude", element: <ClaudeRoom /> },
  { path: "/gemini", element: <GeminiRoom /> },
  { path: "/deepseek", element: <DeepSeekRoom /> },
  { path: "/midjourney", element: <MidjourneyRoom /> },
  { path: "/agi", element: <AgiRoom /> },
];

function App() {
  const isPC = useIsPC();

  return (
    <BrowserRouter>
      {isPC ? <GlobalNav /> : <GlobalNavSP />}
      <TransitionOverlay />

      <Routes>
        <Route path="/" element={<Home />} />

        {roomRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route
          path="*"
          element={
            <div className="pt-[200px] text-center text-white">
              <h1 className="mb-4 text-[40px] tracking-[0.2em]">404</h1>
              <p>ページが存在しません。</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;