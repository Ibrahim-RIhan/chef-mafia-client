import React from 'react';
import { useRouteError } from "react-router-dom";
import ErrorImage from '../../../public/images/ErrorPic.jpg'
const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='grid justify-center items-center mx-auto container' id="error-page">
            <img className='w-96' src={ErrorImage} alt="" />
            <p className='text-red-500 font-semibold text-center'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;