'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'
import type { Photo } from '@/lib/types'

interface PhotoModalProps {
    isOpen: boolean
    onClose: () => void
    photo: Photo
    onNavigate: (direction: number) => void
}

export default function PhotoModal({ isOpen, onClose, photo, onNavigate }: PhotoModalProps) {
    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') onNavigate(1)
            if (e.key === 'ArrowLeft') onNavigate(-1)
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onNavigate, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[3000] flex items-center justify-center p-8"
                >
                    {/* Backdrop */}
                    <motion.div
                        className={`absolute inset-0 ${
                            theme === 'white' ? 'bg-white/95' : 'bg-black/95'
                        } backdrop-blur-[10px]`}
                        onClick={onClose}
                    />

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => onNavigate(-1)}
                        className={`absolute left-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center text-xl backdrop-blur-[10px] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 ${
                            theme === 'white'
                                ? 'bg-black/10 border-2 border-black/20 text-black'
                                : 'bg-white/10 border-2 border-white/20 text-white'
                        }`}
                        aria-label="Previous photo"
                    >
                        ‹
                    </button>

                    <button
                        onClick={() => onNavigate(1)}
                        className={`absolute right-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center text-xl backdrop-blur-[10px] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 ${
                            theme === 'white'
                                ? 'bg-black/10 border-2 border-black/20 text-black'
                                : 'bg-white/10 border-2 border-white/20 text-white'
                        }`}
                        aria-label="Next photo"
                    >
                        ›
                    </button>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className={`absolute top-8 right-8 w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                            theme === 'white'
                                ? 'bg-white/30 text-black hover:bg-white/50 hover:rotate-90'
                                : 'bg-black/50 text-white hover:bg-black/70 hover:rotate-90'
                        }`}
                        aria-label="Close modal"
                    >
                        ×
                    </button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="relative z-10 flex flex-col items-center max-h-[80vh] max-w-[90vw]"
                    >
                        <img
                            src={photo.image}
                            alt={photo.title || `Photo by ${photo.photographer}`}
                            className="max-w-full max-h-[80vh] w-auto h-auto object-contain shadow-2xl"
                        />
                    </motion.div>

                    {/* Photo Info */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`absolute bottom-8 left-8 max-w-[400px] p-6 rounded-lg backdrop-blur-[20px] border ${
                            theme === 'white'
                                ? 'bg-white/80 border-black/10 text-black'
                                : 'bg-black/80 border-white/10 text-white'
                        }`}
                    >
                        <h2 className="font-madani text-2xl font-light mb-2">
                            {photo.title || photo.client}
                        </h2>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-xs uppercase tracking-wider">Photographer</span>
                                <a
                                    href={photo.photographerUrl}
                                    className="font-medium hover:opacity-70 transition-opacity cursor-none"
                                >
                                    {photo.photographer}
                                </a>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-xs uppercase tracking-wider">Client</span>
                                <span>{photo.client}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-xs uppercase tracking-wider">Camera</span>
                                <span>{photo.camera}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-xs uppercase tracking-wider">Year</span>
                                <span>{photo.year}</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}