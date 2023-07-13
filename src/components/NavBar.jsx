import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
    return (
        <div className="bg-amber-100 flex justify-center p-4 lg:text-lg dark:bg-gray-600">
            <NavBarItem title="Trending" param="fetchTrending"/>
            <NavBarItem title="Top Rated" param="fetchTopRated"/>
        </div>
    )
}
