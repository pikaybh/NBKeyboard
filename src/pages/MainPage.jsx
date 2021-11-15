import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../static/NBKlogo.png';

function MainPage() {
    return (
        <div className="MainPage">
            <Header />
            <h1>HelloWorld!</h1>
            <img className="titleImg" src={logo}/>
            <Footer />
        </div>
    );
}

export default MainPage;