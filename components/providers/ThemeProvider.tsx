'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'black' | 'white'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

interface ThemeProviderProps {
    children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('black')
    const [mounted, setMounted] = useState(false)

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true)
        try {
            const savedTheme = localStorage.getItem('theme') as Theme
            if (savedTheme === 'white' || savedTheme === 'black') {
                setTheme(savedTheme)
            }
        } catch (error) {
            console.error('Error loading theme from localStorage:', error)
        }
    }, [])

    // Apply theme to body
    useEffect(() => {
        if (!mounted) return

        if (theme === 'white') {
            document.body.classList.add('white-theme')
        } else {
            document.body.classList.remove('white-theme')
        }
    }, [theme, mounted])

    const handleSetTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        try {
            localStorage.setItem('theme', newTheme)
        } catch (error) {
            console.error('Error saving theme to localStorage:', error)
        }
    }

    const toggleTheme = () => {
        handleSetTheme(theme === 'black' ? 'white' : 'black')
    }

    // Prevent flash of incorrect theme
    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}