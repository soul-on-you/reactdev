import { useEffect, useRef } from "react";

export const useDebounce = (query, callback, delay) => {
  const timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    

    timer.current = setTimeout(callback, delay);
  }, [query, callback, delay]);
};
