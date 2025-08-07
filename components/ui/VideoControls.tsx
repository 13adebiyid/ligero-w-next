'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface VideoControlsProps {
    videoId: string
}

export default function VideoControls({ videoId }: VideoControlsProps) {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        const video = document.querySelector('video') as HTMLVideoElement
        if (video) {
            video.play().catch(() => {
                setIsPlaying(false)
            })
        }
    }, [])

    const togglePlayPause = () => {
        const video = document.querySelector('video') as HTMLVideoElement
        if (video) {
            if (isPlaying) {
                video.pause()
            } else {
                video.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        const video = document.querySelector('video') as HTMLVideoElement
        if (video) {
            video.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <div className="fixed bottom-8 right-8 flex gap-3 z-20">
            <button
                onClick={togglePlayPause}
                className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                <img
                    src={isPlaying ? "/images/pause-icon.webp" : "/images/play-icon.webp"}
                    alt={isPlaying ? "Pause" : "Play"}
                    className="w-5 h-5 filter invert"
                />
            </button>
            <button
                onClick={toggleMute}
                className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                <img
                    src={isMuted ? "/images/sound-off-icon.webp" : "/images/sound-on-icon.webp"}
                    alt={isMuted ? "Sound Off" : "Sound On"}
                    className="w-5 h-5 filter invert"
                />
            </button>
        </div>
    )
}