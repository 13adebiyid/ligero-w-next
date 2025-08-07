'use client'

import Link from 'next/link'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export default function ProducersPage() {
    return (
        <div className="min-h-screen py-32 px-12 relative">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="max-w-[800px] mx-auto text-center">
                    <h1 className="text-5xl mb-10 font-light text-center">PRODUCERS</h1>

                    <Link
                        href="/services/music"
                        className="inline-block text-base mb-10 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                        ← Back to Music
                    </Link>

                    <div className="text-left leading-relaxed">
                        <p className="text-lg mb-8 opacity-90">
                            Our network of talented producers brings your sonic vision to life. From trap to
                            afrobeats, R&B to experimental sounds, we match you with the perfect producer
                            for your project.
                        </p>

                        <div className="mb-10">
                            <h3 className="text-2xl mb-5 font-light text-center">Production Services</h3>
                            <ul className="list-none p-0">
                                <li className="py-2.5 border-b border-white/10 opacity-80">Custom beat production</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Full song production and arrangement</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Mixing and mastering services</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Sound design for commercials</li>
                                <li className="py-2.5 opacity-80">Live session musicians</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl mb-5 font-light text-center">Genres We Cover</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">Hip-Hop/Trap</div>
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">Afrobeats</div>
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">R&B/Soul</div>
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">Pop</div>
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">Electronic</div>
                                <div className="py-3 border border-white/20 rounded-lg opacity-80">Experimental</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/contact?service=music-production"
                            className="inline-block px-10 py-4 text-xl border-2 border-white text-white transition-all duration-300 tracking-wider hover:bg-white hover:text-black"
                        >
                            Work With Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}