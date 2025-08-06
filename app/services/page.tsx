import Link from 'next/link'
import HomeVideo from '@/components/sections/HomeVideo'

export default function HomePage() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video Component (Client Component) */}
            <HomeVideo />

            {/* Content */}
            <div className="relative z-10 text-center">
                <Link
                    href="/shop"
                    className="inline-block bg-transparent text-white px-12 py-5 text-2xl tracking-[2px] text-center transition-all duration-300 hover:bg-black/50 animate-subtle-pulse"
                >
                    ACCESS
                </Link>
            </div>
        </div>
    )
}