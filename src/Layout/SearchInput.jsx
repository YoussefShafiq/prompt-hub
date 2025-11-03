import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function SearchInput() {
    return <>
        <div className="fixed z-50 bottom-5 w-[90vw] lg:w-[70vw] right-1/2 translate-x-1/2 bg-white/80 dark:bg-primary/90 backdrop-blur-sm rounded-3xl flex justify-center items-center gap-4 p-5 shadow-lg shadow-cyan-800/30 border dark:border-[#555]">
            <input type="text" className='w-full rounded-xl h-10 dark:bg-neutral-800/50 backdrop-blur-sm px-3 focus:outline-none text-black dark:text-white' placeholder='Search For Prompts...' />
            <BiSearch className='text-cyan-500 text-2xl' />
        </div>
    </>
}
