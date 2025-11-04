import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

// Footer Component
export default function Footer() {
    return (
        <footer className=" border-t border-white/10 py-12 px-8">
            <div className="max-w-7xl mx-auto" >
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            Prompt Hub
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your comprehensive platform for AI and professional prompts
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>info@prompthub.ai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+20 123 456 789</span>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                                    <FaXTwitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>© 2025 Prompt Hub. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}


