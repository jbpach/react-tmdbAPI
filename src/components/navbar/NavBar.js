import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './NavBar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';


const NavBar = ({search, setSearch}) => {
    const navigate = useNavigate();
    const [hamClick, setHamClick] = useState(false);
    // const [search, setSearch] = useState('');

    const handleHamClick = () => {
        setHamClick(!hamClick);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) navigate(`/search/${search.replace(' ', '+')}`);
        setSearch('');
    }

    return (
        <nav>
            <div className='container'>
                <Link to={`/`}><h1>The Trailers</h1></Link>
                <form className='nav-search' onSubmit={handleSubmit}>
                    {/* <label htmlFor='search'></label> */}
                    <input id='search' value={search} type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search for a movie'/>
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