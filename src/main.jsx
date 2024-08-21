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

async function handleApiSubmit(newJob) {
  try {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Job added:', data);
      // Optionally reset form fields or show success message
    } else {
      console.error('Failed to add job:', response.statusText);
    }
  }
  catch (error) {
    console.log("error", error);
  }
}

async function handleEditForm(EditJobs) {
  console.log('I am here');
  const res = await fetch(`/api/jobs/${EditJobs.id}`, {
    
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(EditJobs)

  });
  if (res.ok) {
    const data = await res.json();
    console.log('Job added:', data);
    // Optionally reset form fields or show success message
  }
  else {
    console.error('Failed to add job:', res.statusText);
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
