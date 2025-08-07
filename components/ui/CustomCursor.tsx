'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.onclick !== null ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer'

            setIsPointer(isClickable)
        }

        const handleMouseLeave = () => setIsHidden(true)
        const handleMouseEnter = () => setIsHidden(false)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        // Hide default cursor on desktop
        if (window.matchMedia('(pointer: fine)').matches) {
            document.body.style.cursor = 'none'
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
            document.body.style.cursor = 'auto'
        }
    }, [])

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
        return null
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isPointer ? 0.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
            />

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isPointer ? 1.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                    mass: 0.8,
                }}
            />
        </>
    )
}