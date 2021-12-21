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

    /*
    class App extends Component {
        state = {
            open: false,
        };
        handleButtonClick = () => {
            this.setState((state) => {
                return {
                    open: !state.open,
                };
            });
        };
        container = React.createRef();
        state = {
            open: false,
        };
        componentDidMount() {
            document.addEventListener("mousedown", this.handleClickOutside);
        }
        componentWillUnmount() {
            document.removeEventListener("mousedown", this.handleClickOutside);
        }
    }
    handleClickOutside = (event) => {
        if (
            this.container.current &&
            !this.container.current.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    };
    <div className="container">
        <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
        </button>
        {this.state.open && (
            <div class="dropdown">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>
            </div>
        )}
    </div>
    */


    class Career extends Component {
        constructor() {
            super();

            this.state = {
                showMenu: false,
            }

            this.showMenu = this.showMenu.bind(this);
            this.hideMenu = this.hideMenu.bind(this);
        }

        showMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: true,
            });
        }

        hideMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: false,
            });
        }

        render() {
            return (
                <ul className="bar" onClick={this.showMenu}>
                    <li className="menu-content">
                        <Link to='#' className='menu-item' style={careerStyle}>career</Link>
                    </li>

                    {
                        this.state.showMenu
                            ? (
                                <ul className="menu career-menu">
                                    <Link to='/intro' className="menu-list">{menu[0]}</Link>
                                    <Link to='/career' className="menu-list">{menu[1]}</Link>
                                    <Link to='/history' className="menu-list">{menu[2]}</Link>
                                </ul>
                            )
                            : (
                                null
                            )
                    }
                </ul>
            );
        }
    }

    class Products extends Component {
        constructor() {
            super();

            this.state = {
                showMenu: false,
            }

            this.showMenu = this.showMenu.bind(this);
            this.hideMenu = this.hideMenu.bind(this);
        }

        showMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: true,
            });
        }

        hideMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: false,
            });
        }

        render() {
            return (
                <ul className="bar">
                    <li className="menu-content" onClick={this.showMenu}>
                        <Link to='#' className='menu-item' style={productsStyle}>products</Link>
                    </li>
                    {
                        this.state.showMenu
                            ? (
                                <ul className="menu products-menu">
                                    <Link to='/products' className="menu-list">{menu[3]}</Link>
                                </ul>
                            )
                            : (
                                null
                            )
                    }
                </ul>
            );
        }
    }

    class Notice extends Component {
        constructor() {
            super();

            this.state = {
                showMenu: false,
            }

            this.showMenu = this.showMenu.bind(this);
            this.hideMenu = this.hideMenu.bind(this);
        }

        showMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: true,
            });
        }

        hideMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: false,
            });
        }

        render() {
            return (
                <ul className="bar" onClick={this.showMenu}>
                    <li className="menu-content">
                        <Link to='#' className='menu-item' style={contactStyle}>notice</Link>
                    </li>

                    {
                        this.state.showMenu
                            ? (
                                <ul className="menu contact-menu">
                                    <Link to='/contact' className="menu-list">{menu[4]}</Link>
                                    <Link to='/notice' className="menu-list">{menu[5]}</Link>
                                    <Link to='/review' className="menu-list">{menu[6]}</Link>
                                    <Link to='/questions' className="menu-list">{menu[7]}</Link>
                                </ul>
                            )
                            : (
                                null
                            )
                    }
                </ul>
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
            </ul>
        </div>
    );
}

export default Header;