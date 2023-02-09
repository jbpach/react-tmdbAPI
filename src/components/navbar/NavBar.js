import React, { useState } from 'react';
import './NavBar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiSearch } from 'react-icons/bi'

const NavBar = () => {
    const [hamClick, setHamClick] = useState(false)

    const handleHamClick = () => {
        setHamClick(!hamClick);
    }

    return (
        <nav>
            <div className='container'>
                <h1>The Trailers</h1>
                <form className='nav-search'>
                    {/* <label htmlFor='search'></label> */}
                    <input id='search' type='text' placeholder='Search for a movie'/>
                    <button type='submit'><BiSearch className='icon'/></button>
                </form>
                <ul className={ hamClick ? 'nav-menu active' : 'nav-menu' }> 
                    <li>Popular</li>
                    <li>Now Playing</li>
                    <li>Upcoming</li>
                    <li>Top Rated</li>
                </ul>
                <div className='hamburger' onClick={handleHamClick}>
                    <RxHamburgerMenu className='icon'/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;