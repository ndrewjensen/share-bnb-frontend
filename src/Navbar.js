import { Link } from "react-router-dom";
import { useContext } from 'react';
import userContext from "./UserContext";
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";


/** Navbar Component
 *
 * Props:
 * -logout()
 *
 * State:
 * -none
 */

function NavBar({ logout }) {
  const { currentUser } = useContext(userContext);
  return (
    <Navbar color="light">
      <Nav className="Navbar">
        <NavbarBrand href="/">ShareBnb</NavbarBrand>
        {!currentUser.username &&
          <>
            <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </>
        }
        {currentUser.username &&
          <>
            <NavItem>
              <NavLink href="/add-listing">Add Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/conversations">Conversations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={logout}>Log Out {currentUser.username}</NavLink>
            </NavItem>

          </>
        }
      </Nav>
    </Navbar>
  );
}

export default NavBar;