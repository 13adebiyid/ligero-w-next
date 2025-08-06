'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoSrc: string
    title: string
    client: string
    director: string
}

export default function VideoModal({
                                       isOpen,
                                       onClose,
                                       videoSrc,
                                       title,
                                       client,
                                       director
                                   }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.body.classList.add('modal-open')

            // Play video when modal opens
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(() => {})
                }
            }, 200)
        } else {
            document.body.style.overflow = ''
            document.body.classList.remove('modal-open')
        }

        return () => {
            document.body.style.overflow = ''
            document.body.classList.remove('modal-open')
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[3000] flex items-center justify-center p-1.5"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/95 backdrop-blur-[10px]"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="relative w-[97vw] h-[97vh] max-w-[2200px] max-h-[1500px] z-[3001] flex flex-col items-center justify-center overflow-hidden p-4 box-border"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 bg-black/50 backdrop-blur-[10px] text-white text-3xl cursor-pointer p-2.5 opacity-80 transition-all duration-300 z-[3002] w-10 h-10 flex items-center justify-center rounded-full hover:opacity-100 hover:bg-black/70 hover:scale-110"
                            aria-label="Close video"
                        >
                            ×
                        </button>

                        {/* Header */}
                        <div className="flex-shrink-0 text-center mb-4 w-full">
                            <h2 className="text-3xl font-light mb-1.5 text-white">
                                {title}
                            </h2>
                            <div className="text-sm opacity-60 tracking-[0.5px] text-white">
                                {client}
                            </div>
                        </div>

                        {/* Video Container */}
                        <div className="flex-1 flex items-center justify-center w-full min-h-0 overflow-hidden">
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                controls
                                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                                preload="metadata"
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex-shrink-0 text-center mt-4 w-full">
                            <div className="text-base opacity-80 text-white">
                                {director}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}