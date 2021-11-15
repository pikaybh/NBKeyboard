import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    let year = new Date().getFullYear();
    let position;

    if (document.location.pathname === '/main') {
        position = {position: 'absolute'};
    } else if (document.location.pathname === '/career') {
        position = {position: 'absolute'};
    } else {
        position = {position: 'static'};
    }

    return (
        <div className="Footer" style={position}>
            <div className="share-btn copyrights">
                <span class="material-icons">facebook</span>
            </div>
            <div className="copyrights">
                <Link to='/' className='footer-item'>NBK</Link> © {year}
            </div>
            <div className="info copyrights">
                문의전화: 010-0000-0000
            </div>
        </div>
    );
}

export default Footer;