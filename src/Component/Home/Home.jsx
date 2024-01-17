import Dashboard from "../Dashboard/Dashboard"
import Navbar from "../Navbar/navbar"

const Home = () => {
    return(
        <>
        <div>
        <section>

        <Navbar/>
        </section>
        <section>
        <Dashboard/>
        </section>
        </div>
        </>
    )
}

export default Home