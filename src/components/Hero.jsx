import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-space-accent font-semibold tracking-wide uppercase text-sm sm:text-base mb-2">
                        {t('hero.greeting')}
                    </h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            {t('hero.role')}
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('hero.description', "Building digital universes with code and creativity. Let's launch your next big idea.")}
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-space-accent/10 border border-space-accent/50 text-space-accent font-medium flex items-center gap-2 hover:bg-space-accent/20 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        >
                            {t('hero.cta')}
                            <ArrowRight size={18} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Planet/Circle */}
            <motion.div
                className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </section>
    );
};

export default Hero;
