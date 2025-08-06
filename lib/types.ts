// Project types
export interface Project {
    id: string
    type: 'large' | 'dual'
    title: string
    client: string
    designer: string
    designerUrl: string
    previewSrc: string
    fullSrc: string
    reverse?: boolean
    images?: ProjectImage[]
    dualVideos?: Project[]
}

export interface ProjectImage {
    src: string
    alt: string
    size: 'small' | 'medium' | 'large'
}

// Service types
export interface Service {
    id: string
    slug: string
    title: string
    description: string
    features?: string[]
    videoSrc?: string
    imageSrc?: string
}

// Team member types
export interface TeamMember {
    id: string
    slug: string
    name: string
    role: string
    bio: string[]
    image: string
    heroImage: string
    subtitle: string
    socialLinks?: SocialLink[]
    projects?: Project[]
}

export interface SocialLink {
    platform: 'instagram' | 'twitter' | 'linkedin' | 'website'
    url: string
    label: string
}

// Photography types
export interface Photo {
    id: number
    category: 'commercial' | 'fashion' | 'editorial' | 'portrait' | 'events'
    photographer: string
    photographerUrl: string
    client: string
    camera: string
    year: string
    image: string
    title?: string
    description?: string
}

// Music types
export interface Track {
    id: number
    title: string
    artist: string
    src: string
    tags: string[]
    bpm: number
    duration?: string
}

// Contact form types
export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    phone?: string
    service?: string
    budget?: string
    timeline?: string
    message: string
}