import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const Register = () => {

    const { createUser, updateProfileNamePhoto } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');




    const handleRegister = event => {
        event.preventDefault();
        const form = event.target
        const name = form.displayName.value;
        const email = form.email.value;
        const photoUrl = form.photo.value
        const password = form.password.value;
        if (password.length < 6) {
         
            toast.error('Password should at least 6 Characters', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        else if (!/(?=.[A-Z])/.test(password)) {
            toast.error('Please add at least one uppercase!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        else if (!/(?=.[0-9].*[0-9])/.test(password)) {
            toast.error('Please add at least two numbers!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        createUser(email, password)
            .then(result => {
                toast.success('Successfully Created Account', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                const loggedUser = result.user;
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => { })
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


                form.reset();
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








    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Register to access our premium chefs and delicious food Delivery</p>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='displayName' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder=" Your Email" name='email' className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" placeholder="Give your Photo Url" name='photo' className="input input-bordered" />
                                <p className='label-text-alt my-3'>Already have a account? Please   <Link className='text-purple-500' to="/login">Login</Link></p>
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Register;