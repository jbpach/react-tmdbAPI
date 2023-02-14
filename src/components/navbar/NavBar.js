import { Link } from 'react-router-dom';
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
                <Link to={`/`}><h1>The Trailers</h1></Link>
                <form className='nav-search'>
                    {/* <label htmlFor='search'></label> */}
                    <input id='search' type='text' placeholder='Search for a movie'/>
                    <button type='submit'><BiSearch className='icon'/></button>
                </form>
                <ul className={ hamClick ? 'nav-menu active' : 'nav-menu' }> 
                    <Link to={`popular`}><li>Popular</li></Link>
                    <Link to={`nowplaying`}><li>Now Playing</li></Link>
                    <Link to={`upcoming`}><li>Upcoming</li></Link>
                    <Link to={`toprated`}><li>Top Rated</li></Link>
                </ul>
                <div className='hamburger' onClick={handleHamClick}>
                    <RxHamburgerMenu className='icon'/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;