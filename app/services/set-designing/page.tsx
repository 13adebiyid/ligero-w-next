'use client'

import VideoGallery from '@/components/sections/VideoGallery'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { setDesignProjects } from '@/lib/data/projects'

export default function SetDesigningPage() {
    return (
        <div className="min-h-screen pt-24">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="px-[5vw] pb-20 max-w-[95vw] mx-auto">
                    <h1 className="text-5xl md:text-6xl font-light text-center mb-16">
                        SET DESIGN
                    </h1>

                    <VideoGallery projects={setDesignProjects} />

                </div>
            </div>
        </div>
    )
}