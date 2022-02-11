import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Intro() {
    return (
        <div className="Intro Main">
            <Header />
            <h1>NBK 소개</h1>
            <h2 className='grey'>We Make Headway on Innovation.</h2>
            <section>
                <div className="grey">
                    <h3>더 쉽게</h3>
                    <p><b>소프트웨어가 필요 없는 제품</b>으로써 더욱 간단하고 쉽게 누구나 개인화를 가능하게 함</p>
                </div>
                <div className="grey">
                    <h3>더 만족하게</h3>
                    <p>기계식 키보드의 가장 중요한 키 감을 결정하는 <b>스위치를 선택</b>할 수 수 있게 하여 더욱 만족감을 올려줌</p>
                </div>
                <div className="grey">
                    <h3>더 편하게</h3>
                    <p>키보드의 키를 하나씩 개별적 사용이 가능하여 원하는 위치에 원하는 키를 넣을 수 있으며<b>하나의 키로 단축키를 사용</b>할 수 있음</p>
                </div>
            </section>
            <article className='intro'>
            </article>
            <article className='empty-space'></article>
            <Footer />
        </div>
    );
}

export default Intro;