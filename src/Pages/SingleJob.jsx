import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
function SingleJob() {
  const {id} = useParams();
  const [job,setJob]= useState([]);
  
  useEffect(()=>{
    const fetchJobId = async()=>{
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    }
    fetchJobId();
  },[])

  return (
    <>
    <div className="pt-16">
    <h1>{job.description}</h1>
    </div>
    </>
  )
}

export default SingleJob