'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'

interface ServiceCard {
    href: string
    title: string
    videoPreview?: string
}

const services: ServiceCard[] = [
    { href: '/services/styling', title: 'STYLING' },
    { href: '/services/creative-directing', title: 'CREATIVE DIRECTING' },
    { href: '/services/photography', title: 'PHOTOGRAPHY' },
    { href: '/services/set-designing', title: 'SET DESIGNING' },
    { href: '/services/models', title: 'MODELS' },
    { href: '/services/music', title: 'MUSIC' },
]

export default function ServiceCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const slideCarousel = (direction: number) => {
        if (isMobile || !carouselRef.current) return

        const totalCards = services.length
        const settings = getCarouselSettings()
        const { cardWidth, cardGap, containerWidth } = settings
        const cardWithGap = cardWidth + cardGap
        const cardsVisible = Math.max(1, Math.floor(containerWidth / cardWithGap))
        const maxSlide = Math.max(0, totalCards - cardsVisible)

        const newSlide = Math.max(0, Math.min(currentSlide + direction, maxSlide))
        setCurrentSlide(newSlide)

        let translateX
        if (newSlide === 0) {
            translateX = 0
        } else if (newSlide >= maxSlide) {
            const totalContentWidth = (totalCards * cardWidth) + ((totalCards - 1) * cardGap)
            translateX = totalContentWidth > containerWidth ? -(totalContentWidth - containerWidth) : 0
        } else {
            translateX = -(newSlide * cardWithGap)
        }

        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${translateX}px)`
        }
    }

    const getCarouselSettings = () => {
        if (typeof window === 'undefined') {
            return { cardWidth: 300, cardGap: 30, containerWidth: 1200 }
        }

        const screenWidth = window.innerWidth
        const containerPadding = 160
        const containerWidth = screenWidth - containerPadding

        let cardWidth = screenWidth * 0.28
        let cardGap = screenWidth * 0.02

        if (screenWidth <= 768) {
            cardWidth = 280
            cardGap = 20
        }

        return { cardWidth, cardGap, containerWidth }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') slideCarousel(-1)
            if (e.key === 'ArrowRight') slideCarousel(1)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentSlide])

    if (isMobile) {
        return (
            <div className="flex flex-col gap-5 w-full">
                {services.map((service) => (
                    <Link
                        key={service.href}
                        href={service.href}
                        className={`block w-full h-[180px] ${
                            theme === 'white'
                                ? 'bg-black/10 border-black/20 hover:bg-black/20'
                                : 'bg-white/10 border-white/20 hover:bg-white/20'
                        } border backdrop-blur-[10px] rounded-[10px] flex items-center justify-center transition-all duration-300`}
                    >
            <span className={`text-base font-light tracking-[2px] ${
                theme === 'white' ? 'text-black' : 'text-white'
            }`}>
              {service.title}
            </span>
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="relative w-screen h-[60vh] flex items-center justify-center overflow-hidden mb-10 -mx-12 md:-mx-20">
            {/* Left Arrow */}
            <button
                onClick={() => slideCarousel(-1)}
                className={`absolute left-[1%] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 z-[100] ${
                    theme === 'white'
                        ? 'border-2 border-black text-black hover:bg-black hover:text-white'
                        : 'border-2 border-white text-white hover:bg-white hover:text-black'
                }`}
                aria-label="Previous service"
            >
                ‹
            </button>

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="flex gap-[2vw] h-full items-center px-2.5 transition-transform duration-300 ease-out"
                style={{ width: 'calc(100% - 160px)', margin: '0 auto' }}
            >
                {services.map((service, index) => (
                    <Link
                        key={service.href}
                        href={service.href}
                        className={`h-[55vh] flex-[0_0_35%] min-w-[280px] min-h-[350px] flex flex-col items-center justify-center text-2xl cursor-pointer transition-all duration-300 backdrop-blur-[10px] rounded-[10px] no-underline relative overflow-hidden ${
                            theme === 'white'
                                ? 'bg-black/10 border border-black/20 text-black hover:bg-black/20 hover:-translate-y-[5px]'
                                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-[5px]'
                        }`}
                    >
                        <div className="relative z-[2] p-5 rounded-lg">
              <span className={`font-light tracking-[2px] ${
                  theme === 'white'
                      ? 'text-black [text-shadow:_2px_2px_4px_rgba(255,255,255,0.9),_-1px_-1px_2px_rgba(255,255,255,0.7),_1px_1px_3px_rgba(255,255,255,0.8)]'
                      : 'text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8),_-1px_-1px_2px_rgba(0,0,0,0.5),_1px_1px_3px_rgba(0,0,0,0.7)]'
              }`}>
                {service.title}
              </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => slideCarousel(1)}
                className={`absolute right-[5%] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 z-[100] ${
                    theme === 'white'
                        ? 'border-2 border-black text-black hover:bg-black hover:text-white'
                        : 'border-2 border-white text-white hover:bg-white hover:text-black'
                }`}
                aria-label="Next service"
            >
                ›
            </button>
        </div>
    )
}