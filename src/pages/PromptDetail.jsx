import React, { useState } from 'react'
import { Copy, Check, Eye, Users, Heart, Star, Edit3, Sparkles } from 'lucide-react'

export default function PromptDetail() {
    const [copied, setCopied] = useState(false)

    // Sample prompt data with dynamic variables
    const promptData = {
        id: 1,
        title: "Creative Writing Assistant",
        description: "A powerful prompt designed to help you generate compelling stories, narratives, and creative content. Perfect for writers, content creators, and storytellers looking to overcome writer's block and spark new ideas.",
        category: "Writing",
        image: "https://static.theprint.in/wp-content/uploads/2025/10/Egypt_405-696x494.jpg",
        author: "Sarah Johnson",
        rating: 4.9,
        reviews: 234,
        views: 15420,
        usage: 8340,
        favorites: 1250,
        createdAt: "2024-10-15",
        template: "Write a compelling {length} article about {topic} in a {tone} tone. The content should be engaging, well-structured, and include relevant examples. Focus on providing value to the reader while maintaining clarity and coherence throughout the piece.",
        variables: [
            {
                key: "topic",
                label: "Topic",
                type: "text",
                defaultValue: "artificial intelligence",
                placeholder: "Enter topic"
            },
            {
                key: "tone",
                label: "Tone",
                type: "select",
                defaultValue: "professional",
                options: [
                    { value: "professional", label: "Professional" },
                    { value: "casual", label: "Casual" },
                    { value: "formal", label: "Formal" },
                    { value: "friendly", label: "Friendly" },
                    { value: "technical", label: "Technical" }
                ]
            },
            {
                key: "length",
                label: "Length",
                type: "select",
                defaultValue: "500 words",
                options: [
                    { value: "250 words", label: "250 words" },
                    { value: "500 words", label: "500 words" },
                    { value: "1000 words", label: "1000 words" },
                    { value: "2000 words", label: "2000 words" }
                ]
            }
        ],
        tags: ["writing", "creative", "content", "storytelling"]
    }

    // Initialize variables state from promptData
    const [variables, setVariables] = useState(() => {
        const initialVars = {}
        promptData.variables.forEach(variable => {
            initialVars[variable.key] = variable.defaultValue
        })
        return initialVars
    })

    // Function to replace template variables with actual values
    const generatePrompt = () => {
        let prompt = promptData.template
        Object.keys(variables).forEach(key => {
            const regex = new RegExp(`\\{${key}\\}`, 'g')
            prompt = prompt.replace(regex, variables[key])
        })
        return prompt
    }

    const handleCopy = () => {
        const finalPrompt = generatePrompt()
        navigator.clipboard.writeText(finalPrompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleVariableChange = (key, value) => {
        setVariables(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background effects */}
            <div className="bg-cyan-600 w-96 h-96 blur-3xl absolute top-20 right-10 opacity-20"></div>
            <div className="bg-rose-600 w-96 h-96 blur-3xl absolute top-[60vh] left-10 opacity-20"></div>
            <div className="bg-blue-600 w-72 h-72 blur-3xl absolute bottom-20 right-1/3 opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Image */}
                    <div className="lg:w-2/5">
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img
                                src={promptData.image}
                                alt={promptData.title}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 px-3 py-1 rounded-full text-sm text-cyan-300">
                                        {promptData.category}
                                    </span>
                                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-semibold">{promptData.rating}</span>
                                        <span className="text-xs text-gray-300">({promptData.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:w-3/5">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            {promptData.title}
                        </h1>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {promptData.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-black/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Eye className="w-5 h-5 text-cyan-400" />
                                    <span className="text-sm text-gray-800 dark:text-gray-400">Views</span>
                                </div>
                                <div className="text-2xl font-bold">{promptData.views.toLocaleString()}</div>
                            </div>

                            <div className="bg-black/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-rose-500/50 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-5 h-5 text-rose-400" />
                                    <span className="text-sm text-gray-800 dark:text-gray-400">Usage</span>
                                </div>
                                <div className="text-2xl font-bold">{promptData.usage.toLocaleString()}</div>
                            </div>

                            <div className="bg-black/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-5 h-5 text-purple-400" />
                                    <span className="text-sm text-gray-800 dark:text-gray-400">Favorites</span>
                                </div>
                                <div className="text-2xl font-bold">{promptData.favorites.toLocaleString()}</div>
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {promptData.author[0]}
                                </div>
                                <span>by <span className='font-semibold'>{promptData.author}</span></span>
                            </div>
                            <span>•</span>
                            <span>Created {new Date(promptData.createdAt).toLocaleDateString()}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {promptData.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm hover:border-cyan-500/50 transition-all cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Variables Section - Dynamic */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Edit3 className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-3xl font-bold">Customize Variables</h2>
                    </div>

                    <div className={`grid gap-6 ${promptData.variables.length === 1 ? 'md:grid-cols-1' : promptData.variables.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                        {promptData.variables.map((variable) => (
                            <div key={variable.key}>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    {variable.label}
                                </label>

                                {variable.type === 'text' && (
                                    <input
                                        type="text"
                                        value={variables[variable.key]}
                                        onChange={(e) => handleVariableChange(variable.key, e.target.value)}
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                        placeholder={variable.placeholder}
                                    />
                                )}

                                {variable.type === 'select' && (
                                    <select
                                        value={variables[variable.key]}
                                        onChange={(e) => handleVariableChange(variable.key, e.target.value)}
                                        className="custom-select w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                    >
                                        {variable.options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                )}

                                {variable.type === 'textarea' && (
                                    <textarea
                                        value={variables[variable.key]}
                                        onChange={(e) => handleVariableChange(variable.key, e.target.value)}
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                                        placeholder={variable.placeholder}
                                        rows={3}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prompt Display Section */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-cyan-400" />
                            <h2 className="text-3xl font-bold">Your Prompt</h2>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-5 h-5" />
                                    Copy Prompt
                                </>
                            )}
                        </button>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <pre className="text-gray-200 text-base leading-relaxed whitespace-pre-wrap font-mono">
                            {generatePrompt()}
                        </pre>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg font-semibold transition-all hover:scale-[102%] shadow-lg shadow-rose-500/30">
                            Try with AI
                        </button>
                        <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-lg font-semibold transition-all">
                            <Heart className="w-5 h-5" />
                            Save to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}