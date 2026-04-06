import { useMediaQuery } from "./useMediaQuery";

export function useIsPC() {
  return useMediaQuery("(min-width: 768px)");
}