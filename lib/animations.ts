import { Variants } from 'framer-motion'

// Page transition variants
export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: 'easeIn',
        },
    },
}

// Fade in variants
export const fadeInVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

// Fade in up variants
export const fadeInUpVariants: Variants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Scale variants
export const scaleVariants: Variants = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Stagger container variants
export const staggerContainerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

// Stagger item variants
export const staggerItemVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Text reveal variants
export const textRevealVariants: Variants = {
    initial: {
        y: '100%',
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Hover scale variants
export const hoverScaleVariants: Variants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
}

// GSAP animation presets
export const gsapPresets = {
    fadeIn: {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
    },
    fadeInUp: {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
    },
    fadeInDown: {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
    },
    scaleIn: {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
    },
    slideInLeft: {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    },
    slideInRight: {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    },
}

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    markers: false,
}

// Lenis smooth scroll config
export const lenisConfig = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical' as const,
    gestureOrientation: 'vertical' as const,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
}

// Custom easing functions
export const customEasings = {
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
}

// Animation durations
export const durations = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    verySlow: 1,
}

// Animation delays
export const delays = {
    short: 0.1,
    medium: 0.3,
    long: 0.5,
    veryLong: 0.8,
}