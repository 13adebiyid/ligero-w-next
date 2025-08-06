import { Metadata } from 'next'
import VideoGallery from '@/components/sections/VideoGallery'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { creativeDirectingProjects } from '@/lib/data/projects'

export const metadata: Metadata = {
    title: 'Creative Directing - Ligero',
    description: 'Bold visual storytelling that connects across cultures',
}

export default function CreativeDirectingPage() {
    return (
        <div className="min-h-screen pt-24">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="px-[5vw] pb-20 max-w-[95vw] mx-auto">
                    <h1 className="text-5xl md:text-6xl font-light text-center mb-16">
                        CREATIVE DIRECTING
                    </h1>

                    <VideoGallery projects={creativeDirectingProjects} />
                </div>
            </div>
        </div>
    )
}