import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    let year = new Date().getFullYear();

    return (
        <div className="Footer">
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