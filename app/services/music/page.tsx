import { Metadata } from 'next'
import Link from 'next/link'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export const metadata: Metadata = {
    title: 'Songwriters - Ligero',
    description: 'Professional songwriting services to bring your musical stories to life',
}

export default function SongwritersPage() {
    return (
        <div className="min-h-screen py-32 px-12 relative">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="max-w-[800px] mx-auto text-center">
                    <h1 className="text-5xl mb-10 font-light text-center">SONGWRITERS</h1>

                    <Link
                        href="/services/music"
                        className="inline-block text-base mb-10 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                        ← Back to Music
                    </Link>

                    <div className="text-left leading-relaxed">
                        <p className="text-lg mb-8 opacity-90">
                            Our songwriters craft compelling narratives and memorable melodies that resonate
                            with audiences. Whether you need a complete song, a hook, or help finishing your
                            ideas, we connect you with writers who understand your vision.
                        </p>

                        <div className="mb-10">
                            <h3 className="text-2xl mb-5 font-light text-center">Songwriting Services</h3>
                            <ul className="list-none p-0">
                                <li className="py-2.5 border-b border-white/10 opacity-80">Full song composition (lyrics & melody)</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Co-writing sessions</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Topline writing</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Hook and chorus development</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Lyric translation and adaptation</li>
                                <li className="py-2.5 opacity-80">Commercial jingles and brand songs</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl mb-5 font-light text-center">Our Process</h3>
                            <div className="space-y-4">
                                <div className="p-4 border border-white/20 rounded-lg">
                                    <h4 className="font-medium mb-2 opacity-90">1. Discovery</h4>
                                    <p className="text-sm opacity-70">We discuss your vision, influences, and goals for the song</p>
                                </div>
                                <div className="p-4 border border-white/20 rounded-lg">
                                    <h4 className="font-medium mb-2 opacity-90">2. Matching</h4>
                                    <p className="text-sm opacity-70">We connect you with writers who align with your style</p>
                                </div>
                                <div className="p-4 border border-white/20 rounded-lg">
                                    <h4 className="font-medium mb-2 opacity-90">3. Creation</h4>
                                    <p className="text-sm opacity-70">Collaborative writing sessions bring your ideas to life</p>
                                </div>
                                <div className="p-4 border border-white/20 rounded-lg">
                                    <h4 className="font-medium mb-2 opacity-90">4. Refinement</h4>
                                    <p className="text-sm opacity-70">We polish the song until it perfectly captures your vision</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/contact?service=songwriting"
                            className="inline-block px-10 py-4 text-xl border-2 border-white text-white transition-all duration-300 tracking-wider hover:bg-white hover:text-black"
                        >
                            Start Writing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}