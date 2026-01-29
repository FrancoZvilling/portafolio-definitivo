import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (location.pathname !== '/') navigate('/');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            // Add a small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: t('navbar.home'), href: '#' },
        { name: t('navbar.about'), href: '#about' },
        { name: t('navbar.projects'), href: '#projects' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-space-900/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="/"
                        onClick={(e) => handleNavClick(e, '#')}
                        className="flex-shrink-0 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-space-accent to-purple-400 cursor-pointer"
                    >
                        Franco Zvilling
                    </a>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="text-gray-300 hover:text-white flex items-center gap-1 cursor-pointer"
                                aria-label="Toggle Language"
                            >
                                <Globe size={18} />
                                <span className="uppercase text-xs font-bold">{i18n.language}</span>
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-space-900 border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 w-full text-left"
                            >
                                <Globe size={18} />
                                <span className="uppercase">{i18n.language === 'en' ? 'Español' : 'English'}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
