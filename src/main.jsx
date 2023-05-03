import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/Header/LandingPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import ChefDetails from './components/Chefs/ChefDetails';
import PrivateRoute from './components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader : () => fetch('/ChefData.json'),
        element: <LandingPage></LandingPage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      
      },
      {
        path: "/chefDetails/:chefId",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch('/ChefData.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
