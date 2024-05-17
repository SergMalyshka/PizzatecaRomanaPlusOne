import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs whateverclass">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Tab1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tab2"
          className={currentPage === '/Tab2' ? 'nav-link active' : 'nav-link'}
        >
          Tab2
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tab3"
          className={currentPage === '/Tab3' ? 'nav-link active' : 'nav-link'}
        >
          Tab3
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tab4"
          className={currentPage === '/Tab4' ? 'nav-link active' : 'nav-link'}
        >
          Tab4
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
