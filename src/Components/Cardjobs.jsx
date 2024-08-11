import Card from "./Card"

function Cardjobs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-3 mx-2 gap-2 shadow-md py-5 px-2">
      <Card> 
        <h1 className="font-bold text-lg">For developer</h1>
        <h4>Browse our react jobs and start your career</h4>
        <button className="p-2 mt-2 border-2 rounded-md text-white bg-black hover:bg-slate-900">Browse jobs</button>
      </Card>
      <Card bg="bg-blue-200"> 
        <h1 className="font-bold text-lg">For Employer</h1>
        <h4>List your jobs and find the perfect developer</h4>
        <button className="p-2 mt-2 border-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">Browse jobs</button>
        </Card>
    </div>
  )
}

export default Cardjobs