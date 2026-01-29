import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Hash, Server, X, Maximize2 } from 'lucide-react';
import { professionalWork, personalProjects } from '../data/projects';

const WorkPage = () => {
    const { category } = useParams();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);

    const isProfessional = category === 'professional';
    const data = isProfessional ? professionalWork : personalProjects;
    const title = isProfessional ? t('work.professional') : t('work.personal');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Use body scroll lock when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const getTitle = (project) => {
        if (typeof project.title === 'object') {
            return project.title[i18n.language] || project.title.en;
        }
        return project.title;
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Saturn Graphic */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 2 }}
                className="fixed -right-20 top-20 pointer-events-none z-0 hidden lg:block"
            >
                <div className="relative w-96 h-96">
                    {/* Planet Body */}
                    <div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-to-br from-orange-300 via-yellow-700 to-stone-900 shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8)]" />
                    {/* Rings */}
                    <div className="absolute inset-0 m-auto w-96 h-96 rounded-full border-[20px] border-stone-600/30 transform rotate-x-75 rotate-y-12 blur-[1px]"
                        style={{ transform: 'rotateX(75deg) rotateY(-10deg) scale(1.5)' }} />
                    <div className="absolute inset-0 m-auto w-80 h-80 rounded-full border-[10px] border-stone-500/40 transform rotate-x-75 rotate-y-12"
                        style={{ transform: 'rotateX(75deg) rotateY(-10deg) scale(1.4)' }} />
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group cursor-pointer"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {t('navbar.home')}
                </button>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-12"
                >
                    {title}
                </motion.h1>

                <div className={isProfessional ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "grid grid-cols-1 gap-12"}>
                    {data.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-space-800/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-space-accent/30 transition-all duration-500 group flex flex-col"
                        >
                            <div className={`overflow-hidden relative shrink-0 ${isProfessional ? "h-48" : "h-64 lg:h-96"} ${project.theme === 'light' ? 'bg-white' : ''
                                }`}>
                                {/* Overlay: Dark for dark cards in specific conditions or just standard hover */}
                                <div className={`absolute inset-0 transition-colors z-10 ${project.theme === 'light' ? 'bg-transparent' : 'bg-space-900/10 group-hover:bg-transparent'
                                    }`} />
                                <img
                                    src={project.image}
                                    alt={getTitle(project)}
                                    className={`w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ${project.theme === 'light' ? 'p-4' : 'object-cover'
                                        }`}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                {isProfessional && (
                                    <div className="flex items-center gap-2 text-xs font-mono text-space-accent mb-3 tracking-wider">
                                        <span className="flex items-center gap-1 font-semibold truncate"><Server size={12} /> {project.client}</span>
                                    </div>
                                )}

                                <h2 className={isProfessional ? "text-lg font-bold text-white mb-3 leading-tight" : "text-3xl font-bold text-white mb-4"}>
                                    {getTitle(project)}
                                </h2>

                                <p className="text-gray-300 leading-relaxed mb-4 text-sm line-clamp-3">
                                    {project.description[i18n.language] || project.description.en}
                                </p>

                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                                    >
                                        <Maximize2 size={14} /> {t('work.read_more')}
                                    </button>

                                    {/* For Personal Projects, we might still show the link directly or keep it simple */}
                                    {!isProfessional && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-space-accent hover:text-space-accent/80 transition-colors">
                                            {t('work.view_project')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-space-900/90 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={selectedProject.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-space-800 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header Image */}
                            <div className="relative h-64 sm:h-80 shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={getTitle(selectedProject)}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-800 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    {isProfessional && selectedProject.client && (
                                        <div className="flex items-center gap-4 text-sm font-mono text-space-accent mb-2">
                                            <span className="flex items-center gap-1"><Server size={14} /> {selectedProject.client}</span>
                                            {selectedProject.ref && <span className="opacity-60 hidden sm:inline">| {selectedProject.ref}</span>}
                                        </div>
                                    )}
                                    <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm">
                                        {getTitle(selectedProject)}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Hash size={18} className="text-space-accent" /> Description
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {selectedProject.description[i18n.language] || selectedProject.description.en}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Server size={18} className="text-space-accent" /> {t('work.tech_stack')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-blue-200 font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-space-accent text-space-900 font-bold px-8 py-4 rounded-xl hover:bg-space-accent/90 transition-all hover:scale-105 shadow-lg shadow-space-accent/20"
                                    >
                                        {t('work.view_project')} <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorkPage;
