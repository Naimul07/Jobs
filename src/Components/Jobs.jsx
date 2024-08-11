import { useState, useEffect } from "react"
import Jobtem from "./Jobtem";

function Jobs() {
    const [less, setLess] = useState(true);
    const [jobs, setJobs] = useState([]);
    let jobdes = "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript.."
    let jobDes;
    if (less) {
        jobDes = jobdes.substring(0, 90) + '....   ';
    }
    else
        jobDes = jobdes;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:8000/jobs');
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Errror occured : ', error);
            }

        }
        fetchJobs();
    }, [])

    return (
        <>
            <section className="bg-indigo-50 p-1">
                <div className="container mx-auto">
                    <h1 className="p-4 text-center md:text-3xl text-2xl font-bold text-blue-600">Browse jobs</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {jobs.map((jobitem) => (
                            <Jobtem key={jobitem.id} joblist={jobitem} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Jobs