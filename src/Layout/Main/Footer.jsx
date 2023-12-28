import logo2 from '../../assets/logo2.svg'
import logo from '../../assets/logo.svg'
import instagram2 from '../../assets/instagram2.png'
import twit from '../../assets/twit.svg'
import link from '../../assets/link.svg'
import instagram from '../../assets/instagram.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container mx-auto text-white'>
            <div className="footer md:mt-20 lg:mt-10 lg:pt-32 py-6 lg:py-16 pl-10 lg:pl-0 ">
                <nav>
                </nav>

                <aside className=''>
                    <div className='flex items-center gap-2'>
                        <img className='w-12 hidden lg:flex' src={logo2} alt="" />
                        <img className='w-12  flex lg:hidden' src={logo} alt="" />
                        <span className='lg:text-white md:text-gray-700 text-[#484c7f] text-4xl font-bold'>My-Task</span>
                    </div>
                    <p className='text-black text-base font-medium lg:text-white
                     my-5'>&rdquo;Simplify tasks, elevate productivity. <br /> Your streamlined solution for efficient <br /> task management.&rdquo;</p>
                    <div className='flex items-center justify-center gap-3 mt-3 ab'>
                        <a href=""><img className='w-8 h-8' src={instagram} alt="" /></a>
                        <a href=""><img className='w-8 h-8' src={link} alt="" /></a>
                        <a href=""><img className='w-8 h-8' src={twit} alt="" /></a>
                        <a href=""><img className='rounded-lg w-8 h-8' src={instagram2} alt="" /></a>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title text-black lg:text-white">Resources</header>
                    <Link className="link link-hover text-black lg:text-white" to='/about'>About us</Link>
                    <a className="link link-hover text-black lg:text-white">Help Center</a>
                    <a className="link link-hover text-black lg:text-white">What&rsquo;s new
                    </a>
                </nav>
                <nav>
                    <header className="footer-title text-black lg:text-white">Quick links</header>
                    <Link className="link link-hover text-black lg:text-white" to='/contact'>Contact Us</Link>
                    <a className="link link-hover text-black lg:text-white">Terms of use</a>
                    <a className="link link-hover text-black lg:text-white">Privacy policy</a>
                    <a className="link link-hover text-black lg:text-white">Features</a>
                </nav>
            </div>
            <div className="footer footer-center p-5 border-t-[3px] footer2 container mx-auto" >
                <aside>
                    <p className=''>❤ Copyright © 2023 -
                        Mohammad Shimul ❤
                    </p>
                </aside>
            </div>

        </footer>
    );
};

export default Footer;