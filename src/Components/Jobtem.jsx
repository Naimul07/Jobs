import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
function Jobtem({ joblist }) {
    const [less, setLess] = useState(true);
    let jobDes = joblist.description;
    if (less) {
        jobDes = jobDes.substring(0, 90) + '....   ';
    }
    else
        jobDes = jobDes;

    return (
        <>
            <div className="p-4 bg-slate-50 m-3 rounded-xl shadow-md">
                <div className="pb-4">
                    <div className="text-gray-600 my-2">{joblist.type}</div>
                    <h1 className="font-bold text-lg md:text-xl">{joblist.title}</h1>
                </div>
                <div className="">
                    {less ? jobDes : joblist.description}
                </div>
                <button onClick={() => setLess(!less)} className="text-indigo-600 mb-5 hover:text-indigo-700">{less ? 'more' : 'less'}</button>

                <h3 className="mb-3 text-blue-500">{joblist.salary}/year</h3>
                <div className="border border-gray mb-5"></div>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <h3 className="text-yellow-700 mb-3 flex items-center">
                        <FaLocationDot className="mr-2" />
                        {joblist.location}
                    </h3>
                    <Link className="border-2 rounded-xl text-white bg-blue-500 hover:bg-blue-600 p-2 " to="/jobs">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default Jobtem