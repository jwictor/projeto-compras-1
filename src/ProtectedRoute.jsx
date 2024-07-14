import PropTypes from 'prop-types';
import { Route, Navigate, Routes } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated() ? <Component /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;