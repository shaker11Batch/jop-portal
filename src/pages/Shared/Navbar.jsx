import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)
    

    const handleSignOut = () => {
        logOut()
            .then(() => {
            console.log('signOut User')
            }).catch(error => {
            console.log(error.message)
        })
    }

    const links = <>
        <NavLink className={({isActive}) => isActive && 'text-blue-500'} to='/'><li className='mr-5'>Home</li></NavLink>
        <NavLink className={({ isActive }) => isActive && 'text-blue-500'} to='/about'><li className='mr-5'>About</li></NavLink>
        {/* for applicant links. check roles as well  */}
        {
            user &&    <NavLink className={({isActive}) => isActive && 'text-blue-500'} to='/myApplications'><li className='mr-5'>MyApplications</li></NavLink>
     }
        {/* for recruiter. check role as well */}
          {
            user && <>
                <NavLink className={({ isActive }) => isActive && 'text-blue-500'} to='/addJob'><li className='mr-5'>Add Job</li></NavLink>
                <NavLink className={({isActive}) => isActive && 'text-blue-500'} to='/myPostedJob'><li className='mr-5'>My Jobs</li></NavLink>
            </>
     }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email
                }
                {
                    user ? <button onClick={handleSignOut}>SignOut</button> : <>
                        <NavLink to='/register' className='btn'>Register</NavLink>
                        <NavLink to='/signIn' className='btn'>signIn</NavLink>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;