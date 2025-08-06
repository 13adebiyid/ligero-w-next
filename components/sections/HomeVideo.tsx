'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function HomeVideo() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Auto-play was prevented
                setIsPlaying(false)
            })
        }
    }, [])

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

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
                >
                    <source src="/videos/test_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Controls */}
            <div className="fixed bottom-8 right-8 flex gap-3 z-20">
                <button
                    onClick={togglePlayPause}
                    className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    <Image
                        src={isPlaying ? "/images/pause-icon.webp" : "/images/play-icon.webp"}
                        alt={isPlaying ? "Pause" : "Play"}
                        width={20}
                        height={20}
                        className="filter invert"
                    />
                </button>
                <button
                    onClick={toggleMute}
                    className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    <Image
                        src={isMuted ? "/images/sound-off-icon.webp" : "/images/sound-on-icon.webp"}
                        alt={isMuted ? "Sound Off" : "Sound On"}
                        width={20}
                        height={20}
                        className="filter invert"
                    />
                </button>
            </div>

            {/* Theme Switcher */}
            <ThemeSwitcher />
        </>
    )
}