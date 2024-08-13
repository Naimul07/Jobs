import { useState, useEffect } from "react"
import Jobtem from "./Jobtem";
import CircleLoader from "react-spinners/CircleLoader"

function Jobs({ isHome = false }) {
    const [jobs, setJobs] = useState([]);
    const [load, setLoad] = useState(true)
    const url = isHome ? 'http://localhost:8000/jobs' : 'http://localhost:8000/jobs?_limit=3';
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Errror occured : ', error);
            }
            finally {
                setLoad(false);
            }

        }
        fetchJobs();
    }, [])

    return (
        <>
            <section className="bg-indigo-50 p-2 pb-6">
                <div className="container mx-auto">
                    <h1 className="p-4 text-center md:text-3xl text-2xl font-bold text-blue-600">Browse jobs</h1>
                    {load ?
                        (
                            <div className="flex justify-center items-center h-64">
                                <CircleLoader size={200} />
                            </div>
                        ) :
                        (
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {
                                    jobs.map((jobitem) => (
                                        <Jobtem key={jobitem.id} joblist={jobitem} />
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </section>

        </>
    )
}

export default Jobs