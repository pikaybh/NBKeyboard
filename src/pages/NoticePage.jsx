import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Notice() {
    let [notice, noticeList] = useState(['Foo', 'Bar', 'Baz']);

    return (
        <div className="Notice Main">
            <Header />
            <article className='empty-space'/>
            <article className='notice'>
                <section className='notice-section'>
                    <h1 className='notice-title'>공지사항</h1>
                    <table className="noticeList">
                        <tr className="bulletinBoard">제목</tr>
                        <hr className='board-hr' />
                        <tr className="boardList">{notice[0]}</tr>
                        <hr className='board-hr' />
                        <tr className="boardList">{notice[1]}</tr>
                        <hr className='board-hr' />
                        <tr className="boardList">{notice[2]}</tr>
                        <hr className='board-hr' />
                    </table>
                </section>
            </article>
            <article className='empty-space'/>
            <Footer />
        </div>
    );
}

export default Notice;