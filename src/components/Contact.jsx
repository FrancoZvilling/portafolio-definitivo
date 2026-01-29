import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('navbar.contact')}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('contact.subtitle', "Ready to launch a project together? Signal me.")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <a
                        href="mailto:francozvilling-programador@hotmail.com"
                        className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-space-800/50 border border-white/5 hover:border-space-accent/50 transition-all duration-300 hover:bg-space-800/80"
                    >
                        <div className="w-12 h-12 bg-space-accent/10 rounded-full flex items-center justify-center text-space-accent mb-4 group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <p className="text-gray-400 text-sm break-all">francozvilling-programador@hotmail.com</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/francozvilling/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-space-800/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:bg-space-800/80"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                        <p className="text-gray-400 text-sm">Franco Zvilling</p>
                    </a>

                    <a
                        href="https://wa.me/5493541315119"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-space-800/50 border border-white/5 hover:border-green-500/50 transition-all duration-300 hover:bg-space-800/80"
                    >
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                        <p className="text-gray-400 text-sm">+54 9 3541 315119</p>
                    </a>
                </div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto space-y-4 text-left"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">{t('contact.name')}</label>
                        <input type="text" className="w-full bg-space-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-space-accent focus:ring-1 focus:ring-space-accent transition-colors" placeholder={t('contact.name_placeholder')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">{t('contact.message')}</label>
                        <textarea rows={4} className="w-full bg-space-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-space-accent focus:ring-1 focus:ring-space-accent transition-colors" placeholder={t('contact.message_placeholder')} />
                    </div>
                    <button className="w-full bg-space-accent text-space-900 font-bold py-3 rounded-lg hover:bg-space-accent/90 transition-colors flex items-center justify-center gap-2">
                        <Send size={18} /> {t('contact.send')}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
