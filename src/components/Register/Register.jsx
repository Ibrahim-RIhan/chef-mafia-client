import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Register to access our premium chefs and delicious food Delivery</p>
                        <button className='btn  btn-outline mb-5'><FcGoogle /> Register with Google</button>
                        <button className='btn btn-outline'><FaGithub /> Register with Github</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='displayName' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder=" Your Email" name='email' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" placeholder="Give your Photo Url" name='photo' className="input input-bordered" />


                                <p className='label-text-alt my-3'>Already have a account? Please   <Link className='text-purple-500' to="/login">Login</Link></p>


                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;