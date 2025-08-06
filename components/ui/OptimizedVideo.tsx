// components/ui/OptimizedVideo.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface OptimizedVideoProps {
    src: string;
    poster: string;
    className?: string;
    priority?: boolean;
}

export default function OptimizedVideo({
                                           src,
                                           poster,
                                           className,
                                           priority = false
                                       }: OptimizedVideoProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.play();
        }
    }, [isInView]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className={className}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload={priority ? 'auto' : 'none'}
                onLoadedData={() => setIsLoaded(true)}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}