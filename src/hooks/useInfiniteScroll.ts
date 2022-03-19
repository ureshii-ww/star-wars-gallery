import { useCallback, useEffect, useState } from 'react';

export default function useInfiniteScroll() {
  const [triggerElement, setTriggerElement] = useState<Element | null>(null);
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);

  const triggerRef = useCallback(element => {
    setTriggerElement(element);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const container = entries[0];
        if (container.isIntersecting) {
          setShouldLoad(true);
        }
      },
      { threshold: 0.5 }
    );

    if (triggerElement) {
      observer.observe(triggerElement);
    }

    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement);
        setShouldLoad(false);
      }
    };
  }, [triggerElement]);

  return {
    triggerRef,
    shouldLoad,
  };
}
