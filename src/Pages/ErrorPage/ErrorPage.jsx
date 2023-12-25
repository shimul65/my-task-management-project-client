import { NavLink, useRouteError } from "react-router-dom";
import notFound from '../../assets/404.gif';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto h-screen shadow-lg text-center">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <img className="container mx-auto w-[30%]" src={notFound} alt="" />
                        <h3 className="text-3xl my-5">Oops, looks like the page is lost.</h3>
                        <p>This is not a fault, just an accident that was not intentional.</p>
                        <NavLink to='./'>
                            <button className="btn mt-8 bg-gray-400 mx-auto btn-five btn-style1 bg-transparent">
                                <span className='text-2xl'>Go Home</span>
                            </button></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;