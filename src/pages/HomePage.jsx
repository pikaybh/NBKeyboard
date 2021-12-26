import React, { Component, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer4HP from '../components/Footer4HomePage';
import Draggable from "react-draggable";

function HomePage() {

    const nodeRef = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [Opacity, setOpacity] = useState(false);

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => {
        setOpacity(false);
    };

    return (
        <div className="HomePage">
            <Header />
            <h1 className="homepage-title">Welcome to NBK!</h1>

            <div className="keyboard">
                <div className="keylayout">
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to="/intro"
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">
                                    NBK<br/>소개
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to='/products'
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">
                                    Products
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to='/contact'
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">Contact
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                NBK<br />인원
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
                                회사<br />연혁
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