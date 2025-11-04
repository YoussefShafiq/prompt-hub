import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Sparkles, Zap, TrendingUp, ArrowRight, Star, Image, Video, Code,
    Search, FileText, Users, BarChart3, BookOpen, ChevronDown, ChevronUp,
    Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin
} from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Mock data for the slider items
const sliderItems = [
    {
        id: 1,
        title: "Creative Writing",
        image: "https://image.pollinations.ai/prompt/creative%20writing%20concept%20art%20soft%20lighting",
    },
    {
        id: 2,
        title: "Code Generation",
        image: "https://image.pollinations.ai/prompt/futuristic%20AI%20coding%20digital%20interface",
    },
    {
        id: 3,
        title: "Image Prompts",
        image: "https://image.pollinations.ai/prompt/creative%20image%20generation%20concept%20vibrant%20colors",
    },
    {
        id: 4,
        title: "Business Ideas",
        image: "https://image.pollinations.ai/prompt/startup%20innovation%20brainstorming%20in%20modern%20office",
    },
    {
        id: 5,
        title: "Academic Research",
        image: "https://image.pollinations.ai/prompt/scientific%20research%20data%20analysis%20abstract",
    },
    {
        id: 6,
        title: "Marketing Copy",
        image: "https://image.pollinations.ai/prompt/digital%20marketing%20concept%20colorful%20design",
    },
    {
        id: 2,
        title: "Code Generation",
        image: "https://image.pollinations.ai/prompt/futuristic%20AI%20coding%20digital%20interface",
    },
    {
        id: 3,
        title: "Image Prompts",
        image: "https://image.pollinations.ai/prompt/creative%20image%20generation%20concept%20vibrant%20colors",
    },
    {
        id: 4,
        title: "Business Ideas",
        image: "https://image.pollinations.ai/prompt/startup%20innovation%20brainstorming%20in%20modern%20office",
    },
    {
        id: 5,
        title: "Academic Research",
        image: "https://image.pollinations.ai/prompt/scientific%20research%20data%20analysis%20abstract",
    },
    {
        id: 6,
        title: "Marketing Copy",
        image: "https://image.pollinations.ai/prompt/digital%20marketing%20concept%20colorful%20design",
    },
];


