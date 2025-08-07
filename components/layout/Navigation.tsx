'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: '/shop', label: 'Shop' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
        { href: '/policies', label: 'Policies' },
    ]

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 mix-blend-difference">
                <div className="flex items-center justify-between">
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-8 h-6 flex flex-col justify-between md:hidden"
                        aria-label="Menu"
                    >
                        <span className="w-full h-0.5 bg-white transition-all" />
                        <span className="w-full h-0.5 bg-white transition-all" />
                        <span className="w-full h-0.5 bg-white transition-all" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-suissnord tracking-wider text-white">
                        LIGERO
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <div key={item.href} className="flex items-center">
                                <Link
                                    href={item.href}
                                    className={`text-sm tracking-wider transition-opacity hover:opacity-60 ${
                                        pathname === item.href ? 'opacity-100' : 'opacity-80'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                                {index < navItems.length - 1 && (
                                    <span className="mx-4 opacity-40">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 left-8 text-white text-3xl"
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                    <div className="flex flex-col items-center gap-8">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl tracking-wider"
                        >
                            HOME
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl tracking-wider"
                            >
                                {item.label.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}