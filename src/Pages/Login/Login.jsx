import { Link, useLocation, useNavigate } from 'react-router-dom';
// import bg from '../../assets/login/authentication.png'
// import bg2 from '../../assets/login/authentication1.png'
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/login-img.svg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import useAuth from '../../Hooke/useAuth';
import { useState } from 'react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


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
            <div className="py-2" >
                <div className='gap-20 lg:gap-36  w-fit items-center px-24 lg:px-0 flex flex-col mx-auto md:flex-row justify-center lg:justify-between custom-box-shadow'>
                    <div className="flex-1 flex flex-col items-center space-y-6">
                        <img className='w-[150px]' src={logo} alt="" />
                        <p className='text-4xl font-bold text-center text-[#484c7f]'>My-Task Let&#39;s Management Better</p>
                        <img className='w-full' src={logo2} alt="" />
                    </div>
                    <div className=" flex-1 text-white rounded-2xl shadow-xl bg-[#484c7f] py-8 px-10 md:py-16 md:px-24">
                        <form onSubmit={handleLogin}>
                            <h2 className="text-3xl font-semibold text-center">Sign in to your account</h2>
                            <hr className="my-6" />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email Address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address " className="input input-bordered text-black" name="email" style={{
                                    fontFamily: 'Inter'
                                }} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className=" relative text-black ">
                                    <input type={showPass ? "text" : "password"}
                                        placeholder="Enter your password" className="input w-full input-bordered text-black" name='password' style={{
                                            fontFamily: 'Inter'
                                        }} required />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                            </div>
                            <div className="form-control my-6">
                                <button className="btn mx-auto btn-five btn-style1 bg-transparent">
                                    <span className='text-2xl'>Sign In</span>
                                </button>
                            </div>
                        </form>
                        <p className=" text-center text-gray-400">Don&lsquo;t have an account? <Link to='/register'><span className="text-[#F19828] underline font-medium">Sign up now</span></Link></p>
                        <div className="divider">Or sign in with</div>
                        <div className="w-full mt-5">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;