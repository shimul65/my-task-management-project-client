import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooke/useAuth";
import PropTypes from 'prop-types';
import { PacmanLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center min-h-screen items-center">
            <PacmanLoader size={50}  color="#484c7f" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
};