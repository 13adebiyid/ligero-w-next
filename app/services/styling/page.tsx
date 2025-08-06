import { Metadata } from 'next'
import Link from 'next/link'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export const metadata: Metadata = {
    title: 'Styling - Ligero',
    description: 'Personal styling services that transform your wardrobe and elevate your personal brand',
}

export default function StylingPage() {
    return (
        <div className="min-h-screen py-32 px-12 relative">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="max-w-[800px] mx-auto text-center">
                    <h1 className="text-5xl mb-10 font-light text-center">STYLING</h1>

                    <Link
                        href="/services"
                        className="inline-block text-base mb-10 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                        ← Back to Services
                    </Link>

                    <div className="text-left leading-relaxed">
                        <h3 className="text-2xl mb-5 font-light text-center">What We Offer:</h3>

                        <div className="mb-10">
                            <p className="text-lg mb-8 opacity-90">
                                Personal styling services that transform your wardrobe and elevate your personal brand
                            </p>
                            <ul className="list-none p-0">
                                <li className="py-2.5 border-b border-white/10 opacity-80">Personal styling consultations</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Wardrobe analysis and organization</li>
                                <li className="py-2.5 border-b border-white/10 opacity-80">Personal shopping services</li>
                                <li className="py-2.5 opacity-80">Special event styling</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/contact?service=styling"
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