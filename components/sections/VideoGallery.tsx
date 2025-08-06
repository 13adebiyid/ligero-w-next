'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
    const galleryRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        // GSAP animations for gallery items
        const items = galleryRef.current?.querySelectorAll('.gallery-item')

        items?.forEach((item, index) => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [projects])

    const handleVideoHover = (projectId: string, isHovering: boolean) => {
        const video = document.getElementById(`video-${projectId}`) as HTMLVideoElement
        if (video) {
            if (isHovering) {
                video.play().catch(() => {})
                setPlayingVideos(prev => new Set([...prev, projectId]))
            } else {
                video.pause()
                video.currentTime = 0
                setPlayingVideos(prev => {
                    const newSet = new Set(prev)
                    newSet.delete(projectId)
                    return newSet
                })
            }
        }
    }

    const renderDualProject = (project: Project, index: number) => {
        if (!project.dualVideos) return null

        return (
            <motion.div
                key={project.id}
                className="gallery-item w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                {project.dualVideos.map((video, vIndex) => (
                    <div
                        key={video.id}
                        className="relative group cursor-pointer overflow-hidden rounded-xl"
                        onMouseEnter={() => handleVideoHover(video.id, true)}
                        onMouseLeave={() => handleVideoHover(video.id, false)}
                    >
                        <div className="aspect-[16/9] relative bg-black/5">
                            <video
                                id={`video-${video.id}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                muted
                                loop
                                playsInline
                            >
                                <source src={video.previewSrc} type="video/mp4" />
                            </video>

                            {/* Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
                                initial={false}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white text-2xl font-light mb-2">{video.title}</h3>
                                    <p className="text-white/60 text-sm">View Project →</p>
                                </div>
                            </motion.div>

                            {/* Play indicator */}
                            <AnimatePresence>
                                {playingVideos.has(video.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
                                    >
                                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </motion.div>
        )
    }

    const renderLargeProject = (project: Project, index: number) => {
        const isReversed = project.reverse || index % 2 === 1

        return (
            <motion.div
                key={project.id}
                className={`gallery-item w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                {/* Video Section */}
                <div
                    className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                        isReversed ? 'lg:order-2' : ''
                    }`}
                    onMouseEnter={() => handleVideoHover(project.id, true)}
                    onMouseLeave={() => handleVideoHover(project.id, false)}
                >
                    <div className="aspect-[16/10] relative bg-black/5">
                        <video
                            id={`video-${project.id}`}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            muted
                            loop
                            playsInline
                        >
                            <source src={project.previewSrc} type="video/mp4" />
                        </video>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        {/* Play indicator */}
                        <AnimatePresence>
                            {playingVideos.has(project.id) && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full"
                                >
                                    <div className="w-2 h-2 bg-red-500 rounded-full">
                                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
                                    </div>
                                    <span className="text-white text-xs font-light">Playing</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Hover overlay with view button */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={false}
                        >
                            <motion.div
                                className="bg-white text-black px-8 py-3 rounded-full font-light text-sm tracking-wider"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                VIEW PROJECT
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Info Section */}
                <div className={`flex flex-col justify-center ${isReversed ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm opacity-60 mb-2 tracking-widest">
                            {project.client.toUpperCase()}
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                            {project.title}
                        </h2>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm opacity-60">Creative Direction by</span>
                            <Link
                                href={project.designerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium hover:opacity-60 transition-opacity relative group"
                            >
                                {project.designer}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current group-hover:w-full transition-all duration-300" />
                            </Link>
                        </div>

                        <motion.button
                            className="inline-flex items-center gap-3 text-sm tracking-wider hover:gap-5 transition-all duration-300"
                            whileHover={{ x: 5 }}
                        >
                            <span>EXPLORE PROJECT</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    return (
        <div ref={galleryRef} className="w-full">
            <AnimatePresence mode="wait">
                {projects.map((project, index) => (
                    project.type === 'dual'
                        ? renderDualProject(project, index)
                        : renderLargeProject(project, index)
                ))}
            </AnimatePresence>

            {projects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-2xl font-light opacity-60">Projects coming soon...</p>
                </motion.div>
            )}
        </div>
    )
}