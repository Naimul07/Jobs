import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="bg-indigo-600">
      <div className="flex flex-1 justify-center items-center h-40">
          <div className="items-center justify-center">
              <Link className="text-center px-3 py-3 flex-1 rounded border-2 border-white text-white hover:bg-indigo-800" to="/jobs">Browse jobs</Link>
          </div>
      </div>
    </div>
  )
}

export default Footer