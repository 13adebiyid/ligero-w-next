'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Initial page load animation
        const hasVisited = sessionStorage.getItem('hasVisited')
        const isHomePage = pathname === '/'

        if (!hasVisited && isHomePage) {
            sessionStorage.setItem('hasVisited', 'true')

            // Show loading screen for first visit
            setTimeout(() => {
                setIsLoading(false)
                document.body.classList.add('page-loaded')
            }, 1800)

            setTimeout(() => {
                document.body.classList.add('content-loaded')
            }, 2100)
        } else {
            // Quick load for subsequent navigation
            setIsLoading(false)
            document.body.classList.add('page-loaded', 'content-loaded')
        }
    }, [pathname])

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: 'easeIn',
            },
        },
    }

    const loadingVariants = {
        initial: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && pathname === '/' && !sessionStorage.getItem('hasVisited') && (
                    <motion.div
                        key="loading"
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                        variants={loadingVariants}
                        initial="initial"
                        exit="exit"
                    >
                        <motion.div
                            className="text-white font-suissnord text-[5rem] tracking-[4px]"
                            animate={{
                                opacity: [0.9, 1, 0.9],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            LIGERO
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}