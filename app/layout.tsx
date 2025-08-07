import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Navigation from '@/components/layout/Navigation'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Ligero - Creative Agency',
    description: 'Bold visual storytelling and creative direction',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="bg-black text-white antialiased">
        <ThemeProvider>
            <Navigation />
            <main className="min-h-screen">
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
}