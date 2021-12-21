import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function QnA() {
    return (
        <div className="QnA">
            <Header />
            <h1>Q&A page</h1>
            <article className='questions'>
                <section>
                    <h2>자주 묻는 질문</h2>
                    <h3>여기에는 자주 묻는 질문 들을 작성</h3>
                    <p className="context">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum debitis voluptates libero blanditiis sapiente facere tenetur? Ea voluptatum eius, numquam dolorem, voluptates ipsam ipsum eligendi, dolorum dolore sequi ratione quam.</p>
                </section>
            </article>
            <Footer />
        </div>
    );
}

export default QnA;