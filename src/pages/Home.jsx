import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Zap, TrendingUp, ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated background blobs */}
            <div className="bg-cyan-500 w-96 h-96 blur-3xl absolute top-20 right-1/4 opacity-30 animate-pulse"></div>
            <div className="bg-rose-500 w-80 h-80 blur-3xl absolute bottom-20 left-1/4 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center px-8 max-w-5xl">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-300">AI-Powered Creativity</span>
                </div>

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

                {/* Stats */}
                <div className="flex gap-8 justify-center mt-16 flex-wrap">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">10K+</div>
                        <div className="text-sm text-gray-400">Prompts</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-rose-400">5K+</div>
                        <div className="text-sm text-gray-400">Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">50+</div>
                        <div className="text-sm text-gray-400">Categories</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FeaturedPrompts() {
    const navigate = useNavigate()

    const featured = [
        {
            id: 1,
            title: "Creative Writing Assistant",
            description: "Generate compelling stories and narratives",
            category: "Writing",
            rating: 4.9,
            uses: "12.5K",
            image: "https://static.theprint.in/wp-content/uploads/2025/10/Egypt_405-696x494.jpg",
            gradient: "from-cyan-600 to-blue-600"
        },
        {
            id: 2,
            title: "Code Optimizer Pro",
            description: "Enhance and debug your code efficiently",
            category: "Development",
            rating: 4.8,
            uses: "8.3K",
            image: "https://cdn.getyourguide.com/img/tour/64660f48ed9b5.jpeg/97.jpg",
            gradient: "from-rose-600 to-pink-600"
        },
        {
            id: 3,
            title: "Design Ideation",
            description: "Transform concepts into visual designs",
            category: "Design",
            rating: 4.7,
            uses: "9.1K",
            image: "https://canadiangeographic.ca/wp-content/uploads/2025/04/Cairo-The-82-ton-3400-year-old-statue-of-Ramses-II-greets-visitors-in-the-Grand-Egyptian-Museum-Photo-by-Robin-Esrock-scaled.jpeg",
            gradient: "from-purple-600 to-indigo-600"
        }
    ]

    return (
        <div className="relative py-20 px-8">
            <div className="bg-rose-600 w-72 h-72 blur-3xl absolute top-10 right-10 opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                    <h2 className="text-5xl font-bold">Featured Prompts</h2>
                </div>
                <p className="text-gray-400 text-lg mb-12">Trending AI prompts curated by our community</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {featured.map((prompt) => (
                        <div
                            key={prompt.id}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-[102%] cursor-pointer"
                            onClick={() => navigate(`/prompt/${prompt.id}`)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={prompt.image}
                                    alt={prompt.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${prompt.gradient} opacity-60`}></div>
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    {prompt.rating}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-sm text-cyan-400 mb-2">{prompt.category}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{prompt.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{prompt.description}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{prompt.uses} uses</span>
                                    <button className="text-cyan-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Try it <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Categories() {
    const navigate = useNavigate()

    const categories = [
        { name: "Writing", icon: "📝", count: 2340, color: "cyan" },
        { name: "Design", icon: "🎨", count: 1890, color: "rose" },
        { name: "Code", icon: "💻", count: 3120, color: "blue" },
        { name: "Marketing", icon: "📊", count: 1560, color: "purple" },
        { name: "Education", icon: "📚", count: 2100, color: "green" },
        { name: "Business", icon: "💼", count: 1780, color: "orange" }
    ]

    return (
        <div className="relative py-20 px-8">
            <div className="bg-cyan-600 w-72 h-72 blur-3xl absolute bottom-10 left-10 opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-rose-400" />
                    <h2 className="text-5xl font-bold">Browse Categories</h2>
                </div>
                <p className="text-gray-400 text-lg mb-12">Find the perfect prompt for your needs</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate('/category')}
                            className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="relative z-10">
                                <div className="text-5xl mb-4">{cat.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{cat.count} prompts available</p>
                                <div className={`flex items-center gap-2 text-${cat.color}-400 font-semibold group-hover:gap-3 transition-all`}>
                                    Explore <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/category')}
                        className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-lg shadow-rose-500/30"
                    >
                        View All Categories
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="min-h-screen relative">
            {/* Global background effects */}
            <div className="bg-rose-700 w-52 h-20 blur-3xl absolute top-[40vh] right-20 opacity-20"></div>
            <div className="bg-cyan-700 w-52 h-20 blur-3xl absolute top-[120vh] left-20 opacity-20"></div>
            <div className="bg-blue-700 w-52 h-20 blur-3xl absolute top-[200vh] right-32 opacity-20"></div>

            <HeroSection />
            <FeaturedPrompts />
            <Categories />
        </div>
    )
}