import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage';
import MainLayOut from './Layout/MainLayOut';
import JobsPage from './Pages/JobsPage';
import NotFound from './Pages/NotFound';
import SingleJob, { jobLoader } from './Pages/SingleJob';
import AddJobs from './Pages/AddJobs';
import SignUp from './Pages/SignUp';
import EditJobs from './Pages/EditJobs';
import Register from './Pages/Register';
import axios from 'axios';
import { toast } from 'react-toastify';


async function handleApiSubmit(newJob) {
  const token = localStorage.getItem('token');
  // console.log('hi',newJob);
  try {
      const response = await axios.post('/api/jobs', newJob, {
          headers: {
            
              'Authorization': `Bearer ${token}`
          }
      });
      toast.success("Job added successfully");
      console.log('Job added:', response.data); // Log the added job
      // Optionally reset form fields or show a success message
  } catch (error) {
      toast.error(error.response.data.message)
      console.error('Failed to add job:', error.response ? error.response.statusText : error.message);
  }
}

// Function to handle editing a job
async function handleEditForm(EditJobs) {
  const token = localStorage.getItem('token');
  // console.log(EditJobs)
  try {
      const response = await axios.put(`/api/jobs/${EditJobs.id}`, EditJobs, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      });
      toast.success("Job Edited successfully");
      console.log('Job updated:', response.data.message); // Log the updated job
      // Optionally reset form fields or show a success message
  } catch (error) {
    toast.error(error.response.data.message);
      console.error('Failed to update job:', error.response ? error.response.statusText : error.message);
  }
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "jobs",
        element: <JobsPage />,

      },
      {
        path: "jobs/:id",
        element: <SingleJob />,
        loader: jobLoader,
      },
      {
        path: "enterJobs",
        element: <AddJobs submitForm={handleApiSubmit} />,
      },
      {
        path: "signUp",
        element: <SignUp />,

      },
      {
        path: "register",
        element: <Register />,

      },
      {
        path: "jobs/edit/:id",
        element: <EditJobs submitForm={handleEditForm} />,
        loader: jobLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
