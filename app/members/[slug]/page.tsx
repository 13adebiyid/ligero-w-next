'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { teamMembers, getTeamMemberBySlug } from '@/lib/data/team'
import VideoGallery from '@/components/sections/VideoGallery'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }))
}



export default function MemberPage({ params }: PageProps) {
    const member = getTeamMemberBySlug(params.slug)

    if (!member) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <ThemeSwitcher />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={member.heroImage}
                        alt={member.name}
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                </div>

                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wider">
                        {member.name.toUpperCase()}
                    </h1>
                    <p className="text-2xl md:text-3xl font-light opacity-90 tracking-wide">
                        {member.subtitle}
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-20 px-12 md:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <Image
                                src={member.image}
                                alt={`${member.name} portrait`}
                                width={500}
                                height={600}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-light mb-6">{member.role}</h2>

                            {member.bio.map((paragraph, index) => (
                                <p key={index} className="text-lg mb-4 opacity-80 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}

                            {member.socialLinks && member.socialLinks.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl mb-4 opacity-70">Connect</h3>
                                    <div className="flex gap-6">
                                        {member.socialLinks.map((link) => (
                                            <a
                                                key={link.platform}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base opacity-60 hover:opacity-100 transition-opacity duration-300"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            {member.projects && member.projects.length > 0 && (
                <section className="py-20 px-[5vw] bg-black/5">
                    <div className="max-w-[95vw] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
                            FEATURED PROJECTS
                        </h2>

                        <VideoGallery projects={member.projects} />
                    </div>
                </section>
            )}

            {/* Back Link */}
            <div className="text-center py-10">
                <Link
                    href="/services"
                    className="inline-block text-lg opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                    ← Back to Services
                </Link>
            </div>
        </div>
    )
}