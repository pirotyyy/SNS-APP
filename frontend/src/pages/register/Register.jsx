import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //パスワードと確認用パスワードがあっているか銅か確認
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("パスワードが違います")
        } else {
            try {
                //registerAPIをたたく
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post('auth/register', user)
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className='registerLogo'>Real SNS</h3>
                    <span className='registerDesc'>本格的なSNSを、自分の手で</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className='registerMsg'>新規登録はこちら</p>
                        <input type="text" className="registerInput" placeholder='ユーザー名' required ref={username}/>
                        <input type="email" className="registerInput" placeholder='Eメール' required ref={email}/>
                        <input type="password" className="registerInput" placeholder='パスワード' minLength="6" required ref={password}/>
                        <input type="password" className="registerInput" placeholder='確認用パスワード' minLength="6" required ref={passwordConfirmation}/>
                        <button className="registerButton" type='submit'>サインアップ</button>
                        <button className="firstloginButton">ログイン</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
