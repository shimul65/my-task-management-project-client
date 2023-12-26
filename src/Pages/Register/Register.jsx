import { Link, useNavigate, } from 'react-router-dom';
import 'animate.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import Swal from "sweetalert2";
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/login-img.svg'
import { useState } from 'react';
import useAuth from '../../Hooke/useAuth';
import useAxiosPublic from '../../Hooke/useAxiosPublic';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {

    const { createUser, handleUpdateProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm()

    //show password
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (data) => {

        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photo;
        const isAccepted = data.terms;
        // const imageFile = { image: data.image[0] }

        // password validation check
        if (password.length < 6) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Password should be at
                 least 6 characters or longer`,
                showConfirmButton: false,
                timer: 2500
            });
            return
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Your Password should contain
                 an uppercase letter`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        else if (!/[!@#%^&*()_+\-=\[\]{}|;\\':",.<>?~`]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Your Password should
                 contain a special character`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }
        else if (!isAccepted) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Please accept our
                 terms & conditions`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // update profile
                handleUpdateProfile(name, photoURL)
                    .then(() => {
                        // create new user entry in database
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photoURL,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                // console.log(res.data)
                                if (res.data.insertedId) {
                                    navigate(location?.state ? location.state : '/');
                                    Swal.fire({
                                        icon: "success",
                                        title:
                                            `Registration Successful 
                                     Thanks 
                                    ❤️❤️❤️`,
                                        showClass: {
                                            popup: `
                                          animate__animated
                                          animate__fadeInUp
                                          animate__faster
                                        `
                                        },
                                        hideClass: {
                                            popup: `
                                          animate__animated
                                          animate__fadeOutDown
                                          animate__faster
                                        `
                                        },
                                        showConfirmButton: false,
                                        timer: 2500
                                    });
                                    reset();
                                }
                            })
                    }).catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-3xl font-semibold text-center">Create your account</h2>
                            <hr className="my-6" />
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" text-white label-text font-semibold">Full Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered text-black" name="name" style={{
                                    fontFamily: 'Inter'
                                }} {...register('name', { required: true })} required />
                            </div>
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" text-white label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered text-black" name="photo" style={{
                                    fontFamily: 'Inter'
                                }} {...register('photo', { required: true })} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email Address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address " className="input input-bordered text-black" name="email" style={{
                                    fontFamily: 'Inter'
                                }} {...register('email', { required: true })} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className=" relative text-black ">
                                    <input type={showPass ? "text" : "password"}
                                        placeholder="Enter your password" className="input w-full input-bordered text-black" name='password' style={{
                                            fontFamily: 'Inter'
                                        }} {...register('password', { required: true })} required />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                            </div>

                            <div className='mt-4 flex gap-2 items-center'>
                                <input type="checkbox" {...register('terms',)} id="terms" />
                                <label htmlFor="terms">Accept Our Terms and Conditions</label>
                            </div>
                            <div className="form-control my-6 bg-gradient-to-r from-via-amber-500 to-">

                                <button className="btn mx-auto btn-five btn-style1 bg-transparent">
                                    <span className='text-2xl'>Sign Up</span>
                                </button>
                            </div>
                        </form>
                        <p className=" text-center text-gray-400">Already have an account? <Link to='/login'><span className="text-[#F19828] underline font-medium">Sign in here</span></Link></p>
                        <div className="divider">Or sign up with</div>
                        <div className="w-full mt-5">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;