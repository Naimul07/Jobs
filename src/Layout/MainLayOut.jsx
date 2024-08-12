import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"
function MainLayOut() {
  return (
    <>
   
      <Navbar/>
      <Outlet/>
    
    
    </>
  )
}

export default MainLayOut