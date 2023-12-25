import { Link, useLocation, useNavigate } from 'react-router-dom';
// import bg from '../../assets/login/authentication.png'
// import bg2 from '../../assets/login/authentication1.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import useAuth from '../../Hooke/useAuth';
import { useState } from 'react';
// import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => {

    const { login } = useAuth();


    const navigate = useNavigate();

    const location = useLocation();

    //show password
    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        // create new user
        login(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // navigate after log in
                navigate(location?.state ? location.state?.from : '/');
                toast.success('User Log In Successfully');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode, errorMessage}
                Please input correct email and password`);
            })

    }



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${'bg'})` }}>
            <div className=" border-red-600 px-48 py-2" >
                <div className='gap-16 w-fit justify-center items-center px-24 flex flex-col mx-auto md:flex-row custom-box-shadow'>
                    <div className="flex-1 ">
                        <img className='w-full' src={'bg2'} alt="" />
                    </div>
                    <div className="flex-1 rounded-2xl shadow-2xl border py-8 px-10 md:py-16 md:px-24">
                        <form onSubmit={handleLogin}>
                            <h2 className="text-3xl font-semibold text-center">Sign In</h2>
                            <hr className="my-12" />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address " className="input input-bordered" name="email" style={{
                                    fontFamily: 'Inter'
                                }} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" relative ">
                                    <input type={showPass ? "text" : "password"}
                                        placeholder="Enter your password" className="input w-full input-bordered" name='password' style={{
                                            fontFamily: 'Inter'
                                        }} required />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                                <label className="label">
                                    <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  type='submit' className={`btn text-white border-none bg-gradient-to-r from-amber-800  to-amber-300 hover:from-amber-300 hover:to-amber-800`}>Sign In</button>
                            </div>
                        </form>
                        <p className=" text-center text-[#D1A054] mt-5">New here? <Link to='/register'><span className="text-red-600 underline font-medium">Create a New Account</span></Link></p>
                        <div className="divider">Or sign in with</div>
                        <div className="w-full mt-6">
                            {/* <SocialLogin></SocialLogin> */}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;