import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/images/nobaku2.png';

function ContactPage() {
    return (
        <div className="ContactPage">
            <Header />
            <h1>Contact</h1>
            <img className="titleImg" src={logo}/>
            <section>
                <h2>대표님 전번*^^*</h2>
                <h2>오피스 주소</h2>
                <h2>이메일</h2>
                <h2>인스타그램 아이디 등등</h2>
                <p className="context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati iusto rerum esse ratione similique deserunt quisquam suscipit, ducimus nam a. At illo deserunt impedit tenetur ratione nesciunt inventore ipsa!</p>
                <h3>추가적으로 협업 및 단체 자랑ㄱㄱ</h3>
                <h3>단국대 어쩌구 여기다가 쓰면 될듯 ㅇㅇ</h3>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;