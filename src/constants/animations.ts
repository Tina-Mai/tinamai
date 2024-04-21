const prefersReducedMotion = () => {
    // ensure we are in the client environment (to avoid Vercel errors)
    if (typeof window !== "undefined") {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    // return a default value when not in a client environment (e.g., during SSR)
    return false;
}


export const animations = {
    // variants for the list container to control children's stagger
    containerVariants: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: prefersReducedMotion() ? 0.5 : 2,  // delay before starting to animate children
                staggerChildren: 0.1, // stagger the animation of children by 0.1 second each
            },
        },
    },
    // variants for individual list items
    itemVariants: {
        hidden: { y: -20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                y: { type: 'spring', stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
            },
        },
    },
}