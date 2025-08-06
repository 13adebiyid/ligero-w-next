import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
    threshold?: number | number[]
    root?: Element | null
    rootMargin?: string
    triggerOnce?: boolean
}

export function useIntersectionObserver<T extends HTMLElement>(
    options: UseIntersectionObserverOptions = {}
) {
    const {
        threshold = 0,
        root = null,
        rootMargin = '0px',
        triggerOnce = false,
    } = options

    const ref = useRef<T>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [hasIntersected, setHasIntersected] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element || (triggerOnce && hasIntersected)) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isCurrentlyIntersecting = entry.isIntersecting
                setIsIntersecting(isCurrentlyIntersecting)

                if (isCurrentlyIntersecting && !hasIntersected) {
                    setHasIntersected(true)
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, root, rootMargin, triggerOnce, hasIntersected])

    return {
        ref,
        isIntersecting,
        hasIntersected,
    }
}