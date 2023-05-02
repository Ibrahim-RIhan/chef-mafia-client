import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { LoginWithEmailPassword , LoginWithGoogle } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginWithEmailPassword(email, password)
            .then(result => {
                const signedUser = result.user
                console.log(signedUser);
            })
            .catch(error => console.error(error));

    }
     const handleGoogleLogin = () =>{
        LoginWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.error(error));
     }



    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login to access our premium chefs and delicious food Delivery</p>
                        <button onClick={handleGoogleLogin} className='btn  btn-outline mb-5'><FcGoogle /> Login with Google</button>
                        <button className='btn btn-outline'><FaGithub /> Login with Github</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder=" Your Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                </label>
                                <p className='label-text-alt'>Dont have a account? Please   <Link className='text-purple-500' to="/register">Register</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;