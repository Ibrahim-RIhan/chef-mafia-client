import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><ActiveLink to="/">Home</ActiveLink></li>
                    <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                    </ul>
                </div>
                <Link to="/"> <a className="btn btn-ghost normal-case text-3xl text-yellow-400">Chef <span className='text-red-500'>  Mafia</span></a></Link>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ActiveLink to="/">Home</ActiveLink></li>
                    <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <img className='w-10 rounded-full me-8' src={user?.photoURL} alt="" title={user?.displayName} />
                            <button onClick={handleLogOut} className='btn btn-info'>Logout</button>
                        </>
                        :
                        <button className='btn btn-info'><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;