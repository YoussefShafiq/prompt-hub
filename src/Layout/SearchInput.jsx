import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'

export default function SearchInput() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const shouldShow = window.scrollY > 100
                    setIsVisible(shouldShow)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`
            fixed z-50 bottom-5 w-[90vw] lg:w-[70vw] right-1/2 translate-x-1/2 
            bg-white/80 dark:bg-primary/90 backdrop-blur-sm rounded-3xl 
            flex justify-center items-center gap-4 p-5 shadow-lg shadow-cyan-800/30 
            border dark:border-[#555]
            transition-all duration-300 ease-in-out
            ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10 pointer-events-none'
            }
        `}>
            <input
                type="text"
                className='w-full rounded-xl h-10 dark:bg-neutral-800/50 backdrop-blur-sm px-3 focus:outline-none text-black dark:text-white'
                placeholder='Search For Prompts...'
            />
            <BiSearch className='text-cyan-500 text-2xl' />
        </div>
    )
}