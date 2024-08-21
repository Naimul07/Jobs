import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function MainLayOut() {
  return (
    <>
   <ToastContainer />
      <Navbar/>
      <Outlet/>
    
    
    </>
  )
}

export default MainLayOut