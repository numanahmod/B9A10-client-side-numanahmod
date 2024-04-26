import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';

import ViewProperties from './Pages/ViewProperties';

import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

import NotFoundPage from './Pages/NotFoundPage';
import List from './Pages/List';
import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';
import AddTouristsSpot from './Pages/AddTouristsSpot';
import AllTouristsSpot from './Pages/AllTouristsSpot';



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
        loader: () => fetch('/estate.json')
      },
      {
          path: "/property/:Id",
          element: <PrivateRoute><ViewProperties></ViewProperties></PrivateRoute>,
          loader: () => fetch('/estate.json')
      },
      
      {
        path: "/addTouristsSpot",
        loader: () => fetch('/estate.json'),
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
        
      },
      
      
      {
        path: "/myList",
        element: <PrivateRoute> <List></List> </PrivateRoute>
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
        element: <AllTouristsSpot></AllTouristsSpot>
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
