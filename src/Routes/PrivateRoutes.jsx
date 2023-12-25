import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooke/useAuth";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <progress className="progress w-24 flex justify-center container mx-auto my-24"></progress>
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