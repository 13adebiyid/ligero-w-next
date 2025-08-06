import { useEffect, useRef, useState } from 'react'

interface UseVideoLoaderOptions {
    threshold?: number
    rootMargin?: string
    autoPlay?: boolean
}

export function useVideoLoader(options: UseVideoLoaderOptions = {}) {
    const {
        threshold = 0.1,
        rootMargin = '50px',
        autoPlay = true,
    } = options

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Set up intersection observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)

                if (entry.isIntersecting && !isLoaded) {
                    // Start loading the video
                    video.load()
                }

                if (entry.isIntersecting && isLoaded && autoPlay) {
                    video.play().catch((err) => {
                        console.error('Video autoplay failed:', err)
                    })
                } else if (!entry.isIntersecting) {
                    video.pause()
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(video)

        // Set up video event listeners
        const handleLoadStart = () => setIsLoading(true)
        const handleLoadedData = () => {
            setIsLoading(false)
            setIsLoaded(true)
        }
        const handleError = () => {
            setIsLoading(false)
            setError('Failed to load video')
        }

        video.addEventListener('loadstart', handleLoadStart)
        video.addEventListener('loadeddata', handleLoadedData)
        video.addEventListener('error', handleError)

        return () => {
            observer.disconnect()
            video.removeEventListener('loadstart', handleLoadStart)
            video.removeEventListener('loadeddata', handleLoadedData)
            video.removeEventListener('error', handleError)
        }
    }, [threshold, rootMargin, autoPlay, isLoaded])

    return {
        videoRef,
        isLoading,
        isLoaded,
        isIntersecting,
        error,
    }
}