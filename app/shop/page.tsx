'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { useTheme } from '@/components/providers/ThemeProvider'

export default function ShopPage() {
    const [showNotifyForm, setShowNotifyForm] = useState(false)
    const [email, setEmail] = useState('')
    const { theme } = useTheme()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            alert('Thank you! We\'ll notify you when our products launch.')
            setShowNotifyForm(false)
            setEmail('')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <ThemeSwitcher />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                className="max-w-[700px] text-center"
            >
                <h1 className="font-madani text-7xl font-light mb-5 tracking-[3px] opacity-90">
                    COMING SOON
                </h1>

                <div className="text-xl mb-10 opacity-70 tracking-wider">
                    Our products are currently in development
                </div>

                <p className="text-lg leading-relaxed mb-6 opacity-80 text-left">
                    We're crafting something extraordinary. Our curated collection of premium pieces
                    will embody the same attention to detail and aesthetic excellence you'll find in our services.
                </p>

                <p className="text-lg leading-relaxed mb-12 opacity-80 text-left">
                    In the meantime, explore our comprehensive service offerings to see how we can
                    bring your creative vision to life.
                </p>

                <div className="flex gap-5 justify-center flex-wrap">
                    <Link
                        href="/services"
                        className={`px-10 py-4 text-lg border-2 transition-all duration-300 tracking-wider ${
                            theme === 'white'
                                ? 'border-black text-black hover:bg-black hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-black'
                        }`}
                    >
                        EXPLORE OUR SERVICES
                    </Link>

                    <button
                        onClick={() => setShowNotifyForm(true)}
                        className={`px-10 py-4 text-lg border transition-all duration-300 tracking-wider ${
                            theme === 'white'
                                ? 'border-black text-black hover:opacity-70'
                                : 'border-white text-white hover:opacity-70'
                        }`}
                    >
                        GET NOTIFIED
                    </button>
                </div>
            </motion.div>

            {/* Notification Form Modal */}
            {showNotifyForm && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-[10px] z-[2000] flex items-center justify-center"
                    onClick={() => setShowNotifyForm(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className={`${
                            theme === 'white' ? 'bg-white/80' : 'bg-black/80'
                        } border border-white/20 rounded-[10px] p-10 max-w-[400px] w-[90%] text-center backdrop-blur-[20px]`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-3xl mb-2.5 font-light">Stay Updated</h3>
                        <p className="mb-8 opacity-80">Be the first to know when our products launch</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className={`w-full p-4 mb-5 bg-transparent border ${
                                    theme === 'white' ? 'border-black/30 text-black' : 'border-white/30 text-white'
                                } rounded-[5px] text-base focus:outline-none focus:border-white`}
                            />

                            <div className="flex gap-4 justify-center">
                                <button
                                    type="submit"
                                    className={`px-6 py-3 border ${
                                        theme === 'white'
                                            ? 'border-black text-black hover:bg-black hover:text-white'
                                            : 'border-white text-white hover:bg-white hover:text-black'
                                    } text-sm tracking-wider transition-all duration-300`}
                                >
                                    NOTIFY ME
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowNotifyForm(false)}
                                    className={`px-6 py-3 border ${
                                        theme === 'white'
                                            ? 'border-black text-black hover:bg-black hover:text-white'
                                            : 'border-white text-white hover:bg-white hover:text-black'
                                    } text-sm tracking-wider transition-all duration-300`}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}