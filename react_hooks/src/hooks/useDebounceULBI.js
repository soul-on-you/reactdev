import { useCallback, useRef } from "react";

export default function useDebounceULBI(callback, delay) {
  const timer = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
