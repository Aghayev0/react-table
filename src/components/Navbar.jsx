import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarleft'>CustomerFavs NEXT</div>
            <div className='navbarright'>
                <Link to='/'>Home</Link>
                <Link to='/customers'>Customers</Link>
            </div>
        </div>
    )
}

export default Navbar