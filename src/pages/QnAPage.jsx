import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function QnA() {
    let [questions, questionList] = useState(['Foo', 'Bar', 'Baz']);

    return (
        <div className="QnA Main">
            <Header />
            <article className='empty-space'/>
            <article className='QnA'>
                <section className='notice-section'>
                    <h1 className='notice-title'>자주 묻는 질문</h1>
                    <table className="noticeList">
                        <tr className="bulletinBoard">Q&A</tr>
                        <hr className='question-hr' />
                        <tr className="questionList">{questions[0]}</tr>
                        <hr className='question-hr' />
                        <tr className="questionList">{questions[1]}</tr>
                        <hr className='question-hr' />
                        <tr className="questionList">{questions[2]}</tr>
                        <hr className='question-hr' />
                    </table>
                </section>
            </article>
            <article className='empty-space'/>
            <Footer />
        </div>
    );
}

export default QnA;