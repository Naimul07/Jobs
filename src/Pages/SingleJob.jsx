// import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaAngleLeft, FaLocationDot } from "react-icons/fa6";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

function SingleJob() {
  // const {id} = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  async function handleDelete(id) {
 // Retrieve token from localStorage
    try {
      const response = await axios.delete(`/api/jobs/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include Bearer token
          'Content-Type': 'application/json'
        }
      });
      toast(response.data.message);
      navigate('/jobs')
    } catch (error) {
      // console.error("Error:", error);
      toast.error(error.response.data.message);
    }

  }
  /* 
  useEffect(()=>{
    const fetchJobId = async()=>{
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    }
    fetchJobId();
  },[]); */

  return (
    <>
      <div className="pt-16">
        <section>
          <div className="container m-auto py-6 px-6">
            <Link
              to="/jobs"
              className="text-indigo-500 hover:text-indigo-600 flex items-center"
            >
              <FaAngleLeft /> Back to Job Listings
            </Link>
          </div>
        </section>

        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
              <main className="md:col-span-2">
                <div
                  className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                >
                  <div className="text-gray-500 mb-4">{job.type}</div>
                  <h1 className="text-3xl font-bold mb-4">
                    {job.title}
                  </h1>
                  <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                  >

                    <p className="text-orange-700 flex items-start"><FaLocationDot className="mr-1" />{job.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                  </h3>

                  <p className="mb-4">
                    {job.description}
                  </p>

                  <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                  <p className="mb-4">{job.salary}/year</p>
                </div>
              </main>


              <aside>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>

                  <h2 className="text-2xl">{job.company_name}</h2>

                  <p className="my-2">
                    {job.company_description}
                  </p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Contact Email:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company_email}
                  </p>

                  <h3 className="text-xl">Contact Phone:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company_phone}</p>
                </div>
              </aside>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col items-center justify-center">
            <div className="w-2/5">
              <h3 className="text-xl text-center font-bold mb-6">Manage Job</h3>
              <Link
                to={`/jobs/edit/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</Link>
              <button
                onClick={() => handleDelete(job.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const jobLoader = async ({ params }) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  try {
      const response = await axios.get(`/api/jobs/${params.id}`, {
          headers: {
              'Authorization': `Bearer ${token}`, // Include Bearer token
              'Content-Type': 'application/json'
          }
      });
      console.log(response);
      return response.data; // Return the job data directly
  } catch (error) {
      console.error("Error loading job data:", error);
      throw new Error("Failed to load job data"); // Throw an error if request fails
  }
};

export { SingleJob as default, jobLoader };
