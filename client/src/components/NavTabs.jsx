import { Link, useLocation } from 'react-router-dom';
import style from './NavTabs.module.css'

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
          to="/Tab3"
          className={currentPage === '/Tab3' ? `${style.activeTab} nav-link` : `${style.inactive} nav-link`}
        >
          Tab3
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
    </ul>
  );
}

export default NavTabs;
