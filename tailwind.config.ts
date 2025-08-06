import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-black': 'rgb(var(--primary-black) / <alpha-value>)',
                'rich-black': 'rgb(var(--rich-black) / <alpha-value>)',
                'pearl-white': 'rgb(var(--pearl-white) / <alpha-value>)',
                'accent-gold': 'rgb(var(--accent-gold) / <alpha-value>)',
                'electric-blue': 'rgb(var(--electric-blue) / <alpha-value>)',
            },
            fontFamily: {
                madani: ['var(--font-madani)', 'sans-serif'],
                suissnord: ['var(--font-suissnord)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '12rem',
                '12xl': '15rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
                'designer-pulse': 'designer-pulse 3s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
            },
            backdropBlur: {
                xs: '2px',
            },
            screens: {
                'xs': '475px',
                '3xl': '1920px',
                '4xl': '2560px',
            },
        },
    },
    plugins: [],
}

export default config