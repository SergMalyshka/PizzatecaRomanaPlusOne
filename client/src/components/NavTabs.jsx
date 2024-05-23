import { Link, useLocation } from 'react-router-dom';
import style from './NavTabs.module.css'
import Auth from '../utils/auth';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className={`nav nav-item ${style.navigation}`}>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Tab1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tab2"
          className={currentPage === '/Tab2' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Tab2
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Test"
          className={currentPage === '/Test' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Test
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SignIn"
          className={currentPage === '/SignIn' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Patient Sign-In
        </Link>
      </li>
      {Auth.loggedIn() ? (
      <button className={`btn btn-warning ${style.button}`} onClick={Auth.logout}>Logout</button>
      ) : (
        
      <li className="nav-item">
        <Link
          to="/DoctorLogin"
          className={currentPage === '/DoctorLogin' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Login
        </Link>
      </li>)}
    </ul>
  );
}

export default NavTabs;
