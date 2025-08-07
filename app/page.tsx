'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import VideoControls from '@/components/ui/VideoControls'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Auto-play was prevented
            })
        }
    }, [])

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    id="bgVideo"
                >
                    <source src="/videos/test_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Controls */}
            <VideoControls videoId="bgVideo" />

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Content */}
            <div className="relative z-10 text-center">
                <Link
                    href="/shop"
                    className="inline-block bg-transparent text-white px-12 py-5 text-2xl tracking-[2px] text-center transition-all duration-300 hover:bg-black/50 animate-subtle-pulse"
                >
                    ACCESS
                </Link>
            </div>
        </div>
    )
}