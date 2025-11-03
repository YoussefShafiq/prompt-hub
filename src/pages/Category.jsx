import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Section() {
    const navigate = useNavigate()
    const images = [
        {
            id: 1,
            url: 'https://static.theprint.in/wp-content/uploads/2025/10/Egypt_405-696x494.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 2,
            url: 'https://cdn.getyourguide.com/img/tour/64660f48ed9b5.jpeg/97.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 3,
            url: 'https://canadiangeographic.ca/wp-content/uploads/2025/04/Cairo-The-82-ton-3400-year-old-statue-of-Ramses-II-greets-visitors-in-the-Grand-Egyptian-Museum-Photo-by-Robin-Esrock-scaled.jpeg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 4,
            url: 'https://visitegypt.com/wp-content/uploads/2024/04/egyptian-museum.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 5,
            url: 'https://travel2egypt.org/wp-content/uploads/2024/06/4-1-1024x683.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 6,
            url: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1PBCO8.img?w=2266&h=1275&m=4&q=91',
            alt: 'egypt big meusium opening'
        },
        {
            id: 7,
            url: 'https://cdn.getyourguide.com/img/tour/64660f48ed9b5.jpeg/97.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 8,
            url: 'https://canadiangeographic.ca/wp-content/uploads/2025/04/Cairo-The-82-ton-3400-year-old-statue-of-Ramses-II-greets-visitors-in-the-Grand-Egyptian-Museum-Photo-by-Robin-Esrock-scaled.jpeg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 9,
            url: 'https://visitegypt.com/wp-content/uploads/2024/04/egyptian-museum.jpg',
            alt: 'egypt big meusium opening'
        },
        {
            id: 10,
            url: 'https://travel2egypt.org/wp-content/uploads/2024/06/4-1-1024x683.jpg',
            alt: 'egypt big meusium opening'
        },
    ]
    return <>
        <div className=" flex gap-8 relative">
            <div className="w-1/5 bg-white/40 dark:bg-white/10 backdrop-blur-sm sticky top-32 h-fit p-5 rounded-lg mb-8 border dark:border-blue-500/20 shadow-xl overflow-hidden">
                <h2 className='text-cyan-700 text-3xl font-bold capitalize relative after:absolute after:h-[2px] after:w-full after:top-1/2 after:left-[calc(100%+10px)] after:translate-y-full after:bg-cyan-600 w-fit'>decor</h2>
                <ul className='ps-5'>
                    <li>couch</li>
                    <li>beds</li>
                    <li>bedrooms</li>
                </ul>
            </div>
            <div className="w-4/5">
                <div className="flex flex-col gap-6">
                    {Array.from({ length: Math.ceil(images.length / 5) }, (_, rowIndex) => (
                        <div key={rowIndex} className="flex gap-3">
                            {images.slice(rowIndex * 5, rowIndex * 5 + 5).map((i, index) => (
                                <div
                                    key={i.id || index}
                                    className="flex-[1] hover:flex-[2] transition-all duration-500 h-72 cursor-pointer relative group overflow-hidden"
                                >
                                    <img
                                        src={i.url}
                                        alt={i.alt}
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                    <div className="absolute -bottom-14 group-hover:bottom-5 w-full flex items-center justify-center transition-all duration-500">
                                        <button onClick={() => navigate(`/prompt/${i.id}`)} className='bg-cyan-800/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:scale-[103%] transition-all'>view details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}

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
