import React from 'react';
import { Link } from 'react-router-dom';
import Footer4HP from '../components/Footer4HomePage';

function HomePage() {
    return (
        <div className="HomePage">
            <h1 className="homepage-title">NBKeyboard 짱짱맨</h1>
            <div className="keyboard">
                <div className="keylayout">
                    <Link to='/main' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                MainPage
                            </div>
                        </div>
                    </Link>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                Career
                            </div>
                        </div>
                    </Link>
                    <Link to='/testpage' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">test
                            </div>
                        </div>
                    </Link>
                    
                    <Link to='/main' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                MainPage
                            </div>
                        </div>
                    </Link>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                Career
                            </div>
                        </div>
                    </Link>
                    <Link to='/testpage' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">test
                            </div>
                        </div>
                    </Link>
                    
                    <Link to='/main' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                MainPage
                            </div>
                        </div>
                    </Link>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                Career
                            </div>
                        </div>
                    </Link>
                    <Link to='/testpage' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">test
                            </div>
                        </div>
                    </Link>
                    
                    <Link to='/main' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                MainPage
                            </div>
                        </div>
                    </Link>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                Career
                            </div>
                        </div>
                    </Link>
                    <Link to='/testpage' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">test
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer4HP />
        </div>
    );
}

export default HomePage;