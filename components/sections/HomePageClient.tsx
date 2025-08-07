'use client'

import { useState, useRef, useEffect } from 'react'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import VideoControls from '@/components/ui/VideoControls'

export default function HomePageClient() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Auto-play was prevented, handle silently
            })
        }
    }, [])

    return (
        <>
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
            <VideoControls videoId="hero-video" />

            {/* Theme Switcher */}
            <ThemeSwitcher />
        </>
    )
}