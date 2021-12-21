import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function History() {
    return (
        <div className="History">
            <Header />
            <h1>History page</h1>
            <article className='history'>
                <section>
                    <h2>회사 연혁</h2>
                    <p className="context">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum voluptas! Sit repellat voluptates, delectus dolorum sint reprehenderit quisquam in itaque placeat minus esse ipsum vel ipsam dignissimos aliquid dolorem.</p>
                </section>
            </article>
            <Footer />
        </div>
    );
}

export default History;