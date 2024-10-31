import { useState, useEffect } from "react";
import axios from "axios";
import Jobtem from "./Jobtem";
import CircleLoader from "react-spinners/CircleLoader";

function Jobs({ isHome = false }) {
    const [jobs, setJobs] = useState([]);
    const [load, setLoad] = useState(true);
    
    const url = isHome ? '/api/jobs' : '/api/jobs?_limit=3';
    useEffect(() => {
        const fetchJobs = async () => {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage

            try {
                const res = await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Add Bearer token
                    }
                });
                setJobs(res.data); // Set jobs with the data returned
                // console.log(res);
            } catch (error) {
                console.error('Error occurred:', error);
            } finally {
                setLoad(false);
            }
        };
        
        fetchJobs();
    }, []); // Include url in the dependency array for conditional fetching

    return (
        <section className="bg-indigo-50 p-2 pb-6">
             <div className="container mx-auto">
                <h1 className="p-4 text-center md:text-3xl text-2xl font-bold text-blue-600">Browse jobs</h1>
                {load ? (
                    <div className="flex h-screen justify-center items-center">
                        <CircleLoader size={200} />
                    </div>
                ) : (
                    jobs.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {jobs.map((jobitem) => (
                                <Jobtem key={jobitem.id} joblist={jobitem} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No jobs available.</p>
                    )
                )}
            </div> 
        </section>
    );
}

export default Jobs;
