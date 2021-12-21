import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Intro() {
    return (
        <div className="Intro">
            <Header />
            <h1>Introduction page</h1>
            <article className='intro'>
                <section>
                    <h2>NBK 소개</h2>
                    <p className='context'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum commodi debitis labore ut, voluptatum numquam dolorem autem rem molestias modi fuga, minima, incidunt provident eius velit iusto ipsa nemo!</p>
                </section>
            </article>
            <Footer />
        </div>
    );
}

export default Intro;