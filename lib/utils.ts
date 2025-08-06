import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge class names with Tailwind CSS
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Check if code is running on client side
export const isClient = typeof window !== 'undefined'

// Check if device is mobile
export const isMobile = () => {
    if (!isClient) return false
    return window.innerWidth <= 768
}

// Check if device is tablet
export const isTablet = () => {
    if (!isClient) return false
    return window.innerWidth > 768 && window.innerWidth <= 1024
}

// Format number with commas
export const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle = false

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

// Get video source based on device
export const getVideoSource = (baseName: string): string => {
    if (!isClient) return `/videos/compressed/${baseName}_1080p.mp4`

    const width = window.innerWidth

    if (width <= 768) {
        return `/videos/compressed/${baseName}_720p.mp4`
    } else if (width <= 1920) {
        return `/videos/compressed/${baseName}_1080p.mp4`
    } else {
        return `/videos/compressed/${baseName}_4k.mp4`
    }
}

// Parse video time to seconds
export const parseVideoTime = (time: string): number => {
    const parts = time.split(':').map(Number)
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1]
    } else if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    }
    return 0
}

// Format seconds to time string
export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs.toString().padStart(2, '0')}`
}

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// Get scroll percentage
export const getScrollPercentage = (): number => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    return (scrollTop / scrollHeight) * 100
}

// Smooth scroll to element
export const smoothScrollTo = (elementId: string, offset: number = 0): void => {
    const element = document.getElementById(elementId)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })
}

// Lock body scroll
export const lockBodyScroll = (): void => {
    document.body.style.overflow = 'hidden'
}

// Unlock body scroll
export const unlockBodyScroll = (): void => {
    document.body.style.overflow = ''
}

// Get random number between min and max
export const random = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
}

// Clamp number between min and max
export const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max)
}

// Linear interpolation
export const lerp = (start: number, end: number, t: number): number => {
    return start + (end - start) * t
}

// Map value from one range to another
export const mapRange = (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}