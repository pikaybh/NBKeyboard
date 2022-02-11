import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from '../assets/images/instagram.svg';
import { ReactComponent as Youtube } from '../assets/images/youtube.svg';

function Footer4HP() {
    let year = new Date().getFullYear();

    return (
        <div className="Footer4HP">
            <div className="share-btn rights">
                <Instagram className="social-page" width="30" height="30" fill="grey" />
                <Youtube className="social-page" width="30" height="30" fill="grey" />
            </div>
            <div className="rights">
                <Link to='/' className='footer-item'>the NBK</Link> © {year}
            </div>
        </div>
    );
}

export default Footer4HP;