import { useCallback, useEffect, useState } from 'react';

export function useInfiniteScroll() {
  const [triggerElement, setTriggerElement] = useState<Element | null>(null);
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  
  const triggerRef = useCallback((element: Element | null) => {
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

    if (!triggerElement) {
      setShouldLoad(false);
    }

    return () => {
      observer.disconnect();
    };
  }, [triggerElement]);

  return {
    triggerRef,
    shouldLoad,
  };
}
