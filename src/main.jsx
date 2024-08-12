import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage';
import MainLayOut from './Layout/MainLayOut';
import JobsPage from './Pages/JobsPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
        {
          path:"",
          element:<HomePage/>
        },
        {
          path:"jobs",
          element:<JobsPage/>
        }
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
