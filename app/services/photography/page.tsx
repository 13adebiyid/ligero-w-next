'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import PhotoModal from '@/components/ui/PhotoModal'
import { photographyData } from '@/lib/data/photography'
import { useTheme } from '@/components/providers/ThemeProvider'
import type { Photo } from '@/lib/types'

export default function PhotographyPage() {
    const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photographyData)
    const [currentFilter, setCurrentFilter] = useState('all')
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
    const [currentModalIndex, setCurrentModalIndex] = useState(0)
    const { theme } = useTheme()

    useEffect(() => {
        document.body.classList.add('photography-page')
        return () => {
            document.body.classList.remove('photography-page')
        }
    }, [])

    const filterPhotos = (category: string) => {
        setCurrentFilter(category)

        if (category === 'all') {
            setFilteredPhotos(photographyData)
        } else {
            setFilteredPhotos(photographyData.filter(photo => photo.category === category))
        }
    }

    const openModal = (photo: Photo, index: number) => {
        setSelectedPhoto(photo)
        setCurrentModalIndex(index)
    }

    const closeModal = () => {
        setSelectedPhoto(null)
    }

    const navigateModal = (direction: number) => {
        const newIndex = currentModalIndex + direction

        if (newIndex < 0) {
            setCurrentModalIndex(filteredPhotos.length - 1)
        } else if (newIndex >= filteredPhotos.length) {
            setCurrentModalIndex(0)
        } else {
            setCurrentModalIndex(newIndex)
        }

        setSelectedPhoto(filteredPhotos[currentModalIndex])
    }

    return (
        <div className="min-h-screen py-32 px-12">
            <ThemeSwitcher />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-6xl font-light text-center mb-16"
            >
                PHOTOGRAPHY
            </motion.h1>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center flex-wrap gap-5 mb-16"
            >
                {['all', 'fashion', 'commercial', 'editorial', 'portrait', 'events'].map((category) => (
                    <button
                        key={category}
                        onClick={() => filterPhotos(category)}
                        className={`px-6 py-3 text-sm tracking-wider uppercase font-madani transition-all duration-300 ${
                            currentFilter === category
                                ? theme === 'white'
                                    ? 'bg-black text-white border border-black'
                                    : 'bg-white text-black border border-white'
                                : theme === 'white'
                                    ? 'border border-black/30 text-black hover:bg-black hover:text-white'
                                    : 'border border-white/30 text-white hover:bg-white hover:text-black'
                        }`}
                    >
                        {category === 'all' ? 'All Work' : category}
                    </button>
                ))}
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-[1400px] mx-auto"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className={`break-inside-avoid mb-8 relative cursor-none overflow-hidden rounded-none group ${
                                theme === 'white' ? 'bg-gray-100' : 'bg-gray-900'
                            }`}
                            onClick={() => openModal(photo, index)}
                        >
                            <img
                                src={photo.image}
                                alt={photo.title || `Photo by ${photo.photographer}`}
                                className="w-full h-auto block filter brightness-90 contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:contrast-120"
                                loading="lazy"
                            />

                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-600 flex flex-col justify-between p-6 ${
                                theme === 'white'
                                    ? 'bg-gradient-to-t from-white/90 via-white/10 to-transparent'
                                    : 'bg-gradient-to-t from-black/80 via-black/10 to-transparent'
                            }`}>
                                <div className={`self-start px-3 py-1.5 rounded-[15px] text-xs font-medium tracking-wider uppercase backdrop-blur-[10px] transform -translate-y-4 opacity-0 transition-all duration-400 delay-100 group-hover:translate-y-0 group-hover:opacity-100 ${
                                    theme === 'white' ? 'bg-black/20' : 'bg-white/10'
                                }`}>
                                    {photo.category}
                                </div>

                                <div className="transform translate-y-6 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="font-madani text-xs opacity-80 flex flex-col gap-1">
                                        <a href={photo.photographerUrl} className="font-medium hover:opacity-70 transition-opacity">
                                            {photo.photographer}
                                        </a>
                                        <span>{photo.client} • {photo.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Photo Modal */}
            {selectedPhoto && (
                <PhotoModal
                    isOpen={!!selectedPhoto}
                    onClose={closeModal}
                    photo={selectedPhoto}
                    onNavigate={navigateModal}
                />
            )}
        </div>
    )
}