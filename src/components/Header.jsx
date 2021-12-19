import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NBKlogo } from '../assets/images/NBKlogo.svg';

function Header() {
    let main, career, test;

    if (document.location.pathname === '/main') {
        main = {color : 'black'};
    } else if (document.location.pathname === '/career') {
        career = {color : 'black'};
    } else if (document.location.pathname === '/testpage') {
        test = {color : 'black'};
    }

    return (
        <div className="Header">
            <Link to="/"><NBKlogo className="logo" width="60" height="60"/></Link>
            <ul className="menu-bar">
                <li className="menu-content"><Link to='/career' className='menu-item' style={career}>career</Link></li>
                <li className="menu-content"><Link to='/main' className='menu-item' style={main}>main</Link></li>
                <li className="menu-content"><Link to='/testpage' className='menu-item' style={test}>test</Link></li>
            </ul>
        </div>
    );
}

export default Header;