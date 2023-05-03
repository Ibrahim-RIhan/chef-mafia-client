import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} =useContext(AuthContext)
    const location = useLocation();
    if(loading){
      return  <div className='flex justify-center items-center' style={{height :'100vh'}}>
            <button className="btn loading btn-error btn-xl">loading</button>
        </div>
    }
    if(user){
        return children
    }
    
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;