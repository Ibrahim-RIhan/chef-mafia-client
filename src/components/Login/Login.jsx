import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { LoginWithEmailPassword, LoginWithGoogle, LoginWithGithub } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginWithEmailPassword(email, password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(  `${err.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            });
    }

    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err =>{
                toast.error(  `${err.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    const handleGithubLogin = () => {
        LoginWithGithub()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err =>{
                toast.error(  `${err.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login to access our premium chefs and delicious food Delivery</p>
                        <button onClick={handleGoogleLogin} className='btn  btn-outline mb-5 me-2'><FcGoogle /> Login with Google</button>
                        <button onClick={handleGithubLogin} className='btn btn-outline'><FaGithub /> Login with Github</button>
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