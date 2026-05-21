import { useEffect, useRef, useState } from "react";

/**
 * FadeIn — Scroll-triggered entrance animation component
 *
 * Props:
 *   children     — content to animate
 *   className    — extra classes on the wrapper
 *   delay        — ms delay before animation starts (default 0)
 *   duration     — ms animation duration (default 600)
 *   direction    — "up" | "down" | "left" | "right" | "none" (default "up")
 *   distance     — px translation distance (default 28)
 *   threshold    — 0–1 visibility ratio to trigger (default 0.12)
 *   rootMargin   — IntersectionObserver rootMargin (default "0px 0px -60px 0px")
 *   once         — if false, re-animates every time element enters view (default true)
 *   scale        — if true, adds a subtle scale-in effect (default false)
 *   as           — HTML tag to render as (default "div")
 */
const FadeIn = ({
    children,
    className = "",
    delay = 0,
    duration = 600,
    direction = "up",
    distance = 28,
    threshold = 0.12,
    rootMargin = "0px 0px -60px 0px",
    once = true,
    scale = false,
    as: Tag = "div",
}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const translateMap = {
        up: `0px ${distance}px`,
        down: `0px -${distance}px`,
        left: `${distance}px 0px`,
        right: `-${distance}px 0px`,
        none: "0px 0px",
    };

    const translate = translateMap[direction] ?? translateMap.up;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    setHasAnimated(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once && hasAnimated) {
                    setVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once, hasAnimated, threshold, rootMargin]);

    const hiddenStyle = {
        opacity: 0,
        translate,
        ...(scale ? { scale: "0.97" } : {}),
    };

    const visibleStyle = {
        opacity: 1,
        translate: "0px 0px",
        ...(scale ? { scale: "1" } : {}),
    };

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                ...(visible ? visibleStyle : hiddenStyle),
                transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                     translate ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                     scale ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transitionDelay: `${delay}ms`,
                willChange: "opacity, translate",
            }}
        >
            {children}
        </Tag>
    );
};

export default FadeIn;

/**
 * FadeInStagger — wraps children and auto-staggers their FadeIn delay
 *
 * Props:
 *   children       — list of elements (each gets a FadeIn wrapper)
 *   staggerMs      — ms between each child (default 80)
 *   baseDelay      — starting offset in ms (default 0)
 *   fadeInProps    — object of props forwarded to every FadeIn instance
 *
 * Usage:
 *   <FadeInStagger staggerMs={100}>
 *     <Card />
 *     <Card />
 *     <Card />
 *   </FadeInStagger>
 */
export const FadeInStagger = ({
    children,
    staggerMs = 80,
    baseDelay = 0,
    fadeInProps = {},
}) => {
    const kids = Array.isArray(children) ? children : [children];
    return kids.map((child, i) => (
        <FadeIn key={i} delay={baseDelay + i * staggerMs} {...fadeInProps}>
            {child}
        </FadeIn>
    ));
};