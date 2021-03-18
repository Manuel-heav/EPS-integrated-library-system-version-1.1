import React from 'react'

function Navbar() {
    return (
        <div>
                <header className = "container">
                    <div className = "menu-wrapper">
                        <div class = "header">
                            <a href="#home" className ="logo">Eps library</a>
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                            <ul className="menu">
                                <li><a href="#home">Home</a></li> 
                                <li><a href="#books">Books</a></li>
                                <li><a href="#reserve">Reserve</a></li>
                                <li><a href="#donate">Donate</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    </header>
        </div>
    )
}

export default Navbar
