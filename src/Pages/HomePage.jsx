import Hero from "../Components/Hero"
import Cardjobs from "../Components/Cardjobs"
import Jobs from "../Components/Jobs"
import Footer from "../Components/Footer"

function HomePage() {
    return (
        <>
            <div className='flex flex-col h-screen bg-indigo-600'>
                <Hero />
            </div>
            <Cardjobs />
            <Jobs />
            <Footer />
        </>
    )
}

export default HomePage