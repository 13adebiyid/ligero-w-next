'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { useTheme } from '@/components/providers/ThemeProvider'

export default function ContactPage() {
    const { theme } = useTheme()

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20 coming-soon-page">
            <ThemeSwitcher />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                className="text-center max-w-[700px]"
            >
                <h1 className="text-4xl md:text-5xl font-light mb-5 px-8">
                    we're still polishing our dedicated submission form
                </h1>

                <p className="text-xl mb-10 opacity-70">
                    in the meantime shoot our<br />spokesperson a dm
                </p>

                <div className="p-5 instagram-container">
                    <a
                        href="https://www.instagram.com/itsjustk1d/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-transform duration-300 hover:scale-110"
                    >
                        <Image
                            src={theme === 'white' ? '/images/black-instagram-icon.png' : '/images/white-instagram-icon.png'}
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}