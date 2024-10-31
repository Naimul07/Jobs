import { useForm } from 'react-hook-form';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';


function EditJobs({ submitForm }) {
  const navigate = useNavigate();
  const job = useLoaderData();
  const { id } = useParams();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: job.title,
      type: job.type,
      location: job.location,
      description: job.description,
      salary: job.salary,
      companyName: job.company_name,
      comDes: job.company_description,
      contEmail: job.company_email,
      conPhone: job.company_phone,
    }
  });

  const onSubmit = (data) => {
    const jobData = {
      id:job.id,
      title:data.title,
      type:data.type,
      description:data.description,
      salary:data.salary,
      location:data.location,
      company_name: data.companyName,
      company_description: data.comDes,
      company_email: data.contEmail,
      company_phone: data.conPhone,

    };
    submitForm(jobData);
    
    navigate('/jobs');
  };

  return (
    <div className="py-20 container mx-auto">
      <form className="max-w-lg mx-auto p-3" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Job-type" className="block mb-2 text-sm font-medium text-gray-900">Job Type</label>
        <select {...register('type')} id="Job-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option value="Full time">Full time</option>
          <option value="Part Time">Part Time</option>
          <option value="Remote">Remote</option>
        </select>

        <div>
          <label htmlFor="job-list" className="block mb-2 text-sm font-medium text-gray-900">Job Listing Name</label>
          <input {...register('title')} type="text" id="Job-list" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-5">
          <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <input {...register('description')} type="text" id="Description" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <label htmlFor="Salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
        <select {...register('salary')} id="Salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option value="$50k-$60k">$50k-$60k</option>
          <option value="$70k-$90k">$70k-$90k</option>
          <option value="$100k-$120k">$100k-$120k</option>
          <option value="$150k-$160k">$150k-$160k</option>
        </select>

        <div>
          <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
          <input {...register('location')} type="text" id="Location" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <h1 className="my-5 font-extrabold">Company Info</h1>

        <div>
          <label htmlFor="CompanyName" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
          <input {...register('companyName')} type="text" id="CompanyName" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-5">
          <label htmlFor="CompanyDescription" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <input {...register('comDes')} type="text" id="CompanyDescription" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input {...register('contEmail')} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
          <input {...register('conPhone')} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0172*******" required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Job</button>
      </form>
    </div>
  );
}

export default EditJobs;
