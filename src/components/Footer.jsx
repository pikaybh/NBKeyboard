import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from '../assets/images/instagram.svg';
import { ReactComponent as Youtube } from '../assets/images/youtube.svg';

function Footer() {
    let year = new Date().getFullYear();
    let position;

    /*if (document.location.pathname === '/main') {
        position = { position: 'relative' };
    } else {
        position = { position: 'static' };
    }*/

    return (
        <div className="Footer" style={position}>
        <hr className="hr-footer" />
            <div className="footer-section">
                <div className="info">
                    <h5 className="corp">the NBK(더 엔비케이)</h5>
                    <p className="ceo-contact">
                        CEO : 박태경<br/>
                        Business License : 580-13-01693<br/>
                        Address : 충청남도 천안시 동남구 단대로 119 <br/>
                        Contact : groupnbk2022@gmail.com | 010-3354-3917
                    </p>
                </div>
                <div className="share-btn">
                    <Instagram className="social-page" width="30" height="30" fill="grey" />
                    <Youtube className="social-page" width="30" height="30" fill="grey" />
                </div>
            </div>
            <hr className="hr-footer-mobile" />
            <div className="copyrights">
                <Link to='/' className='footer-item'>the NBK</Link> © {year}
            </div>
        </div>
    );
}

export default Footer;

// | 2022-#####-####