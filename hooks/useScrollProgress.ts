import { useState, useEffect } from 'react'
import { throttle } from '@/lib/utils'

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

            setScrollProgress(progress)
        }, 50)

        window.addEventListener('scroll', handleScroll)

        // Call handler right away to get initial scroll position
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollProgress
}