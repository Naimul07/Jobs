import Tictac from "./Tictac"
import { Link } from "react-router-dom"
function Hero() {

  return (
    <>
  
      <section className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-10">
          <div className="flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <h1
                  className="md:text-6xl font-extrabold text-white text-3xl text-center">
                  Become a React Dev
                </h1>
                <p className="my-4 md:text-xl text-white text-center">
                  Find the React job that fits your skills and needs
                </p>
                <div className="flex justify-center">
                  <Link className="text-white p-3 border rounded-lg bg-blue-600 hover:bg-blue-800" to="/jobs" >Browse Jobs</Link>
                </div>

              </div>
            </div>
          </div>
          {/* <h1 className="text-center text-3xl flex-2  font-bold text-white">Tic-tac-toe game</h1> */}
          <div className="flex-2 flex flex-col gap-4 items-center justify-center text-white font-bold">
            <h1 className="text-center text-3xl flex-2  font-bold text-white">Tic-tac-toe game</h1>
            <Tictac />
          </div>
        </div>


      </section>
    </>
  )
}

export default Hero