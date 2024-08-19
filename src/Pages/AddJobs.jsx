import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function AddJobs() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-time');
    const [location, setLocation] = useState('');
    const [descrip, setDescrip] = useState('');
    const [salary, setSalary] = useState('$50k-$60k');
    const [companyName, setCompanyName] = useState('');
    const [comDes, setComDes] = useState('');
    const [contEmail, setContEmail] = useState('');
    const [conPhone, setConPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            title,
            type,
            location,
            description: descrip,
            salary,
            company: {
                name: companyName,
                description: comDes,
                contactEmail: contEmail,
                contactPhone: conPhone
            }
        };
        // console.log(jobData);
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobData)
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
    return navigate('/jobs');
    }

    return (
        <div className='py-20 container mx-auto'>
            <form className="max-w-lg mx-auto p-3" onSubmit={handleSubmit}>

                <label htmlFor="Job-type" className="block mb-2 text-sm font-medium text-gray-900 ">Job Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} id="Job-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                    <option>Full time</option>
                    <option>Part Time</option>
                    <option>Remote</option>
                    {/* <option>Germany</option> */}
                </select>
                <div>
                    <label htmlFor="job-list" className="block mb-2 text-sm font-medium text-gray-900">Job Listing Name</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="Job-list" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-5">
                    <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input value={descrip} onChange={(e) => setDescrip(e.target.value)} type="text" id="Description" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <label htmlFor="Salary" className="block mb-2 text-sm font-medium text-gray-900 ">Salary</label>
                <select value={salary} onChange={(e) => setSalary(e.target.value)} id="Salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                    <option>$50k-$60k</option>
                    <option>$70k-$90k</option>
                    <option>$100k-$120k</option>
                    <option>$150k-$160k</option>
                </select>
                <div>
                    <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="Location" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <h1 className="my-5 font-extrabold">Company Info</h1>
                <div>
                    <label htmlFor="CompanyName" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
                    <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" id="CompanyName" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-5">
                    <label htmlFor="CompanyDescription" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input value={comDes} onChange={(e) => setComDes(e.target.value)} type="text" id="CompanyDescription" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input value={contEmail} onChange={(e) => setContEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                    <input value={conPhone} onChange={(e) => setConPhone(e.target.value)} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0172*******" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Jobs</button>

            </form>
        </div>
    )
}

export default AddJobs