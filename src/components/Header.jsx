import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NBKlogo } from '../assets/images/NBKlogo.svg';

function Header() {
    let careerStyle, productsStyle, contactStyle;

    if (document.location.pathname === '/intro' || document.location.pathname === '/career' || document.location.pathname === '/history') {
        careerStyle = { color: 'black' };
    } else if (document.location.pathname === '/products') {
        productsStyle = { color: 'black' };
    } else if (document.location.pathname === '/contact' || document.location.pathname === '/notice' || document.location.pathname === '/review' || document.location.pathname === '/questions') {
        contactStyle = { color: 'black' };
    }

    let [menu, menuList] = useState(['NBK 소개', 'NBK 인원', '회사 연혁', 'NBKeyboard', 'Contact', '소식', '후기', 'Q&A']);

    class Career extends Component {
        render() {
            return (
                <ul className="bar career-bar">
                    <li className="menu-content">
                        <Link to='/intro' className='menu-item' style={careerStyle}>career</Link>
                    </li>
                    <ul className="menu career-menu">
                        <Link to='/intro' className="menu-list">{menu[0]}</Link>
                        <Link to='/career' className="menu-list">{menu[1]}</Link>
                        <Link to='/history' className="menu-list">{menu[2]}</Link>
                    </ul>
                </ul>
            );
        }
    }

    class Products extends Component {
        render() {
            return (
                <ul className="bar products-bar">
                    <li className="menu-content">
                        <Link to='/products' className='menu-item' style={productsStyle}>products</Link>
                    </li>
                    <ul className="menu products-menu">
                        <Link to='/products' className="menu-list">{menu[3]}</Link>
                    </ul>
                </ul>
            );
        }
    }

    class Notice extends Component {
        render() {
            return (
                <ul className="bar notice-bar">
                    <li className="menu-content">
                        <Link to='/notice' className='menu-item' style={contactStyle}>notice</Link>
                    </li>
                    <ul className="menu contact-menu">
                        <Link to='/contact' className="menu-list">{menu[4]}</Link>
                        <Link to='/notice' className="menu-list">{menu[5]}</Link>
                        <Link to='/review' className="menu-list">{menu[6]}</Link>
                        <Link to='/questions' className="menu-list">{menu[7]}</Link>
                    </ul>
                </ul>
            );
        }
    }

    class Nav extends Component {
        constructor(props) {
            super(props);
            this.state = {openNav: false};
            this.state = {closeNav: true};

            this.openNav = this.openNav.bind(this);
            this.closeNav = this.closeNav.bind(this);
        }

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
        openNav() {
            if (matchMedia("Screen and (max-width: 600px)").matches) {
                document.getElementById("sidenav").style.width = "300px";
            } else {
                document.getElementById("sidenav").style.width = "500px";
            }
            document.getElementById("main").style.width = "100%";
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        closeNav() {
            document.getElementById("sidenav").style.width = "0";
            document.getElementById("main").style.width = "0";
        }

        render() {
            return (
                <div className="Nav">
                    <nav id="sidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <ul className="mini-menu-bar">
                            <li className="mini-menu-list">소개</li>
                            <Link to='/intro'>{menu[0]}</Link>
                            <Link to='/career'>{menu[1]}</Link>
                            <Link to='/history'>{menu[2]}</Link>
                            <li className="mini-menu-list">제품</li>
                            <Link to='/products'>{menu[3]}</Link>
                            <li className="mini-menu-list">게시판</li>
                            <Link to='/contact'>{menu[4]}</Link>
                            <Link to='/notice'>{menu[5]}</Link>
                            <Link to='/review'>{menu[6]}</Link>
                            <Link to='/questions'>{menu[7]}</Link>
                        </ul>
                    </nav>
                    <div id="main" onClick={this.closeNav}></div>
                    <span className="nav_btn material-icons md-36" onClick={this.openNav}>menu</span>                    
                </div>
            );
        }
    }

    return (
        <div className="Header">
            <Link to="/"><NBKlogo className="logo" width="60" height="60" /></Link>
            <ul className="menu-bar">
                <Career />
                <Products />
                <Notice />
                <Nav />
            </ul>
        </div>
    );
}

export default Header;