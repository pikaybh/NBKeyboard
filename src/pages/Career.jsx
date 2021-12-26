import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logo from '../assets/images/nobaku1.png';

function Career() {
    return (
        <div className="Career Main">
            <Header />
            <article className='career'>
                <h1 className='career-title'>NBK 인원</h1>
                <div className="career-articles">
                    <section className='career-section'>
                        <img className='profile-img' src={logo} alt="Profile image of a man" />
                        <div className="portfolio">
                            <strong className='profile-name'>박태경</strong>
                            <span className='standing'>CEO</span>
                            <hr className='hr-career' />
                            <p className='career-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore amet qui obcaecati, quia natus debitis, ducimus cupiditate mollitia odio excepturi? Minus voluptatibus magnam similique numquam, cupiditate quisquam in architecto!</p>
                        </div>
                    </section>
                    <section className='career-section'>
                        <img className='profile-img' src={logo} alt="Profile image of a man" />
                        <div className="portfolio">
                            <strong className='profile-name'>유병희</strong>
                            <span className='standing'>CDO</span>
                            <hr className='hr-career' />
                            <p className='career-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit cumque repudiandae illum, numquam ex dignissimos nulla ipsa mollitia reiciendis, placeat, ut ea? Architecto repellendus voluptatem fuga nostrum laboriosam nobis consequatur.</p>
                        </div>
                    </section>
                    <section className='career-section'>
                        <img className='profile-img' src={logo} alt="Profile image of a man" />
                        <div className="portfolio">
                            <strong className='profile-name'>심의진</strong>
                            <span className='standing'>CTO</span>
                            <hr className='hr-career' />
                            <p className='career-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur saepe aut repudiandae distinctio quia maiores natus blanditiis assumenda excepturi, laboriosam illo dolore perferendis consequatur dolores qui rerum nam. At, cumque?</p>
                        </div>
                    </section>
                </div>
            </article>
            <article className='empty-space'></article>
            <Footer />
        </div>
    );
}

export default Career;