import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import SmoothScroll from '@/components/ui/SmoothScroll'
// import PageTransition from '@/components/animations/PageTransition'
import CustomCursor from '@/components/ui/CustomCursor'
import ThemeProvider from '@/components/providers/ThemeProvider'

// Load custom fonts
const suissnord = localFont({
    src: '../public/fonts/suissnord.regular.woff',
    variable: '--font-suissnord',
    display: 'swap',
    fallback: ['system-ui', 'arial'],
})

const madani = localFont({
    src: '../public/fonts/MadaniDEMO-Thin.woff',
    variable: '--font-madani',
    display: 'swap',
    fallback: ['system-ui', 'arial'],
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Ligero - Creative Agency',
    description: 'Bold visual storytelling and creative direction',
    keywords: 'creative agency, creative directing, photography, styling, set design',
    authors: [{ name: 'Ligero' }],
    openGraph: {
        title: 'Ligero - Creative Agency',
        description: 'Bold visual storytelling and creative direction',
        url: 'https://ligero.com',
        siteName: 'Ligero',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ligero - Creative Agency',
        description: 'Bold visual storytelling and creative direction',
        images: ['/images/og-image.jpg'],
    },
    icons: {
        icon: [
            { url: '/images/ligero-browser-icon.png', sizes: '64x64', type: 'image/png' },
        ],
        shortcut: '/images/ligero-browser-icon.png',
        apple: '/images/ligero-browser-icon.png',
    },
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
        <html lang="en" className={`${suissnord.variable} ${madani.variable} ${inter.variable}`}>
        <body className="bg-black text-white font-madani antialiased">
        <ThemeProvider>
            <SmoothScroll>
                <CustomCursor />
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
            </SmoothScroll>
        </ThemeProvider>
        </body>
        </html>
    )
}