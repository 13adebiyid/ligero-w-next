'use client'

import Link from 'next/link'
import { useTheme } from '@/components/providers/ThemeProvider'
import { SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants'

export default function Footer() {
    const { theme } = useTheme()
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`py-20 px-12 ${theme === 'white' ? 'bg-gray-100' : 'bg-black'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-5">
                            <h3 className="font-suissnord text-4xl font-bold">LIGERO</h3>
                        </Link>
                        <p className="text-base opacity-60 leading-relaxed max-w-md">
                            Bold visual storytelling and creative direction that connects across cultures.
                            We craft experiences that resonate.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-5 opacity-80">Navigation</h4>
                        <ul className="space-y-3">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-5 opacity-80">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={SOCIAL_LINKS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t ${theme === 'white' ? 'border-black/10' : 'border-white/10'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm opacity-60">
                            © {currentYear} Ligero. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="/policies"
                                className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/policies"
                                className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}