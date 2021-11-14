import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainPage(){
    return(
        <div className="MainPage">
            <Header/>
            <h1>HelloWorld!</h1>
            <Footer/>
        </div>
    );
}

export default MainPage;