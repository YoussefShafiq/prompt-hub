import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorElement() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-darkbackground">
            <div className="text-center">
                <div className="text-6xl mb-4">😞</div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
                <div className="flex items-center gap-5 justify-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>
    )
}