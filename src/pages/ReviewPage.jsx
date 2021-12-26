import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Review() {
    return (
        <div className="Review Main">
            <Header />
            <h1>Review page</h1>
            <article className='review'>
                <section>
                    <h2>후기</h2>
                    <h3>여기에는 API 따와서 실제 구매 후기 예쁘게 작성*^^*</h3>
                    <p className="context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo voluptate consectetur fugit tenetur, necessitatibus neque at unde ipsa, ipsum reiciendis delectus veniam eaque iusto eveniet aperiam ducimus alias. Esse.</p>
                </section>
            </article>
            <article className='empty-space'></article>
            <Footer />
        </div>
    );
}

export default Review;