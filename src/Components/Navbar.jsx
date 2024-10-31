import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaXmark, FaAlignRight } from "react-icons/fa6";

function Navbar() {
  const [nav, setNav] = useState(false);
  const token = localStorage.getItem('token');
  function change() {
    setNav(prevNav => !prevNav);
  }
  const linkclass = ({ isActive}) => isActive?"border-b border-b-2":"";
  return (
    <>
      <div className={`text-white font-semibold fixed top-0 p-5 transition-all duration-500 ease-in ${nav ? 'bg-indigo-800 w-3/5 h-full' : 'bg-indigo-600 w-full'}`}>
        <nav className="relative flex flex-col md:flex-row md:justify-between gap-2 md:container md:mx-auto">
          <div className={`${nav?'hidden':'block'}`}>
            RdJobs
          </div>
          <button className="absolute top-2 right-5 md:hidden" onClick={change}>
            {nav ? <FaXmark /> : <FaAlignRight />}
          </button>
          <ul className={`md:flex md:gap-6 transition-all duration-500 ease-in ${nav ? 'flex flex-col gap-2' : 'hidden md:flex'}`}>
            <li><NavLink className={linkclass} to="/">Home</NavLink></li>
            <li><NavLink className={linkclass} to="/jobs">Jobs</NavLink></li>
            <li><NavLink className={linkclass} to="/enterJobs">AddJobs</NavLink></li>
            {!!token ? (''):(
               <li><NavLink className={linkclass} to="/signUp">SignIn</NavLink></li>
            )}
           
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
