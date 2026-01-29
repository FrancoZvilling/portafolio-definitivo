import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('navbar.about')}
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                {t('about.p1', "I am a passionate developer driven by the intersection of design and technology. Just as the universe expands, so does my curiosity for new frameworks and deeper backend logic.")}
                            </p>
                            <p>
                                {t('about.p2', "With a background in full-stack development, I specialize in building scalable web applications that feel effortless to use. My code is my craft, and I aim for star-quality performance.")}
                            </p>
                            <p>
                                {t('about.p3', "When I'm not coding, you can find me gazing at the stars or researching the next big leap in web evolution.")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Element / Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-space-700 to-space-900 border border-white/10 relative group">
                            {/* Abstract Representation of "Self" in Space */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-mono text-space-accent">{'<Developer />'}</p>
                                <p className="text-sm text-gray-400">System.ready = true</p>
                            </div>
                        </div>

                        {/* Decorative orbit elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 border border-space-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -bottom-5 -left-5 w-32 h-32 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
