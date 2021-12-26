import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Notice() {
    return (
        <div className="Notice Main">
            <Header />
            <h1>Notice page</h1>
            <article className='notice'>
                <section>
                    <h2>새로운 소식/공지</h2>
                </section>
            </article>
            <article className='empty-space'></article>
            <Footer />
        </div>
    );
}

export default Notice;