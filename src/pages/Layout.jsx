import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Layout;