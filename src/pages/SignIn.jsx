import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import loginLottie from '../assets/lotties/Animation - 1748677891289.json'
import Lottie from 'lottie-react';
import SocialLogin from './Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const SignIn = () => {
 
    const { logInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'
    
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user)
       logInUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(from)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie style={{ width: '400px' }} animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form action="" onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SocialLogin from={from} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;