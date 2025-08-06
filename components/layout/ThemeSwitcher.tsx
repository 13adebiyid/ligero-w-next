'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="fixed bottom-[30px] left-[30px] flex gap-[15px] z-[1000]">
            <button
                onClick={() => setTheme('black')}
                className={`w-[30px] h-[30px] rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${
                    theme === 'black' ? 'border-white' : 'border-gray-600'
                } bg-black`}
                aria-label="Dark theme"
            />
            <button
                onClick={() => setTheme('white')}
                className={`w-[30px] h-[30px] rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${
                    theme === 'white' ? 'border-black' : 'border-gray-400'
                } bg-white`}
                aria-label="Light theme"
            />
        </div>
    )
}