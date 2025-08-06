import { Metadata } from 'next'
import Link from 'next/link'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export const metadata: Metadata = {
    title: 'Models - Ligero',
    description: 'A curated roster of professional models for photoshoots, campaigns, events, and brand activations',
}

export default function ModelsPage() {
    return (
        <div className="min-h-screen py-32 px-12 relative">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="max-w-[800px] mx-auto text-center">
                    <h1 className="text-5xl mb-10 font-light text-center">MODELS</h1>

                    <Link
                        href="/services"
                        className="inline-block text-base mb-10 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                        ← Back to Services
                    </Link>

                    <div className="text-left leading-relaxed">
                        <p className="text-lg mb-8 opacity-90">
                            A curated roster of professional models for photoshoots, campaigns, events,
                            and brand activations.
                        </p>

                        <div className="mb-10">
                            <h3 className="text-2xl mb-5 font-light text-center">What We Offer:</h3>
                            <ul className="list-none p-0">
                                <li className="py-2.5 border-b border-white/10 opacity-80">Model hire for photoshoots and campaigns</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Runway and event model bookings</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Diverse talent across styles and looks</li>
                                <li className="py-2.5 opacity-80">On-site coordination and casting support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/contact?service=models"
                            className="inline-block px-10 py-4 text-xl border-2 border-white text-white transition-all duration-300 tracking-wider hover:bg-white hover:text-black"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}