import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getInitialValue = () => {
    if (typeof window === "undefined" || !query) return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => getInitialValue());

  useEffect(() => {
    if (typeof window === "undefined" || !query) return;

    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [query]);

  return matches;
}