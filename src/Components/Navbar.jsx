import { useState } from "react";
import { FaCircleXmark , FaAlignRight } from "react-icons/fa6";
function Navbar() {
  const [nav, setNav] = useState(false);

  function change() {
    setNav(prevNav => !prevNav);
  }

  return (
    <>
      <div className={`text-white font-semibold fixed  p-5 transition-all duration-500 ease-in ${nav ? 'bg-indigo-400 w-3/4' : 'bg-indigo-600 w-full'}`}>
        <nav className="relative flex flex-col md:flex-row md:justify-between gap-2 md:container md:mx-auto">
          <div>
            RdJobs
          </div>
          <button className="absolute top-2 right-5 md:hidden" onClick={change}>
            {nav ? <FaCircleXmark/> : <FaAlignRight />}
          </button>
          <ul className={`md:flex md:gap-6 transition-all duration-500 ease-in ${nav ? 'flex flex-col gap-2' : 'hidden md:flex'}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Enter Jobs</a></li>
            <li><a href="#">SignUp</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
