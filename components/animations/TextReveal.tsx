'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    once?: boolean
}

export default function TextReveal({
                                       children,
                                       className = '',
                                       delay = 0,
                                       duration = 0.8,
                                       once = true,
                                   }: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, amount: 0.5 })

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : { y: '100%' }}
                transition={{
                    duration,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}