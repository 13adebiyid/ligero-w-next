// Site Information
export const SITE_NAME = 'Ligero'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ligero.store'
export const SITE_DESCRIPTION = 'Bold visual storytelling and creative direction'

// Social Media
export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/by.ligero',
}

// Contact Information
export const CONTACT_EMAIL = 'contact@ligero.com'
export const CONTACT_PHONE = '+1 (555) 123-4567'

// Animation Durations (in ms)
export const ANIMATION_DURATION = {
    fast: 200,
    normal: 300,
    slow: 600,
    verySlow: 1000,
}

// Breakpoints
export const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    wide: 1920,
}

// Video Settings
export const VIDEO_SETTINGS = {
    defaultQuality: '1080p',
    preloadTime: 3, // seconds
    loopDuration: 4, // seconds
    posterQuality: 0.8,
}

// Image Settings
export const IMAGE_SETTINGS = {
    quality: 90,
    placeholder: 'blur',
    formats: ['webp', 'avif'],
}

// Carousel Settings
export const CAROUSEL_SETTINGS = {
    cardWidth: {
        mobile: 280,
        tablet: 350,
        desktop: 'dynamic', // percentage based
    },
    gap: {
        mobile: 20,
        tablet: 30,
        desktop: 'dynamic', // percentage based
    },
    containerPadding: {
        mobile: 40,
        tablet: 80,
        desktop: 160,
    },
}

// Theme Colors
export const COLORS = {
    black: {
        primary: 'rgb(10, 10, 10)',
        rich: 'rgb(18, 18, 18)',
    },
    white: {
        pearl: 'rgb(250, 250, 250)',
    },
    accent: {
        gold: 'rgb(212, 175, 55)',
        blue: 'rgb(0, 102, 255)',
    },
}

// Navigation Items
export const NAV_ITEMS = [
    { href: '/shop', label: 'Shop' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/policies', label: 'Policies' },
]

// Service Categories
export const SERVICES = [
    {
        id: 'styling',
        href: '/services/styling',
        title: 'STYLING',
        description: 'Personal styling services that transform your wardrobe',
    },
    {
        id: 'creative-directing',
        href: '/services/creative-directing',
        title: 'CREATIVE DIRECTING',
        description: 'Bold visual storytelling that connects across cultures',
    },
    {
        id: 'photography',
        href: '/services/photography',
        title: 'PHOTOGRAPHY',
        description: 'Capturing moments with artistic precision',
    },
    {
        id: 'set-designing',
        href: '/services/set-designing',
        title: 'SET DESIGNING',
        description: 'Creating immersive environments for your vision',
    },
    {
        id: 'models',
        href: '/services/models',
        title: 'MODELS',
        description: 'Curated roster of professional talent',
    },
    {
        id: 'music',
        href: '/services/music',
        title: 'MUSIC',
        description: 'Producers and songwriters for your projects',
    },
]

// Photography Categories
export const PHOTO_CATEGORIES = [
    { value: 'all', label: 'All Work' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'editorial', label: 'Editorial' },
    { value: 'portrait', label: 'Portrait' },
    { value: 'events', label: 'Events' },
]

// Contact Form Options
export const CONTACT_OPTIONS = {
    services: [
        { value: '', label: 'Select a service' },
        { value: 'styling', label: 'Styling' },
        { value: 'creative-directing', label: 'Creative Directing' },
        { value: 'photography', label: 'Photography' },
        { value: 'set-designing', label: 'Set Designing' },
        { value: 'models', label: 'Models' },
        { value: 'music', label: 'Music' },
        { value: 'multiple', label: 'Multiple Services' },
        { value: 'other', label: 'Other' },
    ],
    budgets: [
        { value: '', label: 'Select budget range' },
        { value: 'under-1k', label: 'Under $1,000' },
        { value: '1k-5k', label: '$1,000 - $5,000' },
        { value: '5k-10k', label: '$5,000 - $10,000' },
        { value: '10k-25k', label: '$10,000 - $25,000' },
        { value: '25k-plus', label: '$25,000+' },
        { value: 'discuss', label: 'Prefer to discuss' },
    ],
    timelines: [
        { value: '', label: 'Select timeline' },
        { value: 'asap', label: 'ASAP' },
        { value: '1-month', label: 'Within 1 month' },
        { value: '2-3-months', label: '2-3 months' },
        { value: '3-6-months', label: '3-6 months' },
        { value: '6-plus-months', label: '6+ months' },
        { value: 'flexible', label: 'Flexible' },
    ],
}

// Error Messages
export const ERROR_MESSAGES = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    general: 'Something went wrong. Please try again.',
}

// Success Messages
export const SUCCESS_MESSAGES = {
    contact: 'Thank you for your message. We\'ll be in touch soon!',
    newsletter: 'Thank you for subscribing to our newsletter!',
}

// Meta Tags
export const DEFAULT_META = {
    title: 'Ligero - Creative Agency',
    description: 'Bold visual storytelling and creative direction',
    image: '/images/og-image.jpg',
    type: 'website',
}

// API Endpoints
export const API_ENDPOINTS = {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    videos: '/api/videos',
}