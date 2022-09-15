import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import userContext from "./UserContext"


/** Navbar Component
 *
 * Props:
 * -logout()
 *
 * State:
 * -none
 */

 function Navbar({ logout }) {
  const { currentUser } = useContext(userContext)
  return (
  <div className="Navbar">
    <ul>
      <li>
        <NavLink to="/">ShareBnb</NavLink>
      </li>
      
      { !currentUser.username &&
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>

      }
      { currentUser.username &&
        <>
      <li>
        <NavLink to="/add-listing">Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logout}>Log Out</NavLink>
      </li>
      </>
      }
      
    </ul>
    </div>);
}

export default Navbar;