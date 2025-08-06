'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface VideoControlsProps {
    videoId?: string
}

export default function VideoControls({ videoId = 'bgVideo' }: VideoControlsProps) {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        // Get video element by ID or class
        const video = document.querySelector(`#${videoId}, video`) as HTMLVideoElement
        if (video) {
            videoRef.current = video

            // Try to autoplay
            video.play().then(() => {
                setIsPlaying(true)
            }).catch(() => {
                setIsPlaying(false)
            })

            // Set initial mute state
            video.muted = true
        }
    }, [videoId])

    const togglePlayPause = () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    const toggleMute = () => {
        if (!videoRef.current) return

        videoRef.current.muted = !videoRef.current.muted
        setIsMuted(videoRef.current.muted)
    }

    return (
        <div className="fixed bottom-[30px] right-[30px] flex gap-[10px] z-[1000]">
            <button
                onClick={togglePlayPause}
                className="bg-gray-500/80 border-0 p-2 rounded-full cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
                <Image
                    src={isPlaying ? '/images/pause-icon.webp' : '/images/play-icon.webp'}
                    alt={isPlaying ? 'Pause' : 'Play'}
                    width={15}
                    height={15}
                    className="brightness-0 invert"
                />
            </button>

            <button
                onClick={toggleMute}
                className="bg-gray-500/80 border-0 p-2 rounded-full cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
                <Image
                    src={isMuted ? '/images/sound-off-icon.webp' : '/images/sound-on-icon.webp'}
                    alt={isMuted ? 'Sound off' : 'Sound on'}
                    width={15}
                    height={15}
                    className="brightness-0 invert"
                />
            </button>
        </div>
    )
}