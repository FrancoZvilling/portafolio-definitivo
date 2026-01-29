import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Code, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const categories = [
        {
            id: 'professional',
            title: t('work.professional'),
            desc: t('work.professional_desc'),
            icon: Briefcase,
            color: 'from-blue-500 to-cyan-500',
            delay: 0
        },
        {
            id: 'personal',
            title: t('work.personal'),
            desc: t('work.personal_desc'),
            icon: Code,
            color: 'from-purple-500 to-pink-500',
            delay: 0.2
        }
    ];

    return (
        <section id="projects" className="py-20 relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t('work.title')}
                    </h2>
                    <div className="h-1 w-20 bg-space-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, x: cat.id === 'professional' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: cat.delay }}
                            onClick={() => navigate(`/work/${cat.id}`)}
                            className="group relative cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                            <div className="relative p-8 rounded-2xl bg-space-800/50 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <cat.icon size={36} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-400 mb-8 flex-grow">
                                    {cat.desc}
                                </p>

                                <div className="flex items-center gap-2 text-space-accent font-medium group-hover:gap-4 transition-all">
                                    {t('hero.cta')} <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
