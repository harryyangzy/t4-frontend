import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 text-white bg-black">
        <div className="px-20 py-12 flex items-center justify-between">
            <a href="/" className="text-lg font-bold">Western Sales Club</a>
            <nav>
            <ul className="flex space-x-6">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/executive-team">Executive Team</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
            </nav>
        </div>
      </header>
    );
}

export default Nav;