import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Career() {
    return (
        <div className="Career">
            <Header />
            <h1>Career page</h1>
            <article className='career'>
                <div className="career-articles">
                    <section className='career-section'>
                        <h2>박태경</h2>
                        <h3>CEO</h3>
                        <span className='career-span'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore amet qui obcaecati, quia natus debitis, ducimus cupiditate mollitia odio excepturi? Minus voluptatibus magnam similique numquam, cupiditate quisquam in architecto!</span>
                    </section>
                    <section className='career-section'>
                        <h2>유병희</h2>
                        <h3>CDO</h3>
                        <span className='career-span'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit cumque repudiandae illum, numquam ex dignissimos nulla ipsa mollitia reiciendis, placeat, ut ea? Architecto repellendus voluptatem fuga nostrum laboriosam nobis consequatur.</span>
                    </section>
                    <section className='career-section'>
                        <h2>심의진</h2>
                        <h3>CTO</h3>
                        <span className='career-span'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur saepe aut repudiandae distinctio quia maiores natus blanditiis assumenda excepturi, laboriosam illo dolore perferendis consequatur dolores qui rerum nam. At, cumque?</span>
                    </section>
                </div>
            </article>
            <Footer />
        </div>
    );
}

export default Career;