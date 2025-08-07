'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
    id: string
    type: 'large' | 'dual'
    title: string
    client: string
    designer: string
    designerUrl: string
    previewSrc: string
    fullSrc: string
    reverse?: boolean
    dualVideos?: Project[]
}

interface VideoGalleryProps {
    projects: Project[]
}

export default function VideoGallery({ projects }: VideoGalleryProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    useEffect(() => {
        const videos = document.querySelectorAll('.feed-video')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target as HTMLVideoElement
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        video.play().catch(() => {})
                    } else {
                        video.pause()
                        video.currentTime = 0
                    }
                })
            },
            { threshold: 0.1, rootMargin: '100px' }
        )

        videos.forEach((video) => {
            observer.observe(video)
        })

        return () => observer.disconnect()
    }, [projects])

    return (
        <div className="flex flex-col gap-16 items-center w-full max-w-full mx-auto">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full"
                >
                    {/* Large Video Section */}
                    {project.type === 'large' && (
                        <div className={`flex ${project.reverse ? 'flex-row-reverse' : 'flex-row'} flex-col md:flex-row items-start gap-10 w-full`}>
                            <div
                                className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-900 cursor-pointer group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <video
                                    className="feed-video absolute inset-0 w-full h-full object-cover"
                                    src={project.previewSrc}
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                />

                                <div className={`absolute inset-0 bg-black/15 flex items-center justify-center transition-opacity duration-300 ${
                                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    <div className="w-[70px] h-[70px] bg-white/95 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                        <span className="text-black text-2xl pl-1">▶</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 min-w-[280px] py-5 flex flex-col justify-center">
                                <div className="text-sm opacity-60 mb-2 tracking-wider uppercase">
                                    {project.client}
                                </div>
                                <h2 className="text-4xl font-light mb-4 leading-tight">
                                    {project.title}
                                </h2>
                                <Link
                                    href={project.designerUrl}
                                    className="inline-block text-lg opacity-80 transition-opacity duration-300 hover:opacity-100"
                                >
                                    {project.designer}
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Dual Video Section */}
                    {project.type === 'dual' && project.dualVideos && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                            {project.dualVideos.map((video, videoIndex) => (
                                <div key={video.id} className="flex flex-col gap-4">
                                    <div
                                        className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-900 cursor-pointer group"
                                        onMouseEnter={() => setHoveredIndex(index + videoIndex)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <video
                                            className="feed-video absolute inset-0 w-full h-full object-cover"
                                            src={video.previewSrc}
                                            muted
                                            loop
                                            playsInline
                                            preload="none"
                                        />

                                        <div className={`absolute inset-0 bg-black/15 flex items-center justify-center transition-opacity duration-300 ${
                                            hoveredIndex === index + videoIndex ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                            <div className="w-[60px] h-[60px] bg-white/95 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                                <span className="text-black text-xl pl-0.5">▶</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center py-4">
                                        <div className="text-sm opacity-60 mb-1.5 tracking-[0.5px] uppercase">
                                            {video.client}
                                        </div>
                                        <h3 className="text-2xl font-light mb-2.5 leading-tight">
                                            {video.title}
                                        </h3>
                                        <Link
                                            href={video.designerUrl}
                                            className="inline-block text-base opacity-80 transition-opacity duration-300 hover:opacity-100"
                                        >
                                            {video.designer}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            ))}

            {projects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-2xl font-light opacity-60">Projects coming soon...</p>
                </div>
            )}
        </div>
    )
}