import { useEffect, useRef, useState } from "react";

/**
 * Observes a ref and flips to `true` the first time it enters the viewport,
 * then disconnects. Used to trigger one-shot scroll-reveal / pop-in animations.
 */
export default function useIntersectionObserver({
  threshold = 0.4,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return [ref, isVisible];
}