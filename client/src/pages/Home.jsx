import { Link } from "react-router-dom";
import style from './Home.module.css'

const Home = () => {
  return (
    <div>
        <div>
        <img src="/pt-logo.png" alt="a logo with a caduceus and a tagline" className={style.fade}></img>
        </div>
      <div>
      <p>
        Please <Link to="/DoctorLogin">login</Link> to continue
      </p>
      </div>
    </div>
  );
};

export default Home;
