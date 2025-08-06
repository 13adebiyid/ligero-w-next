import { useState, useEffect } from 'react'
import { debounce } from '@/lib/utils'

interface WindowSize {
    width: number
    height: number
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }, 100)

        window.addEventListener('resize', handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}