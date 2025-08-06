'use client'

import { useRef, useState, ReactNode, MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
    onClick?: () => void
}

export default function MagneticButton({
                                           children,
                                           className = '',
                                           strength = 0.25,
                                           onClick
                                       }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return

        const rect = buttonRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distanceX = (e.clientX - centerX) * strength
        const distanceY = (e.clientY - centerY) * strength

        setPosition({ x: distanceX, y: distanceY })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.button
            ref={buttonRef}
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.button>
    )
}