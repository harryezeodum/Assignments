import React from 'react';

function Navbar() {
    return (
        <nav>
            <div>
                <a className='navbar-brand' href='index.html' >Start Bootstrap</a>
            </div>
            <div>
                <ul className='navbar-list'>
                    <li><a href='index.html'>Home</a></li>
                    <li><a href='index.html'>About</a></li>
                    <li><a href='index.html'>Sample Post</a></li>
                    <li><a href='index.html'>Contact</a></li>
                </ul>
            </div>    
        </nav>
    );
}

export default Navbar;