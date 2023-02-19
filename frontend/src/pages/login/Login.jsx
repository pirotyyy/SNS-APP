import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../states/AuthContext';
import './Login.css'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall(
            {
                email: email.current.value,
                password: password.current.value,
            },
            dispatch
        );
    };

    console.log(user);

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Real SNS</h3>
                    <span className='loginDesc'>本格的なSNSを、自分の手で</span>
                </div>
                <div className="loginRight">
                    <div className="loginRegisterBox">
                        <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                            <p className='loginMsg'>ログインはこちら</p>
                            <input type="email" className="loginInput" placeholder='Eメール' required ref={email} />
                            <input type="password" className="loginInput" placeholder='パスワード' required minLength="6" ref={password} />
                            <button className="loginButton">ログイン</button>
                        </form>
                        <span className='loginForgot'>パスワードを忘れた方へ</span>
                        <Link to="/register" className='registerLink'>
                            <button className="loginRegisterButton">アカウント作成</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
