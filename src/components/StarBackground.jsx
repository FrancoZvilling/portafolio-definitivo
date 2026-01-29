import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
    // Generate random stars only once
    const stars = useMemo(() => {
        return [...Array(100)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-space-900">
            {/* Static gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-800 to-space-900 opacity-80" />

            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white/70"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
