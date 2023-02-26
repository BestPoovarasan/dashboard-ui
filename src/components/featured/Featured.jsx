import "./featured.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <>
    <div className="featured">
    <CircularProgressbar value={60} text={"60%"} strokeWidth={4}/>
    <div className="featuredbottom">
      <p className="title">Total User Register Today</p>
      <h2 className="totaluser">482</h2>
      <p className="desc">Upcoming Register user is being processed...</p>
    </div>
    </div>
    </>
   
  )
}

export default Featured