import React from 'react'
import { useNavigate } from 'react-router-dom'
import Section from '../components/section'


export default function Category() {

    return <>
        <div className="bg-rose-700 w-32 h-20 blur-3xl absolute top-[15vh] right-20"></div>
        <div className="bg-cyan-700 w-52 h-20 blur-3xl absolute top-[80vh] right-20"></div>
        <div className="bg-rose-700 w-52 h-20 blur-3xl absolute top-[180vh] right-20"></div>
        <div className="bg-cyan-700 w-20 h-20 blur-3xl absolute top-[30vh] left-28"></div>
        <div className="bg-rose-700 w-20 h-20 blur-3xl absolute top-[120vh] left-32"></div>
        <div className="bg-cyan-700 w-20 h-20 blur-3xl absolute top-[200vh] left-32"></div>
        <div className="bg-rose-700 w-20 h-20 blur-3xl absolute top-[290vh] left-32"></div>
        <div className="p-8">
            <h1 className='text-6xl font-bold uppercase text-center mb-10'>Prompt Hub</h1>
            <div className="space-y-10">
                <Section />
                <Section />
                <Section />
                <Section />
            </div>
        </div>
    </>
}
