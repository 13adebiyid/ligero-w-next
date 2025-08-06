import { Metadata } from 'next'
import ServiceCarousel from '@/components/sections/ServiceCarousel'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export const metadata: Metadata = {
    title: 'Services - Ligero',
    description: 'Our creative services: Styling, Creative Directing, Photography, Set Designing, Models, and Music',
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20 px-12 md:px-20 relative flex flex-col justify-center items-center">
            <ThemeSwitcher />

            <div className="page-fade-in w-full max-w-7xl">
                <h1 className="text-center text-5xl md:text-6xl mb-16 font-light">
                    OUR CAPABILITIES
                </h1>

                <ServiceCarousel />
            </div>
        </div>
    )
}