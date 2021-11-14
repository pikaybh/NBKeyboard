import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function NotFoundPage(){
    return(
        <div className="NotFoundPage">
            <Header/>
            <h1>Page Not Found!</h1>
            <Footer/>
        </div>
    );
}

export default NotFoundPage;