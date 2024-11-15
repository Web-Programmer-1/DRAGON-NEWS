import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthContextFun'


export default function Login() {
    const {user, userLogin} = useContext(AuthContext)


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userLogin(email, password)
        .then((result) => {
            console.log("Login successful", result)
        })
        .catch((error) => {
            console.log("Login failed", error.message)
        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* Login Account is started */}

            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body p-10">
                    <div className="form-control">
                        <h1 className='text-2xl font-semibold text-center'>Login your account  </h1>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <p className='text-lg font-semibold text-center' >Dont’t Have An Account ?  <span className='text-xl font-semibold text-pink-700'><Link to={'/auth/register'}>Register</Link></span></p>
                </form>
            </div>
        </div>
    )
}





