export function HeroSection() {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-10">
            {/* Animated background blobs */}
            <div className="bg-cyan-500 w-96 h-96 blur-3xl absolute top-20 right-1/4 opacity-30 animate-pulse"></div>
            <div className="bg-rose-500 w-80 h-80 blur-3xl absolute bottom-20 left-1/4 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center px-8 max-w-5xl flex-1 flex flex-col justify-center">
                

                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 bg-clip-text text-transparent">
                    Prompt Hub
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Discover, create, and share AI prompts that transform ideas into reality.
                    Unleash the power of artificial intelligence.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => navigate('/category')}
                        className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2"
                    >
                        Explore Prompts
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Grid Style Slider */}
            <div className="w-screen mx-auto pb-8 relative z-10 translate-y-10">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-darkbackground from-20% to-transparent z-10"></div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
                    freeMode={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="grid-slider"
                >
                    {sliderItems.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <div className={`bg-gradient-to-r ${item.color} ${i % 2 == 0 ? 'translate-y-10' : ''} rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center text-center backdrop-blur-sm border border-white/10 shadow-lg`}>
                                <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

// Services Section
function ServicesSection() {
    const services = [
        { icon: Image, title: "Image Processing", color: "cyan", description: "Create and edit images with AI" },
        { icon: Video, title: "Video Production", color: "rose", description: "Professional editing and post-production" },
        { icon: Code, title: "Code Generation", color: "blue", description: "Smart and efficient coding" },
        { icon: Search, title: "Intelligent Search", color: "purple", description: "Advanced AI-powered search" },
        { icon: FileText, title: "Prompts", color: "green", description: "Comprehensive library of prompts" }
    ]

    return (
        <div className="py-20 px-8 relative">
            <div className="bg-cyan-500 w-96 h-96 blur-3xl absolute bottom-10 left-10 opacity-20 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 text-lg">End-to-end AI solutions</p>
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={idx}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-8 h-8 text-${service.color}-400`} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// About & Stats Section
function AboutStatsSection() {
    const [counters, setCounters] = useState({ prompts: 0, uses: 0, articles: 0 })

    useEffect(() => {
        const targets = { prompts: 10000, uses: 50000, articles: 500 }
        const duration = 2000
        const steps = 60

        const increment = {
            prompts: targets.prompts / steps,
            uses: targets.uses / steps,
            articles: targets.articles / steps
        }

        let current = 0
        const timer = setInterval(() => {
            current++
            setCounters({
                prompts: Math.min(Math.floor(increment.prompts * current), targets.prompts),
                uses: Math.min(Math.floor(increment.uses * current), targets.uses),
                articles: Math.min(Math.floor(increment.articles * current), targets.articles)
            })

            if (current >= steps) clearInterval(timer)
        }, duration / steps)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="py-20 px-8 relative ">
            <div className="bg-rose-500 w-96 h-96 blur-3xl absolute top-10 right-10 opacity-20 animate-pulse"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
                        alt="About Us"
                        className="rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent rounded-3xl"></div>
                </div>

                <div>
                    <h2 className="text-5xl font-bold mb-6">About Us</h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        We are a leading platform in AI, providing a comprehensive library of prompts and tutorials
                        to help you unlock the power of AI in your projects and business.
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="text-4xl font-bold text-cyan-400 mb-2">
                                {counters.prompts.toLocaleString()}+
                            </div>
                            <div className="text-sm text-gray-400">Published prompts</div>
                        </div>
                        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="text-4xl font-bold text-rose-400 mb-2">
                                {counters.uses.toLocaleString()}+
                            </div>
                            <div className="text-sm text-gray-400">Daily uses</div>
                        </div>
                        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-2">
                                {counters.articles.toLocaleString()}+
                            </div>
                            <div className="text-sm text-gray-400">Tutorial articles</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Platforms Section
function PlatformsSection() {
    const platforms = [
        { name: "ChatGPT", logo: "🤖", color: "green" },
        { name: "Gemini", logo: "✨", color: "blue" },
        { name: "Claude", logo: "🔮", color: "purple" },
        { name: "Midjourney", logo: "🎨", color: "pink" },
        { name: "DALL-E", logo: "🖼️", color: "cyan" },
        { name: "Stable Diffusion", logo: "🌈", color: "rose" },
        { name: "Make (8n8)", logo: "⚡", color: "orange" },
        { name: "Copilot", logo: "💻", color: "indigo" }
    ]

    return (
        <div className="py-20 px-8 relative">
            <div className="bg-cyan-500 w-96 h-96 blur-3xl absolute bottom-10 left-10 opacity-20 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Supported Platforms</h2>
                    <p className="text-gray-400 text-lg">We support all leading AI platforms</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {platforms.map((platform, idx) => (
                        <div
                            key={idx}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
                        >
                            <div className="text-6xl mb-4">{platform.logo}</div>
                            <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-gray-400 text-sm">Tutorials available</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Latest Tutorials Section
function TutorialsSection() {
    const navigate = useNavigate()

    const tutorials = [
        {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
            title: "A complete guide to using ChatGPT",
            excerpt: "Learn to craft effective prompts for the best results",
            date: "2 days ago"
        },
        {
            image: "https://images.unsplash.com/photo-1676573409389-b3c9c2586fb9?w=600",
            title: "Create professional images with Midjourney",
            excerpt: "Advanced tips and techniques to generate stunning images",
            date: "3 days ago"
        },
        {
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600",
            title: "Automate tasks with Make",
            excerpt: "Connect apps and automate workflows with ease",
            date: "1 week ago"
        }
    ]

    return (
        <div className="py-20 px-8 relative">
            <div className="bg-rose-500 w-96 h-96 blur-3xl absolute bottom-10 right-10 opacity-20 animate-pulse"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-5xl font-bold">Latest Tutorials</h2>
                    </div>
                    <p className="text-gray-400 text-lg">Exclusive educational content, updated regularly</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tutorials.map((tutorial, idx) => (
                        <div
                            key={idx}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[102%] cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={tutorial.image}
                                    alt={tutorial.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <div className="text-xs text-cyan-400 mb-2">{tutorial.date}</div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {tutorial.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{tutorial.excerpt}</p>
                                <button className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read more <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/30">
                        View all tutorials
                    </button>
                </div>
            </div>
        </div>
    )
}

// FAQ Section
function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is Prompt Hub?",
            answer: "Prompt Hub is a comprehensive platform that provides a large library of prompts and tutorials for all AI tools, with free, continuously updated educational content."
        },
        {
            question: "How do I get started with the platform?",
            answer: "You can sign up for free and browse thousands of prompts and tutorials immediately. We also provide a comprehensive beginner's guide."
        },
        {
            question: "Is the content free?",
            answer: "Yes, most content is completely free. We also offer premium plans for professionals who need additional features."
        },
        {
            question: "Which platforms are supported?",
            answer: "We support all major AI platforms such as ChatGPT, Gemini, Claude, Midjourney, DALL-E, and more."
        },
        {
            question: "How do I contact support?",
            answer: "You can reach us via email or the contact form, and we'll get back to you within 24 hours."
        }
    ]

    return (
        <div className="py-20 px-8 relative">
            <div className="bg-cyan-500 w-96 h-96 blur-3xl absolute bottom-10 left-10 opacity-20 animate-pulse"></div>

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400 text-lg">Answers to the most common questions</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-semibold text-right">{faq.question}</span>

                                {openIndex === idx ? (
                                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <p className="p-6 text-gray-400 text-right leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


// Main Home Component
export default function Home() {
    return (
        <div className="min-h-scree text-white">
            <HeroSection />
            <ServicesSection />
            <AboutStatsSection />
            <PlatformsSection />
            <TutorialsSection />
            <FAQSection />

        </div>
    )
}