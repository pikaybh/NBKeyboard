import React, { Component, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/images/nobaku2.png';
import dkuciee from '../assets/images/DKUCIEE1.png';

function ContactPage() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v0ur1k7', 'template_zbt5zwk', form.current, 'user_72Uf9jwk6GKV4glPxR5Yi')
            .then((result) => {
                console.log(result.text);
                alert("이메일이 정상적으로 전송되었습니다.\n이용해주셔서 감사합니다.");
            }, (error) => {
                console.log(error.text);
                alert("이메일 전송에 실패하였습니다.\n에러코드 : ", error);
            });
    };

    class Mail extends Component {
        render() {
            return (
                <form className='mailing' ref={form} onSubmit={sendEmail} >
                    <div className="name-div form-div">
                            <label for="name">1. 이름 및 소속 <i className="required-mark">*</i></label>
                            <input
                                className="form-input"
                                type="text"
                                id="name"
                                name="from_name"
                                placeholder="이름 및 소속을 입력해주세요."
                                required
                            />
                        </div>
                        <div className="email-div form-div">
                            <label for="email">2. 이메일 <i className="required-mark">*</i></label>
                            <input
                                className="form-input"
                                type="email"
                                id="email"
                                name="reply_to"
                                placeholder="이메일을 입력해주세요."
                                required
                            />
                        </div>
                        <div className="contact-div form-div">
                            <label for="contact">3. 연락처 <i className="required-mark">*</i></label>
                            <div>
                                <input
                                    className="contact-input"
                                    type="tel"
                                    maxLength="3"
                                    id="contact"
                                    name="contact0"
                                    placeholder="010"
                                    required
                                />
                                <span> - </span>
                                <input
                                    className="contact-input"
                                    type="tel"
                                    maxLength="4"
                                    id="contact"
                                    name="contact1"
                                    placeholder="0000"
                                    required
                                />
                                <span> - </span>
                                <input
                                    className="contact-input"
                                    type="tel"
                                    maxLength="4"
                                    id="contact"
                                    name="contact2"
                                    placeholder="0000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="feedback-div form-div">
                            <label for="feedback">4. 문의내용 <i className="required-mark">*</i></label>
                            <textarea
                                className="form-input feedback-input"
                                type="text"
                                id="feedback"
                                name="message_html"
                                placeholder="내용을 입력해주세요."
                                required
                            />
                        </div>
                        <div className="form-div">
                            <label for="privacy">5. 개인정보 수집 및 이용 동의 <i className="required-mark">*</i></label>
                            <div className="privacy">
                                회사명(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
                                <br/>
                                <br/>
                                <strong>제1조 (개인정보의 처리목적)</strong>
                                <br/>
                                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                                <br/>
                                <br/>
                                1. 홈페이지 회원 가입 및 관리
                                <br/>
                                회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.
                                <br />
                                ...
                            </div>
                            <label>
                                <input
                                    className="privacy-input"
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    required
                                    value="개인정보 수집 및 이용에 동의합니다."
                                />
                                <span>개인정보 수집 및 이용에 동의합니다.</span>
                            </label>
                        </div>
                        <input type="submit" value="양식 제출" className="btn btn--submit"/>
                </form>
            );
        }
    };

    return (
        <div className="ContactPage Main" >
            <Header />
            <section className='변수'>
                <img className="titleImg" src={logo} />
            </section>
            <h1 className='NBK'>NBK</h1>
            <section>
                <h2 className="cooperation">문의사항</h2>
                <hr className='cooperation-hr' />
                <Mail />
            </section>
            <section>
                <h2 className="cooperation">협력체</h2>
                <hr className='cooperation-hr' />
                <section className='cooperation-logos'>
                    <a href="https://cms.dankook.ac.kr/web/abeek">
                        <img className="titleImg" src={dkuciee} />
                    </a>
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                    <img className="titleImg" src={logo} />
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;