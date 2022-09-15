import { Link, NavLink } from "react-router-dom";

/** Navbar Component
 *
 * Props:
 * -logout()
 *
 * State:
 * -none
 */

 function Navbar({ logout }) {
  return (
  <div className="Navbar">
    <ul>
      <li>
        <NavLink to="/">ShareBnb</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/listings/new">Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logout}>Log Out</NavLink>
      </li>
    </ul>
    </div>);
}

export default Navbar;