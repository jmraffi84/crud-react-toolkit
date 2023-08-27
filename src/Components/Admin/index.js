import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { setLogin } from '../features/user';

function Admin() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.value)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const handleClick = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        console.log(userData);
        if (email || password) {

            if (email === user.email && password === user.password) {
                console.log("condition satisfied");

                dispatch(setLogin(userData))
                console.log("next  satisfied");

            }
            navigate('/profile')

        }
    }

    // console.log(user);


    return (
        <div>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleClick}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>

                                <input type="text" className="login__input"
                                    placeholder="User name / Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="button login__submit" type='submit'>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>

                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;