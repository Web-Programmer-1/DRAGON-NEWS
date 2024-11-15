// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Register() {


//     const handleSubmitForm = (event) =>{
//         event.preventDefault()
//         const form = new FormData(event.target)
//         const name = from.get("text")
//         const file = form.get("file")
//         const email = form.get("email")
//         const pass = form.get("password")
//         console.log({name, file, email, pass})   
//     }
//     return (
//         <div className='flex justify-center items-center min-h-screen'>
//             {/* Login Account is started */}

//             <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
//                 <form  onSubmit={handleSubmitForm} className="card-body p-10">
//                     <h1 className='text-center text-3xl font-semibold'>Register your account</h1>
//                     {/* name input field  */}
//                     <div className="form-control">

//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" name='text' placeholder="name" className="input input-bordered" required />
//                     </div>

//                     {/* Photo URl section */}
//                     <div className="form-control">

//                         <label className="label">
//                             <span className="label-text">Photo</span>
//                         </label>
//                         <input type="text" name='file' placeholder="Photo" className="input input-bordered" required />
//                     </div>



//                     <div className="form-control">

//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" name='email' placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name='password' placeholder="password" className="input input-bordered" required />
//                         <label className="label">
//                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6">
//                         <button className="btn btn-neutral">Login</button>
//                     </div>
//                     <p className='text-lg font-semibold text-center'>You have already account? <Link className='text-pink-700 text-xl font-medium' to={'/auth/login'}>Login</Link></p>
//                 </form>
//             </div>
//         </div>
//     )
// }
























import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContextFun';

export default function Register() {

    const {createEmailAndPassword} = useContext(AuthContext)

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get("text");
        const file = form.get("file");
        const email = form.get("email");
        const pass = form.get("password");
        console.log({ name, file, email, pass });

        createEmailAndPassword(email, pass)
        .then((result) => {
            console.log( "Data Create Suceesfully" , result.user)
        })
        .catch((error) => {
            console.log("ERROR", error.message)
        })
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* Login Account is started */}
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleSubmitForm} className="card-body p-10">
                    <h1 className='text-center text-3xl font-semibold'>Register your account</h1>
                    {/* Name input field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='text' placeholder="name" className="input input-bordered" required />
                    </div>

                    {/* Photo URL section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='file' placeholder="Photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-neutral">Register</button>
                    </div>

                    <p className='text-lg font-semibold text-center'>
                        You have already an account? <Link className='text-pink-700 text-xl font-medium' to={'/auth/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
