import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';



import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

import NotFoundPage from './Pages/NotFoundPage';
import List from './Pages/List';
import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';
import AddTouristsSpot from './Pages/AddTouristsSpot';
import AllTouristsSpot from './Pages/AllTouristsSpot';
import ViewDetails from './Pages/ViewDetails';
import Update from './Pages/Update';
import Tag from './Pages/Tag';



// import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
      {
        index: true,
        element: <Home/>,
        loader: () => fetch('https://b9a10-server-side-numanahmod.vercel.app/addSpot')
      },
      
      {
        path: "/addTouristsSpot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
        
      },
      
      
      {
        path: "/myList",
        element: <PrivateRoute> <List></List> </PrivateRoute>
      },
      {
        path: "/tag",
        element: <PrivateRoute> <Tag></Tag> </PrivateRoute>
      },
      
      {
        path: "/register",
        element: <Register> </Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://b9a10-server-side-numanahmod.vercel.app/addSpot')
      },
      {
        path:"/viewDetails/:_id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch(`https://b9a10-server-side-numanahmod.vercel.app/addSpot`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>
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
