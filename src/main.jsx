import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage';
import MainLayOut from './Layout/MainLayOut';
import JobsPage from './Pages/JobsPage';
import NotFound from './Pages/NotFound';
import SingleJob, { jobLoader } from './Pages/SingleJob';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:"",
          element:<HomePage/>
        },
        {
          path:"jobs",
          element:<JobsPage/>,
         
        },
        {
          path:"jobs/:id",
          element:<SingleJob/>,
          loader: jobLoader,
        }
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
