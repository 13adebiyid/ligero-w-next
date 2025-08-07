import type { TeamMember } from '@/lib/types'

export const teamMembers: TeamMember[] = [
    {
        id: 'ashleigh-cooper',
        slug: 'ashleigh-cooper-creative-director',
        name: 'Ashleigh Cooper',
        role: 'Creative Director',
        subtitle: 'Visionary in Visual Storytelling',
        bio: [
            'Ashleigh Cooper is a multi-disciplinary creative director with over a decade of experience in fashion, music, and commercial storytelling. Her work seamlessly blends cultural narratives with contemporary aesthetics.',
            'Known for her bold visual language and innovative approach to creative direction, Ashleigh has collaborated with major brands including Sony Music, 5K Records, and various independent artists.',
            'Her philosophy centers on authentic storytelling that resonates across cultures, creating visual experiences that leave lasting impressions.'
        ],
        image: '/images/ash-portrait.webp',
        heroImage: '/images/ash-hero.png',
        socialLinks: [
            { platform: 'instagram', url: 'https://instagram.com/ashleighcooper', label: '@ashleighcooper' },
        ],
        projects: [
            {
                id: 'gabzy-perfect-combi',
                type: 'large',
                title: 'King Promise, GABZY / "PERFECT COMBI"',
                client: 'Sony Music / 5K Records',
                designer: 'Ashleigh Cooper',
                designerUrl: '/members/ashleigh-cooper-creative-director',
                previewSrc: '/videos/gabzy-preview.mp4',
                fullSrc: '/videos/gabzy.mp4',
            },
            {
                id: 'grime-wear-crown',
                type: 'large',
                title: 'Diaspora / "WEAR YOUR CROWN"',
                client: 'Independent Commercial',
                designer: 'Ashleigh Cooper',
                designerUrl: '/members/ashleigh-cooper-creative-director',
                previewSrc: '/videos/grime-preview.mp4',
                fullSrc: '/videos/grime.mp4',
            }
        ]
    },
    {
        id: 'ifeoluwa-segun-oludimu',
        slug: 'ifeoluwa-segun-oludimu',
        name: 'Ifeoluwa Segun-Oludimu',
        role: 'Set Designer',
        subtitle: 'Architect of Immersive Spaces',
        bio: [
            'Ifeoluwa Segun-Oludimu is an innovative set designer who transforms spaces into storytelling environments. With a background in architecture and fine arts, she brings a unique perspective to spatial design.',
            'Her work spans film, fashion shows, commercial productions, and art installations. She has designed sets for London Fashion Week, collaborated with major brands like Johnnie Walker, and created immersive experiences for various artists.',
            'Ifeoluwa believes that every space has a story to tell, and her designs create atmospheres that enhance narrative and evoke emotion.'
        ],
        image: '/images/ife-portrait.webp',
        heroImage: '/images/ife-hero.png',
        socialLinks: [
            { platform: 'instagram', url: 'https://instagram.com/ifeoluwa.design', label: '@ifeoluwa.design' },
        ],
        projects: [
            {
                id: 'gift-for-gift',
                type: 'large',
                title: 'A Gift for a Gift - Short Film',
                client: 'Anisah Myers-Grey',
                designer: 'Ifeoluwa Segun-Oludimu',
                designerUrl: '/members/ifeoluwa-segun-oludimu',
                previewSrc: '/videos/gift-preview.mp4',
                fullSrc: '/videos/gift.mp4',
            },
            {
                id: 'fashion-campaign',
                type: 'large',
                title: 'Tolu Coker SS25 Collection - \'Olapeju\'',
                client: 'London Fashion Week',
                designer: 'Ifeoluwa Segun-Oludimu',
                designerUrl: '/members/ifeoluwa-segun-oludimu',
                previewSrc: '/videos/fashion-preview.mp4',
                fullSrc: '/videos/fashion.mp4',
            }
        ]
    }
]

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
    return teamMembers.find(member => member.slug === slug)
}