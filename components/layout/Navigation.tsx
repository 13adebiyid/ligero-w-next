'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'

interface NavItem {
    href: string
    label: string
}

const navItems: NavItem[] = [
    { href: '/shop', label: 'Shop' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/policies', label: 'Policies' },
]

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const { theme } = useTheme()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Navigation Bar */}
            <motion.nav
                className={`fixed top-0 w-full z-[1000] px-12 py-5 flex justify-between items-center transition-all duration-300 ${
                    isScrolled
                        ? 'bg-black/30 backdrop-blur-[10px]'
                        : 'bg-black/30 backdrop-blur-[10px]'
                } ${theme === 'white' ? 'bg-white/30' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Hamburger Menu - Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative w-[30px] h-[24px] z-[1001] transition-all duration-500"
                    aria-label="Toggle menu"
                >
          <span
              className={`absolute left-0 block w-full h-[3px] rounded-[3px] transition-all duration-300 ${
                  theme === 'white' ? 'bg-black' : 'bg-white'
              } ${isMenuOpen ? 'top-[10.5px] rotate-45' : 'top-0'}`}
          />
                    <span
                        className={`absolute left-0 top-[10.5px] block h-[3px] rounded-[3px] transition-all duration-300 ${
                            theme === 'white' ? 'bg-black' : 'bg-white'
                        } ${isMenuOpen ? 'w-0 opacity-0 left-1/2' : 'w-full opacity-100'}`}
                    />
                    <span
                        className={`absolute left-0 block w-full h-[3px] rounded-[3px] transition-all duration-300 ${
                            theme === 'white' ? 'bg-black' : 'bg-white'
                        } ${isMenuOpen ? 'top-[10.5px] -rotate-45' : 'top-[21px]'}`}
                    />
                </button>

                {/* Logo */}
                <Link
                    href="/"
                    className={`font-suissnord text-[2rem] font-bold transition-opacity duration-300 hover:opacity-70 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 ${
                        theme === 'white' ? 'text-black' : 'text-white'
                    }`}
                >
                    LIGERO
                </Link>

                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex items-center gap-0">
                    {navItems.map((item, index) => (
                        <div key={item.href} className="flex items-center">
                            <Link
                                href={item.href}
                                className={`px-5 text-base transition-opacity duration-300 hover:opacity-70 ${
                                    theme === 'white' ? 'text-black' : 'text-white'
                                }`}
                            >
                                {item.label}
                            </Link>
                            {index < navItems.length - 1 && (
                                <span className={`text-base ${theme === 'white' ? 'text-black' : 'text-white'}`}>
                  |
                </span>
                            )}
                        </div>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={`fixed inset-0 z-[999] flex flex-col justify-center items-center gap-10 ${
                            theme === 'white' ? 'bg-white/95' : 'bg-black/95'
                        } backdrop-blur-[10px]`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href="/"
                            className={`font-suissnord text-[2rem] text-center transition-opacity duration-300 hover:opacity-70 ${
                                theme === 'white' ? 'text-black' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            HOME
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-suissnord text-[2rem] text-center transition-opacity duration-300 hover:opacity-70 uppercase ${
                                    theme === 'white' ? 'text-black' : 'text-white'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}