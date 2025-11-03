import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchInput from './SearchInput'
import Navbar from './Navbar'
import DarkmodeToggle from './DarkmodeToggle'

export default function Layout() {
    return <>
        <div className="pb-24 pt-24 bg-white dark:bg-darkbackground text-black dark:text-white">
            <Navbar />
            <Outlet></Outlet>
            <SearchInput />
            <div className="fixed lg:top-10 lg:right-14 bottom-5 right-5 z-50">
                <DarkmodeToggle />
            </div>
        </div>
    </>
}
