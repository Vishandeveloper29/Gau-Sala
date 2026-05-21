import { useEffect } from "react";

/**
 * useScrollAnimation
 * 
 * Drop this ONE hook into any page/component.
 * It automatically finds all matching elements and animates them on scroll.
 * No wrapping needed.
 * 
 * Usage:
 *   useScrollAnimation();                          // default: all sections, divs, cards etc.
 *   useScrollAnimation({ selector: ".animate" });  // only elements with class "animate"
 *   useScrollAnimation({ selector: "section, .card, h1, p" });
 */
const useScrollAnimation = ({
  selector = "section, .card, .hero, article, header, footer, h1, h2, h3, p, img, button, a, li, [data-animate]",
  duration = 600,
  distance = 28,
  staggerMs = 60,
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));

    // Set initial hidden state
    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.translate = `0px ${distance}px`;
      el.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                              translate ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      el.style.transitionDelay = `${i * staggerMs}ms`;
      el.style.willChange = "opacity, translate";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.translate = "0px 0px";
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.style.opacity = "0";
            entry.target.style.translate = `0px ${distance}px`;
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, duration, distance, staggerMs, threshold, rootMargin, once]);
};

export default useScrollAnimation;
