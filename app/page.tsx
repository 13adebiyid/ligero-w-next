'use client'

import Link from 'next/link'
import OptimizedVideo from '@/components/ui/OptimizedVideo'
import VideoControls from '@/components/ui/VideoControls'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function HomePage() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <OptimizedVideo
                    src="/videos/test_video.mp4"
                    poster="/videos/posters/test_video_poster.jpg"
                    className="absolute inset-0 w-full h-full"
                    priority
                />
            </div>

            {/* Video Controls */}
            <VideoControls videoId="hero-video" />

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