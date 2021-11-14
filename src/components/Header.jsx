import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    let main, career;

    if (document.location.pathname === '/main') {
        main = {color : 'black'};
    } else if (document.location.pathname === '/career') {
        career = {color : 'black'};
    }

    return (
        <div className="Header">
            <Link to="/"><h1 className="logo">NBK</h1></Link>
            <ul className="menu-bar">
                <li className="menu-content"><Link to='/main' className='menu-item' style={main}>main</Link></li>
                <li className="menu-content"><Link to='/career' className='menu-item' style={career}>career</Link></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content"></li>
                <li className="menu-content">last item</li>
            </ul>
        </div>
    );
}

export default Header;