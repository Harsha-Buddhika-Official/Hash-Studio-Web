import { useEffect } from "react";

/** Locks page scroll while `isLocked` is true — used while the lightbox is open. */
export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}