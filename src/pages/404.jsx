import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function NotFoundPage(){
    return(
        <div className="NotFoundPage Main">
            <Header/>
            <h1>Page Not Found!</h1>
            <article className='empty-space'></article>
            <Footer/>
        </div>
    );
}

export default NotFoundPage;