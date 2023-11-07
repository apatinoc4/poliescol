import React, { useState, useRef, useEffect } from "react";

function useIntersection(opciones = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggeredAnimation, setHasTriggeredAnimation] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTriggeredAnimation) {
          setIsIntersecting(true);
          setHasTriggeredAnimation(true);
          if (element) {
            observer.unobserve(element);
          }
        }
      });
    }, opciones);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [opciones, hasTriggeredAnimation]);

  return [elementRef, isIntersecting];
}

export default useIntersection;
