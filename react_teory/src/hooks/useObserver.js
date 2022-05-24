import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, condition, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (canLoad) return;
    if (observer.current) observer.current.disconnect();
    const innerCallback = (entries, observer) => {
      if (entries[0].isIntersecting && condition) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(innerCallback);
    observer.current.observe(ref.current);
  }, [canLoad]);
};
