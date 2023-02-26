import Chart from "../chart/Chart"
import Sidebar from "../sidebar/Sidebar"
import Featured from "../featured/Featured"
import "./home.css"

const Home = () => {
  return (
    <>
    <div className="home">
    <Sidebar/>
    <Featured/>
    <Chart/>
    </div>
    </>
  )
}

export default Home