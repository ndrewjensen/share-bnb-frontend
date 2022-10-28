import { useContext } from "react";
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";

import userContext from "./UserContext";

/** Navbar Component
 *
 * Props: logout() to call in App
 * State: none
 */

function NavBar({ logout }) {
  const { currentUser } = useContext(userContext);
  return (
    <Navbar color="light" className="sticky-top">
      <NavbarBrand href="/">ShareBnb</NavbarBrand>
      <Nav className="Navbar">
        {!currentUser.username && (
          <>
            <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </>
        )}
        {currentUser.username && (
          <>
            <NavItem>
              <NavLink href="/add-listing">Add Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/conversations">Conversations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bookings">Bookings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" onClick={logout}>
                Log Out {currentUser.username}
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
