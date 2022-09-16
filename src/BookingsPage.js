import { Navigate } from "react-router-dom";
import { useContext } from "react";

import Bookings from "./Bookings";
import userContext from "./UserContext";

/** LoginPage Component
 *
 * Props: none
 * State: none
 */

function BookingsPage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="BookingsPage">
      {!currentUser.username && <Navigate to="/login" />}
      <h4>Bookings</h4>
      <Bookings username={currentUser.username} />
    </div>
  );
}

export default BookingsPage;
