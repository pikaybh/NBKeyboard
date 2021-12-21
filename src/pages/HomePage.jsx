import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer4HP from '../components/Footer4HomePage';

function HomePage() {
    return (
        <div className="HomePage">
            <Header />
            <h1 className="homepage-title">Welcome to NBK!</h1>
            <div className="keyboard">
                <div className="keylayout">
                    <Link to='/intro' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                NBK<br/>소개
                            </div>
                        </div>
                    </Link>
                    <Link to='/products' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                Products
                            </div>
                        </div>
                    </Link>
                    <Link to='/contact' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">Contact
                            </div>
                        </div>
                    </Link>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                NBK<br/>인원
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <Link to='/notice' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">소식
                            </div>
                        </div>
                    </Link>
                    <Link to='/history' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                회사<br/>연혁
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <Link to='/review' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">후기
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <div className="keycab">
                    </div>
                    <Link to='/questions' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">Q&A
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