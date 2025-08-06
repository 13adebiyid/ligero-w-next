'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    once?: boolean
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    distance?: number
}

export default function FadeIn({
                                   children,
                                   className = '',
                                   delay = 0,
                                   duration = 0.6,
                                   once = true,
                                   direction = 'up',
                                   distance = 30,
                               }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, amount: 0.3 })

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: distance }
            case 'down':
                return { y: -distance }
            case 'left':
                return { x: distance }
            case 'right':
                return { x: -distance }
            case 'none':
                return {}
            default:
                return { y: distance }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getInitialPosition() }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}