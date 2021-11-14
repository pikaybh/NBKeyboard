import React from 'react';
import { Link } from 'react-router-dom';

function Footer4HP() {
    let year = new Date().getFullYear();

    return (
        <div className="Footer4HP">
            <div className="share-btn rights">
                <span class="material-icons">facebook</span>
            </div>
            <div className="rights">
                <Link to='/' className='footer-item'>NBK</Link> © {year}
            </div>
        </div>
    );
}

export default Footer4HP;